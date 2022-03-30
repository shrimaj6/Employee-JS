//Any function pass an argument is called callback function

// function myDisplayer(some) {
//     console.log("the sum is :" +some);
//   }
  
//   function myCalculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = myCalculator(5, 5);
//   myDisplayer(result);


// function myDisplayer(some) {
//   console.log("result is :" ,some);
// }

// function myFirst() {
//   myDisplayer("Hello");
// }

// function mySecond() {
//   myDisplayer("Goodbye");
// }

// myFirst();
// mySecond();



// function myDisplayer(some) {
//   console.log("result is :" ,some);
// }

// function myCalculator(num1, num2, myCallback) {
//   let sum = num1 + num2;
//   myCallback(sum);
// }

// myCalculator(5, 5, myDisplayer);


// function myfunction() {
//   console.log('Hello world');
// }

// function sayName(name) {
//   console.log('Hello' + ' ' + name);
// }

// // calling the function
// setTimeout(myfunction, 2000);
// sayName('John');



var myfunction = (num1,num2)=>{

    console.log("your output ");
    let sum = num1+num2;
    console.log("the addition: "+ sum);
  }
  
  var sayHi = (callback)=>{
    console.log("Hii");
    setTimeout(()=>{
        let num1 = 5;
        let num2 =10;
        console.log("how r u");
        callback(num1,num2);
    },3000)
  }
  
  sayHi(myfunction);