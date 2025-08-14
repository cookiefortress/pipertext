function createTable() {
	const table = document.createElement("menu");
	table.id = 'tableOfContents';

	const TOCheader = document.createElement("h2");
	TOCheader.id = 'TOCheader';
	TOCheader.textContent = 'Table of contents';
	table.appendChild(TOCheader);

	const headers = Array.from(document.querySelector("main").querySelectorAll("h2, h3"));
	for(let i = 1; i < headers.length; i++) {
		if(headers[i].textContent.includes("this article is a part of the")) {
			continue;
		}
		const link = document.createElement("a");
		link.href = `#sec${i}`;
		link.textContent = headers[i].textContent;
		if(headers[i].tagName === 'H3') {
			link.innerHTML = '&#8195;&#8195;' + headers[i].textContent;
		link.classList.add('subheader');
		}
		table.appendChild(link);
	}
	if(table.childElementCount === 0 || table.childElementCount === 1) {
		document.querySelector("#articleHeadMetadata").style.flexBasis = '100%';
		return;
	}
	document.querySelector("#articleHead").appendChild(table);
	console.log(table)
}

(function tableOfContents() {
	const main = document.querySelector("main");
	const headers = Array.from(main.querySelectorAll("h2, h3"));

	let counter = 0;
	for (let header of headers) {
		header.id = `sec${counter}`;
		counter++;
	}

	console.log(headers);
	createTable();
})();