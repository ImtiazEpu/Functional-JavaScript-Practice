function greeting(msg) {
  return function(name) {
    console.log(msg + " " + name);
  };
}
var good = greeting("Good morning");
good("Imtiaz Epu");
