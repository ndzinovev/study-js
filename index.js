/*      console.log ('Привет мир')
// вычисление площади прямоугольника
let x1 = -5;
let y1 = 8;

let x2 = 10;
let y2 = 5;

let line1 = Math.abs(x2-x1);
let line2 = Math.abs(y2-y1);

console.log('Площадь прямоугольника ' + Math.sqrt(
    Math.pow(line1,2) * Math.pow(line2,2))
    );

// вычисление дробных частей чисел

let a = 13.890123;
let b = 2.891564;
let n = 5;

let a1 = Math.trunc(a % 1 * Math.pow(10, n));
let b1 = Math.trunc(b % 1 * Math.pow(10, n));

console.log ('Дробная часть a: ' + a1 );
console.log ('Дробная часть b: ' + b1);

// сравнение

console.log(a1 < b1);
console.log(a1 > b1);
console.log(a1 <= b1);
console.log(a1 >= b1);
console.log(a1 === b1);
console.log(a1 !== b1);



 // Генератор случайных чисел от n до m
  // n необязательно меньше чем m

  n = 0;
  m = 100;

  //Количество цифр которые могут быть сгенерированы
  let range = Math.abs(m - n);

  //округление чисел от 0 до range
  let numberRage = Math.round(Math.random() * range);

  //левая граница возможного числа
  let min = Math.min(m, n);
  let randomNumber = min + numberRage;
  
  if (randomNumber % 2 == 0) {
  console.log(++randomNumber);
  }
  else {
    console.log(randomNumber);
  }
*/




//ДЗ блок 3

// 1. Проверка пароля

let password = '12344-'

if ((password.includes("-") == false) || (password.includes("_") == false) && (password.length < 4)) 
{ console.log('Пароль недостаточно надежный')}
  
  else
   { console.log('Пароль надежный')};


// 2. Работа с регистром

let name = "ВасHилий";                      
let surname = "токареВ";
let nameLowerCase = name.toLowerCase();          // Обработка имени
let nameRedy = nameLowerCase[0].toUpperCase() + nameLowerCase.substring(1);

textMessage = (nameRedy==name)==false ? "Имя было преобразовано" : "Имя осталось без изменений";

console.log(name);
console.log(nameRedy);
console.log(textMessage);

let surnameLowerCase = surname.toLowerCase();

let surnameRedy = surnameLowerCase[0].toUpperCase() + surnameLowerCase.substring(1);

surTextMessage = (surnameRedy==surname)==false ? "Имя было преобразовано" : "Имя осталось без изменений";

console.log(surname);
console.log(surnameRedy);
console.log(surTextMessage);

