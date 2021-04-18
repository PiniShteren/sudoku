/////////////////////CREATE SUDOKU\\\\\\\\\\\\\\\\\\\\
import { name } from './sudoku_user.js';
document.getElementById('spanName').innerHTML = name();
document.getElementById('easy').onclick = () => { easy() };
document.getElementById('medium').onclick = () => { medium() };
document.getElementById('hard').onclick = () => { hard() };
document.getElementById('evil').onclick = () => { evil() };
document.getElementById('check').onclick = () => { check() };
document.getElementById('new').onclick = () => { newGame() };
// empty sudoku
var mat = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// debugger;s

///counters for index arrays\\\
let counter = 0; //counter for the index of randArr array
let countNP = 0; //counter for the index of notP array

let countF = 0; //counter for the index of firstArr array
let countM = 0; //counter for the index of middleArr array
let countE = 0; //counter for the index of endOfArr array

let firstArr = []; // the first row in the first box
let middleArr = []; // the first row in the middle box
let endOfArr = []; // the first row in the last box

let randArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // an array of numbers that can be placed inside the cell
let notP = []; // an array of numbers that cannot be placed inside the cell
for (let i = 0; i < 9; i++) {
	// A loop that ran on the lines
	for (let j = 0; j < 9; j++) {
		// A loop that ran on the columns
		if (i === 0 || i === 3 || i === 6) {
			// A condition that the rows are the beginning of new boxes (index 0,3,6)
			for (let r = 0; r < mat[i].length; r++) {
				// A new loop that ran on the columns
				if (!mat[i][r]) {
					// A condition that if the cell (mat[i][r]) is empty (false) then continue
					continue;
				} else {
					// if the sell is not empty
					notP[counter] = mat[i][r]; // take the sell value to the array notP[counter]
					counter++;
				}
			}
			for (let c = 0; c < mat.length; c++) {
				// A new loop that ran on the lines
				if (!mat[c][j]) {
					// A condition that if the cell (mat[c][j]) is empty (false) then continue
					continue;
				} else {
					// if the sell is not empty
					notP.forEach((item) => {
						// A loop that ran on the notP array
						if (mat[c][j] !== item) {
							// if the cell value is diffrent from the iteration array
							countNP++;
						}
					});

					if (countNP === notP.length) {
						// if the value does not exist on notP array
						notP[counter] = mat[c][j]; // take the sell value to the array notP[counter]
						counter++;
					}
					countNP = 0; // reset the counter to the next iteration
				}
			}
			notP.forEach((itemNP) => {
				// A loop that ran on notP array
				randArr.forEach((itemArr, index) => {
					// An inner loop thht makes a comparison between the loop values
					if (itemNP === itemArr) {
						// if the values are the same
						randArr.splice(index, 1); // then cut the value from the randArr array
					}
				});
			});
			if (!randArr.length) {
				// if randArr is empti (false, length===0)(this means it has no value to place in the cell)
				for (let t = 0; t < mat[i].length; t++) {
					// A new loop that ran on the columns
					if (mat[i][t]) {
						// if there is a value in the cell
						mat[i][t] = 0; //empty te cell
					}
					j = -1; //start the columns[i] from the beginning
					continue;
				}
			} else {
				// if there is a value in randArr array
				let rand = () => {
					// a function that randomly takes a cell index from randArr array
					return Math.floor(Math.random() * randArr.length);
				};
				let func = rand();
				mat[i][j] = randArr[func]; // take the sell value from randArr to the sudoku mat[i][j]
			}
			counter = 0; // reset the counter to the next iteration
			randArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // reset the default array to  the next iteration
			notP = []; // reset the default array to  the next iteration
		} else {
			// if i!= index(0,3,6)
			for (let arr = 0; arr < mat[i].length; arr++) {
				// A new loop that ran on the columns
				if (arr < 3) {
					// the first row in the first box
					firstArr[countF] = mat[i - 1][arr]; // take the sell value to the firstArr[countF]
					countF++;
				} else if (arr < 6) {
					// the first row in the middle box
					middleArr[countM] = mat[i - 1][arr]; // take the sell value to the middleArr[countm]
					countM++;
				} else if (arr < 9) {
					// the first row in the last box
					endOfArr[countE] = mat[i - 1][arr]; // take the sell value to the endOfArr[countE]
					countE++;
				}
			}
			countF = 0; // reset the counter to the next iteration
			countM = 0; // reset the counter to the next iteration
			countE = 0; // reset the counter to the next iteration
			let row = [...middleArr, ...endOfArr, ...firstArr];
			//take the diffrent arrays into one array in that order (spread)
			for (let e = 0; e < mat[i].length; e++) {
				// A new loop that ran on the columns
				mat[i][e] = row[e]; // take the sell value from row array to the sudoku mat[i][e]
			}
			break;
		}
	}
}
console.log(mat);

