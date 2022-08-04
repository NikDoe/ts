const classDecorator = (constructor: typeof Boat) => {
	console.log(constructor);
};

@classDecorator
class Boat {
	@propsAndAccessorDecorator
	color: string = 'red';

	@propsAndAccessorDecorator
	get formattedColor(): string {
		return `this boat color is ${this.color}`;
	}

	@errorLogger('something went wrong!')
	pilot(
		@parameterDecorator speed: string,
		@parameterDecorator generateWake: boolean,
	): void {
		if (speed === 'fast') {
			console.log('swish');
		} else {
			console.log('nothing');
		}
	}
}

function parameterDecorator(target: any, key: string, index: number) {
	console.log(key, index);
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
