import { writeUTC } from '/scripts/UTC.js';

export function layout() {
    const headerHTML = `
    <a href="https://www.pipertext.net" id="pageHeaderName">&gt; pipertext</a>
    <div id='pageHeaderButtons'>
        <button id='pageThemeButton'>themes</button>
    </div>
    <img src="/media/pipertextResources/pipertextPipe.png" alt="Pipertext tobacco pipe logo"
        id="pageHeaderLogo">
`

    const navbarHTML = `
    <ul>
        <li><a href="/index.html#homepage" id='navHome'>home</a></li>
        <li><a href="/index.html#articles" id='navArticles'>articles</a></li>
        <li><a href="/index.html#resource" id='navResource'>resource</a></li>
        <li><a href="/index.html#quotes" id='navQuotes'>quotes</a></li>
        <li><a href="/index.html#about" id='navAbout'>about</a></li>
        <li><a href="/index.html#contact" id='navContact'>contact</a></li>
    </ul>
`

    const sidebarHTML = `
    <div id="pageButtonMarquee" class="marquee">
        <img src="/media/buttons/bestvw.gif" alt="Best viewed with a computer and a monitor!">
        <img src="/media/buttons/css2.gif" alt="Made with CSS!">
        <img src="/media/buttons/gothtml.gif" alt="Got HTML?">
    </div>
    <div id="pageDashboard">
        <time datetime="">xxx</time>
        <img src="/media/pipertextResources/88x31pipertext.png" alt="Pipertext 88x31 icon">
    </div>
    <dl id="pageRecentPosts">
        <h3>recent posts</h3>
        <dt><a>Recent Article 1</a></dt>
        <dd><time datetime="">2025/08/09</time></dd>
        <dt><a>Recent Article 2</a></dt>
        <dd><time datetime="">2025/08/09</time></dd>
        <dt><a>Recent Article 3</a></dt>
        <dd><time datetime="">2025/08/09</time></dd>
    </dl>
    <dl id="pageTinNotes">
        <h3>tin notes</h3>
        <ul>
            <li><a href="">tobacconist</a></li>
        </ul>
    </dl>
`;

    const footerHTML = `
    <small><a href="https://www.pipertext.net">pipertext.net</a></small>
    <img src="/media/pipertextResources/pipertextPipe.png" alt="Pipertext tobacco pipe logo">
    <small id="pageFooterWithLove">lovingly handmade with HTML, CSS, & JS</small>
`

    function createSidebar() {
        document.querySelector("#pageSidebar").innerHTML = sidebarHTML;

        const dashboardTime = document.querySelector("#pageDashboard time")
        writeUTC(dashboardTime);

        const aElements = document.querySelectorAll("#pageRecentPosts a");
        const timeElements = document.querySelectorAll("#pageRecentPosts dd time");
        let counter = 0;
        fetch('/html/articles/_articleList.json')
            .then(response => response.json())
            .then(articles => {
                articles.slice(-3).reverse().forEach(article => {
                    aElements[counter].textContent = article.name;
                    aElements[counter].href = article.html_file;
                    timeElements[counter].textContent = article.publish_date;
                    timeElements[counter].setAttribute('datetime', `${article.publish_date}`)
                    counter++;
                });
            })
            .catch(error => console.error('error loading JSON file!!! - ', error));
    }

    function createHeader() {
        document.querySelector("#pageHeader").innerHTML = headerHTML;
    }

    function createNav() {
        document.querySelector("#pageNavbar").innerHTML = navbarHTML;
    }

    function createFooter() {
        document.querySelector("#pageFooter").innerHTML = footerHTML;
    }

    createHeader();
    createSidebar();
    createNav();
    createFooter();
}