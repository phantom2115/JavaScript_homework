document.querySelector("#container").addEventListener("click", function (e) {
  e.target.classList.add("clicked");
});

function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result);
