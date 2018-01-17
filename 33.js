function solve(args){
	var array = args.split(" ");
	var extract = "";

	OUTTER_LOOP: 	for (var i = 0; i < array.length; i++){
		var seperate = [];
		seperate = array[i].split("");
		extract += seperate.pop("");
		array[i] = seperate.join("");
		if (i === array.length - 1){
			for(var j = 0; j < 3; j++){
				// if(seperate.length !== 0){
				if(seperate.length !==  0){
					i = -1;
					continue OUTTER_LOOP;
				}
			}
		}
	}
	extract = extract.replace(/undefined/g, '');
	console.log(extract);

	var x;
	var chars = extract.length;
	var spell = "";
	extract = extract.toLowerCase();
	var spelling = extract.split("");
	var displacement;
	for ( var k = 0; k < chars; k++){
		x = spelling[k];
		displacement = alphabet.indexOf(x) + 1;

		if (displacement > spelling.length){
			displacement -= spelling.length;
		}
		
	}
}

var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var args = "Fun exam right";
solve(args);