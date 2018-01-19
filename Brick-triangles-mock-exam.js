const solve = (args) => {
	const L = args.pop('') * 1;
	let row = [];
	let element;

	if (L === 1) {
		console.log(args[0]);
	} else if (L === 2) {
		console.log(args[0]);
		console.log(args[1] + ' ' + args[2]);
	} else if (L === 3) {
		console.log(args[0]);
		console.log(args[1] + ' ' + args[2]);
		for (let i = 0; i < L; i++) {
			element = args[i] * 1 + args[i + 1] * 1 + args[i + 2] * 1;
			args.push(element);
			row.push(element);
		}
		row = row.join(' ');
		console.log(row);
	} else if (L > 3) {
		console.log(args[0]);
		console.log(args[1] + ' ' + args[2]);
		let counter = 2;
		let counter2 = 0;

		do {
			for (let m = 0; m <= counter; m++) {
				element = args[m + counter2] * 1 + args[m + 1 + counter2] * 1 + args[m + 2 + counter2] * 1;
				args.push(element);
				row.push(element);
			}

			row = row.join(' ');
			console.log(row);
			row = [];
			counter2 += 1 + counter;
			counter += 1;
		} while (counter < L * 1);
	}
};


const args = [
	'1',
	'-1',
	'1',
	'6',
];
solve(args);