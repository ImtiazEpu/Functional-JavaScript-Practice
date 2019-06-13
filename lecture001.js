//First class function

function sayName(name) {
  return "Hello! " + name;
}

// A function can be stored in a variabale
var hello = sayName;
console.log(hello("imtiaz"));

//A function can be stored in a Array
var arr = [1, 2, 3, 4, 5, hello("ahmed")];
arr.push(sayName("imtiaz"));
console.log(arr);

// A function can be stored as an Object field & Property.
var Person = {
  name: "Imtiaz Epu",
  sayName: hello("Imtiaz"),
  print: function(hi) {
    console.log("name");
  }
};
console.log(Person.print);

// We can create function as needed.

var sum =
  10 +
  (function() {
    return 50;
  })(); // self invoking function

console.log(sum);

// We can pass function as an argument.

function wow(name, fun) {
  return fun(name);
}

var result = wow("imtiaz epu", sayName);
console.log(result);

// We Can return function from another function

function base(b) {
  return function(n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

var power = base(3);
console.log(power(5));
