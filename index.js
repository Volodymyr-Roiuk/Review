///////////////////////////////////  String: greeting

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

///////////////////////////////////  String: gopni4ek

let userMessage = prompt('Введите сюда строку');
let newUserMessage = userMessage.split(",");
let newMessageGopnichek = newUserMessage.join(",блин, ");
alert(newMessageGopnichek);
console.log(newMessageGopnichek);

///////////////////////////////////  String: capitalize

let str = "cANBerRa"
let result = str.charAt(0).toUpperCase() // С
 + str.slice(1).toLowerCase(); // anberra
console.log(result) //Canberra

///////////////////////////////////  String: credentials

let sname = prompt("Укажите вашу фамилию");
let resultOfSname = sname.charAt(0).toUpperCase()
  + sname.slice(1).toLowerCase()

let fname = prompt("Укажите ваше имя");
let resultOfFname = fname.charAt(0).toUpperCase()
  + fname.slice(1).toLowerCase();

let tname = prompt("Укажите ваше отчество");
let resultOfTname = tname.charAt(0).toUpperCase()
  + tname.slice(1).toLowerCase()

let fullName = (resultOfSname + " " + resultOfFname + " " + resultOfTname);
alert(`Привет, ${fullName}!`)
console.log(fullName.trim());


///////////////////////////////////  String: beer

let string = "Было жарко. Василий пил пиво вприкуску с креветками"
let newStr = string.split(" ");
newStr[4] = "чай";
let resultOfNewStr = newStr.join(" ")
console.log(resultOfNewStr) //"Было жарко. Василий пил чай вприкуску с креветками"

///////////////////////////////////  String: no tag

let stringA = "какой-то текст в котором есть один тэг <br /> и всякое другое"
let infoAboutStrIndex = stringA.indexOf("<br />");
let resultA = stringA.slice(0,38);
let resultB = stringA.slice(45);
let mainresult = resultA + resultB;
console.log(mainresult) //какой-то текст в котором есть один тэг и всякое другое

///////////////////////////////////  String: big tag

let string1 = "какой-то текст в котором есть один тэг <br /> и всякое другое"
let infoAboutStrIndex1 = string1.indexOf("<br />");
let result1 = string1.slice(0,38);
let resultOfBr = string1.slice(39,45);
let result2 = string1.slice(45);
let upperBr = resultOfBr.toUpperCase()
let result3 = result1 + " " + upperBr + result2;
console.log(result3) //какой-то текст в котором есть один тэг <BR /> и всякое другое

///////////////////////////////////  String: new line 

let usermessage = prompt("Введите сюда любую большую строку, для новой строки используйте = /n");
let newuserMessage = usermessage.split(`/n`);
let bigresult = newuserMessage.join(" ");
alert(bigresult);
console.log(bigresult);


///////////////////////////////////  String: youtube

// код не закончен //