///create array sudoku\\\

let sudoku = []; // an array that becomes a sudoku array
///////loops that take the values from mat matrix and place them in a sudoku array\\\\\\\
for (let i = 0; i <= 8; i++) {
	for (let j = 0; j <= 8; j++) {
		sudoku.push(mat[i][j]);
	}
}
console.log(sudoku);
var newB = document.getElementById("newB");
// A variable thet takes the buuton 'new Game' from html
var level = document.getElementById("level");
// A variable that takes the choice of difficulty levels from html
var tab = document.getElementById("table");
// A variable that takes the table sudoku from html
var button = document.getElementById("checkB");
// A variable that takes the buttons 'check' from html
var choose = false;

/*Functions that prints the mat matrix to html and deletes values in random cells 
  according to tifficulty level*/

function easy() {
	document.getElementById('level').style.display = 'none';
	document.getElementById('container').style.position = 'unset';
	document.getElementById('container').style.visibility = 'visible';
	startTimer(); //start timer
	//level of difficulty - easy
	choose = true; //Know that a level has been selected
	let ran; // A variable that contains a function
	let b; // A variable that receives a function
	let counter = 0;
	sudoku.forEach((item, i) => {
		//A loop that ran on the lines of a sudoku matrix
		if (i === counter) {
			ran = () => {
				//Take a random number (index) To delete numbers
				return Math.floor(Math.random() * 5 + 1);
			};
			b = ran();
			sudoku[i] = 0; //sudoku[i] is worth 0
			counter += b; // the next place that will be delete
		}
	});
	print(); //call the print function
}

function medium() {
	document.getElementById('level').style.display = 'none';
	document.getElementById('container').style.position = 'unset';
	document.getElementById('container').style.visibility = 'visible';
	startTimer(); //start timer
	//level of difficulty - medium
	level.style.display = "none"; //As soon as the button is pressed, the button disappears
	tab.style.marginLeft = "8px"; //css throhge js
	choose = true; //Know that a level has been selected
	let ran; // A variable that contains a function
	let b; // A variable that receives a function
	let counter1 = 0;
	sudoku.forEach((item, i) => {
		//A loop that ran on the lines of a sudoku matrix
		if (i === counter) {
			ran = () => {
				//Take a random number (index) To delete numbers
				return Math.floor(Math.random() * 4 + 1);
			};
			b = ran();
			sudoku[i] = 0; //sudoku[i] is worth 0
			counter += b; // the next place that will be delete
		}
	});
	print();
}

function hard() {
	document.getElementById('level').style.display = 'none';
	document.getElementById('container').style.position = 'unset';
	document.getElementById('container').style.visibility = 'visible';
	startTimer(); //start timer
	//level of difficulty - hard
	level.style.display = "none"; //As soon as the button is pressed, the button disappears
	tab.style.marginLeft = "8px"; //css throhge js
	choose = true; //Know that a level has been selected
	let ran; // A variable that contains a function
	let b; // A variable that receives a function
	let counter = 0;
	sudoku.forEach((item, i) => {
		//A loop that ran on the lines of a sudoku matrix
		if (i === counter) {
			ran = () => {
				//Take a random number (index) To delete numbers
				return Math.floor(Math.random() * 3 + 1);
			};
			b = ran();
			sudoku[i] = 0; //sudoku[i] is worth 0
			counter += b; // the next place that will be delete
		}
	});
	print();
}

