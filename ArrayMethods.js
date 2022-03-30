// console.log("******Concatination method****");
// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];
// const arr3 = ["Robin"];
// const childern = arr1.concat(arr2,arr3);
// console.log("final array is :" ,childern);


// console.log("******map method****");
// let users = [
//     {firstName : "Santoshi", lastName: "nawkhare"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
  
//    let userFullnames = users.map(function(element){
//        return `${element.firstName} ${element.lastName}`;
//    })
  
//    console.log(userFullnames);

//   console.log("******filter method****");
//   let users = [
//         {firstName : "Santoshi", lastName: "nawkhare"},
//         {firstName : "Daniel", lastName: "Longbottom"},
//         {firstName : "Jacob", lastName: "Black"}
//       ];
//   const userFullnames = users.filter(e => e.firstName.includes("Daniel"));

// console.log(userFullnames)

// console.log("******reduce method1****");
// const add = {
//     a: 1,
//     b: 2,
//     c: 3
//   }
  
//   const total = Object.values(add).reduce((t, n) => t * (n + 1))//n=3, t=3
  
//   console.log(total)

// console.log("******reduce method2****");
//  const numbers = [1, 2, 3, 4, 5, 6];

// function sum_reducer(a, b) {
//   return a + b;
// }

// let sum = numbers.reduce(sum_reducer);
// console.log(sum); 

console.log("******for each method****");
const numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach(element => {
    console.log(element)
});