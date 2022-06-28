document.querySelector(".color").addEventListener("click", function change(e) {
	if (e.target.className == "red") {
		document.querySelector("body").style.backgroundColor = "red";
	}
	if (e.target.className == "yellow") {
		document.querySelector("body").style.backgroundColor = "yellow";
	}
	if (e.target.className == "blue") {
		document.querySelector("body").style.backgroundColor = "blue";
	}
	if (e.target.className == "purple") {
		document.querySelector("body").style.backgroundColor = "purple";
	}
	if (e.target.className == "green") {
		document.querySelector("body").style.backgroundColor = "green";
	}
	if (e.target.className == "black") {
		document.querySelector("body").style.backgroundColor = "black";
	}
});

//header change
const updateButton = document.getElementById("updateButton");
const headlineInput = document.getElementById("headlineInput");

updateButton.addEventListener("click", () => {
	if (headlineInput.value == "") {
		localStorage.setItem("header", "blank");
	} else {
		localStorage.setItem("header", headlineInput.value);
		headlineInput.value = "";
	}
});