function evil() {
	document.getElementById('level').style.display = 'none';
	document.getElementById('container').style.position = 'unset';
	document.getElementById('container').style.visibility = 'visible';
	startTimer(); //start timer
	//level of difficulty - evil
	level.style.display = "none"; //As soon as the button is pressed, the button disappears
	tab.style.marginLeft = "8px"; //css throhge js
	choose = true;
	let ran; // A variable that contains a function
	let b; // A variable that receives a function
	let counter = 0;
	sudoku.forEach((item, i) => {
		//A loop that ran on the lines of a sudoku matrix
		if (i === counter) {
			ran = () => {
				//Take a random number (index) To delete numbers
				return Math.floor(Math.random() * 2 + 1);
			};
			b = ran();
			sudoku[i] = 0; //sudoku[i] is worth 0
			counter += b; // the next place that will be delete
		}
	});
	print();
}

function print() {
	debugger
	//A function that prints values for html from a sudoku array
	var td; //A variable that takes values from html
	let p = 0;
	for (let i = 0; i < 9; i++) {
		//A loop that takes the index of the rows sudoku from html
		for (let j = 0; j < 9; j++) {
			//A loop that takes the index of the columns sudoku from html
			if (sudoku[p] > 0) {
				//If sudoku[p] is greater than 0

				td = document.getElementById(`${i}${j}`); //take the td[i][j] from html sudoku
				td.classList.add("num"); //add className to the For cells that contain a number
				td.placeholder = sudoku[p]; //print sudoku[p] to td[i][j] in html
				p++;
			} else {
				p++;
				continue;
			}
		}
	}
}

////////////////////SUDOKU TEST\\\\\\\\\\\\\\\\\\\

