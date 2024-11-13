type Kimbap = "치즈김밥" | "일반김밥" | "참치김밥 ";
type MainColor = "red" | "pink" | "blue";

const Kimbap: Kimbap = "일반김밥";
const color: MainColor = "blue";

// 샌드위치 = {빵: ,치즈:,토핑:,소스1,소스2 }
//쿠키 = {이름}
//음료 ={이름}

type Bread = "화이트" | "하티" | "파마산" | "위트" | "허니오트";
type Cheese = "아메리칸" | "슈레드" | "모짜렐라";
type Topping = "토마토" | "올리브" | "아보카도" | "양상추" | "양파";
type Source =
  | "마요네즈"
  | "머스타드"
  | "사우스웨스트"
  | "허니 머스타드"
  | "후추";

type Sandwich = {
  breadname: Bread;
  cheese: Cheese;
  topping: Topping;
  source1: Source;
  source2: Source;
};

type Cookie = {
  cookiename: "더블초코칩" | "오트밀" | "라즈베리" | "마카다미아";
};

type Drink1 = {
  drinkname: "콜라" | "제로콜라" | "사이다" | "환타";
};

const comboset: Sandwich & Cookie & Drink1 = {
  breadname: "파마산",
  cheese: "모짜렐라",
  cookiename: "더블초코칩",
  drinkname: "사이다",
  source1: "마요네즈",
  source2: "사우스웨스트",
  topping: "양상추",
};
