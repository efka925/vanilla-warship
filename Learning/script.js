console.log("Hello World!");

const varName = 5;
let varName2 = true;

// Number, String, Boolean, undefined, null, Symbol;
// Object, Array, Function;

// Array methods
console.log("---Array methods---");
const list = [1, 2, 3, 4, 5];
list.push(7);
list.pop();

list.shift();
list.unshift(1);

const reversed = list.reverse();
console.log(reversed, "REVERSED");

const sorted = list.sort();
console.log(sorted, "SORTED");

const fused = list.concat(reversed);
console.log(fused, "CONCATENATED");

console.log(list.includes(3), "CHECK IF 3 IS IN THE LIST");
console.log(list.indexOf(3), "GET INDEX OF 3 IN THE LIST");
console.log(list.slice(0, 15), "SLICE FIRST 15 VALUES");
list.splice(0, 3, ...[1, 2, 3, 4]);
console.log(list, "DELETE RANGE AND ADD NEW VALUES");
console.log(list.length, "GET LENGTH OF LIST");
// Loopy

list.forEach(function (item) {
  console.log(item, "from for Each");
});

const mapped = list.map(function (item) {
  return item + 3;
});
console.log(mapped, "Mapped array");

//Object methods
// EMPTY OBJECT
const teachers = {};

const student = {
  firstName: "John",
  lastName: "Doe",
};

console.log(student.firstName);
console.log(student["firstName"]);
listOfKeys = ["firstName", "lastName"];

listOfKeys.forEach((value) => console.log(student[value]));

student.firstName = "Jane";
student.character = "Wild";
console.log(student);

//FUNCTIONS
// Step 1
function add(a, b) {
  return a + b;
}

//Step 2 This is weird, but it works
const add2 = function (a, b) {
  return a + b;
};

add(1, 2);

// STep3 The Modern Way
const add3 = (a, b) => a + b;

//SELECTORS
let element = document.getElementById("header");
console.log(element);

let paragraph = document.getElementById("text");
console.log(paragraph);

let tag = document.querySelectorAll(".text");
console.log(tag);

let box = document.querySelector("#container");
console.log(box);

//CREATE / APPEND
const newTextNode = document.createElement("span");
newTextNode.innerText = "Hello Worlds from JS!";

box.appendChild(newTextNode);

// EVENTS
const showMessaage = () => {
  element.classList.add("color");
};
