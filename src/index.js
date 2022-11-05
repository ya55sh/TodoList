import "./styles.css";

let btnSubmit = document.getElementById("submit");
let btnClear = document.getElementById("clear");
let todoList = document.getElementsByClassName("todoList")[0];

btnSubmit.addEventListener("click", getInputValue);
btnClear.addEventListener("click", clearList);

function getInputValue() {
  let val = document.getElementById("userText").value;
  document.getElementById("userText").value = "";
  console.log(val);

  todoList.innerText += val + "\n";
  //todoList.innerHTML += "<br>";

  console.log(todoList);
}

function clearList() {
  todoList.innerText = "";
}
