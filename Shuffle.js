const getGets = (arr) => {
    let index = 0;
    return () => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};
const test = [
    '8 5',
    '1 4 2 8 6',
];
const gets = this.gets || getGets(test);
const print = this.print || console.log;

class Node {
    constructor(value, prev) {
        this.value = value;
        this.next = null;
        this.prev = prev || null;

        if (prev) {
            prev.next = this;
        }
    }

    *[Symbol.iterator]() {
        let current = this;
        while (current) {
            yield current.value;
            current = current.next;
        }
    }

    static detach(node) {
        if (node.prev) {
            node.prev.next = node.next;
        }

        if (node.next) {
            node.next.prev = node.prev;
        }

        node.next = null;
        node.prev = null;
    }

    static attach(prev, node) {
        const next = prev.next || null;
        // const next = nodeToAttatchAfter.nect || null;
        if (prev) {
            prev.next = node;
        }
        if (next) {
            next.prev = node;
        }
        node.next = next;
        node.prev = prev;
    }
}

const [n, m] = gets().split(' ').map(Number);

const arr = Array.from({
    length: n + 1,
});

for (let i = 1; i <= n; i++) {
    const node = new Node(i, arr[i - 1]);
    arr[i] = node;
}

const movingNumbers = gets().split(' ').map(Number);

let left = arr[1].value;
movingNumbers.forEach((number) => {
    const element = arr[number];
    let prev;
    if (element.value % 2 === 0) {
        prev = arr[number / 2];
    } else {
        prev = number * 2;
        if (prev > n) {
            prev = arr[n];
        } else {
            prev = arr[number * 2];
        }
    }

    if (prev.value !== element.value) {
        if (left === element.value) {
            if (left % 2 === 1) {
                left = prev.value;
            } else {
                left = element.next.value;
            }
        }
        Node.detach(element);
        Node.attach(prev, element);
    }
});
print([...arr[left]].join(' '));