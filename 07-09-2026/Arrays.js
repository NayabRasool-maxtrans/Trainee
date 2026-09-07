const users=[{id:1,name:"john",active:true},
    {id:2,name:"david",active:false},
    {id:3,name:"john",active:true},
    {id:4,name:"rasool",active:true},
]

let number=[1,2,34,8,4,7]
//const duplicate=number.filter((value,index)=>number.indexOf(value)!==index)
//methods 
//1) find()

//find method check condition matching or not if matching retern only one value matching condition

const find=number.find((u)=>u===6) //not matching undefined
console.log(find)//undefined
//array object
const active=users.find((u)=>u.active); //return only one  element matching condition                              
console.log(active)//{ id: 1, name: 'john', active: true }

//findindex is call back function to call 
//const findid=number.findIndex(value=>value === 30); 
//console.log(findid)

//findinex we have pass a function test each elemnt 
console.log("findindex::",number.findIndex(el=>el===2))
//indexof specific integer value in array
const findvalue=number.indexOf(2)
console.log(findvalue)

//includes return boolean result
console.log(number.includes(10))

let array=[7,1,3,67,735,7,7]
//duplicate value
const duplicate=array.filter((value,index)=>{
    console.log(array.indexOf(value))
   array.indexOf(value) !==index})
    
console.log('duplicates',duplicate)

//largest number   let number=[1,2,34,8,4,7]
const large=number.reduce((accum,value)=>{
console.log(accum,value)

return value>accum?value:accum})
console.log("maximum value",large)

//min value
const min=number.reduce((min,value)=>{
    console.log(min,value)
    return value<min?value:min;
})
console.log("minimum value",min)

//group user by role
const user=[{name:"rasool",role:"developer"},{name:"rasool",role:"tester"},{name:"rani",role:"developer"}]

const groupuserbyrole=user.reduce((accum,value)=>{
    console.log("accum",accum,"value",value)
    if(!accum[value.role]){
        
        accum[value.role]=[]
        
    }
    accum[value.role].push(value)
    return accum
},{})
console.log(groupuserbyrole)

//convert array into object
const convert=[1,2,4,9]
let objects={...convert}
console.log(objects)

/* const users=[{id:1,name:"john",active:true},
    {id:2,name:"david",active:false},
    {id:3,name:"john",active:true},
    {id:4,name:"rasool",active:true},]
*/
let names=users.find((value)=>value.name=="rasool");//here find method only one user
console.log(names)
const matchname=users.findIndex((value)=>value.name)
console.log(matchname)
//active users
console.log(users.filter((users)=>users.active));
//inactiveusers
console.log(users.filter((users)=>!users.active));
//index by name
const dup=users.reduce((accum,value)=>{
    accum[value.id]=value
    return accum

},{})
console.log(dup)
//duplicate name in array object
const dupnames=users.filter((value,index,arr)=>{

   // console.log(arr.findIndex((ind)=>ind.name))
    return arr.findIndex((ind)=>ind.name===value.name)!==index
})
console.log(dupnames)
//duplicate name using map and filter
const allnames=users.map((value)=>value.name)

console.log("array of names",allnames)
const duplicatenames=allnames.filter((value,index)=>{
   return allnames.indexOf(value)!==index
})
console.log(duplicatenames)

//sort user by name

let sort=users.sort((a,b)=>a.name.localeCompare(b.name))
console.log(sort)
let desc=users.sort((a,b)=>b.name.localeCompare(a.name));
console.log("sort by name",sort,"sort by name desc",desc)

//object
let person={name:"raja",address:"prakasam",age:25}
console.log(person.name)//accessing
console.log(person["name"])
console.log(Object.keys(person))
console.log(Object.values(person))//return array of objects values 
console.log(Object.entries(person))
//iterable

Object.entries(person).forEach(([key,value])=>console.log(`${key}:${value}`))
//map always return the same length of original array 
const man=[{id:1,name:"rasool","address":"hyderbad"},{id:2,name:"raju","address":"kphb"}]
const naming=man.map((value,index,array)=>value.name)
console.log(naming)
//discount
const cart=[{item:"laptop",price:98798},{item:'mouse',price:1426}]
const discount=cart.map((value)=>{
    return {...value,price:value.price*0.9}
})
console.log(discount)
//in this 
let discountamount=cart.map((value)=>{
    price=value.price*0.90.toFixed(2)
    let dis=(value.price-price).toFixed(2)
    return dis
    }
)
console.log(discountamount)

//filter
//evens
const num=[1,2,6,7,10,6]
const even=num.filter((num)=>num%2===0)
console.log(even)

//word length grater than 5
const words=['apple','mango','kiwi','strawberry']
const d=words.filter((value)=>value.length>5)
console.log(d)
//
const mens=[{id:1,namme:"rasool",age:24},{id:2,name:"vamshi",age:31}]
const age=mens.filter((value)=>value.age>25 && value.name==="vamshi");
console.log(age)

//searching query 
const fruits=["banana","mango","apple"];
const search=(query)=>{
    return fruits.filter((value)=>{
        return value.toLowerCase().includes(query.toLowerCase())

    })
}
console.log(search("an"))


const dupl=[1,2,4,98,35,1,54,24,54];
const removedup=dupl.filter((value,index,array)=>{
   return array.indexOf(value)===index
})
console.log(removedup)

//reducer
//sum of the elements 

const sum=dupl.reduce((accum,current)=>accum+current,0)
console.log(sum)

//frequency of the elements
const frequency=dupl.reduce((accum,value)=>{accum[value]=(accum[value] || 0)+1
    console.log(accum[value])
   
    
    return accum
},{})

console.log(frequency)
//functions
let n1;
let n2;


function add(n1,n2){
    return n1+n2

}
console.log(add(10,20));
//
const men=[{id:1,name:"rasool"},{id:2,name:"rasool"}]
function finduser(id){
    return new Promise((reslove,reject)=>{
        const user=men.find((user)=>user.id===id)
        if(user){
            reslove(user)
        }
        else{
            reject("user not found")
        }
    })
} 

async function getuserid(id){
    try{
        const us= await finduser(id)
        console.log(us)

    }catch(error){
        console.log(error)

    }
    


}
getuserid(1)