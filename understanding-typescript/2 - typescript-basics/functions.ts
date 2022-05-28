const add = (n1: number, n2: number): number => n1 + n2;

const printResult = (num: number): void => console.log('Result: ' + num);

printResult(add(2, 3));

let combineValues: (n1: number, n2: number) => number;

// let combineValues: Function;

combineValues = add;
// combineValues = 5;

console.log(combineValues(2, 2));

const addAndHandle = (
    n1: number,
    n2: number,
    callback: (num: number) => void
) => {
    const result = n1 + n2;
    callback(result);
};

addAndHandle(2, 3, (result) => console.log(result));
