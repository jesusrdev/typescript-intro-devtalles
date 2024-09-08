export class Person {
  // This is a way that use in angular
  // public name: string;
  // private address: string; // private solo existe en ts, más no en js

  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address;
  // }

  // This is the short way in ts
  constructor(public name: string, private address: string = "No address") {}
}

const ironman = new Person("Ironman", "New York");

console.log(ironman);
