console.log("--------------------FIRST TASK----------------------")
// 1.  Зробити змінну типу масив, довжиною 100 елеменнтів. Заповнити його випадковими числами від 0 до 100 включно.
// Написати функцію, яка буде створювати новий массив, в якому усі його елменти будуть:
//   а) відсортовані по зростанню
//   б) усі елементи будуть більше ніж 50

const data = 
[1, 4, 12, 13, 51, 98, 31, 13, 14, 15,
16, 17, 19, 20, 21, 77, 17, 21, 14, 21,
12, 15, 15, 65, 42, 31, 31, 51, 21, 18,
83, 31, 25, 72, 71, 10, 1, 28, 30, 10,
11, 31, 32, 61, 62, 65, 6, 98, 64, 21,
90, 73, 63, 77, 81, 44, 3, 66, 32, 91,
89, 21, 63, 77, 78, 79, 90, 3, 47, 90,
89, 75, 66, 31, 63, 75, 78, 2, 2, 13,
83, 31, 43, 46, 75, 73, 75, 99, 10, 22,
93, 56, 57, 22, 33, 73, 8, 20, 15, 21];
console.log(`Basic array: `, data);


function sortedByGrowing (numbers) {
  const resultNumbers = []; 


  for (let i = 0, result; i < numbers.length-1; i++) {
    for (let i = 0; i < numbers.length-1; i++) {
      if(numbers[i] > numbers[i + 1]) {
        result = numbers[i];
        numbers[i] = numbers[i + 1];
        numbers[i + 1] = result;
      }
    }
  }
  console.log(`Array sorted by growing: `, numbers)


  for (let index = 0; index < numbers.length; index++) {
    const curentElement = numbers[index];

    if (curentElement > 50) { 
      resultNumbers.push(curentElement)
    }
  }

  return resultNumbers;
}

const sortedNumbers = sortedByGrowing(data)
console.log(`Array sorted by growing and sorted >= 50`,sortedNumbers);





console.log("--------------------SECOND TASK----------------------")

//2. Зробити змінну типу масив, довжиною 100 елеменнтів. Заповнити його випадковими строками з літерами англійского алфавіту.
// Написати функцію, яка буде створювати новий массив, в якому усі його елменти будуть:
//   а) відсортовані по зростанню
//   б) усі елемени будуть перетворені у об'єкт типу 
//       {
//         value: значення з елементу масива
//       }

// const strings = 
// [`s`, `q`, `d`, `v`, `h`, `n`, `v`, `p`, `x`, `f`,
// `n`, `b`, `m`, `v`, `u`, `z`, `l`, `a`, `l`, `l`,
// `y`, `g`, `o`, `g`, `d`, `z`, `u`, `n`, `x`, `z`,
// `o`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `v`,
// `z`, `c`, `s`, `h`, `t`, `y`, `e`, `o`, `b`, `c`,
// `m`, `h`, `z`, `a`, `v`, `b`, `h`, `l`, `z`, `n`,
// `y`, `y`, `a`, `a`, `h`, `k`, `c`, `k`, `c`, `p`,
// `j`, `b`, `l`, `i`, `l`, `v`, `s`, `c`, `f`, `l`,
// `s`, `b`, `a`, `s`, `k`, `s`, `a`, `s`, `a`, `l`,
// `n`, `b`, `m`, `v`, `u`, `z`, `l`, `a`, `l`, `l`]
// console.log(`Basic array: `, strings);
// const resultStrings = {};
// function sortedStrings (strings) {


//   for (let i = 0, result; i < strings.length-1; i++) {
//     for (let i = 0; i < strings.length-1; i++) {
//       if (strings[i] > strings[i + 1]) {
//         result = strings[i];
//         strings[i] = strings[i + 1];
//         strings[i + 1] = result;
//       }
//     }
//   }
//   return strings

// }
// const sortedElements = sortedStrings(strings);
// console.log(`Array sorted by growing: `, sortedElements);

const words = 
[`s`, `q`, `d`, `v`, `h`, `n`, `v`, `p`, `x`, `f`,
`n`, `b`, `m`, `v`, `u`, `z`, `l`, `a`, `l`, `l`,
`y`, `g`, `o`, `g`, `d`, `z`, `u`, `n`, `x`, `z`,
`o`, `a`, `b`, `c`, `d`, `e`, `f`, `g`, `h`, `v`,
`z`, `c`, `s`, `h`, `t`, `y`, `e`, `o`, `b`, `c`,
`m`, `h`, `z`, `a`, `v`, `b`, `h`, `l`, `z`, `n`,
`y`, `y`, `a`, `a`, `h`, `k`, `c`, `k`, `c`, `p`,
`j`, `b`, `l`, `i`, `l`, `v`, `s`, `c`, `f`, `l`,
`s`, `b`, `a`, `s`, `k`, `s`, `a`, `s`, `a`, `l`,
`n`, `b`, `m`, `v`, `u`, `z`, `l`, `a`, `l`, `l`];
console.log(`Basic array: `,words);


function sortedStringsByGrowing (strings) {
  let resultStrings = {}; 


  for (let i = 0, result; i < strings.length-1; i++) {
    for (let i = 0; i < strings.length-1; i++) {
      if (strings[i] > strings[i + 1]) {
        result = strings[i];
        strings[i] = strings[i + 1];
        strings[i + 1] = result;
      }
    }
  }
  console.log("Array sorted by growing:",strings)


  for (let index = 0; index < strings.length; index++) {
    const newElement = strings[index];
    resultStrings[newElement] = newElement;
  }
  return resultStrings
}

const wordsObject = sortedStringsByGrowing(words);
console.log("New object with words: ", wordsObject);




console.log("--------------------THIRD TASK----------------------")
// 3. Компанія розробляє календар зайнятості своїх співробітників. Календар зберігається у форматі об'єктов з властивостями:
// startTime (час початку, коли співробітник зайнятий) та endTime (час закінчення, коли співробітник зайнятий) - число з точністю до 30 хвилин, де 
//   0 - це час, який дорівнює 00:00 
//   1 - це час, який дорівнює 00:30 
//   2 - це час, який дорівнює 01:00
//   3 - це час, який дорівнює 01:30
// і так далі.


// Потрібно написати функцію mergeRanges, яка отримує масив об'єктів зайнятості співробітника, та поверне чистий час, коли співробітник зайнятий.

// Наприклад, у співробітника зареєстровано зайнятість
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 5 },
//   { startTime: 4, endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9, endTime: 10 },
// ]
// потрібно розрахувати чистий час, коли співробітник зайнятий, тобто:
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 }
// ]


const calendarOfEmployment = [

  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
  { startTime: 0, endTime: 3 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 }
  ];
  console.log("Календар занятости сотрудников: ",calendarOfEmployment)

function mergeRanges (clearTime) {


  let hourseOfWork = [];
  let newElements;


  for (let i = 0; i < calendarOfEmployment.length; i++) {


    clearTime = calendarOfEmployment[i];
    newElements = clearTime.endTime - clearTime.startTime;
    hourseOfWork.push(newElements);
  }


  return hourseOfWork
}
const calendarWithClearHourseOFEmployment = mergeRanges (calendarOfEmployment);
console.log("Чистые часы работы сотрудников:", calendarWithClearHourseOFEmployment)