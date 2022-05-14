"use strict";

const val = document.querySelector("div");

(async function fetchEmployee() {
  const response = await fetch("https://randomuser.me/api/?results=10");

  const { results } = await response.json();
  console.log(results);
  results.forEach((employee) => {
    val.innerHTML += render(employee);
  });
})();

function render(employee) {
  return `
  <div class="div1">
	 <div>
    <img src="${employee.picture.large}" />
	 </div>
		<div>
     <p>${employee.name.title} ${employee.name.first} ${employee.name.last}  </p>
     <p>Phone: ${employee.phone} </p>
     <p>email: ${employee.email} </p>
   </div>
	</div>
  <hr>
	 
    `;
}

const refersh = document.querySelector("button");

refersh.addEventListener("click", refreshPage);

function refreshPage() {
  window.location.reload();
}
