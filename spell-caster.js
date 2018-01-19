const getGets = (arr) => {
	let index = 0;
	return () => {
		const toReturn = arr[index];
		index += 1;
		return toReturn;
	};
};
const test = [
	'7',
	'Telerik Academy',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr = gets().split(' ');
let str = '';
let empty = 0;
for (const i in arr) {
	arr[i] = arr[i].split('');
}
while (empty < arr.length) {
	empty = 0;
	for (const i in arr) {
		if (arr[i].length > 0) {
			str += arr[i].pop();
		} else {
			empty += 1;
		}
	}
}
// str = str.split('');
for (let i = 0; i < str.length; i += 1) {
	let newIndex = ((str[i].toUpperCase().charCodeAt(0) - 64) % str.length + i + 1) % (str.length + 1);
	let letter = str[i];
	if (newIndex > i) {
		// str.splice(newIndex, 0, letter);
		// str.splice(i, 1);
		str = str.slice(0, i) + str.slice(i + 1, newIndex) + letter + str.slice(newIndex);
	} else if (newIndex < i) {
		// str.splice(i, 1); 
		// str.splice(newIndex, 0, letter);
		str = str.slice(0, newIndex) + letter + str.slice(newIndex, i) + str.slice(i + 1);
	}
}
print(str);