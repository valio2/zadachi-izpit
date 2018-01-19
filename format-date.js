const solve = (args) => {
	const Year = args[0];
	const Month = args[1];
	const Day = args[2] * 1 - 1;
	const PreviousDay = `${Year} - ${Month} - ${Day}`;
	console.log(PreviousDay);
};

const args = [
	2017,
	10,
	11,
];

solve(args);