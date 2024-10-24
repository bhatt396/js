// // let value=3
// // let Negvalue=-value
// // console.log(Negvalue)
// // console.log(+true)
// // //increament decereaament
// // //relational operator
// // console.log("2">1)
// // console.log(0==null)
// // console.log(0<null)
// // // console.log("2"===2)
// // const id=  Symbol('123')
// // const anotherId= Symbol('123')
// // console.log(id==anotherId)
// // const heros=[12,"hello"]
// // let myObj =
// // {
// // name: "hitesh",age:22
// // // }
// // const myfunction function(){
// //     console.log("Hello world")
// // }
// // myfunction();
// function myFunction() {
//     console.log("Hello world");
// }
// myFunction()
// //stack and heap 
// let myName="bhatt"
// let anoname= myName
// console.log(anoname)
//lets learn th e concept of heap and stack 

// let myName="bhatt"
// let anoname= myName
// anoname="bhatt1"
// console.log(anoname)
// console.log(myName)
//here first myname stand at stack then become anioname that is qcopying value from the myname just copying 
//this is so calle dstack mechanism 
//now see how it works on heap memory 
let userone=
{
    user_name:"bhaskar",
    email:"bhaskar@yahoo.com"


}
let UserTwo=userone
console.log(UserTwo.user_name)
console.log(userone.user_name)
UserTwo.email="mmychanged@yaho.com"
console.log(userone.email)