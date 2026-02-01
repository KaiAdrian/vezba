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

///za vse tipe///
const toNorm = (v) => {
  // normalizacija za primerjavo
  if (v === null || v === undefined) return v;      // pusti null/undefined
  if (typeof v === "string") return v.trim().toLowerCase();
  return v;                                        // number/boolean/object ostane isti
};
const filtrirajAreje = (arr, key, values) => {
  const vrednosti = (Array.isArray(values) ? values : [values]).map(toNorm);

  return arr.filter((obj) => {
    if (!obj || !(key in obj)) return false;        // key manjka
    return vrednosti.includes(toNorm(obj[key]));
  });
};

Uporaba: console.log(filtrirajAreje(osebe, "spol", ["ženski", "female"]));
console.log(filtrirajAreje(osebe,"spol",["moški"]))

// ✔ ignorira manjkajoče keye
// ✔ ne občutljiva na velike/male črke
// ✔ pripravljena za produkcijo

// ok.zdaj bi rad validacijo (če) filtrirajAreje(osebe, "spol", ["ženski", "female"]);
//  vrne poln array ali ni oseb z danimi pogoji v novi funkciji, nato pa še const msg ki vrne ?
// "true":"ni oseb z ujemajočim filtrom"
// ...oz najbolj smiselnop verzijo...
// 5️⃣ “Real-world” verzija (varnost + normalizacija)

// Če podatki niso zanesljivi:
const preveriFilter = (arr, key, values) => {
  const rezultat = filtrirajAreje(arr, key, values);
  return {
    ok: rezultat.length > 0,
    msg: rezultat.length > 0 ? "true" : "ni oseb z ujemajočim filtrom",
    rezultat,
  };
};
console.log(preveriFilter(osebe, "enavrednost", 0)); //falsy
console.log(preveriFilter(osebe, "", 10));
 console.log(preveriFilter(osebe, "age", ["10"]));
 console.log(preveriFilter(osebe, "age", [30]));
// Če želiš privzete vrednosti (zelo uporabno)
const { msg: destructMsg = "ni podatkov", rezultat: destructResult = [] } =
  preveriFilter(osebe, "enaVrednost", [""]);
  const { msg } = preveriFilter(osebe, "spol", ["ženski", "female"]);
  console.log(msg)
