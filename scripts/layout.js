import { writeUTC } from '/scripts/UTC.js';

function createSidebar() {
    function marquee() {
        const marquee = document.createElement(`div`);
        marquee.classList.add(`marquee`);
        marquee.innerHTML = `
	<img src="/media/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/media/gif/css2.gif" alt="Made with CSS!">
    <img src="/media/gif/gothtml.gif" alt="Got HTML?">`;
        return marquee;
    }

    function dashboard() {
        const dashboard = document.createElement(`div`);
        dashboard.classList.add(`dashboard`);
        const UTCtext = document.createElement(`time`);
        dashboard.appendChild(UTCtext);
        const pipertextIcon = document.createElement(`div`);
        pipertextIcon.innerHTML =
            `<img src='/media/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>`;
        dashboard.appendChild(pipertextIcon);
        writeUTC(UTCtext);
        return dashboard;
    }

    function recentPosts() {
        function createRecentPost(href, title, date) {
            const recentPost = document.createElement(`div`);
            recentPost.classList.add(`recentArticle`);

            const postLink = document.createElement(`a`);
            postLink.href = href;
            postLink.textContent = title;
            const postDate = document.createElement(`p`);
            postDate.textContent = date;

            recentPost.appendChild(postLink);
            recentPost.appendChild(postDate);
            recentPosts.appendChild(recentPost);
        }

        function createRecentPosts() {
            const recentPostsHeader = document.createElement(`h3`);
            recentPostsHeader.textContent = `Recent posts`;
            recentPostsHeader.classList.add("recentPostsDetail");
            const recentPostsDetailText = document.createElement("div");
            recentPostsDetailText.classList.add("recentPostsDetailText");
            recentPostsDetailText.textContent = `I'm always posting new articles! The latest three show up here.`;

            recentPosts.appendChild(recentPostsHeader);
            recentPosts.appendChild(recentPostsDetailText);

            createRecentPost(
                `/html/articles/goldsrcIsGold.html`,
                `Goldsrc is gold`,
                `2025/08/18`,
            );
             createRecentPost(
                `/html/articles/recursion.html`,
                `Project - Recursion`,
                `2025/08/10`,
            );
            createRecentPost(
                `/html/articles/weatherApp.html`,
                `Project - Weather App`,
                `2025/07/28`,
            );
        }
        const recentPosts = document.createElement(`div`);
        recentPosts.classList.add(`recentPosts`);
        createRecentPosts();
        return recentPosts;
    }

    function createSeries() {
        const header = document.createElement(`h3`);
        header.classList.add("tinnoteDetail");
        header.textContent = `Tin notes`;
        const headerDetail = document.createElement("div");
        headerDetail.classList.add("tinnoteDetailText");
        headerDetail.innerHTML = `Tin notes are directories containing pages which are all focused on discussing a specific topic.`

        const tobacconist = document.createElement(`a`);
        tobacconist.textContent = `tobacconist`;
        tobacconist.href = `/html/tobacconist/tobacconist.html`;

        const series = document.createElement(`div`);
        series.id = `seriesList`;
        series.appendChild(header);
        series.appendChild(headerDetail);
        series.appendChild(tobacconist);

        return series;
    }

    sidebar.appendChild(marquee());
    sidebar.appendChild(dashboard());
    sidebar.appendChild(recentPosts());
    sidebar.appendChild(createSeries());
    sidebar.id = `layoutSidebar`;
}

function createFooter() {
    const footer = document.querySelector(`footer`);
    footer.id = `layoutFooter`;
    footer.innerHTML = `
		<a href="https://www.pipertext.net" style="text-decoration: none;"><small class="flame-text">pipertext.net</small></a>
    <img src='/media/img/pipe.png' style='width: 2rem; filter: invert() drop-shadow(2px 2px 1px #100000);'>
    <small class="withlove"><em>lovingly handmade with HTML, CSS, and JavaScript</em></small>
    <p></p>`;
}

function createHeader() {
    const header = document.querySelector(`header`);
    header.id = `layoutHeader`;
    header.innerHTML = `
		    <div>
            <h1 class="pipertext">&gt; pipertext</h1>
        </div>
        <div class="logo">
            <button id="themeButton">themes</button>
            <img src="/media/img/pipe.png" alt="Pipertext logo">
        </div>`;
}

function createNav() {
    const nav = document.querySelector(`nav`);
    nav.id = `layoutNav`;
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

const sidebar = document.querySelector(`aside`);
createHeader();
createSidebar();
createNav();
createFooter();