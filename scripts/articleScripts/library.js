let libraryArr = [];
function Book(title, author, pages, hasRead) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.hasRead = hasRead;
	this.bookID = crypto.randomUUID();
	this.getInfo = function() {
		return `${title} by ${author}, ${pages} pages, ${hasRead ? "has been read" : "not read yet"}`;
	}
}
function addBook(title, author, pages, hasRead) {
	let book = new Book(title, author, pages, hasRead);
	libraryArr.push(book);
}
function createTable(arr) {
	let table = document.createElement("table");
	table.style.width = "100%";
	table.style.borderSpacing = "0 1rem";
	table.style.textAlign = "center";

	for(let book of arr) {
		let tableRow = document.createElement("tr");
		for(let prop in book) {
			if(typeof book[prop] == "function" || prop == "bookID") break;
			let tableData = document.createElement("td");
			if(prop == "pages") tableData.textContent = `${book[prop]} pages`;
			else if (prop == "hasRead") tableData.textContent = book.hasRead ? "has been read" : "not read yet";
			else {
				tableData.textContent = book[prop];
			}
			tableData.style.border = "2px ridge var(--accentOne)";
			tableData.style.padding = ".5rem 1rem"
			tableData.style.width = "25%";
			tableRow.appendChild(tableData);
		}
		table.appendChild(tableRow);
	}
	document.querySelector("div#library").appendChild(table);
}
function createForm() {
	if(document.querySelector("form")) return;
	let form = document.createElement("form");
	form.style.display = "flex";
	form.style.flexDirection = "column";
	form.style.gap = ".5rem";
	form.style.textAlign = "center";
	form.style.margin = "0 auto";
	form.style.width = "50%";
	for(i=0;i<4;i++) {
		let label = document.createElement("label");
		let input = document.createElement("input");
		input.type = "text";
		switch(i) {
			case 0:
				label.htmlFor = "title";
				label.textContent = "title";
				input.id = "title";
				input.name = "title";
				break;
			case 1:
				label.htmlFor = "author";
				label.textContent = "author";
				input.id = "author";
				input.name = "author";
				break;
			case 2:
				label.htmlFor = "pages";
				label.textContent = "pages";
				input.id = "pages";
				input.name = "pages";
				break;
			case 3:
				label.htmlFor = "hasRead";
				label.textContent = "has been read";
				input.id = "hasRead";
				input.name = "hasRead";
				input.type = "checkbox";
		}
		form.appendChild(label);
		form.appendChild(input);
	}
	let submitButton = document.createElement("button");
	submitButton.textContent = "submit";
	submitButton.style.padding = ".3rem 1rem";
	submitButton.style.borderRadius = "0";
	submitButton.style.display = "block";
	submitButton.style.margin = "0 auto";
	submitButton.addEventListener("click", (event) => {
		event.preventDefault();

		let title = form.title.value;
		let author = form.author.value;
		let pages = parseInt(form.pages.value);
		let hasRead = form.hasRead.value;
		addBook(title, author, pages, hasRead);
		form.remove();
		document.querySelector("table").remove();
		createTable(libraryArr);

	})
	form.appendChild(submitButton);
	document.querySelector("article").appendChild(form);
}

addBook("The Hobbit", "J.R.R. Tolkien", 300, true);
addBook("Yada yada", "Mr Yoda", 120, false);
createTable(libraryArr);

let newBookButton = document.querySelector("#newBookButton");
newBookButton.addEventListener("click", () => {
		createForm();
})