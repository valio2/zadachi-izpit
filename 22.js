function solve(args){
		var count = 0;
		if (args % 2 !== 0){
			args -= 1;
OUTTER_LOOP:	for(var i = 0; i < sheets.length; i++){
				if(Math.pow(2, i) < args && i == sheets.length - 1){
					sheets.splice(-(i+1 - count), 1);
					args -= Math.pow(2, i - 1);
					count =+ 1;
					i = 0;
					continue OUTTER_LOOP;
				}

				if(Math.pow(2, i) > args){
					sheets.splice(-(i - count), 1);
					args -= Math.pow(2, (i-1));
					count =+ 1;
					i = 0;
					continue OUTTER_LOOP;
				}

				if(Math.pow(2, i) === args){
					sheets.splice(-(i+1 - count), 1);
					args -= Math.pow(2, i);
					count += 1;
				}
			}
			sheets.pop('');
		}

		else if (args % 2 === 0){
			for(var j = 0; j < sheets.length; j++){
							if(Math.pow(2, j) === args){
								sheets.splice(-(j+1), 1);
							}
						}
		}
		console.log(args);
		for(var k = 0; k < sheets.length; k++){
			console.log(sheets[k]);
		}
}

var sheets = [
	"A0",
	"A1",
	"A2",
	"A3",
	"A4",
	"A5",
	"A6",
	"A7",
	"A8",
	"A9",
	"A10",
];
var args = 1337;
solve(args);