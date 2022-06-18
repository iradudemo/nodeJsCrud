// function fct(n) {
//   if (n == 1) return 1;
//   else return fct(n - 1) * n;
// }
// var aba = 4.6;
// console.log(`factorial of 6 is ${fct(8)}`);
// console.log(typeof aba);
// // minus is used as unary operator
// console.log(-(10 - 2));
// console.log("5"-1)
// function daysOfAge(age) {
//   if (age > 0) {
//     return age * 365;
//   } else return "invalid age!";
// }

// console.log(`days in years of old is: ${daysOfAge(26)}`);

for (let age = 12;age<30;age=age+1){
    console.log(age)
    if(age % 26==0){
        console.log(`we are in the same age beacause your age is:\n ${age}`);
        break;
    }
}
