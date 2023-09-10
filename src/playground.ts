interface Person {
  name: string;
}

type ReturnType<T> = T extends () => infer R ? R : number;

export default function play() {
  function logger() {
    return "Hello World";
  }

  const loggerReturn: ReturnType<typeof logger> = "Hi there";
}
