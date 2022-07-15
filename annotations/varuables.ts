//when to use annotations
//1. func that returns the 'any' type
const json: string = '{"x": 5, "y": 10}';
const coordinates: { x: number; y: number } = JSON.parse(json); //1
console.log(coordinates);

//2. when we declare variable on one line
//and init it later
let words: string[] = ['red', 'green', 'blue'];
let foundWord: boolean = false; //2

for (let i = 0; i < words.length; i++) {
	if (words[i] === 'green') foundWord = true;
}

console.log(foundWord);

//3. variables whose type cannot be inferred correctly
let numbers: number[] = [-2, -10, 12];
let numberAboveZero: boolean | number = false; //3

for (let i = 0; i < numbers.length; i++) {
	if (numbers[i] > 0) numberAboveZero = numbers[i];
}

console.log(numberAboveZero);
