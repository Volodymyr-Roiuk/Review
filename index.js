// /////////////////////////////////// assign: evaluation

// // Первое уравнение с ответом: 12.5
// // var a = 5;  
// // var b, c;
// // b = (a * 5);  
// // b = (c = b/2);

// // Второе уравнение с ответом: 12.5 
const a = 5;

const b = a * 5;

const c = b/2;

console.log(`Ответ: ${c}`);

// /////////////////////////////////// Number: age

const userAge = prompt("Укажите Ваш возраст"); 

const dateOfBirth = (2022 - userAge);

alert(`Дата вашего рождения: ${dateOfBirth}`);
console.log(`Дата вашего рождения: ${dateOfBirth}`);

// /////////////////////////////////// Number: temperature

const userTemperature = prompt("Укажите температуру вашего тела в °C");

const userTemperatureFarengeit = (userTemperature * 9/5) + 32;

alert(`Температура Вашего тела в °F: ${userTemperatureFarengeit}`);
console.log(`Температура Вашего тела в °F: ${userTemperatureFarengeit}`);

// ///////////////////////////////////  Number: divide

const userNumb = prompt("Укажите любую цифру!");

const divideNumb = Math.floor(userNumb/2);

alert(`Ваше число разделено пополам: ${divideNumb}`);
console.log(`Ваше число разделено пополам: ${divideNumb}`);

// ///////////////////////////////////  Number: currency
const rate = 40; 

const userValue = prompt("Укажите какое количество ₴ вы хотите поменять на $");

const userDollars = userValue / rate; 

alert(`Вы получите: ${userDollars}$`);
console.log(`Вы получите: ${userDollars}$`);

///////////////////////////////////  Number: RGB
const userRgbRed = prompt("Укажите количество красного цвета");

const userRgbGreen = prompt("Укажите количество зеленого цвета");

const userRgbBlue = prompt("Укажите количество синего цвета");

console.log(`Red color: ${userRgbRed}, Green color: ${userRgbGreen}, Blue color: ${userRgbBlue}`)

///////////////////////////////////  Number: flats

const numOfFlats = 120; // количество квартир
const numOfEntrance = 3; // количество подьездов
const numOfFloors = 10 // количество этажей 
const numOfFlatsPerFloor = 4; 

const s = numOfFlats / (numOfEntrance * numOfFloors); // количество квартир/на этаже 

console.log(s)

const sp = numOfFlats / numOfEntrance; // количество квартир/ в одном подьезде

console.log(sp)

const np = 1 + (numOfFlatsPerFloor - 1) / sp // номер подьезда

console.log(np);

const ne = 1 + ((numOfFlatsPerFloor - 1) % sp) / s // номер этажа

console.log(ne);

// TO-DO //