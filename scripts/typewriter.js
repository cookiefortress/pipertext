function typewriter(target, string = document.querySelector(target).textContent, speed = 200, isBlink = false, isCursor = false, isTypewriter = true) {
	const targetElement = document.querySelector(target);

	function typeString() {
		if(speed <= 5) {
			return;
		}
		targetElement.textContent = "";
		for (let i = 0; i < string.length; i++) {
			setTimeout(() => {
				targetElement.textContent += string[i];
			}, speed * i)
		}
	}

	function blink() {
		for (let i = 0; i < 2; i++) {
			setTimeout(() => {
				targetElement.style.visibility = "hidden";
			}, 800 * i);
			setTimeout(() => {
				targetElement.style.visibility = "visible";
			}, 800 * i + 400)
		}
	}

	function cursor() {
		setInterval(() => {
			if (targetElement.textContent.length === (string.length + 1)) {
				targetElement.textContent = string;
			}
			else {
				targetElement.textContent += "_";
			}
		}, 500);
	}

	if (isTypewriter) {
		typeString();
	}
	if (isBlink) {
		setTimeout(blink, (speed * string.length));
	}
	if (isCursor) {
		if(isBlink) {
			setTimeout(cursor, (speed * string.length + 1000));
		}
		else {
			cursor();
		}
	}
}

export { typewriter };