interface Person {
  name: string;
}

type CustomArray<T> = {
  [index: number]: T;
};

type CustomObject<T = string | number | Person> = {
  [key: string]: T;
};

export default function play() {
  const items: CustomArray<string> = ["1", "2", "3"];
  const items2: CustomArray<number> = [1, 2, 3];

  const person: CustomObject = {
    age: 23,
    name: "Connor",
    city: "Stockholm",
    person: {
      name: "John",
    },
  };
}
