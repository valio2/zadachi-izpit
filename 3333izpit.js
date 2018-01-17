function solve(args){
	var absolute = 0;
	var sum = 0;
	var split = args[0].split(" ");

	for (var i = 0; i < split.length - 1; i++){
		absolute = Math.abs(split[i+1] - split[i]);

		if (absolute % 2 === 0){
			i++;
			sum += absolute;
		}
	}
	console.log(sum);
}


var args = ["-5 5 1 8 -4 1 2"];
solve(args);