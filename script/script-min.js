const form=document.getElementById("form"),input=document.getElementById("input"),todosUl=document.getElementById("todos"),todos=JSON.parse(localStorage.getItem("todos"));function updateLS(){const e=document.querySelectorAll("li"),t=[];e.forEach((e=>{t.push({text:e.innerText,completed:e.classList.contains("completed")})})),localStorage.setItem("todos",JSON.stringify(t))}function addTodo(e){let t=input.value;if(e&&(t=e.text),t){const o=document.createElement("li");e&&e.completed&&o.classList.add("completed"),o.innerText=t,o.addEventListener("click",(()=>{o.classList.toggle("completed"),updateLS()})),o.addEventListener("contextmenu",(e=>{e.preventDefault(),o.remove(),updateLS()})),todosUl.appendChild(o),input.value=""}updateLS()}todos&&todos.forEach((e=>addTodo(e))),form.addEventListener("submit",(e=>{e.preventDefault(),addTodo()}));