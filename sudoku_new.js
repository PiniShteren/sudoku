///create sudoku matrix\\\
var mat = [];
var sudoku = [];

debugger;
mat = [
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	],
	[
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0,
		0
	]
];
sudoku = [
	0
];
let counter = 0;
let countNP = 0;
let countF = 0;
let countM = 0;
let countE = 0;
let firstArr = [];
let middleArr = [];
let endOfArr = [];

let randArr = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9
];
let notP = [];
for (i = 0; i < 9; i++) {
	for (j = 0; j < 9; j++) {
		if (i === 0 || i === 3 || i === 6) {
			for (r = 0; r < 9; r++) {
				if (!mat[i][r]) {
					continue;
				}
				else {
					notP[counter] = mat[i][r];
					counter++;
				}
			}
			for (c = 0; c < mat.length; c++) {
				if (!mat[c][j]) {
					continue;
				}
				else {
					notP.forEach((item) => {
						if (mat[c][j] !== item) {
							countNP++;
						}
					});

					if (countNP === notP.length) {
						notP[counter] = mat[c][j];
						counter++;
					}
					countNP = 0;
				}
			}
			notP.forEach((itemNP) => {
				randArr.forEach((itemArr, index) => {
					if (itemNP === itemArr) {
						randArr.splice(index, 1);
					}
				});
			});
			if (!randArr.length) {
				for (let t = 0; t < mat[i].length; t++) {
					if (mat[i][t]) {
						mat[i][t] = 0;
					}
					j = -1;
					continue;
				}
			}
			else {
				let rand = () => {
					return Math.floor(Math.random() * randArr.length);
				};
				let func = rand();
				mat[i][j] = randArr[func];
			}
			counter = 0;
			randArr = [
				1,
				2,
				3,
				4,
				5,
				6,
				7,
				8,
				9
			];
			notP = [];
		}
		else {
			for (arr = 0; arr < mat[i].length; arr++) {
				if (arr < 3) {
					firstArr[countF] = mat[i - 1][arr];
					countF++;
				}
				else if (arr < 6) {
					middleArr[countM] = mat[i - 1][arr];
					countM++;
				}
				else if (arr < 9) {
					endOfArr[countE] = mat[i - 1][arr];
					countE++;
				}
			}
			countF = 0;
			countM = 0;
			countE = 0;
			let row = [
				...middleArr,
				...endOfArr,
				...firstArr
			];
			for (e = 0; e < mat[i].length; e++) {
				mat[i][e] = row[e];
			}
			break;
		}
	}
}
// debugger;
for (i = 0; i <= 8; i++) {
	for (j = 0; j <= 8; j++) {
		sudoku.push(mat[i][j]);
	}
}

///\\\
///create array sudoku\\\

///\\\
var New = 0;
var level = document.getElementById('level');
var tab = document.getElementById('table');
var button = document.getElementById('but');
var choos = 0;
///create sudoku by solve\\\
///easy\\\
let easy = function easy() {
	New = 1;
	level.style.display = 'none';
	tab.style.marginLeft = '10%';
	choos += 1;
	let ran;
	let b = 0;
	let counter1 = 0;
	sudoku.forEach((item, i) => {
		if (i === counter1) {
			ran = () => {
				return Math.floor(Math.random() * 5 + 1);
			};
			b = ran();
			sudoku[i] = 0;
			counter1 += b;
		}
	});

	print();
};
///\\\
///medium\\\
function medium() {
	New = 2;
	level.style.display = 'none';
	tab.style.marginLeft = '10%';
	choos++;
	let ran;
	let b;
	let counter1 = 0;
	sudoku.forEach((item, i) => {
		if (i === counter1) {
			ran = () => {
				return Math.floor(Math.random() * 4 + 1);
			};
			b = ran();
			sudoku[i] = 0;
			counter1 += b;
		}
	});
	print();
}
///\\\
///hard\\\
function hard() {
	New = 3;
	level.style.display = 'none';
	tab.style.marginLeft = '10%';
	choos++;
	let ran;
	let b;
	let counter1 = 0;
	sudoku.forEach((item, i) => {
		if (i === counter1) {
			ran = () => {
				return Math.floor(Math.random() * 3 + 1);
			};
			b = ran();
			sudoku[i] = 0;
			counter1 += b;
		}
	});
	print();
}
///\\\
///evil\\\
function evil() {
	New = 4;
	level.style.display = 'none';
	tab.style.marginLeft = '10%';
	choos++;
	let ran;
	let b;
	let counter1 = 0;
	sudoku.forEach((item, i) => {
		if (i === counter1) {
			ran = () => {
				return Math.floor(Math.random() * 2 + 1);
			};
			b = ran();
			sudoku[i] = 0;
			counter1 += b;
		}
	});
	print();
}
///\\\
///print\\\
function print() {
	var td;
	let p = 0;
	for (let i = 0; i < 9; i++) {
		for (j = 0; j < 9; j++) {
			if (sudoku[p] > 0) {
				td = document.getElementById(i + '-' + j);
				td.classList.add('num');
				td.innerHTML = sudoku[p];
				p++;
			}
			else {
				p++;
				continue;
			}
		}
	}
	console.log('l');
}

