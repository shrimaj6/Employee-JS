// const myPromise = new Promise((resolve, reject) => {    
//     let condition=10;    
      
//     if(condition == 9) {      
//         resolve('condition got matched');    
//     } else {      
//         reject('condition does not matched');    
//     }  
// });  
    
//   myPromise.then((message) => {   
//       console.log(message)
// }).catch((message) => {   
//     console.log(message);  
// }); 

// // 2
var promise = new Promise(function(resolve, reject) {
    const x = "5";
    const y = "5"
    if(x == y) {
      resolve();
    } else {
      reject();
    }
  });
     
  promise.
      then(function () {
          console.log("x is equal to y");
      }).
      catch(function () {
          console.log("x is not equal to y");
      });