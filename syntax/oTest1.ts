async function getZipFile(){
  let {test} = await import("./oTest2");
  let g:Test={gg:"123"}
  (test as any).ok = "1233"
  const {test:test1} = await import("./oTest2");
  console.log(test,test1);
}

getZipFile()