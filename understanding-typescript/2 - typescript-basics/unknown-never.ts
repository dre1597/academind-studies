let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Some string';

if (typeof userInput === 'string') {
    userName = userInput;
}

const generateError = (message: string, code: number): never => {
    throw { message: message, errorCode: code };
}; // normally it will infers the type void, not never, but is good to explicit says it returns never

generateError('An error occurred!', 500); // this always is a never type
