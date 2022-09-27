//a function inside another function as an argument, that's called a callback.
console.log("CALLBACK");

function One() {
  console.log("Function One");
}

function Two(data) {
  console.log("Function Two");
  data();
}

Two(One); // this is callback
