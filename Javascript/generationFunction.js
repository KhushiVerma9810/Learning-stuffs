function* fun() {
  let count = 0;
  while (true) {
    yield count++;
  }
}

let count = fun();

console.log(count.next());
console.log(count.next());
console.log(count.next());

// function fun(n) {
//   console.log(n);
//   return n;
//   console.log(n)
// }

// console.log(fun(3));
