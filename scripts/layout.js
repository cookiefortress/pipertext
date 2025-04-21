let pipertextIcon = "<img src='/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";
function writeUTC() {
	UTC = getUTC();
	dashboard.innerHTML = "UTC " + UTC + pipertextIcon;
	setTimeout(writeUTC, 1000);
}

function getUTC() {
	const now = new Date();
	const year = now.getUTCFullYear();
	const month = now.getUTCMonth();
	const date = now.getUTCDate();
	const hours = now.getUTCHours();
	const minutes = now.getUTCMinutes();
	const seconds = now.getUTCSeconds();
	let UTC = (`${hours}:${minutes}:${seconds} ${year}-${month + 1}-${date}`);
	return UTC;
}

let dashboard = document.createElement("div");
// create the dashboard with the time in UTC
function createDashboard() {
	dashboard.style.color = "var(--light)";
	dashboard.style.backgroundColor = "black";
	dashboard.style.background = `linear-gradient(rgba(255, 255, 255, 0.24), rgba(255, 255, 255, 0.34)), url(/img/spacex.gif)`;
	dashboard.style.border = "2px ridge var(--accentOne)";
	dashboard.style.width = "8.875rem";
	dashboard.style.height = "10rem";
	dashboard.style.padding = ".2rem";
	dashboard.style.textAlign = "center";
	dashboard.style.display = "flex";
	dashboard.style.flexFlow = "column nowrap";
	dashboard.style.justifyContent = "center";
	dashboard.style.alignItems = "center";
	dashboard.style.gap = ".5rem";
	dashboard.classList.add("dashboard");
}

function createSidebar() {
	function createRecentPost(href, title, date) {
		let recentPost = document.createElement("div");
		recentPost.classList.add("recentArticle");

		let postLink = document.createElement("a");
		postLink.href = href;
		postLink.textContent = title;
		let postDate = document.createElement("p");
		postDate.textContent = date;

		recentPost.appendChild(postLink);
		recentPost.appendChild(postDate);
		recentPosts.appendChild(recentPost);
	}
	function createRecentPosts() {
		let recentPosts = document.createElement("div");
		let recentPostsHeader = document.createElement("h3");
		recentPostsHeader.textContent = "Recent posts";
		recentPosts.appendChild(recentPostsHeader);
		
		createRecentPost(
			"/html/articles/todo.html",
			"Project - Todo List",
			"2025/04/20"
		)
		createRecentPost(
			"/html/articles/tictactoe.html",
			"Project - Tic Tac Toe",
			"2025/04/12"
		)
		createRecentPost(
			"/html/articles/library.html",
			"Project - Library",
			"2025/04/10"
		)
	}

	let mainMarquee = document.createElement("marquee");
	mainMarquee.innerHTML = `
	<img src="/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/gif/fftake.gif" alt="Firefox - take back the web!">
    <img src="/gif/css2.gif" alt="Made with CSS!">
    <img src="/gif/gothtml.gif" alt="Got HTML?">`

	let recentPosts = document.createElement("div");
	let recentPostsHeader = document.createElement("h3");
	recentPostsHeader.textContent = "Recent posts";
	recentPosts.appendChild(recentPostsHeader);
	createRecentPosts();

	// let pushCounter = document.createElement("div");
	// pushCounter.style.display = "flex";
	// pushCounter.style.flexDirection = "column";
	// pushCounter.style.alignItems = "center";
	// let pushCounterBtn = document.createElement("button");
	// pushCounterBtn.style.width = "100px";
	// pushCounterBtn.style.height = "30px";
	// pushCounterBtn.style.marginTop = ".3rem";
	// pushCounterBtn.style.borderRadius = "0";
	// pushCounterBtn.style.backgroundColor = "var(--accentOne)";
	// pushCounterBtn.style.color = "var(--secondary)";
	// pushCounterBtn.style.borderColor = "var(--primary)";
	// pushCounterBtn.textContent = "+1";
	// let counter = document.createElement("p");
	// counter.style.width = "150px";
	// counter.style.height = "auto";
	// counter.style.border = "3px ridge var(--accentOne)"
	// counter.style.padding = ".4rem";
	// counter.style.backgroundColor = "var(--secondary)";
	// counter.style.color = "var(--primary)";
	// counter.style.textAlign = "center";
	// counter.style.marginTop = ".5rem";
	// counter.textContent = "x";
	// pushCounter.appendChild(counter);
	// pushCounter.appendChild(pushCounterBtn);

	// append the marquee, dashboard, and recentPosts to the sidebar
	sidebar.appendChild(mainMarquee);
	sidebar.appendChild(dashboard);
	sidebar.appendChild(recentPosts);
	// sidebar.appendChild(pushCounter);
}

function createFooter() {
	let footer = document.querySelector("footer");
	footer.innerHTML = `
		<small class="flame-text">pipertext.net</small>
        <small>&#169; 2025</small>
        <p>
            <a href="https://jigsaw.w3.org/css-validator/check/referer" rel="noopener">
            	<img style="border:0;width:88px;height:31px"
            		src="https://jigsaw.w3.org/css-validator/images/vcss-blue"
            		alt="Valid CSS!">
            </a>
        </p>`
}
function createHeader() {
	let header = document.querySelector("header");
	header.innerHTML = `
		<div>
            <h1 class="pipertext">&gt; pipertext</h1>
        </div>
        <div class="logo">
            <label for="themes" hidden>themes</label>
            <select name="themes" id="themes">
                <option value="themes" selected disabled>themes</option>
                <option value="cherry">cherry</option>
                <option value="tobacco">tobacco</option>
                <option value="haxor">haxor</option>
                <option value="cypher">cypher</option>
                <option value="steam">steam</option>
                <option value="powershell">powershell</option>
                <option value="pride">pride</option>
                <option value="psycho">psycho</option>
                <option value="cmd">cmd</option>
				<option value="marnie">marnie</option>
				<option value="freeDOS">freeDOS</option>
            </select>
            <select name="friends" id="friends">
                <option value="">partners</option>
                <option value="dog">coming</option>
                <option value="cat">soon</option>
                <option value="hamster">!!!</option>
            </select>
            <img src="/img/pipe.png" alt="Pipertext logo">
        </div>`
}
function createNav() {
	let nav = document.querySelector("nav");
	nav.innerHTML = `
		<ul>
        	<li><a href="/index.html">home</a></li>
            <li><a href="/resource/resource.html">resource</a></li>
            <li><a href="/html/articles.html">articles</a></li>
            <li><a href="/html/quotes.html">quotes</a></li>
            <li><a href="/html/about.html">about</a></li>
            <li><a href="/html/contact.html">contact</a></li>
        </ul>`
}

// select the sidebar
const sidebar = document.querySelector("aside");
createDashboard();
createHeader();
createSidebar();
createNav();
createFooter();
writeUTC();