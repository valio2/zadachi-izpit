const getGets = (arr) => {
    let indexes = 0;
    return () => {
        const toReturn = arr[indexes];
        indexes += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '7',
    '8 4 7 5 6 10 9',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

let n = +gets();
let arr = gets().split(' ').map(Number);
let days = 0;

while (arr.length > 1) {
    let arr2 = [];
    let counter = 0;
    // print(arr);
    for (let i = arr.length - 1; i >= 0; i -= 1) {
        if (arr[i] > 0 && arr[i] > arr[i - 1]) {
            counter += 1;
            // arr.splice(i, 1);
        } else {
            arr2.push(arr[i]);
        }
    }

    if (counter > 0) {
        days += 1;
    } else {
        break;
    }
    arr = arr2.reverse();
}
print(days);