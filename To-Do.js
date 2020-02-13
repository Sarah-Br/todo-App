document.querySelector("#add").addEventListener("click", () => {
  var list = document.createElement("li");
  var text = document.querySelector("#search").value;
  var t = document.createTextNode(text);
  list.appendChild(t);
  if (text === "") {
    return alert("You must write something");
  }
  let btn1 = document.createElement("button");
  let btn2 = document.createElement("button");
  btn1.innerHTML = "Complete!";
  btn1.className = "done";
  btn2.className = "remove";
  btn2.innerHTML = "Delete";
  list.prepend(btn1);
  list.prepend(btn2);
  document.querySelector("#search").value = "";
  document.querySelector(".mylist").appendChild(list);
  span = document.createElement("SPAN");
  list.appendChild(span);
  span.appendChild(t);

  var allbtn2 = Array.from(document.querySelectorAll(".remove"));
  allbtn2.map(el =>
    el.addEventListener("click", () => {
      el = el.parentElement.remove();
    })
  );
  var allbtn1 = Array.from(document.querySelectorAll(".done"));

  allbtn1.map(el =>
    el.addEventListener("click", () => {
      if (el.innerHTML === "Complete!") {
        el.innerHTML = "Undo";
        span.style.textDecoration = "line-through";
      } else {
        el.innerHTML = "Complete!";
        span.style.textDecoration = "none";
      }
    })
  );
});
