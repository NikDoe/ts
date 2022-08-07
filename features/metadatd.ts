import 'reflect-metadata';

const plane = {
	color: 'red',
};

//metadata in object
Reflect.defineMetadata('note', 'hi there', plane);
Reflect.defineMetadata('height', 10, plane);

const note = Reflect.getMetadata('note', plane);
const height = Reflect.getMetadata('height', plane);

console.log(note, height);

//metadata in property
Reflect.defineMetadata('property', 'propertyValue', plane, 'color');

const prop = Reflect.getMetadata('property', plane, 'color');
console.log(prop);
