function waterfall(divSelector, elementsType) {
	function motion() {
		const elements = document.querySelectorAll(`${divSelector} ${elementsType}`);

		for (const element of elements) {
			let animationInterval = null;
			let direction = 1; // 1 for increasing, -1 for decreasing
			const startAnimation = () => {
				if (animationInterval) return;

				animationInterval = setInterval(() => {
					let margin = parseInt(getComputedStyle(element).marginBottom) || 0;
					margin += direction;

					element.style.marginBottom = margin + 'px';

					if (margin >= 11) {
						direction = -1;
					} else if (margin <= -11) {
						direction = 1;
					}
				}, 50);
			};

			setTimeout(startAnimation, Math.random() * 1000);
		}
	}

	setTimeout(motion, 1);
}

export { waterfall };