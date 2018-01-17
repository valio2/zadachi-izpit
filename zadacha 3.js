function solve(args){
	var n = args[0]-0 ||0;
	var prices = {};
	for(var i = 0; i< n; i++){
		var parts = args[i+1].split(" ", -1);
		prices[parts[0]] = parts[1];
	}

	for ...
		sum = 0
		parts = split
		for parts
			sum += prices[part]
		console.log(sum);

	console.log(prices);
}




var args = [
	"5",
	"milk 1.2",
	"orange juice 2.9",
	"icecream 2",
	"cake 5.1",
	"beer 1.2",
	"5",
	"2 beer, 3 orange juice",
	"milk, cake",
	"icecream, 2 cake",
	"icecream, icecream, 3 icecream",
	"5 orange juice, 3 orange juice, orange juice, orange juice"
]
solve(args);