// vrne samo soda števila večja od 10
const filterEvenOverTen = [3, 12, 8, 21, 44, 9]; //[12, 44]
const nadDeset = filterEvenOverTen.filter((num) => {
  return num > 10 && num % 2 === 0;
});
console.log(nadDeset);
// Minimalen popravek (funkcija)
// function filterEvenOverTen(arr) {
//   return arr.filter(num => num > 10 && num % 2 === 0);
// }

// console.log(filterEvenOverTen([3, 12, 8, 21, 44, 9]));
//arrow
// const filterEvenOverTen = arr =>
//   arr.filter(num => num > 10 && num % 2 === 0);

// Iz arraya imen naredi:
// vse črke velike
// dodaj ! na konec
const imenaArr = ["ana", "boris", "cvetka"];
// const stringToUpper = (arr) => arr.map((st) =>
//  st.toUpperCase() + st+"!");
const stringToUpper = (arr) => arr.map((st) => `${st.toUpperCase()}!`);
console.log(stringToUpper(imenaArr));

// const isAdult = (person) => person.filter((age) => age >= 18);
// console.log(isAdult([10, 14, 21, 16, 55, 18])); //21,55,18
// console.log(isAdult([17, 24, 21, 15, 51, 18])); //24,21,51,18
// ✅ Pravilna verzija po navodilu (2 koraka)
// 1️⃣ isAdult → preveri EN element
const isAdult = (age) => age >= 18;
// 🧠 Zakaj je to pomembno?
// Ker potem:
// isAdult lahko uporabiš:
// v filter
// v if
// v validaciji inputa
// logika ni “zaklenjena” v array
//BONUS

// const filterAdultsByAge = (arr) => {
//   if (isAdult(arr) === true) {
//     minAge = arr.sort();
//   }
// };
// pregledati vsak element
//
// Za to NE uporabljaš if, ampak:
// filter
// ali zanko
// 3️⃣ sort() ni filter
// arr.sort()
// sort() razvršča
// ne odstranjuje elementov
// še huje: mutira originalni array ⚠️
const starostArr = [40, 20, 18, 75];
const osebe = [105, 10, 14, 16, 88];
const filterAdultsByAge = (arr) => {
  return arr.filter(isAdult);
};
const cleanAndSortAges = (arr) => {
  return [...arr].filter(isAdult).sort((a, b) => a - b);
};
console.log(cleanAndSortAges(starostArr));
console.log(cleanAndSortAges(osebe));
// ////
// Seštej samo pozitivna števila
// const sumPositive = (arej) => arej.reduce((acc, curr) => acc + curr, curr >= 0);

// sumPositive([-5, 10, -3, 7, 0]);
// 🧠 Kako reduce razmišlja
// reduce((accumulator, currentValue) => newAccumulator, initialValue)

// acc → rezultat do zdaj

// curr → trenutni element

// pogoj mora biti znotraj callbacka

// ✅ Pravilna rešitev (čista in jasna)
const sumPositive = (arr) =>
  arr.reduce((acc, curr) => {
    return curr > 0 ? acc + curr : acc;
  }, 0);

console.log(sumPositive([-5, 10, -3, 7, 0]));
// 17

// 🔥 Krajša (1-linerska) verzija
// const sumPositive = arr =>
//   arr.reduce((acc, curr) => (curr > 0 ? acc + curr : acc), 0);

// 🧪 Kaj se zgodi korak po koraku

// Array:

// [-5, 10, -3, 7, 0]

// acc	curr	rezultat
// 0	-5	0
// 0	10	10
// 10	-3	10
// 10	7	17
// 17	0	17
// 🟡 Alternativa (manj “functional”, bolj berljivo)
// let sum = 0;
// for (const n of arr) {
//   if (n > 0) sum += n;
// }
////4️⃣ Obdelava objektov

// Imaš array oseb:

const people = [
  { name: "Ana", age: 17 },
  { name: "Boris", age: 21 },
  { name: "Cvetka", age: 30 },
];

// 👉 Naloga:

// vrni samo polnoletne
// for (const name in people) {
//   // console.log(people);
//   console.log(`${name}: ${people[name]}`);
// }
const newArr = [];
// for (let key in people) {
//   //  console.log(key, people[key]);
//   console.log(Object.keys(people[key])); //samo key
//   console.log(Object.values(people[key])); //samo vrednosti (key:vrednost)
//   // console.log(Object.entries(people[key]));//arr
//   if (Object.values(people[key]) >= 18) {
//     newArr.push(people[key]);
//   }
// }
// console.log(newArr)
[
  // rezultat naj bo array imen
  ("Boris", "Cvetka"),
];

// const polnoletni = people.filter((o) => o.age >= 18);
// console.log(polnoletni.name);
const polnoletni = people
  .filter(o => o.age >= 18)
  .map(o => o.name);

console.log(polnoletni);
// ["Boris", "Cvetka"]
// Alternativa z destructuring (lepše)
const polnoletn = people
  .filter(({ age }) => age >= 18)
  .map(({ name }) => name);
