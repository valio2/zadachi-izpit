const solve = (args) => {
	const n = args[0] - 0 || 0;
	let k = 0;
	while (2 * (k + 1) - 1 < n) k++;
	let m = n + 1 - 2 * k;
	let c = 2;
	for (let i = k - 1; i - 1 <= m && i >= 0 && m > 0; i--) {
		c++;
		m -= i - 1;
	}
	return c;
};

for (let i = 3; i < 20; i++) {
	console.log(i + ' -> ' + solve([i]));
}
