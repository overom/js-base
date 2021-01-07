// Operators
// ===
// ==
// !==
// >
// <
// <=
// >=

//Conditions

const a = 1;
const b = 2;
const c = "6";

// console.log("====================================");
// console.log(a !== b);
// console.log("====================================");

if (a === b) {
  console.log(`${a} est égale à ${b}`);
} else if (a > b) {
  console.log(`${a} est supperieur à ${b}`);
} else {
  console.log(`${a} est different de ${b}`);
}

// Switch Case est un autre type de condition

switch (a === b) {
  case true:
    console.log("a===b");
    break;

  case false:
    console.log("a !== b");
    break;

  default:
    console.log("default value");
    break;
}

let d = 10;
d++;
d += 5;
d *= 2;

console.log("=========ON EST ICI===========================");
console.log(d);
console.log("====================================");
