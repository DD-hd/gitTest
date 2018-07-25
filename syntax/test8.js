function* foo() {
    const arr=[]
    arr.push(yield 1);
    arr.push(yield 2);
    arr.push(yield 3)
    arr.push(yield 4)
    arr.push(yield 5)
    return arr;
  }
console.log(foo().return())

const while1=foo()
let index=1
while(true){
    const res=while1.next(index++)
    console.log(res)
    if(res.done){
        break
    }
}