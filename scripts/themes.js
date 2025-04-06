let themeSelector = document.querySelector("#themes");

// save selection on change
themeSelector.addEventListener('change', (e) => {
	const selectedValue = e.target.value;
	localStorage.setItem('selectedTheme', selectedValue);
	changeTheme(selectedValue);
});
// restore saved selection on page load
window.addEventListener('DOMContentLoaded', () => {
	const savedValue = localStorage.getItem('selectedTheme');
	if (savedValue) {
	  	themeSelector.value = savedValue;
	  	changeTheme(savedValue);
	}
});

// function for changing the color scheme
function changeTheme() {
	if (themeSelector.value == "cherry") {
		console.log("Standard (cherry) theme selected!!");
		document.documentElement.style.cssText = `
			--primary: #1b1717;
			--secondary: #eeebdd;
			--accentOne: #810000;
			--accentTwo: #630000;
			--gradientTopLeft: black`;
	}
	else if (themeSelector.value == "tobacco") {
		console.log("Tobacco theme selected!");
		document.documentElement.style.cssText = `
			--primary: #6F4E37;
			--secondary: #FED8B1;
			--accentOne: #B17457;
			--accentTwo: #1b1717;
			--gradientTopLeft: #1b1717`;
	}
	else if (themeSelector.value == "haxor") {
		console.log("Haxor theme selected!");
		document.documentElement.style.cssText = `
			--primary: #33FF33;
			--secondary: #1b1717;
			--accentOne: #00FF66;
			--accentTwo: rgb(17, 97, 17);
			--gradientTopLeft: #1b1717;`
	}
	else if (themeSelector.value == "cypher") {
		console.log("Cypher theme selected!");
		document.documentElement.style.cssText = `
			--primary: #2f2617;
			--secondary: #9d8457;
			--accentOne: #732906;
			--accentTwo: #201810;
			--gradientTopLeft: #1b1717;`
	}
	else if (themeSelector.value == "steam") {
		console.log("Steam theme selected!");
		document.documentElement.style.cssText = `
			--primary: #4c5844;
			--secondary: #968732;
			--accentOne: #4c5844;
			--accentTwo: #4c5844;
			--gradientTopLeft: #4c5844;`
	}
	else if (themeSelector.value == "powershell") {
		console.log("Powershell theme selected!");
		document.documentElement.style.cssText = `
			--primary: #012456;
			--secondary: #d4d8de;
			--accentOne: #bac715;
			--accentTwo: #012456;
			--gradientTopLeft: #012456;`
	}
	else if (themeSelector.value == "pride") {
		console.log("Pride theme selected!");
		document.documentElement.style.cssText = `
			--primary: purple;
			--secondary: blue;
			--accentOne: yellow;
			--accentTwo: green;
			--gradientTopLeft: red;`
	}
	else if (themeSelector.value == "psycho") {
		console.log("Psycho theme selected! You monster!");
		document.documentElement.style.cssText = `
			--primary: white;
			--secondary: black;
			--accentOne: grey;
			--accentTwo: transparent;
			--gradientTopLeft: whitesmoke;`
	}
	else if (themeSelector.value == "cmd") {
		console.log("cmd theme selected!");
		document.documentElement.style.cssText = `
			--primary: black;
			--secondary: white;
			--accentOne: grey;
			--accentTwo: transparent;
			--gradientTopLeft: #1b1717;`
	}
}