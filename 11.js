function solve(args){
	var integer = 0;
	
	for(var i = 0; i < args[0]; i++){
		integer = args[i+1];
		var digits = integer.split("");
		var even = 0;
		var odd = 0;
		for(var j = 0; j < digits.length; j++){
			if(digits[j]%2 === 0){
				even += digits[j]*1;
			} else if(digits[j]%2 !== 0){
				odd += digits[j]*1;
			}
		}
		
		if(even > odd){
			console.log("left");
		}else if(even < odd){
			console.log("right");
		}else if(even === odd){
			console.log("straight");
		}
	}
}

var args = [
	"4",
	"7125",
	"2846",
	"5842",
	"7719"
];
solve(args);