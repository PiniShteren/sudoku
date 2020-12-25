function enter() {
	let use;
	let pas;
	let url = document.getElementById("enter").innerHTML;

	let user_name = document.getElementById("user_name").value;
	if (user_name === "abcd") {
		document.getElementById("wrongU").innerHTML = " ";
		use = true;
	} else {
		document.getElementById("wrongU").innerHTML = "wrong name";
	}
	let password = document.getElementById("password").value;
	if (password == 1234) {
		document.getElementById("wrongP").innerHTML = " ";
		pas = true;
	} else {
		document.getElementById("wrongP").innerHTML = "wrong password";
	}
	if (use && pas) {
		document.getElementById("enter").onclick = function () {
			window.location.assign(
				"file:///C:/Users/pini5/OneDrive/%D7%A9%D7%95%D7%9C%D7%97%D7%9F%20%D7%94%D7%A2%D7%91%D7%95%D7%93%D7%94/sudoku%20new/sudoku_new.html"
			);
		};
	}
}
