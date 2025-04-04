/* typerwiter & blink effects for the pipertext header */
const pipertext = ">pipertext";
let header = document.querySelector(".pipertext");

function makeInvis() {
	header.style.visibility = "hidden";
}
function makeVis() {
	header.style.visibility = "visible";
}
function blink() {
	for (let i = 0; i < 2; i++) {
		setTimeout(() => makeInvis(), i * 600);
		setTimeout(() => makeVis(), (i * 600) + 300); 
	}
}

async function typewriter(str) {
	header.textContent = "";
	for (let i = 0; i < str.length; i++) {
		await new Promise(resolve => {
			setTimeout(() => {
				header.textContent += str[i];
				if(str[i] == ">") header.textContent += " ";
				resolve();
			}, 200);
		});
	}
	header.textContent = header.textContent.slice(0, 12);
	setTimeout(() => {
		blink();
	}, 200);
}

typewriter(pipertext);
header.classList.remove("flame-text");