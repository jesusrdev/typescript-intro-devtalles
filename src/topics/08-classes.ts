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

// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realName: string
//   ) {
//     super(realName, "New York");
//   }
// }

export class Hero {
  // public person: Person;

  constructor(
    public alterEgo: string,
    public age: number,
    public realName: string,
    public person: Person,
  ) {
    // this.person = new Person(realName);
  }
}

const tony = new Person("Tony Stark", "New York");

const ironman = new Hero("Ironman", 45, "Tony", tony);

console.log(ironman);
