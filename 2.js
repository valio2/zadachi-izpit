function solve(args){
	var legs = [2, 5, 7];
	var combinations = [];
	for (j=0; j <= args; j++){
	   combinations.push(0);
	}

	combinations[0] = 1;

	for (var j in legs){
		var species = legs[j];
		for(var i = 1; i < combinations.length; i++){
			if(i >= species){
				combinations[i] += combinations[i - species]; 
			}
		}
	}
	console.log(combinations[args]);
}

solve(["17"]);