function check() {
	//A function that checks the legality of sudoku by pressing a check button
	if (choose) {
		debugger
		var check = [
			//Empty matrix
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, 0, 0, 0, 0, 0, 0, 0, 0],
		];
		//Loops that run on the indexes of check matrix
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				if (sudoku[i][j]) {
					//if sudoku[p] is true
					check[i][j] = sudoku[p]; //Enter the value of sudoku[p] into check[i][j]
				} else {
					var inpu = parseInt(document.getElementById(`${i}${j}`).value);
					if (!inpu) {
						alert("complite the sudoku");
						return;
					}
					check[i][j] = inpu;
				}
			}
		}

		let index = [1, 2, 3, 4, 5, 6, 7, 8, 9]; //Array for comparison
		let count = 0; //Counter to count some correct rows or columns or boxes
		function rowSudoku() {
			let row = []; //A variable that accepts the value of the rows
			let countRow = 0; // counter for the index of row array
			//Loops running on the rows
			for (let i = 0; i < check.length; i++) {
				for (let j = 0; j < check[i].length; j++) {
					if (check[i][j] > 0 && check[i][j] <= 9) {
						//It is a condition that the number is greater than 0 and less than 9
						for (let x = 0; x < check[i].length; x++) {
							// A ew loop that ran on the rows of check matrix
							row[count] = check[i][x]; //Print check[i][x] for me into row[count]
							count++;
						}
						console.log(row);
						let newIndex = row.sort(); //sort the row array
						if (index.join() === newIndex.join()) {
							//If the arrays are equal
							countRow++;
						}
						//Resets the variables
						count = 0;
						row = [];
						newIndex;
					}

					break;
				}
			}
			console.log(countRow);
			if (countRow === 9) {
				//If all the lines are correct
				return true;
			}
			return false;
		}

		let ansRow = rowSudoku();

		function colSudoku() {
			//A variable that accepts the value of the columns
			let col = []; //A variable that accepts the value of the columns
			let countCol = 0; // counter for the index of col array
			//Loops running on the columns
			for (let i = 0; i < check.length; i++) {
				for (let j = 0; j < check[i].length; j++) {
					for (let z = 0; z < check.length; z++) {
						col[count] = check[z][j]; //Print check[z][j] for me into col[count]
						count++;
					}
					console.log(col);
					newIndex = col.sort(); //sort the col array
					if (index.join() === newIndex.join()) {
						//If the arrays are equal
						countCol++;
					}
					//Resets the variables
					count = 0;
					col = [];
				}
				break;
			}
			console.log(countCol);
			if (countCol === 9) {
				//If all the columns are correct
				return true;
			}
			return false;
		}
		let ansCol = colSudoku();

		function boxSudoku() {
			//A variable that accepts the value of the box
			let box = []; //A variable that accepts the value of the boxes
			let countBox = 0; // counter for the index of box array
			let boxR = 0; //r = boxR
			let boxC = 0; //c = boxC
			//Loops running on the boxes
			for (let i = 0; i < check.length; i++) {
				for (let r = boxR; r < check.length; r++) {
					for (let c = boxC; c < check[r].length; c++) {
						box[count] = check[r][c];
						count++;
						if ((r === 2 && c === 8) || (r === 5 && c === 8)) {
							console.log(box);
							newIndex = box.sort(); //sort the box array
							if (index.join() === newIndex.join()) {
								//If the arrays are equal
								countBox++;
							}
							//Resets the variables
							boxR = r + 1;
							boxC = 0;
							count = 0;
							box = [];
							break;
						}
						if (count === 9) {
							console.log(box);
							newIndex = box.sort(); //sort the box array
							if (index.join() === newIndex.join()) {
								//If the arrays are equal
								countBox++;
							}
							//Resets the variables
							boxR = r - 2;
							boxC = c + 1;
							count = 0;
							box = [];
							break;
						}
						if (count === 3 || count === 6 || count === 9) {
							r++;
							c = c - 3;
						}
					}
					break;
				}
			}
			console.log(countBox);
			if (countBox === 9) {
				//If all the boxes are correct
				return true;
			}
			return false;
		}
		let ansBox = boxSudoku();

		if (ansRow && ansCol && ansBox) {
			//if everyone is true this means the solution is right
			tab.innerHTML = "well done";
			tab.classList.add("well");
			button.style.display = "none"; //
		} else if (inpu) {
			tab.innerHTML = "game over";
			tab.classList.add("over");
			button.style.display = "none"; //hide the button 'check'
			clock.style.display = "none"; //hide the timer
			// newB.style.fontSize = "35px";
		}
	} else {
		alert("choose level");
	}
}

///new game\\\
function newGame() {
	window.location.reload(); //refrash the page
}
///timer\\\
document.getElementById("timer").innerHTML = "15" + ":" + "00"; //start with this time

function startTimer() {
	var presentTime = document.getElementById("timer").innerHTML; //teke the time start
	var timeArray = presentTime.split(/[:]+/); //create array with time without the tow dots
	var m = timeArray[0]; //m equals an array in the first place
	var s = checkSecond(timeArray[1] - 1); //s equals an array in the second place minus 1 && callmth function 'checkSecond'
	if (s == 59) {
		m = m - 1;
	}
	if (m == 0) {
		//if timer out
		tab.innerHTML = "game over";
		button.style.display = "none"; //hide the button 'check'
		tab.classList.add("well");
		var clock = document.getElementById("clock");
		clock.style.display = "none"; //hide the timer
		newB.style.fontSize = "35px";
	}
	document.getElementById("timer").innerHTML = m + ":" + s; //print to html the change
	setTimeout(startTimer, 1000); //function returns every second
}

function checkSecond(sec) {
	if (sec < 10 && sec >= 0) {
		sec = "0" + sec;
	} // add zero in front of numbers < 10
	if (sec < 0) {
		sec = "59"; //Starting seconds at 59
	}
	return sec;
}
