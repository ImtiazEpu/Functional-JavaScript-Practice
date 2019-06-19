// function outer(params) {
//   function inner(params) {
//     console.log("inner function");
//   }
//   inner();
//   console.log("outer function");
// }
// outer();

function add(a, b) {
  function sum() {
    return a + b;
  }
  function sub() {
    return a - b;
  }
  function multi() {
    return a * b;
  }
  function div() {
    return a / b;
  }

  return sum() + sub() + multi() + div();
}
var result = add(10, 5);
console.log(result);
