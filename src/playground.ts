interface Person {
  name: string;
}

interface Student extends Person {
  age: number;
}

interface PostGraduateStudent extends Person {
  age: number;
  projects: string[];
}

type StudentInfo<T extends Student = Student> = {
  data: T;
  grades: number[];
};
 
// Alternatively, you can:

// type StudentInfo = {
//   data: Student;
//   grades: number[];
// };

export default function play() {
  function logStudentInfo(info: StudentInfo<PostGraduateStudent>) {
    console.log(info.data.name);
    console.log(info.data.age);
    console.log(info.data.projectsr);
  }

  const info = {
    data: {
      name: "Connor",
      age: 30,
    },
    grades: [1, 2, 3],
  };

  logStudentInfo(info);
}
