////REDUTUIIII
const osebe = [
  { name: "Ana", age: 30, city: "Ljubljana", spol: "ženski" },
  { name: "ona", spol: "female" },
  { name: "Boris", age: 21, spol: "moški" },
  { name: "Cvetka", age: 30, spol: "" },
  { index: "fg", age: 18 },
];
// const spolZ = (arr) =>
//   arr.filter((c) => c.spol === "ženski" || c.spol === "female");
// arr.filter(c =>
//   typeof c.spol === "string" &&
//   ["ženski", "female"].includes(c.spol.toLowerCase())
// console.log(spolZ(osebe));

// const msg = spolZ ? "da" : "Ni članov s to lastnostjo";
// console.log(msg);

// const filtrirajAreje =(arr,arrKey,arrKeyValue)=>arr.filter()

// OSNOVNA SPLOŠNA VERZIJA (1 vrednost)
// const filtrirajAreje = (arr, key, value) =>
//   arr.filter(obj => obj[key] === value);

// Uporaba:
// filtrirajAreje(osebe, "spol", "ženski");

// ✔ dela
// ❌ ni varna
// ❌ ne podpira več vrednosti
// 🔥 ROBUSTNA VERZIJA (real-life data)
const filtrirajAreje = (arr, key, values) =>
  arr.filter(
    (obj) =>
      obj[key] &&
      values
        .map((v) => v.toLowerCase())
        .includes(obj[key].toString().toLowerCase())
  );

Uporaba: console.log(filtrirajAreje(osebe, "spol", ["ženski", "female"]));

// ✔ ignorira manjkajoče keye
// ✔ ne občutljiva na velike/male črke
// ✔ pripravljena za produkcijo
