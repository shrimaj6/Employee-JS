// //first letter should be capital
// let Fname = "Santoshi";
// let  Check = /^[A-Za-z. ]{4,30}$/;
// if(!Check.test(Fname))
// {
//     console.log("your pattern is successful");
// }
// else{
//     console.log("your pattern is not successful");
// }
// // min 1 letter caps, min 8 chars, min 1 number, min 1 special char
// var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})$/;//for password
// let regEx = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/);
// let Check = regEx.test("Santoshi@123");
// console.log("my result is :" +Check);
//mail validation
// let regEx = RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);
// let Check = regEx.test("Santoshi1@gmail.com");
// console.log("my result is :" +Check);

let num = 4;
switch (num) {

    case 1:
        let regEx1 = RegExp(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/);//Mail
        let Check1 = regEx1.test("Santoshi1@gmail.com");
        console.log("my Mail validation is :" +Check1);
      break;
    case 2:
       let regEx2 = RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,}$/);//Passwd
       let Check2 = regEx2.test("Santoshi@123");
       console.log("my Password validation is :" +Check2);
      break;
    case 3:
        let regEx3 = RegExp(/^[A-Za-z. ]{4,30}$/);//Name
        let Check3 = regEx3.test("Santoshi");
        console.log("my Name validation is :" +Check3);
      break;
    case 4:
        let regEx4 = RegExp(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im);//mobile NO
        let Check4 = regEx4.test("7798978782");
        console.log("my MObileNo validation is :" +Check4);
      break;
    default: 
    console.log("Wrong input!");
      break;
  }
  console.log("the result is :" +num);