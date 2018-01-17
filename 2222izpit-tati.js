function solve(args){
	var L = args.pop("")*1;
	var row = [];
	var element;
	var elementCounter = 0;

	var counter = 0;
	var counter2 = 2;

	for (var j = 1; j <= L; j++)
	{
		elementCounter += j;
	}

	for (var k = 0; k < elementCounter - 3; k++)
	{
		element = args[k]*1 + args[k+1]*1 + args[k+2]*1;
		args.push(element);
	}
	
	for (var m = 0; m < elementCounter; m++)
	{
		row.push(args[m]);

		if (m === counter)
		{
			row = row.join(" ");
			console.log(row);
			row = []; 
			counter += counter2;
			counter2 += 1;
		}
	}
}


var args = [
	"1",
	"-1",
	"1",
	"3"
];
solve(args);




