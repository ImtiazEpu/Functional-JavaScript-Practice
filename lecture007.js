// var name = "Imtiaz Ahmed";

// function sayName() {
//   console.log("Hello" + " " + name);
// }
// sayName();

function greeting(msg) {
  return function(name) {
    console.log(msg + " " + name);
  };
}
var good = greeting("Good morning");
good("Imtiaz Epu");
