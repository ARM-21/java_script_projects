const obj ={1:'a',2:"b",3:"c",4:"d"}
// let arr2 = [
//     [1,2]
// ]
// console.log(Object.entries(obj).map(([key,val])=>{
//  return [key,val+"m"];
// }))
const obj2 = Object.fromEntries(Object.entries(obj).map(([k,v])=>{
    return [k,v+"m"];
}))
console.log(obj2)

//cannot use length in object 