// Чтобы проверить решение разблокируйте и запустите index.html

//****************************Task1****************************
// var age = prompt("Input your age", "");
// if (age > 0 && age < 12) {
//   alert("you are a child");
// } else {
//   if (age >= 12 && age <= 18) {
//     alert("you are a teenager");
//   } else {
//     if (age > 18 && age < 60) {
//       alert("you are a adult");
//     } else {
//       if (age >= 60) {
//         alert("you are a retiree");
//       } else {
//         alert("you input wrong age");
//       }
//     }
//   }
// }

//****************************Task2****************************
// var key = prompt("Input key number", "");
// switch (key) {
//   case "0": {
//     alert(")");
//     break;
//   }
//   case "1": {
//     alert("!");
//     break;
//   }
//   case "2": {
//     alert("@");
//     break;
//   }
//   case "3": {
//     alert("#");
//     break;
//   }
//   case "4": {
//     alert("$");
//     break;
//   }
//   case "5": {
//     alert("%");
//     break;
//   }
//   case "6": {
//     alert("^");
//     break;
//   }
//   case "7": {
//     alert("&");
//     break;
//   }
//   case "8": {
//     alert("*");
//     break;
//   }
//   case "9": {
//     alert("(");
//     break;
//   }
//   default: {
//     alert("Wrong input");
//     break;
//   }
// }

//****************************Task3****************************
// // // var num = prompt("Input three digit number", "");
// // // var fnum = Math.floor(num / 100);
// // // var snum = Math.floor((num % 100) / 10);
// // // var tnum = num % 10;
// // // if (num / 100 < 1 || num / 100 > 10) {
// // //   alert("wrong input")
// // // } else {
// // //   if (fnum == snum || fnum == tnum || snum == tnum) {
// // //     alert("Yes")
// // //   } else {
// // //     alert("No")
// // //   }
// /

//****************************Task4****************************
// var year = prompt("Input year", "");
// ((year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))) ? alert("Високосный") : alert("Не високосный");

//****************************Task5****************************
// var number = prompt("Input five digit number", "");
// if (number / 10000 < 1 || number / 10000 > 10) {
//   alert("Wrong input")
// } else {
//   if (Math.floor(number / 10000) == number % 10) {
//     if (Math.floor((number % 10000) / 1000) == Math.floor((number % 100) / 10)) {
//       alert("It's a polindrom");
//     } else {
//       alert("not a palindrom");
//     }
//   } else {
//     alert("not a ploindrom");
//   }
// }

//****************************Task6****************************
// var dol = prompt("Input sum in dollars", "");
// var cur = prompt("Choose a currency: EUR, UAH or AZN");
// if (dol > 0) {
//   switch (cur) {
//     case "EUR": {
//       alert(dol + "$ = " + (dol * 1.14) + " EUR");
//       break;
//     }
//     case "AZN": {
//       alert(dol + "$ = " + (dol * 1.17) + " AZN");
//       break;
//     }
//     case "UAH": {
//       alert(dol + "$ = " + (dol * 26.18) + " UAH");
//       break;
//     }
//     default:
//       alert("There is no this currency")
//   }
// } else {
//   alert("Wrong input")
// }

//****************************Task7****************************
// var sum = prompt("Input sum", "");
// if (sum > 0) {
//   if (sum >= 200 && sum < 300) {
//     alert("To pay: " + (sum * 0.97))
//   } else if (sum >= 300 && sum < 500) {
//     alert("To pay: " + (sum * 0.95))
//   } else if (sum >= 500) {
//     alert("To pay: " + (sum * 0.93))
//   } else if (sum < 200) {
//     alert("To pay: " + sum);
//   }
// } else {
//   alert("Wrong input")
// }

//****************************Task8****************************
// var circleLength = prompt("Input length of the circle", "");
// var squarePerim = prompt("Input perimetr of the square", "");
// var radius = circleLength / 2 * Math.PI;
// var radiusFromSquare = squarePerim/4/2;
// (radius<=radiusFromSquare)? alert("Поместиться"): alert("Не поместится");

//****************************Task9****************************
// var question1 = prompt("Who said May? " + " 1.Cat " + " 2.Dog " + "  3.Cow ", "Input number of correct answer");
// var question2 = prompt("Who said Gav? " + " 1.Cat " + " 2.Dog " + "  3.Cow ", "Input number of correct answer");
// var question3 = prompt("Who said Myyyy? " + " 1.Cat " + " 2.Dog " + "  3.Cow ", "Input number of correct answer");
// var sum = 0;
// if (question1 == "1")
//   sum = sum + 2;
// if (question2 == "2")
//   sum = sum + 2;
// if (question3 == "3")
//   sum = sum + 2;
// alert("Your score is " + sum);

//****************************Task10****************************
// var date = prompt("Input date (day-month-year)");
// if (date.match(/^(0[1-9]|1\d|2\d|3[01])\-(0[1-9]|1[0-2])\-(19|20)\d{2}$/)) {
//   var arr = date.split("-");
//   var d = +arr[0]+1;
//   var y = +arr[2];
//   var m = +arr[1];
//   alert("Next date is: " + new Date(y, m - 1, d).toDateString());
// } else alert("You input date format is wrong")
