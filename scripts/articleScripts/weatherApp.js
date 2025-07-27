function testQuery() {
	fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Rising%20Sun%2C%20Indiana/next7days?unitGroup=us&include=days&key=462AVS4QNCBRG7ZAGQN4RPZHY&contentType=json', { mode: 'cors' })
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			createWeatherElement(data);
		})
		.catch(function (err) {

		})
}

testQuery();

function createWeatherElement(data) {
	function createLine(info) {
		const line = document.createElement("p");
		line.textContent = info;
		return line;
	}

	const weatherElement = document.createElement("div");
	weatherElement.appendChild(createLine(data.address));

	const today = new Date();
	const time = `UTC ${data.days[0].datetime + ' ' + String(today.getUTCHours()).padStart(2, '0') + ':' + String(today.getUTCMinutes()).padStart(2, '0') + ':' + String(today.getUTCSeconds()).padStart(2, '0')}`;
	weatherElement.appendChild(createLine(time));

	document.querySelector("article").appendChild(weatherElement);
}