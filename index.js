///////////////////////////////////  String: greeting

const userName = prompt("Как вас зовут?");

alert(`Привет, ${userName}!`);

///////////////////////////////////  String: gopni4ek

const userMessage = prompt('Введите сюда строку');
const newUserMessage = userMessage.split(",");
const newMessageGopnichek = newUserMessage.join(",блин, ");

alert(newMessageGopnichek);
console.log(newMessageGopnichek);

///////////////////////////////////  String: capitalize

const str = "cANBerRa"
const result = str.charAt(0).toUpperCase() // С
+ str.slice(1).toLowerCase(); // anberra

console.log(result) //Canberra

///////////////////////////////////  String: credentials

const sname = prompt("Укажите вашу фамилию");
const resultOfSname = sname.charAt(0).toUpperCase()
  + sname.slice(1).toLowerCase()
const fname = prompt("Укажите ваше имя");
const resultOfFname = fname.charAt(0).toUpperCase()
  + fname.slice(1).toLowerCase();
const tname = prompt("Укажите ваше отчество");
const resultOfTname = tname.charAt(0).toUpperCase()
  + tname.slice(1).toLowerCase()
const fullName = (resultOfSname + " " + resultOfFname + " " + resultOfTname);

alert(`Привет, ${fullName}!`)
console.log(fullName.trim());


///////////////////////////////////  String: beer

const string = "Было жарко. Василий пил пиво вприкуску с креветками"
const newStr = string.split(" ");
newStr[4] = "чай";
const resultOfNewStr = newStr.join(" ")
console.log(resultOfNewStr) //"Было жарко. Василий пил чай вприкуску с креветками"

///////////////////////////////////  String: no tag

const stringA = "какой-то текст в котором есть один тэг <br /> и всякое другое"
const infoAboutStrIndex = stringA.indexOf("<br />");
const resultA = stringA.slice(0,38);
const resultB = stringA.slice(45);
const mainresult = resultA + resultB;
console.log(mainresult) //какой-то текст в котором есть один тэг и всякое другое

///////////////////////////////////  String: big tag

const string1 = "какой-то текст в котором есть один тэг <br /> и всякое другое"
const infoAboutStrIndex1 = string1.indexOf("<br />");
const result1 = string1.slice(0,38);
const resultOfBr = string1.slice(39,45);
const result2 = string1.slice(45);
const upperBr = resultOfBr.toUpperCase()
const result3 = result1 + " " + upperBr + result2;
console.log(result3) //какой-то текст в котором есть один тэг <BR /> и всякое другое

///////////////////////////////////  String: new line 

const usermessage = prompt("Введите сюда любую большую строку, для новой строки используйте = /n");
const newuserMessage = usermessage.split(`/n`);
const bigresult = newuserMessage.join(" ");
alert(bigresult);
console.log(bigresult);


///////////////////////////////////  String: youtube

// код не закончен //