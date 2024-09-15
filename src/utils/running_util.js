export function getDistance(prevLat, prevLng, curLat, curLng) {
	if (!prevLat || !prevLng || !curLat || !curLng) return 0;

	const toRadians = (degrees) => degrees * (Math.PI / 180);

	const R = 6371; // Radius of the Earth in kilometers

	const lat1 = prevLat;
	const lon1 = prevLng;
	const lat2 = curLat;
	const lon2 = curLng;

	const dLat = toRadians(lat2 - lat1);
	const dLon = toRadians(lon2 - lon1);

	const a =
		Math.sin(dLat / 2) * Math.sin(dLat / 2) +
		Math.cos(toRadians(lat1)) *
			Math.cos(toRadians(lat2)) *
			Math.sin(dLon / 2) *
			Math.sin(dLon / 2);

	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

	return R * c;
}

export function getPace(distance, elapsedTime) {
	// elapsedTime in seconds
	return elapsedTime / distance; // pace in minutes per kilometer
}

export function getFormattedDistance(distance) {
	const km = Math.trunc(distance);
	const m = Math.trunc((distance - km) * 1000);
	return (km + m / 1000).toFixed(2);
}

export function getFormattedPace(pace) {
	const minutes = Math.trunc(pace / 1000 / 60);
	const seconds = Math.trunc((pace / 1000) % 60);
	return [minutes, seconds];
}

export function getFormattedTime(elapsedTime) {
	const minutes = Math.trunc(elapsedTime / 1000 / 60);
	const seconds = Math.trunc((elapsedTime - minutes * 60000) / 1000);
	const milliseconds = Math.trunc(
		elapsedTime - minutes * 60000 - seconds * 1000,
	);

	return [minutes, seconds, milliseconds];
}
