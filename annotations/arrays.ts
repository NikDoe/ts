const carsMakers = ['ferrari', 'porshe', 'bmw'];

//help w/ inference when we're extracting the values
const car = carsMakers[0]; //string type
const myCar = carsMakers.pop(); //string type

//prevent incompatible values
// carsMakers.push(100); //error

//help w/ 'map', 'reduce', 'forEach' & etc.
carsMakers.map((car: string): string => car.toUpperCase());

//multiple types in arrays
const dates: (Date | string)[] = [];
dates.push(new Date());
dates.push('2030-10-10');
// dates.push(100); //error
