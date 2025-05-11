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
			writeStyles("#1b1717", "#eeebdd", "#810000", "#630000", "black", "0 10px 16px 0 rgba(255, 255, 255, 0.2),0 6px 20px 0 rgba(255, 255, 255, 0.2)", "rgb(0, 218, 0)");
			break;
		case "tobacco":
			writeStyles("rgb(54, 36, 24)", "#FED8B1", "rgb(134, 90, 69)", "#1b1717", "#1b1717", "0 10px 16px 0 rgba(134, 90, 69, 0.5),0 6px 20px 0 rgba(134, 90, 69, 0.5)", "rgb(0, 218, 0)");
			break;
		case "haxor":
			writeStyles("black", "#33FF33", "rgb(0, 90, 36)", "rgb(17, 97, 17)", "rgb(0, 50, 4)", "0 10px 16px rgba(0, 90, 0, 0.4),0 6px 20px rgba(51, 255, 51, 0.4)", "rgb(218, 0, 0)");
			break;
		case "cypher":
			writeStyles("#2f2617", "#9d8457", "#732906", "#201810", "#1b1717", "0 10px 16px rgba(115, 41, 6, 0.6),0 6px 20px rgba(115, 41, 6, 0.6)", "rgb(0, 180, 0)");
			break;
		case "steam":
			writeStyles("#4c5844", "#968732", "rgb(103, 117, 94)", "#4c5844", "#4c5844", "0 10px 16px rgba(76, 88, 68, 0.8),0 6px 20px rgba(76, 88, 68, 0.8)", "rgb(194, 193, 131)");
			break;
		case "powershell":
			writeStyles("#012456", "#d4d8de", "#bac715", "#012456", "#012456", "0 10px 16px rgba(212, 216, 222, 0.4),0 6px 20px rgba(212, 216, 222, 0.4)", "rgb(0, 218, 0)");
			break;
		case "psycho":
			writeStyles("white", "black", "grey", "white", "whitesmoke", "0 10px 16px rgba(112, 113, 116, 0.9),0 6px 20px rgba(112, 113, 116, 0.9)", "rgb(25, 0, 255)");
			break;
		case "cmd":
			writeStyles("black", "white", "grey", "black", "#1b1717", "0 10px 16px rgba(112, 113, 116, 0.7),0 6px 20px rgba(112, 113, 116, 0.7)", "rgb(0, 218, 0)");
			break;
		case "marnie":
			writeStyles("#FFF5E4", "#443627", "#99BC85", "#FFA725", "#FFF5E4", "0 10px 16px rgba(255, 167, 37, 0.6),0 6px 20px rgba(255, 167, 37, 0.6)", "rgb(0, 218, 0)");
			break;
		case "freeDOS":
			writeStyles("#acaaac", "#000000", "#0000ac", "#00aaac", "#acaaac", "0 10px 16px rgba(0, 170, 172, 0.5),0 6px 20px rgba(0, 170, 172, 0.5)", "rgb(0, 218, 0)");
			break;
		case "2600":
			writeStyles("#272728", "#dcdcdc", "#6a4832", "#7c2c31", "#272728", "0 10px 16px rgba(106, 72, 50, 0.5),0 6px 20px rgba(106, 72, 50, 0.5)", "rgb(0, 218, 0)");
			break;
		case "monster":
			writeStyles("#161616", "#ffffff", "rgb(144, 177, 0)", "#0b9936", "#161616", "0 10px 16px rgba(0, 90, 0, 0.5),0 6px 20px rgba(51, 255, 51, 0.5)", "rgb(0, 218, 0)");
			break;
	}
	localStorage.setItem("selectedTheme", theme);
}

// IIFE for the theme selector UI
(function () {
	const buttonsHTML = `	
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

		const themeWindow = document.createElement("div");
		themeWindow.id = "wTheme";
		const themeTitle = document.createElement("div");
		themeTitle.innerHTML = `
		<div>
			<img src="/img/pipe.png" style="width: 2rem;">
			<h4>themes</h4>
		</div>
		<div>
			<button class="windowHide">x</button>
		</div>
		`
		themeTitle.classList.add("windowTitle");
		const themesDiv = document.createElement("div");
		themesDiv.id = "themesDiv";
		themesDiv.innerHTML = buttonsHTML;
		themeWindow.appendChild(themeTitle);
		themeWindow.appendChild(themesDiv);

		let isSelected = false;
		let offsetX, offsetY;
	
		themeTitle.addEventListener("mousedown", (e) => {
			isSelected = true;
			offsetX = e.clientX - themeWindow.offsetLeft;
			offsetY = e.clientY - themeWindow.offsetTop;
	
			document.body.style.userSelect = 'none';
		})
		document.addEventListener('mousemove', (e) => {
			if (!isSelected) return;
			themeWindow.style.left = e.clientX - offsetX + 'px';
			themeWindow.style.top = e.clientY - offsetY + 'px';
		  });
		  
		  document.addEventListener('mouseup', () => {
			isSelected = false;
			document.body.style.userSelect = '';
		  });

	document.querySelector("#themeButton").addEventListener("click", () => {
		if (themeWindow.style.visibility === "visible") {
			themeWindow.style.visibility = "hidden";
		}
		else {
			themeWindow.style.visibility = "visible";
		}
	});
	window.onload=function() {
		document.querySelector(".windowHide").addEventListener("click", () => {
		if (themeWindow.style.visibility === "visible") {
			themeWindow.style.visibility = "hidden";
		}
		else {
			themeWindow.style.visibility = "visible";
		}
	});
	}

	themeWindow.style.visibility = "hidden";
	document.querySelector(".container").appendChild(themeWindow);

	// hide the list when the user clicks outside of it
	// document.addEventListener('click', (event) => {
	// 	const list = document.querySelector("#themeList");
	// 	const button = document.querySelector("#themeButton");

	// 	function checkLists() {
	// 		if (list.contains(event.target)) {
	// 			return false;
	// 		}
	// 		return true;
	// 	}

	// 	if (document.querySelector("#themeList") && checkLists()) {
	// 		// prevent the visibility from being set to hidden when the button for the dropdown is clicked
	// 		if (button.contains(event.target)) return;
	// 		document.querySelector("#themeList").style.display = "none";
	// 	}
	// });
})();