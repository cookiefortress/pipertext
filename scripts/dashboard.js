function writeUTC() {
	UTC = getUTC();

	dashboard.innerHTML = "UTC " + UTC + pipertextIcon;
	setTimeout(writeUTC, 1000);
}

function getUTC() {
	const now = new Date();
	const year = now.getUTCFullYear();
	const month = now.getUTCMonth();
	const date = now.getUTCDate();
	const hours = now.getUTCHours();
	const minutes = now.getUTCMinutes();
	const seconds = now.getUTCSeconds();
	let UTC = (`${hours}:${minutes}:${seconds} ${year}-${month + 1}-${date}`);
	return UTC;
}

let dashboard = document.createElement("div");
dashboard.style.color = "var(--light)";
dashboard.style.backgroundColor = "black";
dashboard.style.background = `linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.34)), url(/img/spacex.gif)`;
dashboard.style.border = "2px ridge var(--accentOne)";
dashboard.style.width = "8.875rem";
dashboard.style.height = "10rem";
dashboard.style.padding = ".2rem";
dashboard.style.textAlign = "center";
dashboard.style.display = "flex";
dashboard.style.flexFlow = "column nowrap";
dashboard.style.justifyContent = "center";
dashboard.style.alignItems = "center";
dashboard.style.gap = ".5rem"
dashboard.classList.add(".dashboard");

const sidebar = document.querySelector("aside");
sidebar.appendChild(dashboard);

let pipertextIcon = "<img src='/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";

writeUTC();