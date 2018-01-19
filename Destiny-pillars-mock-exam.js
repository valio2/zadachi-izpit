const solve = (args) => {
	let absolute = 0;
	let sum = 0;
	const split = args[0].split(' ');

	for (let i = 0; i < split.length - 1; i++) {
		absolute = Math.abs(split[i + 1] - split[i]);

		if (absolute % 2 === 0) {
			i++;
			sum += absolute;
		}
	}
	console.log(sum);
};

const args = ['-5 5 1 8 -4 1 2'];
solve(args);