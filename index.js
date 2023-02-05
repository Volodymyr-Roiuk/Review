///////////////////////////////////  Number: odd

let userNumber = prompt("Введите ваше число");
if (userNumber % 2 == 0) {
  alert(`Ваше число -> ${userNumber}, оно четное!`)
} else {
  alert(`Ваше число -> ${userNumber}, оно НЕчетное!`)
}

// ///////////////////////////////////  String: lexics

let userStr = prompt("Введите текст");
let correctStr = userStr.indexOf("some bad word");
alert(`Ваша строка: ${userStr}`)

///////////////////////////////////  Boolean

let question1 = confirm("Вы сегодня завтракали?");
console.log(`Ответ на первый вопрос: ${question1}`)
let question2 = confirm("Вы сегодня обедали?");
console.log(`Ответ на второй вопрос: ${question2}`)
let question3 = confirm("Вы сегодня ужинали?");
console.log(`Ответ на третий вопрос: ${question3}`)

///////////////////////////////////  Boolean: if

let firstquestion = confirm("Вы сегодня завтракали?");
console.log(`Ответ на первый вопрос: ${firstquestion}`)
let secondquestion = confirm("Вы сегодня обедали?");
console.log(`Ответ на второй вопрос: ${secondquestion}`)
let thirdquestion = confirm("Вы сегодня ужинали?");
console.log(`Ответ на третий вопрос: ${thirdquestion}`)
let mainQuestion = firstquestion + secondquestion + thirdquestion;
if (mainQuestion < 2) {
  alert("Вы голодны, немедленно покушайте!")
} else {
  alert("Вы молодец! Но нужно кушать чаще!")
}

///////////////////////////////////  Comparison: sizes

let firstQuestion = prompt("Какой размер верхней одежды Вас интересует? Возможные варианты: 40 / 42 / 44 / 46 / 48 / 50 / 52 / 54"); 
if (firstQuestion == 40) {
  alert("Американский размер -> 8 -> S")
} if (firstQuestion == 42) {
  alert("Американский размер -> 10 -> M")
} if (firstQuestion == 44) {
  alert("Американский размер -> 12 -> M+")
} if (firstQuestion == 46) {
  alert("Американский размер -> 14 -> L")
} if (firstQuestion == 48) {
  alert("Американский размер -> 16 -> L+")
} if (firstQuestion == 50) {
  alert("Американский размер -> 18 -> XL")
} if (firstQuestion == 52) {
  alert("Американский размер -> 20 -> XL+")
} if (firstQuestion == 54) {
  alert("Американский размер -> 22 -> XXL")
}

let secondQuestion = prompt("Какой размер женского белья Вас интересует? Выберите нужную Вам цифру: (1) Обхват талии: 63-65cм / Обхват бедер: 89-92см; (2) Обхват талии: 66-69cм / Обхват бедер: 93-96см; (3) Обхват талии: 70-74cм / Обхват бедер: 97-101см; (4) Обхват талии: 75-78cм / Обхват бедер: 102-104см; (5) Обхват талии: 79-83cм / Обхват бедер: 105-108cм; (6) Обхват талии: 84-89cм / Обхват бедер: 109-112см; (7) Обхват талии: 90-94cм / Обхват бедер: 113-117см; (8) Обхват талии: 95-97cм / Обхват бедер: 118-122см")
if (secondQuestion == 1) {
  alert("Американский размер -> 8 -> S")
} if (secondQuestion == 2) {
  alert("Американский размер -> 10 -> М")
} if (secondQuestion == 3) {
  alert("Американский размер -> 12 -> М+")
} if (secondQuestion == 4) {
  alert("Американский размер -> 14 -> L")
} if (secondQuestion == 5) {
  alert("Американский размер -> 16 -> L+")
} if (secondQuestion == 6) {
  alert("Американский размер -> 18 -> XL")
} if (secondQuestion == 7) {
  alert("Американский размер -> 20-> XL+")
} if (secondQuestion == 8) {
  alert("Американский размер -> 22 -> XXL")
} 

