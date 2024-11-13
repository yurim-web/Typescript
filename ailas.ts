type Student = { name: string; age: number; major: string };

const Kim: Student = {
  name: "하빈",
  age: 22,
  major: "물리학과",
};

const list1: Student[] = [
  { name: "명수", age: 23, major: "미대생" },
  { name: "재석", age: 25, major: "의대생" },
];

// Coffee  타입 알리아스 만들고
// 이름, 샷갯수, 성분 문자열 배열

type Coffee = { name: string; shot: number; ingredient: string };

// const coffee1: Coffee = {
//   name: "아메리카노",
//   shot: 2,
//   ingredient: "마일드원두",
// };

const list2: Coffee[] = [
  { name: "아메리카노", shot: 2, ingredient: "마일드원두" },
  { name: "카페라떼", shot: 1, ingredient: "디카페인원두" },
  { name: "아샷추", shot: 1, ingredient: "딥카페인원두" },
];

type Person = { name: string; age: number };
type University = { major: string; StudentId: string };
type PartTime = { place: string; wage: number };

const song: Person & University = {
  name: "송유빈",
  age: 24,
  major: "컴퓨터공학과",
  StudentId: "20181111",
};

const lee: Person & PartTime = {
  name: "이유림",
  age: 25,
  place: "인천",
  wage: 100000,
};

type Hamburger = { hamburgername: string; hamburgerkcal: number };
type SideMenu = { sidename: string; sideKcal: number };
type Drink = { drinkname: string; drinkKcal: number };

const guest1: Hamburger = { hamburgername: "상하이버거", hamburgerkcal: 400 };
const guest2: Hamburger & Drink = {
  hamburgername: "치즈버거",
  hamburgerkcal: 300,
  drinkname: "제로콜라",
  drinkKcal: 0,
};
