import { window as themeWindow } from '/scripts/window.js';

export function themes() {
	// function for changing the color scheme
	// text must be accessible when laid over the first three arguments
	function changeTheme(theme, isSaved = true) {
		function writeStyles(background, backgroundAlt, accentAlt, accent, text, gradientTopLeft, bShadow, code, anchorColor) {
			document.documentElement.style.cssText = `
			--background: ${background};
			--backgroundAlt: ${backgroundAlt};
			--accentAlt: ${accentAlt};
			--accent: ${accent};
			--text: ${text};
			--gradientTopLeft: ${gradientTopLeft};
			--code: ${code};
			--anchorColor: ${anchorColor}`;
			document.querySelector("#pageContainer").style.boxShadow = `${bShadow}`;
		}

		switch (theme) {
			case "cherry":
				writeStyles("#1b1717",
					"#810000",
					"#630000",
					"#a70f0f",
					"#eeebdd",
					"black",
					"0 10px 16px 2px rgba(255, 255, 255, 0.2),0 6px 20px 2px rgba(255, 255, 255, 0.2)",
					"rgb(0, 218, 0)",
					"#f91111ff");
				break;
			case "tobacco":
				writeStyles("rgb(54, 36, 24)",
					"rgba(134, 90, 69, 0.5)",
					"rgba(129, 67, 39, 1)",
					"#1b1717",
					"#FED8B1",
					"#1b1717",
						"0 10px 16px 2px rgba(134, 90, 69, 0.5),0 6px 20px 2px rgba(134, 90, 69, 0.5)",
					"rgb(0, 218, 0)",
					"#d16f0dff");
				break;
			case "haxor":
				writeStyles("black",
					"rgb(0, 90, 36)",
					"rgb(17, 97, 17)",
					"rgba(0, 161, 13, 1)",
					"#33FF33",
					"rgb(0, 50, 4)",
					"0 10px 16px 2px rgba(0, 90, 0, 0.4),0 6px 20px 2px rgba(51, 255, 51, 0.4)",
					"rgb(218, 0, 0)",
					"#018201ff",);
				break;
			case "cypher":
				writeStyles("#2f2617",
					"#732906",
					"#69441fff",
					"#1b1717",
					"#9d8457",
					"#1b1717",
					"0 10px 16px 1px rgba(115, 41, 6, 0.6),0 6px 20px 1px rgba(115, 41, 6, 0.6)",
					"rgb(0, 180, 0)",
					"#d04707ff");
				break;
			case "steam":
				writeStyles("#4c5844",
					"#968732",
					"rgb(103, 117, 94)",
					"#6b7a60ff",
					"white",
					"#4c5844",
					"0 10px 16px 2px rgba(76, 88, 68, 0.8),0 6px 20px 2px rgba(76, 88, 68, 0.8)",
					"rgb(194, 193, 131)",
					"#968732");
				break;
			case "powershell":
				writeStyles("#012456",
					"#013783ff",
					"#013783ff",
					"#bac715",
					"#d4d8de",
					"#012456",
					"0 10px 16px rgba(212, 216, 222, 0.4),0 6px 20px rgba(212, 216, 222, 0.4)",
					"rgb(0, 218, 0)",
					"#94a6efff");
				break;
			case "paper":
				writeStyles("white",
					"whitesmoke",
					"#898989ff",
					"grey",
					"black",
					"whitesmoke",
					"0 10px 16px 4px rgba(112, 113, 116, 0.9),0 6px 20px 4px rgba(112, 113, 116, 0.9)",
					"rgb(25, 0, 255)",
					"#636363ff");
				break;
			case "cmd":
				writeStyles("black",
					"#090909ff",
					"#2b2b2bff",
					"grey",
					"whitesmoke",
					"black",
					"0 10px 16px 1px rgba(112, 113, 116, 0.7),0 6px 20px 1px rgba(112, 113, 116, 0.7)", 
					"rgb(0, 218, 0)",
					"#b1b1b1ff");
				break;
			case "marnie":
				writeStyles("#FFF5E4",
					"#d7750eff",
					"#99BC85",
					"#FFA725",
					"#443627",
					"#FFF5E4",	
					"0 10px 16px 2px rgba(255, 167, 37, 0.6),0 6px 20px 2px rgba(255, 167, 37, 0.6)",
					"rgb(0, 218, 0)",
					"#ee6e06ff");
				break;
			case "freeDOS":
				writeStyles("#acaaac",
					"#1515ffff",
					"#0000FF",
					"#00aaac",
					"#000000ff",
					"#acaaac",
					"0 10px 16px 3px rgba(0, 170, 172, 0.5),0 6px 20px 3px rgba(0, 170, 172, 0.5)",
					"rgb(0, 218, 0)",
					"#0000ff");
				break;
			case "2600":
				writeStyles("#272728",
					"#7c2c31",
					"#6a4832",
					"#7c2c31",
					"white",
					"#272728",
					"0 10px 16px 2px rgba(106, 72, 50, 0.5),0 6px 20px 2px rgba(106, 72, 50, 0.5)",
					"rgb(0, 218, 0)",
					"#c24850ff");
				break;
			case "monster":
				writeStyles("#161616",
					"rgb(144, 177, 0)",
					"#0b9936",
					"#0b9936",
					"#ffffff",
					"#161616",
					"0 10px 16px 1px rgba(0, 90, 0, 0.5),0 6px 20px 1px rgba(51, 255, 51, 0.5)",
					"rgb(0, 218, 0)",
					"#daf016ff");
				break;
			case "belial":
				writeStyles("#000000",
					"#5a0101ff",
					"#491414ff",
					"#491414ff",
					"#89000bff",
					"#000000", "0 10px 16px 1px #89000bff,0 6px 20px 1px #89000bff",
					"rgba(255, 68, 0, 1)",	
					"#c90b1bff");
				document.querySelector("body").style.background = `url('/media/pipertextResources/bgHell.png') repeat fixed center`;
				break;
			case "freedom":
				writeStyles("#003693ff",
					"#e00007ff",
					"#005effff",
					"#990323ff",
					"#ffffff",
					"#0040afff",
					"0 10px 16px 1px #89000bff,0 6px 20px 1px #89000bff",
					"rgb(0, 218, 0)",
					"#ff0000ff");
				break;
			case "frutiger":
				writeStyles("#0055ffff",
					"#699d01ff",
					"#96d419ff",
					"#0078c8",
					"#f5f5f5",
					"#0078c8",
					"0 10px 16px 1px #00fbffff,0 6px 20px 1px #00fbffff",
					"rgb(0, 218, 0)",
					"#16f4edff");
				document.querySelector("body").style.background = `url('/media/pipertextResources/bgFrutigerAero.jpg') repeat fixed center`;
				break;
			case "lambda":
				writeStyles("#C63D2F",
					"#C63D2F",
					"#E25E3E",
					"#E25E3E",
					"#FFBB5C",
					"#C63D2F",
					"0 10px 16px 1px #fc1e06ff,0 6px 20px 1px #fc1e06ff",
					"rgb(0, 218, 0)",
					"#ff6f00ff");
				break;

			// -- holidays --
			case "christmas":
				writeStyles("rgb(14, 78, 14)", "rgba(4, 65, 4, 1)", "#ff0000", "#ff0000", "#ecffeb", "rgb(14, 78, 14)", "0 10px 16px 2px rgba(0, 90, 0, 0.5),0 6px 20px 2px rgba(255, 255, 255, 0.79)", "gold", "white");
				break;
			case "halloween":
				writeStyles("rgb(190, 89, 0)", "rgba(100, 50, 6, 1)", "rgb(50, 1, 47)", "rgb(50, 1, 47)", "rgba(232, 158, 93, 1)", "rgb(190, 89, 0)", "0 10px 16px 	rgba(149, 23, 177, 0.93),0 6px 20px rgb(50, 1, 47)", "rgb(0, 218, 0)", "orange");
				break;
			default:
				changeTheme("cherry");
		}
		if (theme !== "belial" && theme !== "frutiger") {
			document.querySelector("body").style.background = `url('/media/pipertextResources/bgSpace.gif') fixed center`
		}
		if (isSaved) {
			localStorage.setItem("selectedTheme", theme);
		}
	}

	themeWindow(`themes`, `
	<div id="themeList">
		<button onclick="changeTheme('cherry')">cherry</button>
		<button onclick="changeTheme('tobacco')">tobacco</button>
		<button onclick="changeTheme('haxor')">haxor</button>
		<button onclick="changeTheme('cypher')">cypher</button>
		<button onclick="changeTheme('steam')">steam</button>
		<button onclick="changeTheme('powershell')">powershell</button>
		<button onclick="changeTheme('paper')">paper</button>
		<button onclick="changeTheme('cmd')">cmd</button>
		<button onclick="changeTheme('marnie')">marnie</button>
		<button onclick="changeTheme('freeDOS')">freeDOS</button>
		<button onclick="changeTheme('2600')">2600</button>
		<button onclick="changeTheme('monster')">monster</button>
		<button onclick="changeTheme('belial')">belial</button>
		<button onclick="changeTheme('freedom')">freedom</button>
		<button onclick="changeTheme('frutiger')">frutiger</button>
		<button onclick="changeTheme('lambda')">lambda</button>	
	</div>
`, '#pageThemeButton');

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

		const UTC = document.querySelector("#pageDashboard time").textContent;
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

	window.changeTheme = changeTheme;
}