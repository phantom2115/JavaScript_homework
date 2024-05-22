const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

// 로컬스토리지에 user 객체 넣기
localStorage.setItem("user", JSON.stringify(user));

// 로컬스토리지에 저장된 user value값 출력
console.log(JSON.parse(localStorage.getItem("user")));

// 수정을 위해서 변수에 로컬스토리지에 user value 할당
const fixUser = JSON.parse(localStorage.getItem("user"));

// spread operator를 이용해서 나이 값 수정
const NewUser = { ...fixUser, 나이: 30 };

// 수정된 객체를 로컬스토리지 user에 넣기
localStorage.setItem("user", JSON.stringify(NewUser));

// 로컬스토리지 안에 있는 user 키 값 삭제
localStorage.removeItem("user");

// user 출력해보기
console.log(JSON.parse(localStorage.getItem("user")));


fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) => console.log(json));
