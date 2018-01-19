const solve = (args) => {
	const x = args[0].split('');
	for (let i = 0; i < x.length; i++) {
		if (x[i] === x[i + 1]) {
			x.splice(i + 1, 1);
			i -= 1;
		} else if (x[i] * 1 === x[i + 1] * 1) {
			x.splice(i + 1, 1);
			i -= 1;
		} else {
			continue;
		}
	}
	x = x.join('');
	console.log(x);
};
solve(['hoboobbo422222Aaao']);