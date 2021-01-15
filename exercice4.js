// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

function validSpacing(s) {
  if (s === "") return true;
  const a = s.split(" ").filter((elt) => elt === "");

  if (a.length >= 1) return false;
  else return true;
}
validSpacing("Hello world   ");
// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true

function validSpacing(s) {
  return s.trim() == s && !s.includes("  ");
}

function validSpacing(s) {
  if (s == "") return true;
  else return !s.split(" ").includes("");
}

function validSpacing(s) {
  return !/^[\s]|([\s][\W])|[\s]$/g.test(s);
}
