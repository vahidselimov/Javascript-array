//Bu taski yazmagin bir nece usulu var:
//1ci usul findindex methodu

let arr=[30,43,45,67,87,24]
let result=arr.findIndex((val,i)=>{
  if(val==45)
   return i
})
console.log(result)
//....//
////2ci usul indexof usulu
////
// let resultt=arr.indexOf(45)
// console.log(resultt)
//...//
// 3cu usul foreach usulu
// arr.forEach((val,i) => {
//     if(val==45)
//     console.log(i)

    
// });
