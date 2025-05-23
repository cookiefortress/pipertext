let UTC;

function writeUTC(element) {
	UTC = getUTC();
	element.innerHTML = "UTC " + UTC;
	setTimeout(function() {
		writeUTC(element);
	}, 1000);
}

function getUTC() {
	const now = new Date();
	const year = now.getUTCFullYear();
	const month = now.getUTCMonth();
	const date = now.getUTCDate();
	const hours = now.getUTCHours();
	const minutes = now.getUTCMinutes();

	let seconds = now.getUTCSeconds();
	if(seconds < 10) {
		seconds = `0${seconds}`
	}
	UTC = `${hours}:${minutes}:${seconds} ${year}-${month + 1}-${date}`;
	return UTC;
}

export {writeUTC};