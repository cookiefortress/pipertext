function createWindow(name, html, button) {

	const window = document.createElement("div");
	window.classList.add("window");

	const windowTitle = document.createElement("div");
	windowTitle.innerHTML = `
		<div>
			<img src="/res/img/pipe.png" style="width: 2rem;">
			<h4>${name}</h4>
		</div>
		<div>
			<button class="${name}Window">x</button>
		</div>
		`
	windowTitle.classList.add("windowTitle");

	const windowContent = document.createElement("div");
	windowContent.classList.add("windowContent")
	windowContent.innerHTML = html;

	window.appendChild(windowTitle);
	window.appendChild(windowContent);

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

	if (button) {
		document.querySelector(`${button}`).addEventListener("click", () => {
			if (window.style.visibility === "visible") {
				window.style.visibility = "hidden";
			}
			else {
				window.style.visibility = "visible";
			}
		});
	}

	window.style.visibility = "hidden";
	document.querySelector(".container").appendChild(window);
}

export { createWindow }