// restore saved selection on page load
window.addEventListener("DOMContentLoaded", () => {
	const savedValue = localStorage.getItem("selectedTheme");
	if (savedValue) {
		changeTheme(savedValue);
	}
	else {
		changeTheme("cherry");
	}
});

// function for changing the color scheme
function changeTheme(theme) {
	switch (theme) {
		case "cherry":
			document.documentElement.style.cssText = `
				--primary: #1b1717;
				--secondary: #eeebdd;
				--accentOne: #810000;
				--accentTwo: #630000;
				--gradientTopLeft: black;`;
			break;
		case "tobacco":
			document.documentElement.style.cssText = `
				--primary:rgb(54, 36, 24);
				--secondary: #FED8B1;
				--accentOne:rgb(134, 90, 69);
				--accentTwo: #1b1717;
				--gradientTopLeft: #1b1717`;
			break;
		case "haxor":
			document.documentElement.style.cssText = `
				--primary: black;
				--secondary: #33FF33;
				--accentOne:rgb(0, 90, 36);
				--accentTwo: rgb(17, 97, 17);
				--gradientTopLeft:rgb(0, 50, 4);`;
			break;
		case "cypher":
			document.documentElement.style.cssText = `
				--primary: #2f2617;
				--secondary: #9d8457;
				--accentOne: #732906;
				--accentTwo: #201810;
				--gradientTopLeft: #1b1717;`;
			break;
		case "steam":
			document.documentElement.style.cssText = `
				--primary: #4c5844;
				--secondary: #968732;
				--accentOne:rgb(103, 117, 94);
				--accentTwo: #4c5844;
				--gradientTopLeft: #4c5844;`;
			break;
		case "powershell":
			document.documentElement.style.cssText = `
				--primary: #012456;
				--secondary: #d4d8de;
				--accentOne: #bac715;
				--accentTwo: #012456;
				--gradientTopLeft: #012456;`;
			break;
		case "psycho":
			document.documentElement.style.cssText = `
				--primary: white;
				--secondary: black;
				--accentOne: grey;
				--accentTwo: white;
				--gradientTopLeft: whitesmoke;`;
			break;
		case "cmd":
			document.documentElement.style.cssText = `
				--primary: black;
				--secondary: white;
				--accentOne: grey;
				--accentTwo: black;
				--gradientTopLeft: #1b1717;`;
			break;
		case "marnie":
			document.documentElement.style.cssText = `
				--primary: #FFF5E4;
				--secondary: #443627;
				--accentOne: #99BC85;
				--accentTwo: #FFA725;
				--gradientTopLeft: #FFF5E4;`;
			break;
		case "freeDOS":
			document.documentElement.style.cssText = `
				--primary: #acaaac;
				--secondary: #000000;
				--accentOne: #0000ac;
				--accentTwo: #00aaac;
				--gradientTopLeft: #acaaac;`;
			break;
		case "2600":
			document.documentElement.style.cssText = `
				--primary: #272728;
				--secondary: #dcdcdc;
				--accentOne: #6a4832;
				--accentTwo: #7c2c31;
				--gradientTopLeft: #272728;`;
			break;
		case "monster":
			document.documentElement.style.cssText = `
				--primary: #161616;
				--secondary: #ffffff;
				--accentOne:rgb(144, 177, 0);
				--accentTwo: #0b9936;
				--gradientTopLeft: #161616;`;
			break;
	}
	localStorage.setItem("selectedTheme", theme);
}


	// document.querySelector(".container").style.boxShadow = "0 10px 16px rgba(51, 255, 51, 0.4),0 6px 20px rgba(51, 255, 51, 0.4)";

// IIFE for the theme selector UI
(function () {
	const buttonsHTML = `	
		<button id="themeButton">themes</button>
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
		</div>
	`;

	const themeDiv = document.querySelector("#theme");
	themeDiv.innerHTML = buttonsHTML;

	const button = document.querySelector("#themeButton");
	const list = document.querySelector("#themeList");
	list.style.display = "none";

	button.addEventListener("click", () => {
		if (list.style.display === "grid") {
			list.style.display = "none";
		}
		else {
			list.style.display = "grid";
		}
	});

	// hide the list when the user clicks outside of it
	document.addEventListener('click', (event) => {
		const list = document.querySelector("#themeList");
		const button = document.querySelector("#themeButton");

		function checkLists() {
			if (list.contains(event.target)) {
				return false;
			}
			return true;
		}

		if (document.querySelector("#themeList") && checkLists()) {
			// prevent the visibility from being set to hidden when the button for the dropdown is clicked
			if (button.contains(event.target)) return;
			document.querySelector("#themeList").style.display = "none";
		}
	});
})();