function createSidebar() {
	const mainMarquee = document.createElement("marquee");
	mainMarquee.innerHTML = `
	<img src="/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/gif/fftake.gif" alt="Firefox - take back the web!">
    <img src="/gif/css2.gif" alt="Made with CSS!">
    <img src="/gif/gothtml.gif" alt="Got HTML?">`

	function createDashboard() {
		let dashboard = document.createElement("div");
		dashboard.classList.add("dashboard");
		
		function writeUTC() {
			let pipertextIcon = "<img src='/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";
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
	
		writeUTC();
		return dashboard;
	}

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
			"/html/articles/tictactoeRevisited.html",
			"Project - Tic Tac Toe Revisited",
			"2025/04/25"
		)
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
	}

	let recentPosts = document.createElement("div");
	let recentPostsHeader = document.createElement("h3");
	recentPostsHeader.textContent = "Recent posts";
	recentPosts.appendChild(recentPostsHeader);
	createRecentPosts();

	// append the marquee, dashboard, and recentPosts to the sidebar
	sidebar.appendChild(mainMarquee);
	sidebar.appendChild(createDashboard());
	sidebar.appendChild(recentPosts);
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
createHeader();
createSidebar();
createNav();
createFooter();