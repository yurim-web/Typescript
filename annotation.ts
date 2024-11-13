// // annotation(명시)

// const num = 10;
// const coffee = "커피";

// const num1: Number = 10; // 숫자만 들어갈 수 있음

// const food: String = "떡볶이";
// const numlist: number[] = [1, 2, 3, 4, 5];
// const coffee : {name: string,price:number} = {name:"라떼", price:3000}

//1. student  타입은 이름, 나이, 전공을 가지는 변수를 만들어주세요

const student: { name: string; age: number; title: string } = {
  name: "이유림",
  age: 25,
  title: "멀티미디어학과",
};

//배열인데 학생 타입 배열

const studentList: { name: string; age: number; title: string }[] = [
  { name: "이유림", age: 25, title: "멀티미디어학과" },
  { name: "황장수", age: 25, title: "음대" },
];

const helloName = (name: string) => `${name} 안녕!`;
