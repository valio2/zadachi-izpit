function solve(args){
	var Months = ["Jan", "Feb", "Mar", "Apr", "May", 
		"Jul", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

		var Year = args[0];
		var Month = args[1];
		var Day = args[2]*1 -1;
		var PreviousDay = `${Year} - ${Month} - ${Day}`;
		console.log(PreviousDay);

}

var args = [
	2017,
	10,
	11
];

solve(args);