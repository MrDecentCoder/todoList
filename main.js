let toDoBtn = document.getElementById("todoBtn");
let toDoInput = document.getElementById("todoInput");
let toDoContainer = document.getElementById("todoContainer");

toDoBtn.addEventListener("click", function () {
  let paragraph = document.createElement("li");

  paragraph.innerText = toDoInput.value;
  toDoContainer.appendChild(paragraph);

  toDoInput.value = "";

  paragraph.addEventListener("click", function () {
    paragraph.style.textDecoration = "line-through";
  });

  paragraph.addEventListener("dblclick", function () {
    toDoContainer.removeChild(paragraph);
  });
});
