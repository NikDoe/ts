class Boat {
	color: string = 'red';

	get formattedColor(): string {
		return `this boat color is ${this.color}`;
	}

	@testDecorator
	pilot(): void {
		throw new Error();
	}
}

function testDecorator(
	target: any,
	key: string,
	desc: PropertyDescriptor,
): void {
	const method = desc.value;

	desc.value = () => {
		try {
			method();
		} catch (e) {
			console.log('Ooops boat was sunk');
		}
	};
}

new Boat().pilot();
