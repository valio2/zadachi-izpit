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
    '45 39 42 16 12 6 31 36 49 45 14 5 50 1 33 39 27 1 4 49 16 4 12 38 39 43 26 35 16 26 4 11 44 15',
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
for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] > arr[i - 1]) {
        days = 1;
        key = true;
        break;
    }
}
if (key) {
    for (let i = 1; i < arr.length; i += 1) {
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
            } /* else if (arr[i] > last) {
                last = arr[i];
            } */
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