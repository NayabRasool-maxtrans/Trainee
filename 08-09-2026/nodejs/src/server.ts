
import http from "http"
import {IncomingMessage,ServerResponse} from "http"


const sendjson=(res:ServerResponse,status:number,data:any):void=>{
    res.writeHead(status,{"content-type":"application/json"})
    res.end(JSON.stringify(data))

}
const getbody=async(req:IncomingMessage):Promise<string>=>{
    return new Promise((resolve,reject)=>{
        let body=""
        req.on("data",(chunk)=>{
            body+=chunk.toString()})
       req.on("end",()=>resolve(body))  
       req.on("error",reject)   
    })

}
interface USER{
    id:number;
    name:string,
    age:number;
    address:string
}
let user:USER[]=[{id:1,name:"rasool",age:24,address:"hyd"}]
const server=http.createServer(async (req:IncomingMessage,res:ServerResponse)=>{
    const method=req.method
    const url=new URL(req.url,`http://${req.headers.host}`)
   const pathname= url.pathname
//get
   if(method==="GET" && pathname ==="/users"){
    return sendjson(res,200,user)
   }
   //get by id
   if(method === "GET" && pathname.startsWith("/users")){
    const id=Number(pathname.split("/")[2])
   let users= user.find((value)=>value.id===id)
   if(!users){
     return sendjson(res,404,{message:"user not found"})
   }
   return sendjson(res,200,users)

   }

   //post the data
   if(method==="POST" && pathname==="/users"){
    try{
        let data=await getbody(req);
        let info:USER=JSON.parse(data);
        
        
        if(info.name===undefined || typeof info.name!=="string" ||info.name.trim()===""){
            return sendjson(res,400,{message:"name is required in string"})
        }
        if(info.age===undefined || typeof info.age!=="number" ||info.age<=0){
            return sendjson(res,400,{message:"age is required in number"})
        }
        if(info.address===undefined || typeof info.address!=="string" ||info.address.trim()===""){
            return sendjson(res,400,{message:"address is required in string"})
        }
       let existing= user.find((id)=>id.id===info.id);
       if(existing){
        return sendjson(res,404,{message:"id is already exists"})
       }
       user.push(info)
       return sendjson(res,200,info)
        
    }
   catch(error){
    return sendjson(res,404,{message:"invalid json"})
   }
   }

   //put 
   if(method==="PUT" && pathname.startsWith("/users")){
    try{
    const index=Number(pathname.split("/")[2])
    const finindex=user.findIndex((id)=>id.id===index);
    if(finindex===-1){
        return sendjson(res,404,{message:"user id not found"})

    }
   let body=await getbody(req);
   let info=JSON.parse(body)
   if( typeof info.id!=="number" ||info.id<=0){
            return sendjson(res,400,{message:"id is required in number"})
        }
        if( typeof info.name!=="string" ||info.name.trim()===""){
            return sendjson(res,400,{message:"name is required in string"})
        }
        if(typeof info.age!=="number" ||info.age<=0){
            return sendjson(res,400,{message:"age is required in number"})
        }
        if(typeof info.address!=="string" ||info.address.trim()===""){
            return sendjson(res,400,{message:"address is required in string"})
        }
   const newuser:USER={
    id:info.id,
    name:info.name,
    age:info.age,
    address:info.address

   }
   user[finindex]=newuser

   return sendjson(res,200,{message:"user updated sucessfuly",info})}
   catch(error){
    return sendjson(res,404,{message:"invalid json"})
   }
   }


   //delet by id
   if(method==="DELETE" && pathname.startsWith("/users/")){
    let id=Number(pathname.split("/")[2])
    let index=user.findIndex((val)=>val.id===id)
    if(index===-1){
       return sendjson(res,404,{message:"user id is not found"})
    }
    user.splice(index,1)
    return sendjson(res,200,{message:"user deleted sucessfuly"})

   }
    
return sendjson(res,404,{messgage:"route not found"})


})
server.listen(3003,()=>{console.log("server working")})