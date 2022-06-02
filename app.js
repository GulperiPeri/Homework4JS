//1.Напишите функцию, которая в цикле выводит числа от 0 до 50 - 10 баллов

//а-вариант
function showNumbers() {
  let i = 0;
  while (i < 50) {
    i++;
    console.log(i);
  }
}

showNumbers();

//б-вариант
function showNumbers2() {
  for (i = 0; i < 50; i++) {
    console.log(i);
  }
}
showNumbers2();

//2.Напишите функцию, которая в цикле выводит числа от 50 до 0 - 10 баллов

//а-вариант
function findNumbers() {
  let i = 51;
  while (i > 0) {
    i--;
    console.log(i);
  }
}

findNumbers();

//б-вариант
function findNumbers2() {
  for (let i = 50; i > 0; i--) {
    console.log(i);
  }
}

findNumbers2();

//3.Дан массив с элементами 2, 5, 9, 15, 0, 4 . С помощью цикла for  и оператора if
// выведите на консоль столбец тех элементов массива, которые больше 2-х , но       //меньше 5

//а-вариант
const list = [2, 5, 9, 15, 0, 4];

for (i = 0; i <= 4; i += 2) {
  if (i > 2 && i < 5) {
    console.log(i);
  }
}

//б-вариант
const list1 = [2, 5, 9, 15, 0, 4];

for (i = 0; i <= list1.length; i++) {
  if (list1[i] > 2 && list1[i] < 5) {
    console.log(list1[i]);
  }
}
