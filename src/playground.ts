// TS recommends to use Interfaces over Types when possible, still are specific use cases

// Describe data structures in a more natural way
// Describing objects
// Shipment data, Orders

// interface Person {
//   name: string;
//   age: number;
// }

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// Type aliases
// To describe function types

// type Person = {
//   name: string;
//   age: number;
// };

// interface PersonLoggerFn {
//   (name: string, age: number): string;
// }

type PersonLoggerFn = (name: string, age: number) => string;

export default function play() {
  // const name: string = "Connor";
  const name: string = "Connor";
  const age: number = 22;

  const person = {
    name: "John",
    age: 34,
  };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number = 0
  ): string => {
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  };

  function logPersonInfo2(person: Person) {
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(new Person("Edward", 45));
}
