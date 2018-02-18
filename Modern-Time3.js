const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = `6
Bay Rik, the big Tele
m
2
chalga,cars
Anakin Skywalker
m
2
The Force,Galaxy Domination
Wonder Woman
f
3
heels,Ares,world peace
Batman
m
3
Beating bad guys,technology,world peace
Jane
f
3
heels,cars,chalga
Harmayani
f
3
books,learning,magic`.split('\n');
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const n = +gets();
const males = {};
const females = {};
for (let i = 0; i < n; i += 1) {
    const name = gets();
    const gender = gets();
    const numberOfInterests = +gets();
    const interests = gets().split(',');
    interests.forEach((element) => {
        if (gender === 'm') {
            if (!males[name]) {
                males[name] = {};
            }
            if (!males[name][element]) {
                males[name][element] = 1;
            } else {
                males[name][element] += 1;
            }
        } else {
            if (!females[name]) {
                females[name] = {};
            }
            if (!females[name][element]) {
                females[name][element] = 1;
            } else {
                females[name][element] += 1;
            }
        }
    });
}

let bestWeight = 0;
const matches = {};
for (const male in males) {
    for (const female in females) {
        let currentWeight = 0;

        for (const interest in males[male]) {
            if (females[female][interest]) {
                const maleInterest = males[male][interest];
                const femaleInterest = females[female][interest];

                const weight = femaleInterest * maleInterest;
                currentWeight += weight;
            }
        }
        const name = male + ' -> ' + female;
        matches[name] = currentWeight;
        if (currentWeight > bestWeight) {
            bestWeight = currentWeight;
        }
    }
}

let toSort = [];
for (const name in matches) {
    if (matches[name] === bestWeight) {
        toSort.push(name);
    }
}
toSort = toSort.sort((a, b) => a < b);
const [male, female] = toSort[0].split(' -> ');
print(`${male} and ${female} have ${bestWeight} common interests!`);