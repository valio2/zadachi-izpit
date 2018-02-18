const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '6',
    '4 8',
    '5 3',
    '2 1',
    '5 1',
    '5 8',
    '3 2',
    '4',
    '5',
    '2',
    '8',
    '1',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;


const n = +gets();
const obj = {};
for (let i = 0; i < n; i += 1) {
    const [left, right] = gets().split(' ').map(Number);

    if (!obj[left]) {
        obj[left] = [];
    }
    obj[left].push(right);
}

const dfs = (vertex, result, used) => {
    if (obj[vertex]) {
        obj[vertex].forEach((next) => {
            if (!used.has(next)) {
                result.push(next);
                used.add(next);
                dfs(next, result, used);
            }
        });
    }

};

const m = +gets();
for (let j = 0; j < m; j += 1) {
    const vertex = +gets();
    const result = [];
    const used = new Set();
    
    result.push(vertex);

    dfs(vertex, result, used);


    print(result.sort((a, b) => a - b).join(' '));
}