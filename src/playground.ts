interface Person {
  name: string;
}

export default function play() {
  function logger(...args: any[]) {
    return "Hello World";
  }

  const kindaLogger: typeof logger = (name: string, age: number) => "Hi";

  kindaLogger("", 20);
}
