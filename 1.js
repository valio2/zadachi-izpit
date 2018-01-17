function solve(args){
	var number;
	var seperate;
	var sum;
	var total = 0;
	for (var i = 0; i < args.length; i++) {
		number = args[i];
		seperate = number.split("");
		if(seperate[1]*1 === seperate[0]*1 + seperate[2]*1){
			sum = number-0;	
		}
		else if(seperate[1]*1 !== seperate[0]*1 + seperate[2]*1){
			break;
		}
		total = total + sum;
		
	}console.log(total);
}

solve(['275', '693', '110', '742']);