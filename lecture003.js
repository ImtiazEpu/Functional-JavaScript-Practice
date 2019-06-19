// function name(firstName, lastName, gender) {
//   var output;
//   if (gender === "male") {
//     output = "Mr. " + firstName + " " + lastName;
//   } else if (gender === "female") {
//     output = "Ms. " + firstName + " " + lastName;
//   }
//   return output;
// }
// var fullname = name("Imtiaz", "Ahmed", "male");
// console.log(fullname);
function example() {
  return {
    name: "Imtiaz Ahmed",
    skill: ["laravel", "vue"],
    print: function() {
      console.log(this.name, this.skill);
    }
  };
}
var obj = example();
obj.print();
