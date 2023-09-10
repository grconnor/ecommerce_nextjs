interface Person {
  name: string;
  age: number;
}

type PersonKey = keyof Person;

export default function play() {
  const personKey: PersonKey = "name"
}
