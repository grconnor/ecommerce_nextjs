interface Person {
  name: string;
  age: number;
  city: string;
}

class Student implements Person {
  name = "";
  age = 0;
  city = "";
}

class BusinessPerson implements Person {
  name = "";
  age = 0;
  city = "";
  salary = 1000;
}

type Car = {
  brand: string;
  age: number;
  name: string;
  city: string;
};

class Logger<
  T extends Person = {
    brand: string;
    age: number;
    name: string;
    city: string;
  }
> {
  log(items: Array<T>, callback: (i: T) => void) {
    items.forEach((item) => {
      callback(item);
    });
  }
}

export default function play() {
  const logger = new Logger();

  const persons = [
    {
      name: "Connor",
      age: 30,
      city: "Port Elizabeth",
      salary: 1000,
      brand: "",
    },
    {
      name: "John",
      age: 25,
      city: "Stockholm City",
      salary: 1500,
      brand: "",
    },
  ];
  logger.log(persons, (person) => {
    console.log(person);
  });
}
