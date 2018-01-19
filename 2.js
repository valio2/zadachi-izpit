const solve = (args) => {
	const legs = [2, 5, 7];
	const combinations = [];
	for (let j = 0; j <= args; j++) {
		combinations.push(0);
	}

	combinations[0] = 1;

	for (const j in legs) {
		const species = legs[j];
		for (let i = 1; i < combinations.length; i++) {
			if (i >= species) {
				combinations[i] += combinations[i - species];
			}
		}
	}
	console.log(combinations[args]);
};

solve(['17']);