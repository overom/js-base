// Loops

const myArray = [
  "orange",
  "pomme",
  "poire",
  "fraise",
  [1, 2, 3],
  { pet: "dog" },
];

console.log(myArray);

console.log("====================================");
console.log(myArray[0]);
console.log("====================================");

console.log("========LENGTH=========");
console.log(myArray.length); // la longeur du tableau
console.log("====================================");

for (let index = 0; index < myArray.length; index++) {
  const element = myArray[index];
  console.log("====================================");
  console.log(element, index, typeof element);
  console.log("====================================");
}

const userName = "Joris";

for (let index = 0; index < userName.length; index++) {
  const element = userName[index];
}

const myObject = { weather: "good" };

console.log("====================================");
console.log(myObject.weather);
console.log("====================================");

const data = [
  { username: "joris", age: 33, size: 180 },
  { username: "Romain", age: 35, size: 180 },
  { username: "Jean", age: 23, size: 140 },
  { username: "Paul", age: 12, size: 110 },
  { username: "Michel", age: 88, size: 90 },
  { username: "Julien", age: 52, size: 190 },
  { username: "Mehdi", age: 102, size: 100 },
  { username: "Alex", age: 2, size: 135 },
];

// Rajoutez un element à chaque object dans le tableau "data"
// Updater un element à chaque object dans le tableau "data"
// Updater un element à chaque object dans le tableau "data" si la key "age" > 50 alors ajouter la key vieux : true
