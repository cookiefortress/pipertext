import { writeUTC } from '/scripts/UTC.js'

function createSidebar() {
  function marquee() {
    const marquee = document.createElement("div");
    marquee.classList.add("marquee");
    marquee.innerHTML = `
	  <img src="/res/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/res/gif/css2.gif" alt="Made with CSS!">
    <img src="/res/gif/gothtml.gif" alt="Got HTML?">`;
    return marquee;
  }

  function dashboard() {
    const dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");
    const UTCtext = document.createElement("time");
    dashboard.appendChild(UTCtext);
    const pipertextIcon = document.createElement("div");
    pipertextIcon.innerHTML =
      "<img src='/res/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";
    dashboard.appendChild(pipertextIcon);
    writeUTC(UTCtext);
    return dashboard;
  }

  function recentPosts() {
    function createRecentPost(href, title, date) {
      const recentPost = document.createElement("div");
      recentPost.classList.add("recentArticle");

      const postLink = document.createElement("a");
      postLink.href = href;
      postLink.textContent = title;
      const postDate = document.createElement("p");
      postDate.textContent = date;

      recentPost.appendChild(postLink);
      recentPost.appendChild(postDate);
      recentPosts.appendChild(recentPost);
    }

    function createRecentPosts() {
      const recentPostsHeader = document.createElement("h3");
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

    const recentPosts = document.createElement("div");
    recentPosts.classList.add("recentPosts");
    createRecentPosts();
    return recentPosts;
  }

  sidebar.appendChild(marquee());
  sidebar.appendChild(dashboard());
  sidebar.appendChild(recentPosts());
}

function createFooter() {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
		<a href="https://www.pipertext.net" style="text-decoration: none;"><small class="flame-text">pipertext.net</small></a>
    <img src='/res/img/pipe.png' style='width: 2rem; filter: invert() drop-shadow(2px 2px 1px #100000);'>
    <small class="withlove"><em>lovingly handmade with HTML, CSS, and JavaScript</em></small>
    <p></p>`;
}

function createHeader() {
  const header = document.querySelector("header");
  header.innerHTML = `
		    <div>
            <h1 class="pipertext">&gt; pipertext</h1>
        </div>
        <div class="logo">
            <button id="themeButton">themes</button>
            <img src="/res/img/pipe.png" alt="Pipertext logo">
        </div>`;
}

function createNav() {
  const nav = document.querySelector("nav");
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

const sidebar = document.querySelector("aside");
createHeader();
createSidebar();
createNav();
createFooter();

