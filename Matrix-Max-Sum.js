const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test =
    `5
1 22 3 41 5 2
2 13 4 -5 6 5
-6 5 9 31 2 8
3 14 5 -6 7 4
4 -5 6 -7 8 7
-3 -3 3 3 4 -3 -4 3`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const matrix = [];

for (let i = 0; i < n; i += 1) {
    matrix.push(gets().split(' ').map(Number));
}
const pairs = gets().split(' ').map(Number);
// const pairs = gets().split(' ').map((x) => {
//     if (x > 0) {
//         return x - 1;
//     }
//     return Number(x) + 1;
// });

const itterateRow = (row, col, sum, rowValue, colValue) => {
    const itterateCol = () => {
        if (colValue) {
            for (let r = row - 1; r >= 0; r -= 1) {
                sum += matrix[r][col];
            }
        } else {
            for (let r = row + 1; r < n; r += 1) {
                sum += matrix[r][Math.abs(col)];
            }
        }
    };

    if (rowValue) {
        for (let c = 0; c <= Math.abs(col); c += 1) {
            sum += matrix[row][c];
        }
        itterateCol();
    } else {
        row = Math.abs(row);
        const rowLength = matrix[0].length - 1;

        for (let c = rowLength; c >= Math.abs(col); c -= 1) {
            sum += matrix[row][c];
        }
        itterateCol();
    }

    return sum;
};
let maxSum = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < pairs.length; i += 2) {
    let rowValue;
    let colValue;
    let row = pairs[i];
    if (row < 0) {
        rowValue = false;
        row += 1;
    } else {
        rowValue = true;
        row -= 1;
    }
    let col = pairs[i + 1];
    if (col < 0) {
        colValue = false;
        col += 1;
    } else {
        colValue = true;
        col -= 1;
    }
    const currentSum = itterateRow(row, col, 0, rowValue, colValue);
    if (maxSum < currentSum) {
        maxSum = currentSum;
    }
}
print(maxSum);