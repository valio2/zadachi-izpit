function solve(args) {
	var n = args[0]-0 ||0;
	var k = 0;
	// console.log(n);
	while(2*(k+1)-1 < n) k++;
	// console.log(k);
	var m = n+1 - 2*k;
	var c = 2;
	for (var i= k-1; i-1 <= m && i >= 0 && m >0; i--){
		c++;
		m -= i-1;
	}
	// console.log(c);
	return c;
}

for (var i = 3; i < 20; i++) {
	console.log(i +" -> " + solve([i]));
}
