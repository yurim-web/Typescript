// const food = prompt("뭐 먹었어요?");
// alert(`${food} 음식을 먹었따니 부럽군요!`);

// 1~10 숫자 리스트를 map 사용해서 제곱하기

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newlist = list.map((v) => v ** 2);
console.log(newlist);
