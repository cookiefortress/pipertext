import { window as themeWindow } from '/scripts/window.js';

// function for changing the color scheme
function changeTheme(theme, isSaved = true) {
	function writeStyles(primary, secondary, accentOne, accentTwo, gradientTopLeft, bShadow, code) {
		document.documentElement.style.cssText = `
			--primary: ${primary};
			--secondary: ${secondary};
			--accentOne: ${accentOne};
			--accentTwo: ${accentTwo};
			--gradientTopLeft: ${gradientTopLeft};
			--code: ${code}`;
		document.querySelector(".container").style.boxShadow = `${bShadow}`;
	}

	switch (theme) {
		case "cherry":
			writeStyles("#1b1717", "#eeebdd", "#810000", "#630000", "black", "0 10px 16px 2px rgba(255, 255, 255, 0.2),0 6px 20px 2px rgba(255, 255, 255, 0.2)", "rgb(0, 218, 0)");
			break;
		case "tobacco":
			writeStyles("rgb(54, 36, 24)", "#FED8B1", "rgb(134, 90, 69)", "#1b1717", "#1b1717", "0 10px 16px 2px rgba(134, 90, 69, 0.5),0 6px 20px 2px rgba(134, 90, 69, 0.5)", "rgb(0, 218, 0)");
			break;
		case "haxor":
			writeStyles("black", "#33FF33", "rgb(0, 90, 36)", "rgb(17, 97, 17)", "rgb(0, 50, 4)", "0 10px 16px 2px rgba(0, 90, 0, 0.4),0 6px 20px 2px rgba(51, 255, 51, 0.4)", "rgb(218, 0, 0)");
			break;
		case "cypher":
			writeStyles("#2f2617", "#9d8457", "#732906", "#201810", "#1b1717", "0 10px 16px 1px rgba(115, 41, 6, 0.6),0 6px 20px 1px rgba(115, 41, 6, 0.6)", "rgb(0, 180, 0)");
			break;
		case "steam":
			writeStyles("#4c5844", "#968732", "rgb(103, 117, 94)", "#4c5844", "#4c5844", "0 10px 16px 2px rgba(76, 88, 68, 0.8),0 6px 20px 2px rgba(76, 88, 68, 0.8)", "rgb(194, 193, 131)");
			break;
		case "powershell":
			writeStyles("#012456", "#d4d8de", "#bac715", "#012456", "#012456", "0 10px 16px rgba(212, 216, 222, 0.4),0 6px 20px rgba(212, 216, 222, 0.4)", "rgb(0, 218, 0)");
			break;
		case "psycho":
			writeStyles("white", "black", "grey", "white", "whitesmoke", "0 10px 16px 4px rgba(112, 113, 116, 0.9),0 6px 20px 4px rgba(112, 113, 116, 0.9)", "rgb(25, 0, 255)");
			break;
		case "cmd":
			writeStyles("black", "white", "grey", "black", "#1b1717", "0 10px 16px 1px rgba(112, 113, 116, 0.7),0 6px 20px 1px rgba(112, 113, 116, 0.7)", "rgb(0, 218, 0)");
			break;
		case "marnie":
			writeStyles("#FFF5E4", "#443627", "#99BC85", "#FFA725", "#FFF5E4", "0 10px 16px 2px rgba(255, 167, 37, 0.6),0 6px 20px 2px rgba(255, 167, 37, 0.6)", "rgb(0, 218, 0)");
			break;
		case "freeDOS":
			writeStyles("#acaaac", "#000000", "#0000FF", "#00aaac", "#acaaac", "0 10px 16px 3px rgba(0, 170, 172, 0.5),0 6px 20px 3px rgba(0, 170, 172, 0.5)", "rgb(0, 218, 0)");
			break;
		case "2600":
			writeStyles("#272728", "#dcdcdc", "#6a4832", "#7c2c31", "#272728", "0 10px 16px 2px rgba(106, 72, 50, 0.5),0 6px 20px 2px rgba(106, 72, 50, 0.5)", "rgb(0, 218, 0)");
			break;
		case "monster":
			writeStyles("#161616", "#ffffff", "rgb(144, 177, 0)", "#0b9936", "#161616", "0 10px 16px 1px rgba(0, 90, 0, 0.5),0 6px 20px 1px rgba(51, 255, 51, 0.5)", "rgb(0, 218, 0)");
			break;
		case "belial":
			writeStyles("#000000", "#89000bff", "#5a0101ff", "#491414ff", "#000000", "0 10px 16px 1px #89000bff,0 6px 20px 1px #89000bff", "rgba(255, 68, 0, 1)");
			break;
		case "freedom":
			writeStyles("#ffffff", "#003693ff", "#be0b31", "#cd012dff", "#ffffff", "0 10px 16px 1px #89000bff,0 6px 20px 1px #89000bff", "rgb(0, 218, 0)");
			break;

		// -- holidays --
		case "christmas":
			writeStyles("rgb(14, 78, 14)", "white", "rgb(110, 0, 0)", "rgb(120, 0, 0)", "rgb(14, 78, 14)", "0 10px 16px 2px rgba(0, 90, 0, 0.5),0 6px 20px 2px rgba(255, 255, 255, 0.79)", "gold");
			break;
		case "halloween":
			writeStyles("rgb(190, 89, 0)", "rgb(226, 223, 208)", "rgb(50, 1, 47)", "rgb(82, 76, 66)", "rgb(190, 89, 0)", "0 10px 16px 	rgba(149, 23, 177, 0.93),0 6px 20px rgb(50, 1, 47)", "rgb(0, 218, 0)");
			break;
	}
	if (isSaved) {
		localStorage.setItem("selectedTheme", theme);
	}
}

window.changeTheme = changeTheme;

themeWindow(`themes`,
	`
	    <div id="themeList">
			<button onclick="changeTheme('cherry')">cherry</button>
			<button onclick="changeTheme('tobacco')">tobacco</button>
			<button onclick="changeTheme('haxor')">haxor</button>
			<button onclick="changeTheme('cypher')">cypher</button>
			<button onclick="changeTheme('steam')">steam</button>
			<button onclick="changeTheme('powershell')">powershell</button>
			<button onclick="changeTheme('psycho')">psycho</button>
			<button onclick="changeTheme('cmd')">cmd</button>
			<button onclick="changeTheme('marnie')">marnie</button>
			<button onclick="changeTheme('freeDOS')">freeDOS</button>
			<button onclick="changeTheme('2600')">2600</button>
			<button onclick="changeTheme('monster')">monster</button>
			<button onclick="changeTheme('belial')">belial</button>
			<button onclick="changeTheme('freedom')">freedom</button>		
		</div>
	`,
	'#themeButton');

// restore saved selection on page load
document.addEventListener("DOMContentLoaded", () => {
	if (holidayCheck()) {
		return;
	}
	const savedValue = localStorage.getItem("selectedTheme");
	if (localStorage.getItem("selectedTheme")) {
		changeTheme(savedValue);
	}
	else {
		changeTheme("cherry");
	}

	setInterval(holidayCheck, 100000);
});

function holidayCheck() {
	const christmas = /^12-(?:20|21|22|23|24|25|26)$/;
	const halloween = /^10-31/;

	const UTC = document.querySelector(".dashboard time").textContent;
	let date = UTC.slice(18, UTC.length);

	if (christmas.test(date)) {
		changeTheme("christmas", false);
		return true;
	}
	if (halloween.test(date)) {
		changeTheme("halloween", false);
		return true;
	}
	return false;
}