let thirdQuestion = prompt("Какой размер чулков/носков Вам нужен? Выберите необходимую для Вас цифру: (1) -> 21; (2) -> 22; (3) -> 23; (4) -> 24; (5) -> 25; (6) -> 26; (7) -> 27"); 
if (thirdQuestion == 1) {
  alert("Американский размер -> 8")
} if (thirdQuestion == 2) {
  alert("Американский размер -> 8 1/2")
} if (thirdQuestion == 3) {
  alert("Американский размер -> 9")
} if (thirdQuestion == 4) {
  alert("Американский размер -> 9 1/2")
} if (thirdQuestion == 5) {
  alert("Американский размер -> 10")
} if (thirdQuestion == 6) {
  alert("Американский размер -> 10 1/2")
} if (thirdQuestion == 7) {
  alert("Американский размер -> 11")
}

let forthQuestion = prompt("Какой размер детской одежды Вам нужен? Выберите необходимую Вам цифру. (1) -> рост: 50см / обхват груди: 40см / обхват талии: 40см / обхват бедер: 42см / длина спины: 14,5см; (2) -> рост: 56см / обхват груди: 42см / обхват талии: 42см / обхват бедер: 44см / длина спины: 16см; (3) -> рост: 62см / обхват груди: 44см / обхват талии: 44см / обхват бедер: 46см / длина спины: 17,5см; (4) -> рост: 68см / обхват груди: 46см / обхват талии: 46см / обхват бедер: 48см / длина спины: 19см; (5) -> рост: 74см / обхват груди: 48см / обхват талии: 47см / обхват бедер: 50см / длина спины: 20,2см; (6) -> рост: 80см / обхват груди: 50см / обхват талии: 49см / обхват бедер: 52см / длина спины: 21.4см; (7) -> рост: 86см / обхват груди: 51,5см / обхват талии: 50см / обхват бедер: 54см / длина спины: 22,6см; (8) -> рост: 92см / обхват груди: 53см / обхват талии: 51см / обхват бедер: 56см / длина спины: 23,8см; (9) -> рост: 98см / обхват груди: 55см / обхват талии: 52см / обхват бедер: 58см / длина спины: 25см; (10) -> рост: 104см / обхват груди: 57см / обхват талии: 53см / обхват бедер: 60см / длина спины: 26,2см; (11) -> рост: 110см / обхват груди: 59см / обхват талии: 54см / обхват бедер: 62см / длина спины: 27,4см; (12) -> рост: 116см / обхват груди: 61см / обхват талии: 55см / обхват бедер: 64см / длина спины: 28,6см; (13) -> рост: 122см / обхват груди: 63см / обхват талии: 56см / обхват бедер: 66см / длина спины: 29,8см; (14) -> рост: 128см / обхват груди: 65см / обхват талии: 57см / обхват бедер: 68см / длина спины: 31см; (15) -> рост: 134см / обхват груди: 67см / обхват талии: 58см / обхват бедер: 70см / длина спины: 32.3см; (16) -> рост: 140см / обхват груди: 69-70см / обхват талии: 60см / обхват бедер: 74см / длина спины: 33,4-33,8см"); 
if (forthQuestion == 1) {
  alert("Американский размер -> 5")
} if (forthQuestion == 2) {
  alert("Американский размер -> 7")
} if (forthQuestion == 3) {
  alert("Американский размер -> 9")
} if (forthQuestion == 4) {
  alert("Американский размер -> 11")
} if (forthQuestion == 5) {
  alert("Американский размер -> 13")
} if (forthQuestion == 6) {
  alert("Американский размер -> 15")
} if (forthQuestion == 7) {
  alert("Американский размер -> 17")
} if (forthQuestion == 8) {
  alert("Американский размер -> 19")
} if (forthQuestion == 9) {
  alert("Американский размер -> 21")
} if (forthQuestion == 10) {
  alert("Американский размер -> 23")
} if (forthQuestion == 11) {
  alert("Американский размер -> 25")
} if (forthQuestion == 12) {
  alert("Американский размер -> 27")
} if (forthQuestion == 13) {
  alert("Американский размер -> 29")
} if (forthQuestion == 14) {
  alert("Американский размер -> 31")
} if (forthQuestion == 15) {
  alert("Американский размер -> 33")
} if (forthQuestion == 16) {
  alert("Американский размер -> 35")
}


///////////////////////////////////  Ternary


let maleOrFemale = alert(confirm('Если вы мужчина - нажмите ОК') ? 'Вы мужчина' : "Вы женщина"); 

