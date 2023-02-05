// /////////////////////////////////// assign: evaluation

// // Первое уравнение с ответом: 12.5
// // var a = 5;  
// // var b, c;
// // b = (a * 5);  
// // b = (c = b/2);

// // Второе уравнение с ответом: 12.5 
let a = 5;
let b, c;
b = (a * 5);
c = (b/2);
console.log(`Ответ: ${c}`);

// /////////////////////////////////// Number: age

let userAge = prompt("Укажите Ваш возраст"); 
let dateOfBirth = (2022 - userAge);
alert(`Дата вашего рождения: ${dateOfBirth}`);
console.log(`Дата вашего рождения: ${dateOfBirth}`);

// /////////////////////////////////// Number: temperature

let userTemperature = prompt("Укажите температуру вашего тела в °C");
let userTemperatureFarengeit = ((userTemperature * 9/5) + 32);
alert(`Температура Вашего тела в °F: ${userTemperatureFarengeit}`);
console.log(`Температура Вашего тела в °F: ${userTemperatureFarengeit}`);

// ///////////////////////////////////  Number: divide

let userNumb = prompt("Укажите любую цифру!");
let divideNumb = Math.floor(userNumb/2);
alert(`Ваше число разделено пополам: ${divideNumb}`);
console.log(`Ваше число разделено пополам: ${divideNumb}`);

// ///////////////////////////////////  Number: currency
const rate = 40; 
let userValue = prompt("Укажите какое количество ₴ вы хотите поменять на $");
let userDollars = (userValue / rate); 
alert(`Вы получите: ${userDollars}$`);
console.log(`Вы получите: ${userDollars}$`);

///////////////////////////////////  Number: RGB
let userRgbRed = prompt("Укажите количество красного цвета");
let userRgbGreen = prompt("Укажите количество зеленого цвета");
let userRgbBlue = prompt("Укажите количество синего цвета");
console.log(`Red color: ${userRgbRed}, Green color: ${userRgbGreen}, Blue color: ${userRgbBlue}`)

///////////////////////////////////  Number: flats

let numOfFlats = 120; // количество квартир
let numOfEntrance = 3; // количество подьездов
let numOfFloors = 10 // количество этажей 
let numOfFlatsPerFloor = 4; 
let s;
let sp;
let np;
let ne;
s = numOfFlats / (numOfEntrance * numOfFloors); // количество квартир/на этаже 
console.log(s)
sp = numOfFlats / numOfEntrance; // количество квартир/ в одном подьезде
console.log(sp)
np = 1 + (numOfFlatsPerFloor - 1) / sp // номер подьезда
console.log(np);
ne = 1 + ((numOfFlatsPerFloor - 1) % sp) / s // номер этажа
console.log(ne);

// TO-DO //