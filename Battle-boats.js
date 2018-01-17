const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '3 4',
    '0 1 1 1',
    '1 1 0 0',
    '1 1 0 1',
    '1 0 1 1',
    '1 0 0 0',
    '1 1 1 1',
    'Shoot 2 3',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 0 0',
    'Shoot 1 1',
    'Shoot 1 1',
    'Shoot 2 1',
    'Shoot 2 3',
    'END',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;

const [n, m] = gets().split(' ').map(Number);
let matrix1 = [];
let matrix2 = [];
let p1boats = 0;
let p2boats = 0;
for (let i = 0; i < n; i += 1) {
    matrix1.push([]);
    matrix2.push([]);
}
for (let i = 0; i < n; i += 1) {
    matrix1[i].push(...gets().split(' '));
}
for (let i = n - 1; i >= 0; i -= 1) {
    matrix2[i].push(...gets().split(' ').reverse());
}

let i = 1;
while (true) {
    let exp = gets();
    if (exp === 'END') {
        break;
    }
    exp = exp.split('Shoot ');
    exp = exp[1].split(' ');
    if (i % 2 === 1) {
        if (matrix2[exp[0]][exp[1]] === '1') {
            print('Booom');
        } else if (matrix2[exp[0]][exp[1]] === '0') {
            print('Missed');
        } else {
            print('You already shot there!');
        }
        matrix2[exp[0]][exp[1]] = 'lalala';
    } else {
        if (matrix1[exp[0]][exp[1]] === '1') {
            print('Booom');
        } else if (matrix1[exp[0]][exp[1]] === '0') {
            print('Missed');
        } else {
            print('You already shot there!');
        }
        matrix1[exp[0]][exp[1]] = 'lalala';
    }

    i += 1;
}

for (let row = 0; row < n; row += 1) {
    for (let col = 0; col < m; col += 1) {
        if (matrix1[row][col] === '1') {
            p1boats += 1;
        }
        if (matrix2[row][col] === '1') {
            p2boats += 1;
        }
    }
}
print(p1boats + ':' + p2boats);