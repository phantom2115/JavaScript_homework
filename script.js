const 떡잎마을방범대 = [
  { 이름: "철수", 나이: 19, 성별: "남" },
  { 이름: "짱구", 나이: 20, 성별: "남" },
  { 이름: "유리", 나이: 21, 성별: "여" },
];

const shin = document.querySelector(".shin");

떡잎마을방범대.forEach((element) => {
  let mkhtml = `
        <h2>${element.이름}</h2>
        <h3>${element.나이}</h3>
        <h3>${element.성별}</h3>
        <hr>
    `;

  shin.insertAdjacentHTML("beforeend", mkhtml);
});

const girl = 떡잎마을방범대.find((element) => {
  return element.성별 === "여";
});
console.log(girl);

const boy = 떡잎마을방범대.filter((element) => {
  return element.성별 === "남";
});
console.log(boy);

const plage = 떡잎마을방범대.map((element) => {
  return { 이름: element.이름, 나이: element.나이 + 10, 성별: element.성별 };
});
console.log(plage);

const 떡잎마을 = [...떡잎마을방범대];
const stage = 떡잎마을.sort((a, b) => {
  return b.나이 - a.나이;
});
console.log(stage);

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};
const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이);
console.log(주소);
