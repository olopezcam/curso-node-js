// Your Javascript Code Goes Here
function greet() {
  console.log("hi");
}

greet();

// functions are first-class
function logGreeting(fn) {
  fn();
}
logGreeting(greet);

// function expression
var greetMe = function () {
  console.log("Hi Tony");
};

greetMe();

// it's first-class

logGreeting(greetMe);

// use a function expression on the fly
logGreeting(function () {
  console.log("Hello Tony!");
});
