function currying(a) {
  // This function takes one argument and returns another function that takes one argument
  // The returned function will add the two arguments together and return the result
  // This is known as currying
  return function (b) {
    return a + b;
  };
}

let result = currying(1);
console.log(result(2));
