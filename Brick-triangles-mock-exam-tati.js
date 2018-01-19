const solve = (args) => {
	const L = args.pop('') * 1;
	let row = [];
	let element;
	let elementCounter = 0;

	let counter = 0;
	let counter2 = 2;

	for (let j = 1; j <= L; j++) {
		elementCounter += j;
	}

	for (let k = 0; k < elementCounter - 3; k++) {
		element = args[k] * 1 + args[k + 1] * 1 + args[k + 2] * 1;
		args.push(element);
	}

	for (let m = 0; m < elementCounter; m++) {
		row.push(args[m]);

		if (m === counter) {
			row = row.join(' ');
			console.log(row);
			row = [];
			counter += counter2;
			counter2 += 1;
		}
	}
};


const args = [
	'1',
	'-1',
	'1',
	'3',
];
solve(args);