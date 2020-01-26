// Чтобы проверить решение разблокируйте и запустите index.html

//****************************Task1****************************
// var sum = 0;
// var min = prompt("input min value", "");
// var max = prompt("input max value", "");
// if (max > min) {
//   for (var i = +min; i <= +max; i++) {
//     sum = sum + i;
//   }
//   alert("Sum = " + sum);
// } else alert("This value must be bigger then last entered");

//****************************Task2****************************
// var firstN = Math.abs(+prompt("input the first number", ""));
// var secondN = Math.abs(+prompt("input the second number", ""));
// for (var i = Math.max(firstN, secondN); i > 0; i--) {
//   if ((firstN % i) == 0 && (secondN % i) == 0) {
//     alert("The greatest common factor is " + i);
//     break;
//   }
// }

//****************************Task3****************************
// var n = Math.abs(+prompt("input number", ""));
// var m = 0;
// var arr = [];
// for (var i = n; i > 0; i--) {
//   if (n % i == 0) {
//     arr[m] = i;
//     m++;
//   }
// }
// alert("All common factors of your number: " + arr.toString());

//****************************Task4****************************
// var n = Math.abs(+prompt("input number", ""));
// var i = 1;
// while (n / 10 >= 1) {
//   i++;
//   n = n / 10;
// }
// alert("This number consist of: " + i + " digits");
//

//****************************Task5****************************
// var positive = 0;
// var negative = 0;
// var zero = 0;
// var even = 0;
// var uneven = 0;
// for (var i = 0; i < 10; i++) {
//   var n = prompt("Input next number", "");
//   if (n > 0)
//     positive++;
//   else if (n < 0)
//     negative++;
//   else zero++;
//   if (n % 2 == 0 && n != 0)
//     even++;
//   else if (n % 2 != 0)
//     uneven++;
// }
// alert("Positive: " + positive + ", negative: " + negative + ", zero: " + zero + ", even: " + even + ", uneven: " + uneven);

//****************************Task6****************************
// var answer = true;
// while (answer == true) {
//   var firstN = prompt("Input the first number", "");
//   var secondN = prompt("Input the second number", "");
//   var operation = prompt("Input sign of operation", "");
//   var res = eval(firstN + operation + secondN);
//   var answ = prompt("Answer is: " + res + " Do you want to continue?", "");
//   if (answ.toUpperCase() != "YES") {
//     answer = false;
//   }
// }

//****************************Task7****************************
// var n = prompt("Input number", "");
// var dig = prompt("Shift on: ");
// var n1 = n, i = 0;
// while (n1 >= 1) {
//   n1 = n1 / 10;
//   i++;
// }
// var exponent = Math.pow(10, (i - dig));
// var res1 = n % exponent;
// var res2 = Math.floor(n / exponent);
// alert("Your number is: " + res1 + res2);

//****************************Task8****************************
// var date = new Date();
// var f = date.getDay();
// function getWeekDay(day) {
//   switch (day) {
//     case 0:
//       return "Воскресенье";
//       break;
//     case 1:
//       return "Понедельник";
//       break;
//     case 2:
//       return "Вторник";
//       break;
//     case 3:
//       return "Среда";
//       break;
//     case 4:
//       return "Четверг";
//       break;
//     case 5:
//       return "Пятница";
//       break;
//     case 6:
//       return "Суббота";
//       break;
//   }
// }
//
// while (window.confirm(getWeekDay(f) + " Хотите увидеть следующий день?")) {
//   f++;
//   if (f == 7)
//     f = 0;
// }

//****************************Task9****************************
// window.onload = function () {
//   var mas = [];
//   for (var i = 2; i <= 9; i++) {
//     mas[i] = [];
//     for (var j = 1; j <= 10; j++) {
//       mas[i][j] = i * j;
//     }
//   }
//   for (i = 2; i <= 9; i++) {
//     for (j = 1; j <= 10; j++) {
//       document.write(mas[i][j] + '&nbsp');
//     }
//     document.write("<br/>");
//   }
// };

