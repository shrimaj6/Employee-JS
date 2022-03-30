let IS_PART_TIME = 1;//UC1
let IS_FULL_TIME = 2;//UC1
let EMP_RATE_PER_HOUR = 20;//UC2,UC5,UC6
let empHrs = 0;//UC2,UC3,UC5,UC6
let totalEmpHr  = 0;//UC6
let empWage = 0;//UC2,UC5,UC6
let NUM_WORKING_DAYS = 20;//UC5,UC6
let totalEmployeeWage = 0;//UC5
let totalWorkingDays = 0;//UC6
let MAX_HOURS_IN_MONTH = 100;//UC6
//Check the emp is present or absent
console.log("*****UC1*****");
let empCheck = Math.floor(Math.random() * 10) % 3;
if (empCheck == IS_FULL_TIME)
            {
                empHrs = 8//UC2, UC3
                console.log("emp is present");//UC1
            }
            else if(empCheck == IS_PART_TIME){//UC3
                empHrs = 4;//UC3
                empHrs = 0;//UC2
              console.log("emp is Absent");//UC1
            }
            else{
                empHrs = 0;//UC3
            }
            //Calculate daily emp wages
console.log("*****UC2*****");
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("empolyee Daily Wages :" + empWage);
//Add part time emp wages 
console.log("*****UC3*****");
empWage = empHrs * EMP_RATE_PER_HOUR;
console.log("empWages part time :" + empWage);
//Add part time emp wages in switch case
console.log("*****UC4*****");
for(i = 0; i < NUM_WORKING_DAYS; i++)//UC5
   {
    switch(empCheck)
    {
     case IS_FULL_TIME:
        empHrs = 8;
        break;
        case IS_PART_TIME:
            empHrs = 4;
            default:
                empHrs = 0;
                break;
        }
   }
    empWage = empHrs * EMP_RATE_PER_HOUR;
    console.log ("Employee Daily Wages :" + empWage);
   empWage = empHrs * EMP_RATE_PER_HOUR;
   console.log("empWages part time :" + empWage);
//Calculate Wage for a month
   console.log("*****UC5*****");
       empWage = empHrs * EMP_RATE_PER_HOUR;
      console.log("Employee Wage :" + empWage);
      totalEmployeeWage += empWage;
   console.log("Total Employee Wages :" + totalEmployeeWage);
//    console.log("*****UC5*****");
//    for(i = 0; i < NUM_WORKING_DAYS; i++)//UC5
//    {
//     switch(empCheck)
//     {
//      case IS_FULL_TIME:
//         empHrs = 8;
//         break;
//         case IS_PART_TIME:
//             empHrs = 4;
//             default:
//                 empHrs = 0;
//                 break;
//         }
//         empWage = empHrs * EMP_RATE_PER_HOUR;
//         totalEmployeeWage += empWage;
//         console.log("Employee Wage :" + empWage);
//    }
//    console.log("Total Employee Wages :" + totalEmployeeWage);
console.log("*****UC6*****");
while(totalEmpHr <= MAX_HOURS_IN_MONTH && totalWorkingDays <= NUM_WORKING_DAYS)
{
    totalWorkingDays++
    switch(empCheck)
    {
     case IS_FULL_TIME:
        empHrs = 8;
        break;
        case IS_PART_TIME:
            empHrs = 4;
            default:
                empHrs = 0;
                break;
        }
        totalEmpHr += empHrs;
        console.log("Days: " + "" + totalEmpHr +  "EmpHrs :" + empHrs);
   }
   totalEmpWage = totalEmpHr * EMP_RATE_PER_HOUR;
   console.log("Total Employree Wage :" + totalEmpWage);