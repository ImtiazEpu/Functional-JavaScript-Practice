function caller() {
  return function(name) {
    return "Caller calling You " + name;
  };
}
// var x = caller();
// var y = x("Imtiaz");
// console.log(y);

console.log(caller()("imtiaz"));
