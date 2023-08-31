// // function new0(number){
// //     setTimeout(() => {
// //         console.log("Hello world")
        
// //     }, 5000);
   
// // } function new_1(number,number1,callback){
// //     console.log(number+number1)
// //     callback();
// // }
// // let a =2;
// // let b = 8
// // new_1(a,b,new0)

// let promise = new Promise((resolve,reject)=>{
//     let a = 3;
//     let b = 4;
//     let c = a+b
//     if (c===7){
//         resolve("Good")

//     } else{
//         reject("No")
//     }
    
    

//     promise.then((m)=>{
//         console.log("Hello world");
//     }) .catch((err)=>{
//         console.log(err)
    
//     })
    

// })


const good= async()=>{
    let good1 = await fetch("https://reqres.in/api/users?page=1")
    let good2 = await fetch("https://reqres.in/api/users?page=1")
    let good3 = await fetch("https://reqres.in/api/users?page=1")
  
     let wao = await (good1,good2,good3.json())
    console.log(wao)
    
    
  }
  good()
  console.log("chicken")