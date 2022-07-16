const myGeolocation = {
	coords: {
		lat: 0,
		lng: 15,
	},
};

const {
	coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = myGeolocation;
console.log(lat, lng);
