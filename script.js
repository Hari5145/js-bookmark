let searchbutton = document.getElementById("searchBtn");
let nameField = document.getElementById("inputWebsiteName");
let urlField = document.getElementById("inputWebsiteUrl");
let checkField = document.getElementById("check");
let resultField = document.getElementById("result");

nameField.addEventListener("focus", e => {
	e.target.style.borderColor = "#ced4da";
});

urlField.addEventListener("focus", e => {
	e.target.style.borderColor = "#ced4da";
});

nameField.addEventListener("blur", e => {
	if (e.target.value === "") {
		e.target.style.borderColor = "red";
	}
});

urlField.addEventListener("blur", e => {
	if (e.target.value === "") {
		e.target.style.borderColor = "red";
	}
});

searchbutton.addEventListener("click", e => {
	e.preventDefault();
	if (checkField.checked === true) {
		if (nameField.value === "") {
			nameField.style.borderColor = "red";
		} else if (urlField.value === "") {
			urlField.style.borderColor = "red";
		} else {
			nameField.style.borderColor = "#ced4da";
			urlField.style.borderColor = "#ced4da";
			console.log(`${nameField.value} - ${urlField.value}`);
			window.open(`https://${urlField.value}`, "_blank");
			resultField.innerHTML += `
      <div class="card card-body mb-1" style="display: flex; flex-direction: row;
      justify-content: space-around; background: lightgray;
      border-radius: 10px;
      padding: 10px;" >
      <div><h2>${nameField.value}</h2>
      <h4>${urlField.value}</h4></div>
      <button id="botton" class="btn btn-danger " style="
      width: 40px;
      height: 40px;
      cursor: pointer;
  ">X</button>
      </div>
      `;
		}
	}
});
