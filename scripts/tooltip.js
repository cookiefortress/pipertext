function tooltip(selector, tooltipText) {
	const element = document.querySelector(`${selector}`);
	
	// create tooltip element
	const tooltipEl = document.createElement('div');
	tooltipEl.className = 'tooltip';
	tooltipEl.textContent = tooltipText;
	document.body.appendChild(tooltipEl);
	
	element.addEventListener("mouseover", () => {
		// get element's position
		const rect = element.getBoundingClientRect();
		
		// position tooltip above the element (centered horizontally)
		tooltipEl.style.display = 'block';
		const tooltipRect = tooltipEl.getBoundingClientRect();
		
		tooltipEl.style.left = rect.left + (rect.width / 2) - (tooltipRect.width / 2) + window.scrollX + 'px';
		tooltipEl.style.top = rect.top - tooltipRect.height - 5 + window.scrollY + 'px';
	});
	
	element.addEventListener("mouseout", () => {
		tooltipEl.style.display = 'none';
	});
}
export {tooltip};