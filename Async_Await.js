const getData = async() => {
    var object = await "Hello World";
    console.log(object);
}
console.log("hii")
getData();
console.log("Hello")


// function myfunction() {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve('resolved');
//       }, 2000);
//     });
//   }
  
//   async function asyncCall() {
//     console.log('calling');
//     const result = await myfunction();
//     console.log(result);
//     // expected output: "resolved"
//   }
  
//   asyncCall();
//   console.log("hi")
  