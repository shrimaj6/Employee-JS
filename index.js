//method1
var regEx1 = require('./App.js').mail
var regEx2 = require('./App.js').name
var regEx3 = require('./App.js').mobileNo
var regEx4 = require('./App.js').passwd

let mail = regEx1.test("Santoshi1@gmail.com")
 console.log("my Email validation is : " +mail);

  let Check2 = regEx2.test("Santoshi");
 console.log("my Name validation is :" +Check2);

let Check3 = regEx3.test("7798978782");
console.log("my MObileNo validation is :" +Check3);

 let passwd = regEx4.test("Santoshi@123");
 console.log("my Password validation is :" +passwd);

//method2
// var { mail, name, mobileNo, passwd } = require('./App.js');
// let mail1 = regEx1.test("Santoshi1@gmail.com")
// console.log("my Email validation is : " +mail1);

