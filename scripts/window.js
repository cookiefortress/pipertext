function window(name, html, buttonID) {
	const window = document.createElement("div");
	window.classList.add(`window`);

	const windowTitle = document.createElement("div");
	windowTitle.classList.add(`windowTitle`);
	windowTitle.innerHTML = `
		<div>
			<img src="/media/pipertextResources/pipertextPipe.png" style="width: 2rem;">
			<h4>${name}</h4>
		</div>
		<div>
			<button class="windowHide">x</button>
		</div>
		`;

	const windowContent = document.createElement("div");
	windowContent.classList.add("windowContent");
	windowContent.innerHTML = `${html}`;

	let isSelected = false;
	let offsetX, offsetY;

	windowTitle.addEventListener("mousedown", (e) => {
		isSelected = true;
		offsetX = e.clientX - window.offsetLeft;
		offsetY = e.clientY - window.offsetTop;

		document.body.style.userSelect = 'none';
	})
	document.addEventListener('mousemove', (e) => {
		if (!isSelected) return;
		window.style.left = e.clientX - offsetX + 'px';
		window.style.top = e.clientY - offsetY + 'px';
	});

	document.addEventListener('mouseup', () => {
		isSelected = false;
		document.body.style.userSelect = '';
	});

	window.style.visibility = "hidden";
	window.appendChild(windowTitle);
	window.appendChild(windowContent);

	document.querySelector("#pageContainer").appendChild(window);

	document.querySelector(`${buttonID}`).addEventListener("click", () => {
		if (window.style.visibility === "visible") {
			window.style.visibility = "hidden";
		}
		else {
			window.style.visibility = "visible";
		}
	});
	document.querySelector(".windowHide").addEventListener("click", () => {
		if (window.style.visibility === "visible") {
			window.style.visibility = "hidden";
		}
		else {
			window.style.visibility = "visible";
		}
	});

	return window;
}

export { window };