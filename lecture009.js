// var arr = [14, 2, 35, 78, 46, 99, 6, 4, 10, 56];
// arr.sort(function(a, b) {
//   return a - b;
// });
// console.log(arr);

// var arr = [14, 2, 35, 78, 46, 99, 6, 4, 10, 56];
// arr.sort(function(a, b) {
//   return b - a;
// });
// console.log(arr);

// var people = [
//   { name: "imtiaz ahmed", age: 32 },
//   { name: "siyed", age: 90 },
//   { name: "newom", age: 22 },
//   { name: "hafiz", age: 25 },
//   { name: "max", age: 30 }
// ];
// people.sort(function(a, b) {
//   return a.age - b.age;
// });

// console.log(people);

var people = [
  { name: "imtiaz ahmed", age: 32 },
  { name: "siyed", age: 90 },
  { name: "newom", age: 22 },
  { name: "hafiz", age: 25 },
  { name: "max", age: 30 }
];

people.sort(function(a, b) {
  if (a.name > b.name) {
    return 1;
  } else if (a.name < b.name) {
    return -1;
  } else {
    return 0;
  }
});

console.log(people);