///////////////////////////////////  Training

// код незакончен //

///////////////////////////////////  Prompt: or

let userAge = alert(prompt("Укажите Ваш возраст") || "null"); 
let dateOfBirth = (2022 - userAge);
alert(`Дата вашего рождения: ${dateOfBirth}`);

///////////////////////////////////  Confirm: or this days

let noisyRobot = alert(confirm("шопинг?") || "ты - бяка");

///////////////////////////////////  Confirm: if this days

let noisyRobot1 = confirm("шопинг?")
if (noisyRobot1 === true) {
alert("Наконец-то!!!")
} else {
alert("Ты - бяка")
}

///////////////////////////////////  Default: or

let fname = alert(prompt("Введите ваше имя") || "Иван" )

let sname = alert(prompt("Введите вашу фамилию") || "Иванов" )

let tname = alert(prompt("Введите ваше отчество") || "Иванович" )

///////////////////////////////////  Default: if

let fname1 = prompt("Введите ваше имя");
if (fname1 !== true) {
  alert("Иван")
}
let sname1 = prompt("Введите вашу фамилию");
if (sname1 !== true) {
  alert("Иванов")
}
let tname1 = prompt("Введите ваше отчество");
if (tname1 !== true) {
  alert("Иванович")
}

/////////////////////////////////// Login and password

let account = {
  login: `admin`, 
  password: `qwerty`
}
let userLogin = prompt("Ваш логин");
let userPassword;
if (userLogin == account.login) {
  userPassword = prompt("Ваш пароль")
} if (userPassword == account.password) {
  alert("Поздравляю с удачным входом!")
} else {
  alert("ОШИБКА. Данные не верны.") 
}

///////////////////////////////////  Currency exchange

let currency = prompt("Какая валюта вас интересует? В наличии есть -> eur - usd");
let sellOrBuy = confirm("Если вы хотите купить валюту нажмите -> OK / Если вы хотите продать валюту нажмите -> ОТМЕНА")
let rate; 
if (currency.toUpperCase().toLowerCase() === "eur") {
  rate = 40; 
} if (currency.toUpperCase().toLowerCase() === "usd") {
  rate = 41;
}
let sumOfChange = prompt("Какую сумму вы хотите обменять? Введите значение в ₴")
let change = (sumOfChange / rate)
alert(`Вы получите ${change} ${currency}`)
console.log(change, currency)

///////////////////////////////////  Scissors

let play = alert("Игра камень-ножницы-бумага. Поиграем? =)")
let userVariant = prompt("Выберите: камень - ножницы - бумага;")
let computer = Math.random();
if (computer <= 0.33) {
  alert("Мой вариант: камень")
} else if (computer <= 0.66) {
  alert("Мой вариант: ножницы")
} else {
  alert("Мой вариант: бумага")
}
if (computer <= 0.33 && userVariant.toUpperCase().toLowerCase() == "камень") {
  alert("Ничья. Сыграем еще? =)")
} else if (computer <= 0.66 && userVariant.toUpperCase().toLowerCase() == "камень") {
  alert("Ты победил. Дашь мне еще один шанс? =)")
} else if (computer > 0.66 && userVariant.toUpperCase().toLowerCase() == "камень") {
  alert("Я победил. Не расстраивайся =)")
}

if (computer <= 0.33 && userVariant.toUpperCase().toLowerCase() == "ножницы") {
  alert("Я победил. Не расстраивайся =)")
} else if (computer <= 0.66 && userVariant.toUpperCase().toLowerCase() == "ножницы") {
  alert("Ничья. Сыграем еще? =)")
} else if (computer > 0.66 && userVariant.toUpperCase().toLowerCase() == "ножницы") {
  alert("Ты победил. Дашь мне еще один шанс? =)")
}

if (computer <= 0.33 && userVariant.toUpperCase().toLowerCase() == "бумага") {
  alert("Ты победил. Дашь мне еще один шанс? =)")
} else if (computer <= 0.66 && userVariant.toUpperCase().toLowerCase() == "бумага") {
  alert("Я победил. Не расстраивайся =)")
} else if (computer > 0.66 && userVariant.toUpperCase().toLowerCase() == "бумага") {
  alert("Ничья. Сыграем еще? =)")
}

///////////////////////////////////  Задание на черный пояс

// TO-DO //