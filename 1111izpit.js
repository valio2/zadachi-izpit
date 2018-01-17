const solve = (args) => {
	let N = args;
	N = N[0].split('');
	do {
		var sum = 0;
		for (let i = 0; i <= N.length; i++) {
			if (!isNaN(N[i])) {
				sum += N[i] * 1;
			}
		}
		N = ([] + sum).split('');
	} while (sum > 9);

	N = N * 1;
	console.log(N);
}


let args = ['102000034000567.00000800000900'];
solve(args);