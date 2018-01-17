const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const gets = this.gets || getGets([
    '2',
    'test it here now',
    'testtesthere',
    'hello world my',
    'hellomyworldhello',
]);
// let gets = this.gets || require('readline-sync').question;
const print = this.print || console.log;
/* eslint-disable */

let n = +gets();
for (let i = 0; i < n; i += 1) {
    let arr = gets().split(' ').join('|');
    // let arr = gets().split(' ');
    // let obj = {};
    // for (let i in arr) {
    //     if(!obj[arr[i].length]) {
    //         obj[arr[i].length] = [];
    //     }
    //     obj[arr[i].length].push(arr[i]);
    // }
    // let keys = Object.keys(obj).reverse();
    // arr = [];
    // for (let i of keys) {
    //     arr.push(...obj[i]);
    // }
    // arr = arr.join('|');

    let exp = gets();
    let regExp = new RegExp(arr, 'gi');
    // let newExp = exp.bmatch(regExp).join(' ');
    let newExp = '' + exp.match(regExp);
    newExp = newExp.split(',').join(' ');
    exp = exp.replace(regExp, '');

    if (exp === '') {
        print(newExp);
    } else {
        print('NOT VALID');
    }
}