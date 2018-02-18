const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = `4
Harry Potter
m
3
quidditch,defeating dark wizards,magic brooms
Albus Dumbledore
m
3
teaching,magic cookies,quidditch
Professor McGonagall
f
2
magic cookies,teaching
Ginny Weasley
f
2
quidditch,magic brooms`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const dependencies = {};
for (let i = 0; i < n; i += 1) {
    const name = gets();
    const gender = gets();
    const numberOfInterests = +gets();
    const interests = gets().split(',');
    interests.forEach((element) => {
        if (!dependencies[name]) {
            dependencies[name] = {};
            dependencies[name].gender = gender;
            dependencies[name].interests = {};
        }
        if (!dependencies[name].interests[element]) {
            dependencies[name].interests[element] = 1;
        } else {
            dependencies[name].interests[element] += 1;
        }
    });
}

let toPrint;
const commonalities = {};
const used = new Set();
let bestNumber = 0;
let bestWeight = 0;
for (const person in dependencies) {
    used.add(person);
    const gender = dependencies[person].gender;
    for (const name in dependencies) {
        if (!used.has(name) &&
            dependencies[name][gender] !== gender) {
            let currentWeight = 0;
            for (const interest in dependencies[person].interests) {
                if (dependencies[name].interests[interest]) {
                    const index = person + ' -> ' + name;
                    const personWeight = dependencies[person].interests[interest];
                    const nameWeight = dependencies[name].interests[interest];

                    let weight = Math.min(personWeight, nameWeight);
                    if (weight > 1) {
                        weight = personWeight * nameWeight;
                    }
                    // if (!commonalities[index]) {
                    // commonalities[index] = weight;
                    // } else {
                    // commonalities[index] += weight;
                    // }
                    // if (bestNumber < commonalities[index]) {
                    // bestNumber = commonalities[index];
                    // }
                    currentWeight += weight;
                }
            }

            if (currentWeight > bestWeight) {
                bestWeight = currentWeight;
                if (dependencies[person].gender === 'm') {
                    toPrint = person + ' and ' + name + ' have ' + currentWeight + ' common interests!';
                } else {
                    toPrint = name + ' and ' + person + ' have ' + currentWeight + ' common interests!';
                }
            } else if (currentWeight === bestWeight && currentWeight !== 0) {
                let toCompare;
                if (dependencies[person].gender === 'm') {
                    toCompare = person + ' and ' + name + ' have ' + currentWeight + ' common interests!';
                } else {
                    toCompare = name + ' and ' + person + ' have ' + currentWeight + ' common interests!';
                }
                if (toPrint.localeCompare(toCompare) === 1) {
                    toPrint = toCompare;
                }
            }
        }
    }
}

print(toPrint);


// let needToSort = [];
// for (const i in commonalities) {
//     if (commonalities[i] === bestNumber) {
//         needToSort.push(i);
//     }
// }
// needToSort = needToSort.sort((a, b) => a > b);
// const [person, name] = needToSort[0].split(' -> ');
// // print(person);
// if (dependencies[person].gender === 'm') {
//     print(person + ' and ' + name + ' have ' + commonalities[needToSort[0]] + ' common interests!');
// } else {
//     print(name + ' and ' + person + ' have ' + commonalities[needToSort[0]] + ' common interests!');
// }

if ('a' < 'b') {
    print('x');
}