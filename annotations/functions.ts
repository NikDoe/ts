const weatherToday = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = ({ weather }: { weather: string }): void => {
	console.log(weather);
};

logWeather(weatherToday);
