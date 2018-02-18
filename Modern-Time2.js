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

const bestMatch = {
    male: 'no match',
    female: 'no match',
    weight: 0,
};
for (const male in males) {
    for (const female in females) {
        let currentWeight = 0;

        for (const interest in males[male]) {
            if (females[female][interest]) {
                const maleInterest = males[male][interest];
                const femaleInterest = females[female][interest];

                const weight = femaleInterest * maleInterest;
                // let weight;
                // if (maleInterest > 1 && femaleInterest > 1) {
                // weight = femaleInterest * maleInterest;
                // } else {
                // weight = 1;
                // }
                currentWeight += weight;
            }
        }
        if (currentWeight > bestMatch.weight) {
            bestMatch.male = male;
            bestMatch.female = female;
            bestMatch.weight = currentWeight;
        }
        if (currentWeight === bestMatch.weight && currentWeight !== 0) {

            let compareValue = (function () {
                if (male < bestMatch.male) {
                    return 1;
                }
                if (male === bestMatch.male) {
                    return 2;
                }
            })();
            if (compareValue === 1) {
                bestMatch.male = male;
                bestMatch.female = female;
                bestMatch.weight = currentWeight;
            } else if (compareValue === 2) {
                const femaleCompareValue = (function () {
                    if (male < bestMatch.male) {
                        return 1;
                    }
                })();
                if (femaleCompareValue === 1) {
                    bestMatch.male = male;
                    bestMatch.female = female;
                    bestMatch.weight = currentWeight;
                }
            }
        }
    }
}

const toPrint = `${bestMatch.male} and ${bestMatch.female} have ${bestMatch.weight} common interests!`;
print(toPrint);