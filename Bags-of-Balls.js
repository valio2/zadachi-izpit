const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '12 4',
    '4 2 3 5',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

const [numberOfBalls, bagsCount] = gets().split(' ').map(Number);
const bags = gets().split(' ')
    .filter((digit) => {
        if (numberOfBalls % Number(digit) === 0) {
            return true;
        }
        return false;
    })
    .map(Number);
// .sort((a, b) => a < b);
const dfs = (ballsCount, steps, numberOfBags) => {
    bags.forEach((bag) => {
        if (bag < ballsCount && ballsCount % bag === 0) {
            // const newBallsCount = bag;
            // const newNumberOfBags = numberOfBags * (ballsCount / bag);
            // const newSteps = steps + numberOfBags;
            dfs(bag, steps + numberOfBags, numberOfBags * (ballsCount / bag));
        } else {
            if (maximumSteps < steps) {
                maximumSteps = steps;
            }
        }
    });
};
let maximumSteps = 0;
dfs(numberOfBalls, 0, 1);
print(maximumSteps);