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

// select the sidebar
const sidebar = document.querySelector("aside");

// create the dashboard with the time in UTC
let dashboard = document.createElement("div");
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
dashboard.style.gap = ".5rem"
dashboard.classList.add(".dashboard");

let mainMarquee = document.createElement("marquee");
mainMarquee.innerHTML = `
	<img src="/gif/bestvw.gif" alt="Best viewed with a computer and a monitor!">
    <img src="/gif/fftake.gif" alt="Firefox - take back the web!">
    <img src="/gif/css2.gif" alt="Made with CSS!">
    <img src="/gif/gothtml.gif" alt="Got HTML?">`

let pipertextIcon = "<img src='/img/pipertext.png' alt='Pipertext 88x31 icon' width='88px'>";

let recentPosts = document.createElement("div");
let recentPostsHeader = document.createElement("h3");
recentPostsHeader.textContent = "Recent posts";
recentPosts.appendChild(recentPostsHeader);

let recentPost = document.createElement("div");
recentPost.classList.add("recentArticle");

let postLink = document.createElement("a");
postLink.href = "/html/articles/microsoft50.html";
postLink.textContent = "50 years of Microsoft";
let postDate = document.createElement("p");
postDate.textContent = "2025/04/06";

recentPost.appendChild(postLink);
recentPost.appendChild(postDate);
recentPosts.appendChild(recentPost);

postLink = document.createElement("a");
postLink.href = "/html/articles/touchPipertext.html";
postLink.textContent = "touch pipertext.ptml";
postDate = document.createElement("p");
postDate.textContent = "2025/04/06";

recentPost.appendChild(postLink);
recentPost.appendChild(postDate);
recentPosts.appendChild(recentPost);

postLink = document.createElement("a");
postLink.href = "/html/articles/touchPipertext.html";
postLink.textContent = "touch pipertext.ptml";
postDate = document.createElement("p");
postDate.textContent = "2025/04/06";

recentPost.appendChild(postLink);
recentPost.appendChild(postDate);
recentPosts.appendChild(recentPost);

// append the marque, dashboard, and recentPosts to the sidebar
sidebar.appendChild(mainMarquee);
sidebar.appendChild(dashboard);
sidebar.appendChild(recentPosts);

writeUTC();