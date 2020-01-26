// Чтобы проверить решение разблокируйте и запустите index.html

//****************************Task2****************************
// var x = prompt("Input number", "");
// function fact (num) {
//   var res = num;
//   for (var i = 1; i < num; i++) {
//     res = res * i;
//   }
//   return res;
// }
// alert(fact(x));

//****************************Task4****************************
// var x = prompt("Input x", "");
// var y = prompt("Input y", "");
//
// function square(x, y) {
//   if (y == '')
//     return x * x;
//   else return x * y;
// }
//
// alert(square(x, y));

//****************************Task7****************************
// var h = prompt("Input hours", "");
// var m = prompt("Input minutes", "");
// var s = prompt("Input seconds", "");
//
// function time(hours,minutes,seconds){
//   if(minutes=='')
//     minutes=0;
//   if(seconds=='')
//     seconds=0;
//   var date = new Date(null, null, null, hours, minutes, seconds);
//   var options = {
//     hour: 'numeric',
//     minute: 'numeric',
//     second: 'numeric'
//   };
//   alert( date.toLocaleString("ru", options) );
// }
// time(h,m,s);

//****************************Task10****************************
// var date1 = prompt("Input the first date in format: yyyy-mm-dd", "");
// var dateTime1 = prompt("Input the first dateTime in format: hh:mm:ss", "");
// var date2 = prompt("Input the second date in format: yyyy-mm-dd", "");
// var dateTime2 = prompt("Input the second dateTime in format: hh:mm:ss", "");
//
// function fulldate(date, dateTime) {
//   return (date + "T" + dateTime);
// }
//
// function compare(date1, date2) {
//   var d1 = Date.parse(date1);
//   var d2 = Date.parse(date2);
//   return Math.abs(d1 - d2);
// }
//
// function printTime(timeInMil) {
//   timeInMil = timeInMil / 1000;
//   var h = Math.floor(timeInMil / 3600);
//   var s = timeInMil % 60;
//   var m = (timeInMil % 3600 - s) / 60;
//   alert(h + ":" + m + ":" + s);
// }
//
// printTime(compare(fulldate(date1, dateTime1), fulldate(date2, dateTime2)));