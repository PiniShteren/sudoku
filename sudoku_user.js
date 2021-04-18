
let user_name = '';
let button = document.getElementById("enter");
button ? button.onclick = () => {
	enter();
} : '';
function enter() {
	let use;
	let pas;
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
		window.open('./sudoku_new.html');
	};

}
export function name() {
	console.log(user_name);
	return user_name;
}
