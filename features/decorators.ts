class Boat {
	@propsAndAccessorDecorator
	color: string = 'red';

	@propsAndAccessorDecorator
	get formattedColor(): string {
		return `this boat color is ${this.color}`;
	}

	@errorLogger('something went wrong!')
	pilot(): void {
		throw new Error();
	}
}

function propsAndAccessorDecorator(target: any, key: string) {
	console.log(key);
}

function errorLogger(message: string) {
	return function (target: any, key: string, desc: PropertyDescriptor): void {
		const method = desc.value;

		desc.value = () => {
			try {
				method();
			} catch (e) {
				console.log(message);
			}
		};
	};
}

new Boat().pilot();
