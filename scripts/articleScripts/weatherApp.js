function query(city, state) {
	fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}%2C%20${state}/next7days?unitGroup=us&include=days&key=462AVS4QNCBRG7ZAGQN4RPZHY&contentType=json`, { mode: 'cors' })
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data);
			createWeatherElement(data);
		})
		.catch(function (err) {
			console.log(typeof (err));
		})
}

function userQuery() {
	if(document.querySelector("#weatherApp")) {
		document.querySelector("#weatherApp").remove();
	}

	const city = document.querySelector("#city").value;
	const state = document.querySelector("#state").value;
	if(city === '' || state === '') {
		return;
	}
	query(city, state);
}

document.querySelector("#weatherSubmit").addEventListener("click", (e) => {
	e.preventDefault();
	userQuery();
})

function createWeatherElement(data) {
	function createLine(info) {
		const line = document.createElement("p");
		line.textContent = info;
		return line;
	}

	const weatherElement = document.createElement("div");
	weatherElement.id = 'weatherApp';

	const weatherHeader = document.createElement("div");
	weatherHeader.id = 'weatherHeader';

	weatherHeader.appendChild(createLine(data.resolvedAddress));

	const today = new Date();
	const time = `Query timestamp of UTC ${data.days[0].datetime + ' ' + String(today.getUTCHours()).padStart(2, '0') + ':' + String(today.getUTCMinutes()).padStart(2, '0') + ':' + String(today.getUTCSeconds()).padStart(2, '0')}`;
	weatherHeader.appendChild(createLine(time));

	weatherHeader.appendChild(createLine('Local timezone is ' + (data.timezone).replace("_", " ") + ` (timezone offset is ${data.tzoffset})`));

	weatherElement.appendChild(weatherHeader);

	for (const day of data.days) {
		const dayDiv = document.createElement("div");

		const header = document.createElement("h2");
		header.textContent = `${day.datetime}`
		dayDiv.appendChild(header);

		const temp = document.createElement("p");
		temp.textContent = `The average temp is ${day.temp} with a high of ${day.tempmax} and a low of ${day.tempmin}`
		dayDiv.appendChild(temp);

		const sunrise = `The sun will rise at ${day.sunrise} and set at ${day.sunset} local time`;
		dayDiv.appendChild(createLine(sunrise));

		const conditions = `Conditions will be ${(day.conditions).toLowerCase()}`;
		dayDiv.appendChild(createLine(conditions));

		weatherElement.appendChild(dayDiv);
	}

	document.querySelector("article").appendChild(weatherElement);
}