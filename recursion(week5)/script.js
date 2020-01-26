// Чтобы проверить решение разблокируйте и запустите index.html

//****************************Task1****************************
// var x = prompt("Input x", "");
// var y = prompt("Input power", "");
//
// function pow(x, y) {
//   if (y == '0')
//     return 1;
//   if (y == '1')
//     return x;
//   else return x * (pow(x, y - 1));
// }
//
// alert(pow(x, y));

//****************************Task4****************************
// var x = prompt("Input number", "");
// function isSimple(x, i) {
//   if (x < 2)
//     alert(x + " is not simple!");
//   if (x == 2)
//     alert(x + " is simple!");
//   else {
//     if ((x % i != 0) && (x != i)) {
//       i++;
//       isSimple(x, i);
//     } else if (x == i) {
//       alert(x + " is simple");
//     } else alert(x + " is not simple");
//   }
// }
// isSimple(x, 2);

//****************************Task6****************************
// var x = prompt("Input number of digit", "");
//
// function fibonachiNumber(number) {
//   if (number == 1 || number == 2)
//     return 1;
//   else {
//     return fibonachiNumber(number - 1) + fibonachiNumber(number - 2)
//   }
// }
//
// alert(fibonachiNumber(x));