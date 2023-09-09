interface Person {
  kind: "business" | "academic";
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  kind: "business";
  salary: number;
}

interface AcademicPerson extends Person {
  kind: "academic";
  publications: string[];
}

type Human = BusinessPerson | AcademicPerson;

type RaceCar = {
  name: string;
  team: string;
  maxSpeed: 200;
};

type CityCar = {
  name: string;
  space: string;
  maxSpeed: 100;
};

type Car = RaceCar | CityCar;

export default function play() {
  const car: RaceCar = {
    name: "Race Car",
    maxSpeed: 200,
    team: "Ferrari",
  };

  function logPersonInfo(human: Human) {
    if (human.kind === "academic") {
      console.log(human);
    } else if (human.kind === "business") {
      console.log(human);
    } else {
      console.log(human);
    }
  }

  function logCarInfo(car: Car) {
    switch (car.maxSpeed) {
      case 100:
        console.log(car.space);
        break;
      case 200:
        console.log(car.team);
        break;
      default:
        console.log(car);
    }
  }
}
