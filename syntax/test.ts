let ok=()=>console.log(123)

let obj={
  ok
}
obj.ok()

let obj1=JSON.parse(JSON.stringify(obj))
console.log(obj1)
obj1.ok()