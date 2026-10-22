interface user{
    name:string;
    age:number;
    address:string;
}
function details(User:user[]){

    return User.map((value)=>{
        return `the datils of users is ${value.name} ${value.age} ${value.address}`;
    })
}
let detailsof:user[]=[{name:"rasool",age:20,address:"hyd"},{name:"rasool",age:20,address:"hyd"}]
console.log(details(detailsof))

interface employee extends user{
    empid:number;
    role:string
}
let dev:employee[]=[{empid:101,name:"rasool",age:20,address:"hyd",role:"developer"},
    {empid:101,name:"rasool",age:20,address:"hyd",role:"developer"}]
console.log(dev)

class employeedetails implements employee{
    name: string;
    age:number;
    address: string;
    empid: number;
    role: string;
    constructor(name:string,age:number,address:string,empid:number,role:string){
        this.name=name;
        this.age=age;
        this.address=address;
        this.role=role;
        this.empid=empid
    }
    display(){
        return `the details of person is ${this.name} ${this.age} ${this.address} ${this.role} ${this.empid}`

    }
    displ():employee[]{
        return [
           new employeedetails("rasool",20,"hyd",101,"dev"),
           new employeedetails("rasool",20,"hyd",101,"dev"),
           new employeedetails("rasool",20,"hyd",101,"dev")
        ]

    }
}
const employeedetail=new employeedetails("rasool",20,"hyd",101,"dev")
console.log(employeedetail.display())
console.log(employeedetail.displ())

//add employee details using functions and interface structure
class emp {
     employees:employee[]=[]
     addemployess(empl:employee){
        this.employees.push(empl)
     }
     display():employee[]{
        return this.employees

     }
}
const em=new emp();
em.addemployess({name:"rasool","age":20,"address":"hyd","empid":101,role:"dev"})
em.addemployess({name:"rasool","age":20,"address":"hyd","empid":101,role:"dev"})
em.addemployess({name:"rasool","age":20,"address":"hyd","empid":101,role:"dev"})
console.log(em.display())

//enum

enum role{
    ADMIN="ADMIN",
    USER='USER'
}
function e(r:role){
    console.log(r)

}
console.log(e(role.ADMIN))


//type aliases
type rol="ADMIN" | "USER"
function ro(r:rol){
    console.log(r);

}
ro("ADMIN")
ro("guest")

enum Role{
    ADMIN="ADMIN",
    USER="USER",

}
function rol(role:Role){
    console.log(role)
}
rol(Role.USER)

//generic function 
function gen<T>(a:T):T{
    
    return a;

}
console.log(gen("hello"))
console.log(gen(10))

function add<T extends number>(a:T,b:T){
    return (a+b)

}
console.log(add(10,20))
function sum<T extends number >(...values:T[]):T{
    return values.reduce((val,accum)=>(val +accum) as T)
}
console.log(sum(10,20,29))
console.log(sum(10,20,29))
function strg<T >(...values:T[]){
    return values;
}
console.log(strg("hello","world"))
console.log(strg(10,29,39))


//generic class

class gene<T>{
    private data:T[];
    constructor(data:T[]){
        this.data=data
    }
    get(...data:T[]):T[]{
        return this.data;

    }
}
const genricclass=new gene([10,20,30,"hello","world"]);
console.log(genricclass.get())
const genricclass1=new gene([10,29]);
console.log(genricclass1.get())

//interface generic

interface men<T>{
    name:T[]
    display():T[];

}
class mendetails<T> implements men<T>{
     name: T[];
    constructor(name:T[]){
        this.name=name
    }
    display(): T []{
        return this.name
    }
}
const Gen=new mendetails([10,20,30]);
console.log(Gen.display())
const Gen1=new mendetails(["hello","world"]);
console.log(Gen1.display())

//
interface User{
    name:string,
    age:number,
    role:ROLE,
}
enum ROLE{
    ADMIN="ADMIN",
    USER="USER"
}
function getuser(use:User[]){
    return use
}
let u:User[]=[{name:"rasool",age:20,role:ROLE.USER},{name:"rasool",age:20,role:ROLE.USER}]
console.log(getuser(u))

//method overloading
class arthimatic{
     
     square(a:string):string;
     square(a:number,b:number):number;
     square(a:any,b?:any):any{
        if(typeof a ==="string"){
            return a;
        }
        else{
            return a+b;
        }

    }

}
const art=new arthimatic();
console.log(art.square(10,20));
console.log(art.square("hello",))

//
interface USER{
    name:string;
    email:string;
    address:string;
    role:ROLE

    display():string;
}
class normaluser implements USER {
    name: string;
    email: string;
    address: string;
    role: ROLE;
    constructor(name:string,email:string,address:string,role:ROLE){
        this.name=name;
        this.email=email,
        this.address=address;
        this.role=role
    }
    display():string{
        return `${this.name} ${this.role}`     
    }


}
class adminuser implements USER{
    name: string;
    email: string;
    address: string;
    role: ROLE;
    constructor(name:string,email:string,address:string,role:ROLE){
        this.name=name;
        this.email=email,
        this.address=address;
        this.role=role
    }
    display(): string {
        return `${this.name} ${this.role}`
    }
    //ACCESS THE DETAILS OF NORMAL USER
    USERDETAILS(userdetails:normaluser):string{
        return `name:${userdetails.name} role:${userdetails.role}`

    }
}
const normal=new normaluser("rasool","nayab@gmail.com","hyd",ROLE.USER)
console.log(normal.display())
const ADMIN=new adminuser("vinod","vinod@gmail.com","hyd",ROLE.ADMIN)
console.log(ADMIN.display())
console.log(ADMIN.USERDETAILS(normal)) //inject normal user object in admin user is called deppency injection

//
