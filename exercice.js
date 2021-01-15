//     Kids drink toddy.
//     Teens drink coke.
//     Young adults drink beer.
//     Adults drink whisky.

// Make a function that receive age, and return what they drink.

// Rules:

//     Children under 14 old.
//     Teens under 18 old.
//     Young under 21 old.
//     Adults have 21 or more.

const peopleWithAgeDrink = (old) => {
  if (old < 0) {
    return "Error";
  } else if (old < 14) {
    return "drink toddy";
  } else if (old < 18) {
    return "drink coke";
  } else if (old < 21) {
    return "drink beer";
  } else {
    return "drink whisky";
  }
};

const result = peopleWithAgeDrink(5);

console.log("====================================");
console.log(result);
console.log("====================================");

// Exemple :
// peopleWithAgeDrink(13) === "drink toddy";
// peopleWithAgeDrink(17) === "drink coke";
// peopleWithAgeDrink(18) === "drink beer";
// peopleWithAgeDrink(20) === "drink beer";
// peopleWithAgeDrink(30) === "drink whisky";
