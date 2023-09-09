interface Person {
  name: string;
  age: number;
}

// type Person = {
//   name: string;
//   age: number;
// };

export default function play() {
  const name = "Connor";
  const age = 22;

  const person = {
    name: "John",
    age: 34,
  };

  function logPersonInfo(personName: string, personAge: number) {
    // const info = "Name: " + personName + ", age: " + personAge;
    const info = `Name: ${personName}, age: ${personAge}`;
    console.log(info);
    return info;
  }

  function logPersonInfo2(person: Person) {
    // const info = "Name: " + personName + ", age: " + personAge;
    const info = `Name: ${person.name}, age: ${person.age}`;
    console.log(info);
    return info;
  }

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
