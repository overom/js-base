function solution(str) {}

console.log("====================================");
console.log(solution("world"));
console.log("====================================");

// 'world'  =>  'dlrow'
function solution(str) {
  return str.split("").reverse().join("");
}
