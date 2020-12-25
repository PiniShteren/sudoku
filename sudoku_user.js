function enter() {
	let use;
	let pas;
	let url = document.getElementById('enter').innerHTML;

	let user_name = document.getElementById('user_name').value;
	if (user_name === 'abcd') {
		document.getElementById('wrongU').innerHTML = ' ';
		use = true;
	}
	else {
		document.getElementById('wrongU').innerHTML = 'wrong name';
	}
	let password = document.getElementById('password').value;
	if (password == 1234) {
		document.getElementById('wrongP').innerHTML = ' ';
		pas = true;
	}
	else {
		document.getElementById('wrongP').innerHTML = 'wrong password';
	}
	if (use && pas) {
<<<<<<< HEAD
		document.getElementById('enter').onclick = function() {
			window.location.assign('./sudoku_new.html');
=======
		document.getElementById("enter").onclick = function () {
			window.location.assign(
				"./sudoku_new.html"
			);
>>>>>>> 3d9dd95c89aa81ff7d5df6d5c835a4c7464febc6
		};
	}
}
