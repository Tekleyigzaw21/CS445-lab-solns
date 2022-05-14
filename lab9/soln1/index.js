window.onload = function () {
  fetchEmployees();
  document.getElementById("refresh").onclick = fetchEmployees;
};

async function fetchEmployees() {
  let result = await fetch("https://randomuser.me/api/?results=5");
  let emps = await result.json();
  console.log(emps.results);
  renderEmployees(emps.results);
}

function renderEmployees(emps) {
  const empDiv = document.getElementById("employees");
  empDiv.innerHTML = "";
  for (let i = 0; i < emps.length; i++) {
    let emp = emps[i];
    let tamplate = `
    <div class="col-4">
      <img src="${emp.picture.large}"/>
    </div>
    <div class="col-8 text-end">
      <p class="fw-bold">${emp.name.first + " " + emp.name.last}></p>
      <p>Gender:${emp.gender}</p>
      <p>${emp.email}</p>
    </div>
    `;
    let line = `<hr>`;
    let div = document.createElement("div");
    div.style.display = "flex";
    div.style.gap = "15px";
    // div.style.padding = "10px";
    div.style.marginLeft = "350px";
    div.innerHTML = tamplate; //<div>tamplate</div>
    div.classList = "row"; //<div class="row">tamplate</div>
    empDiv.appendChild(div);
    let hr = document.createElement("hr");
    hr.style.marginLeft = "350px";
    hr.innerHTML = line;
    empDiv.appendChild(hr);
  }
}
