// Ici on definit les variables
let name = "Joris";
const country = "France"; // String
const age = 33; // Number
const postalCode = 73000;
const a = null;
const b = undefined;
const hobbies = ["ski", "rap", "voyage", 11]; // Array
const pets = { nom: "vodka", race: "chat", age: 10 }; // Object
const employee = false; // Boolean
const isCity = true; // Boolean
name = "Romain";

let j;

// Ici on declare une fonction
const myFunction = (a, b) => {
  const m = "Moi";
  return `${a} ${b}`; //ES6
  return a + " " + b; // ES5
  // Rien ne s'execute apres un return
  console.log("====================================");
  console.log("hellllooo");
  console.log("====================================");
};

const addition = (param1, param2) => {
  return param1 + param2;
};

// Ici j'appelle ma fonction
myFunction(postalCode, age);
myFunction(pets.age, age);
// console.log("====================================");
// console.log(myFunction(name, country));
// console.log("====================================");
/*
EXEMPLE DE COMMANTAIRE MULTILINE
retf
er
*/

// function myES5Function(a, b) {
//   return a + b;
// }

const testOperateur1 = 1;
const testOperateur2 = "1";

const result = testOperateur1 + testOperateur2;

console.log("====================================");
console.log(result, typeof result);
console.log("====================================");

console.log("====================================");
console.log(Number(result) + 2);
console.log("====================================");
console.log("=====defgrhtjykuilo===============================");
console.log(typeof String(testOperateur1));
console.log("====================================");

// console.log("=======ADDITION=========");
// console.log(testOperateur1 + " " + testOperateur2);
// console.log("====================================");

// console.log("====================================");
// console.log(typeof pets);
// console.log("====================================");

// console.log("=============Is Array=======================");
// console.log(Array.isArray(hobbies));
// console.log("====================================");
// console.log("=========     TEST   ===============");
// console.log(testOperateur1 === testOperateur2);
// console.log("====================================");

const testFunction = () => {
  return "hello";
};

console.log("====================================");
console.log(testFunction());
console.log("====================================");