// debugger;
// solve();
function check() {
	if (choos > 0) {
		p = 0;
		let check = [
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			],
			[
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0
			]
		];
		for (var i = 0; i < 9; i++) {
			for (var j = 0; j < 9; j++) {
				if (sudoku[p] > 0) {
					check[i][j] = sudoku[p];
					p++;
				}
				else {
					I = '';
					I += i;
					J = '';
					J += j;
					var inpu = parseInt(document.getElementById(`${I}${J}`).value);
					if (!inpu) {
						alert('complite the sudoku');
						j = 9;
						i = 9;
						break;
					}
					check[i][j] = inpu;
					p++;
				}
			}
		}
		console.log(check);
		/// checing\\\
		///rows\\\
		let index = [
			1,
			2,
			3,
			4,
			5,
			6,
			7,
			8,
			9
		];
		let count = 0;
		let trues = 0;
		let row = [];
		let countRow = 0;
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				for (let x = 0; x < 9; x++) {
					row[count] = check[i][x];
					count++;
				}
				console.log(row);
				let newIndex = row.sort();
				if (index.join() === newIndex.join()) {
					countRow++;
				}
				count = 0;
				row = [];
				newIndex;

				break;
			}
		}
		console.log(countRow);
		if (countRow === 9) {
			trues++;
		}

		///\\\
		///cols\\\
		let col = [];
		let countCol = 0;
		for (let i = 0; i < 9; i++) {
			for (let j = 0; j < 9; j++) {
				for (let z = 0; z < 9; z++) {
					col[count] = check[z][j];
					count++;
				}
				console.log(col);
				newIndex = col.sort();
				if (index.join() === newIndex.join()) {
					countCol++;
				}

				count = 0;
				col = [];
			}
			break;
		}
		console.log(countCol);
		if (countCol === 9) {
			trues++;
		}

		///\\\
		///box\\\
		let box = [];
		let countBox = 0;
		let boxR = 0;
		let boxC = 0;
		for (let i = 0; i < 9; i++) {
			for (let r = boxR; r < 9; r++) {
				for (let c = boxC; c < 9; c++) {
					box[count] = check[r][c];
					count++;
					if ((r === 2 && c === 8) || (r === 5 && c === 8)) {
						console.log(box);
						newIndex = box.sort();
						if (index.join() === newIndex.join()) {
							countBox++;
						}

						boxR = r + 1;
						boxC = 0;
						count = 0;
						box = [];
						break;
					}
					if (count === 9) {
						console.log(box);
						newIndex = box.sort();
						if (index.join() === newIndex.join()) {
							countBox++;
						}

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
			trues++;
		}
		if (trues === 3) {
			tab.innerHTML = 'well done';
			tab.classList.add('well');
			button.style.display = 'none';
		}
		else if (inpu) {
			tab.innerHTML = 'game over';
			tab.classList.add('over');
			button.style.display = 'none';
		}
		console.log('false');
		console.log(check);
	}
	else {
		alert('choose level');
	}
}

function newGame() {
	window.location.reload();
}
