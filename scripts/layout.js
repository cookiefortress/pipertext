function createSidebar() {
  const mainMarquee = document.createElement("marquee");
  mainMarquee.innerHTML = `
	  <img src="/res/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/res/gif/css2.gif" alt="Made with CSS!">
    <img src="/res/gif/gothtml.gif" alt="Got HTML?">`;

  function createDashboard() {
    let dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    let UTCtext = document.createElement("time");
    dashboard.appendChild(UTCtext);
    let pipertextIcon = document.createElement("div");
    pipertextIcon.innerHTML =
      "<img src='/res/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";
    dashboard.appendChild(pipertextIcon);

    function writeUTC() {
      let UTC = getUTC();
      UTCtext.innerHTML = "UTC " + UTC;
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
      let UTC = `${hours}:${minutes}:${seconds} ${year}-${month + 1}-${date}`;
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
      "/html/dynamicUI.html",
      "Project - Dynamic UI",
      "2025/05/08",
    );
    createRecentPost(
      "/html/tictactoeRevisited.html",
      "Project - Tic Tac Toe Revisited",
      "2025/04/25",
    );
    createRecentPost(
      "/html/todo.html",
      "Project - Todo List",
      "2025/04/20",
    );
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
        </p>`;
}

function createHeader() {
  let header = document.querySelector("header");
  header.innerHTML = `
		    <div>
            <h1 class="pipertext">&gt; pipertext</h1>
        </div>

        <button id="themeButton">themes</button>

        <div class="logo">
            <img src="/res/img/pipe.png" alt="Pipertext logo">
        </div>`;
}

function createNav() {
  let nav = document.querySelector("nav");
  nav.innerHTML = `
		<ul>
      <li><a href="/index.html#homepage" id="navHome">home</a></li>
      <li><a href="/index.html#resource" id="navResource">resource</a></li>
      <li><a href="/index.html#articles" id="navArticles">articles</a></li>
      <li><a href="/index.html#quotes" id="navQuotes">quotes</a></li>
      <li><a href="/index.html#about" id="navAbout">about</a></li>
      <li><a href="/index.html#contact" id="navContact">contact</a></li>
    </ul>`;
}

// select the sidebar
const sidebar = document.querySelector("aside");
createHeader();
createSidebar();
createNav();
createFooter();

