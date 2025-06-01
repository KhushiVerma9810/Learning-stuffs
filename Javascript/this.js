const person = {
  name: "ram",
  age: 22,
  greet: function () {
    return `Hello , you are ${this.age} years old`;
  },
  //   greet: () => {
  //     return `Hello , you are ${this.age} years old`;
  //   },
};
console.log(person.greet());

const person3 = {
  name: "GeeksforGeeks",
  greet() {
    return `Welcome To, ${this.name}`;
  },
};
console.log(person.greet());
function greet() {
  console.log("Hello, my name is " + this.name);
}

const person1 = {
  name: "Amit",
  sayHello: greet,
};
const anotherPerson = {
  name: "Jatin",
};

//Driver Code Starts
greet();
person.sayHello();
greet.call(anotherPerson);
