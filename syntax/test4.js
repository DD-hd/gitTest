// const app=require('express')()
// app.get("/index.html",(req,res)=>{
//     res.status(304)
//     res.setHeader('Location',"http://www.baidu.com")
//     res.end("ok")
// })

// app.listen(3000)

class A{
   constructor(){
       this.c=2
   }
    get a(){
        return '1'
    }
}

const a=new A()
for(let key in a){
    console.log(key,'1')
}
console.log(a.a,{...a},Object.getOwnPropertyDescriptors(a.__proto__))