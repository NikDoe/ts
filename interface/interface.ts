interface Reportable {
	summary(): string;
}

const oldCivic = {
	model: 'Civic',
	year: new Date(),
	broken: true,
	summary(): string {
		return `Model : ${this.model}`;
	},
};

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `This drink has : ${this.sugar} grams of sugar`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
