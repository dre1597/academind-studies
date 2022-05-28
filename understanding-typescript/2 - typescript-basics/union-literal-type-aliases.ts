type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';

const combine = (
    input1: Combinable,
    input2: Combinable,
    resultConversion: ConversionDescriptor
) => {
    if (
        (typeof input1 === 'number' && typeof input2 === 'number') ||
        resultConversion === 'as-number'
    ) {
        return +input1 + +input2;
    }
    return input1.toString() + input2.toString();
};

const combinedAges = combine(30, 26, 'as-number');
const combinedStringAges = combine('30', '26', 'as-number');
const combinedNames = combine('Max', 'Anna', 'as-text');

console.log(combinedAges);
console.log(combinedStringAges);
console.log(combinedNames);

// const combine = (
//     input1: number | string,
//     input2: number | string,
//     resultConversion: convertedAs
// ) => {
//     if (
//         (typeof input1 === 'number' && typeof input2 === 'number') ||
//         resultConversion === convertedAs.AS_NUMBER
//     ) {
//         return +input1 + +input2;
//     }
//     return input1.toString() + input2.toString();
// };

// enum convertedAs {
//     AS_NUMBER,
//     AS_TEXT,
// }

// const combinedAges = combine(30, 26, convertedAs.AS_NUMBER);
// const combinedStringAges = combine('30', '26', convertedAs.AS_NUMBER);
// const combinedNames = combine('Max', 'Anna', convertedAs.AS_TEXT);

// console.log(combinedAges);
// console.log(combinedStringAges);
// console.log(combinedNames);
