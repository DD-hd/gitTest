const v8=require('v8')
console.log(v8.getHeapSpaceStatistics())
class A{
    constructor(){
        this.a=1
    }
    test(){
        console.log('test')
    }
}
const a=new A()
// const buf=v8.serialize(A)
// console.log(buf)
// const a1=v8.deserialize(buf)
// console.log(a1)
// a1.test(A)
console.log(a)