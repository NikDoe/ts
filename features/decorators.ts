class Boat {
	color: string = 'red';

	get formattedColor(): string {
		return `this boat color is ${this.color}`;
	}

	@errorLogger('something went wrong!')
	pilot(): void {
		throw new Error();
	}
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
