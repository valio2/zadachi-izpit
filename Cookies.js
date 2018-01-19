const getGets = (arr) => {
    let index = 0;

    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
// this is the test
const test = [
    '7',
    '7 1 1 2 3 1',
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const arr = gets().split(' ').map(Number);

let first = Number.MAX_SAFE_INTEGER;
let last = Number.MAX_SAFE_INTEGER;
let days = 0;
let key = false;
let currentBest = Number.MIN_SAFE_INTEGER;
for (let i = 1; i < n; i += 1) {
    if (arr[i] > arr[i - 1]) {
        days = 1;
        key = true;
        break;
    }
}
if (key) {
    for (let i = 1; i < n; i += 1) {
        if (arr[i] < arr[i - 1]) {
            if (arr[i] === first || arr[i] < first) {
                first = arr[i];
                last = Number.MAX_SAFE_INTEGER;
                if (days > currentBest) {
                    currentBest = days;
                }
                days = 1;
            } else if (arr[i] === last) {
                days += 1;
            } else if (arr[i] < last && arr[i] > first) {
                days += 1;
                last = arr[i];
            } else if (arr[i] > last) {
                last = arr[i];
            }
        } else if (arr[i] === arr[i - 1] && arr[i] > first) {
            days += 1;
        }
    }
}
if (days > currentBest) {
    print(days);
} else {
    print(currentBest);
}