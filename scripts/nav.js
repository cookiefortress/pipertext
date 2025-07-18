const main = document.querySelector("main");
const homepage = `
        <h2>Homepage</h2>
        <figure class="card">
            <img src="/res/img/pheonix.png" alt="A picture of Netscape Navigator in 1995.">
            <figcaption>
              The original
              <a href="https://en.wikipedia.org/wiki/Firefox#History" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
              logo from 2002, when it was still named <i>Pheonix</i>, and then
              later <i>Firebird</i>, before rebranding to <i>Firefox</i>
            </figcaption>
          </figure>
        <p>
          Pipertext is a love letter to the old web; when it seemed
          to be a never-ending adventure through others' little corners of the grand series of tubes you're viewing this website through. I was personally
          born too late to have seen it myself, but regardless I have become
          very fond of the aesthetics and culture of the time.
          </p>
        <p>
          The early web was a human experience. Compared to today, anyways; websites weren't so cookie cutter and lifeless, and websites made by ordinary people were the majority, showing
          off their interests, passions, and ability to write killer sites. I've grown up in
          a world where the web is primarily accessed through social media;
          divisive content designed to keep you addicted is the norm. This site is my contribution to the human-centric web!
        </p>
        <p>
          I've compiled
          <a href="#resource">some resources</a> if you're
          interested in making your website look like it's straight out of the
          Y2K era. But make sure to start with <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">the basics</a>! Keep on puffing! :D
        </p>
        <div id='mainBottom'>
          <div class="chatbox">
            <h3>the smoke lounge</h3>
            <!-- more to come -->
            <blockquote>
              <p>under construction :P</p>
            </blockquote>
          </div>
	`
const resource = `
        <h2>Resource</h2>
        <p>
          Welcome to the resource page! Here, I am continuously adding new
          materials for your use in web 1.0-esque designs, general web development stuff, and archives of other random stuff I like. If you
          think there's anything that could be added here, please
          <a href="/index.html#contact">send it my way</a>!
        </p>
        <hr>
        <h2>Guides</h2>
        <p>I am continuously adding new guides in the form of articles here. This serves not only as good practice for myself, but hopefully a decent resource for beginners to learn more about the tools of the trade in layman's terms!</p>
        <div class="resourceGuides">
          <a href=''>
            <div>
              <h2>HTML</h2>
            </div>
          </a>
          <a href=''>
            <div>
              <h2>CSS</h2>
            </div>
          </a>
          <a href=''>
            <div>
              <h2>JavaScript</h2>
            </div>
          </a>
        </div>
        <hr>
        <h2>Links</h2>
        <p>Below are links to pages, in which I have compiled external links to various websites which I think would be useful to an adventurous web developer. For example, going to the <a href='/resource/icons.html'>Icons</a> page links to a bunch of webpages that have compiled small images for use in your own sites.</p>
        <p>If any of the links are broken or don't seem to match up with what my description of them detailed, please head to <a href='/index.html#contact'>the contact page</a> and let me know!</p>
        <div class="resourceContainer">
          <a href="/html/resource/communities.html">
            <div>
              <h2>Communities</h2>
              <p>
                There's a lot of communities out there dedicated to the web 1.0
                design niche. Take a look at some and join 'em!
              </p>
            </div>
          </a>
          <a href="/html/resource/icons.html">
            <div>
              <h2>Icons</h2>
              <p>
                Icons are like the heartbeat of the old web! Luckily,
                there is a metric shit ton out there!
              </p>
            </div>
          </a>
          <a href="/html/resource/websites.html">
            <div>
              <h2>Websites</h2>
              <p>
                While there's a lot more websites going for the web 1.0
                aesthetic then most might imagine, following this link will
                mostly give you websites similar to Pipertext; ones that are
                aimed at helping you get resources!
              </p>
            </div>
          </a>
        </div>
	`
const articles = `
	<h2>Articles</h2>
        <p>
          The following list sorts all articles from newest to oldest. Article
          topics are broad, and some contain cute little programs!
        </p>
        <h3 id='articleSearchHeader'>Search for an article!</h3>
        <input type='text' id='articleSearch'>
        <ul id='articleList'>
        
        </ul>
	`
const quotes = `
	<h2>Quotes</h2>
        <p>
          This page is simply a collection of quotes which I really like. Enjoy!
        </p>
        <hr />
        <div id='quotes'>
          <blockquote>
            <div>
              “I wish it need not have happened in my time," said Frodo. "So do
              I," said Gandalf, "and so do all who live to see such times. But
              that is not for them to decide. All we have to decide is what to
              do with the time that is given us.”
            </div>
            <p>
              <b>J.R.R. Tolkien</b>,
              <cite>The Fellowship of the Ring</cite>
            </p>
          </blockquote>
        <blockquote>
            <div>
              “Anyone who has lost track of time when using a computer knows the propensity to dream, the urge to make dreams come true and the tendency to miss lunch.”
            </div>
            <p>
              <b>Tim Berners-Lee</b> interviewed by
              <cite>Internet World</cite>, 1994
            </p>
        </blockquote>
        </div>
	`
const about = `
	<h2>About</h2>
        <p>
          Once I got out of high school and started up college, I always
          imagined having a website chock-full of old-school web goodies, not
          just for myself, but for anyone with an interest in this bygone era.
          I'm still in college, studying computer science; I kept saying "not
          until I can create it efficiently," but what's the fun in that,
          anyways? It's supposed to be a little unoptimized, right?
        </p>
        <figure class='card' id='ricostay'>
          <img
            src='/res/img/ricostay.png'
            alt='A screencap of one of my first Web 1.0-themed website designs, Ricostay'
            id='ricostayImg'
          />
          <figcaption id='ricostayCard'>
            A screencap of Ricostay, an early webpage of mine
          </figcaption>
        </figure>
        <p class='floatLeftFix'>
          I've wanted a website with web 1.0 aesthetics for as long
          as I can remember. Pictured on the left is one of my first decent
          attempts at doing so - a
          <a
            href='https://developer.valvesoftware.com/wiki/Ricochet'
            target='_blank'
            rel='noopener noreferrer'
            >Ricochet</a
          >
          (obscure game by Valve) fan/information page. Ricostay was never
          actually hosted, but it was a cute little way for me to practice a bit
          of design.
        </p>
        <p>
          Pipertext is meant to be my display of appreciation for what the old web was. I was born in 2004; I unfortunately didn't
          get to experience the web in its infancy. Most consider Web 1.0 to
          have "ended" in 2004, but it's really an arbitrary definition.
          Nonetheless, I was an Annoying Orange kid. I grew up knowing the web
          in a way similar to what it is today: commercialized. Bland is a word that can honestly describe most sites today. I hate to be negative like that, but it's true! How often do you stumble across websites that make you go "cool", just through their design or content, without specifically scouting it out via a site like Neocities? This is known as <a href="https://lawsofux.com/jakobs-law/" target="_blank" rel="noopener noreferrer">Jakob's Law</a>, and it's an unfortunate consequence of a consumer-driven web, as opposed to a human-driven web, if that makes sense. That's not to say there is no place for familiarity in UI design, but to say that it has stripped most of the web of its charm is an understatement.
        </p>
        <figure class="card">
          <img
            src="/res/img/runningMan.png"
            id="runningMan"
            alt="The AOL running man!"
          />
          <figcaption id="runningManCard">The running man!</figcaption>
        </figure>
        <p>
          The nerdy and more wholesome nature of the young web seems foregone, but it does live on. It doesn't need to be so polarizing and patronizing, and we don't need to
          use the social media applications that encourage negativity. Every day, I see some asshole sharing his dumb opinion on how their thing is objectively superior to your thing, unneccesarily being as much of a jerk as possible, and it just makes you wonder: how does one decide, "yep, this is contributing something to society"? I'm ranting, but still. Life is too short to moan and shout how someone's favorite video game is dead, or whatever. Be kind. :&#41;
        </p>

        <p>
          One of my intentions for the site is to, archive and detail anything
          and everything related to the old web. Designs, components,
          pictures/backgrounds, old websites that are still running, old
          websites that have been archived in some way, modern depictions of web
          1.0, and everything in between. Again, compiling a lot of this sort of
          information onto one website is really interesting and helpful
          for me, but also hopefully for you!
        </p>
        <hr />
        <h2>The design of Pipertext</h2>
        <p>
          This website is designed desktop-first. It should work on your 320px phone. Just don't expect beauty. For
          me, anyways, I tend to find it easier to collapse a design than to
          expand it. Personal preference! I do make sure it's <em>legible</em>,
          but pretty? You be the judge! :-D
        </p>
        <p>
          I know I talk a lot about the old web here, but a lot of the design choices I make come from stuff like <a href="https://en.wikipedia.org/wiki/Bulletin_board_system" target="_blank" rel="noopener noreferrer">BBSes</a> as well as just general software/CLIs from the time around Y2K. Hence the monospace font(s) and whatnot. I also have a keen interest for knick-knacks, for lack of a better term. For example, the UTC timer on the sidebar, and blinking cursor when you are on <code>index.html</code>. I plan to implement much more; in particular, <em>the smoke lounge</em>, where surely nobody will ever type anything mean or vulgar.
        </p>
        <p>
          I would love it if you sent any resources you think belong here my
          way. Visit the <a href="/index.html#contact">contact page</a>. It would also be amazing if you had any thoughts about the website or things I should add/improve on that you could send my way!
        </p>
        <hr>
        <h2>About myself</h2>
        <p>
          I do indeed actually smoke a pipe. I know
          society tends to view all tobacco as a cancer-slingin' conglomerate, and that's probably for the best. It's not good for you. I can assure you, however: it is not
          addiction (I can quit any day, I swear). For me, at least, it's a hobby, similar in spirit to something like wine tasting or being a foodie. I don't like alcohol, and my taste in culinary is rather bland, so I found my way to pipes in one way or another.
        </p>
        <p>
          There's many reasons I enjoy it, but I think the main one is just that it gets me outside, and gives me something to enjoy while I observe nature for a while, or listen to a podcast. It's also a lot of fun trying new tobaccos, there's much more out there than one might imagine, given that the hobby seems more antique than anything else these days (I believe it's more popular in western Europe overall). I initially started with cigars, but these days I gravitate much more towards pipe smoking as the flavors seem much more varied as opposed to cigars. There's something personal and charming about filling up the chamber and lighting up. Plus, you usually smell like incense rather than cigarettes.
        </p>
        <p>
          It's hard to pinpoint where I developed a love for everything from 25-ish years ago and beyond. This website is just one example of my obsession, but I also am deeply fascinated with early 3D video games, in particular, those running on the <a href="https://developer.valvesoftware.com/wiki/GoldSrc" target="_blank" rel="noopener noreferrer">Goldsrc</a> engine. It feels like home, and I have no idea why.
        </p>
        <p>
          I was born in 2004 and grew up with stuff like the Wii and Xbox 360/PS3, when 3D was getting pretty far removed from its roots. Regardless, I have sunk far more hours into games made before I was born than ones which released after me. A particular favorite of mine is <a href="https://combineoverwiki.net/wiki/Deathmatch_Classic" target="_blank" rel="noopener noreferrer">Deathmatch Classic</a>, an obscure game from Valve meant to be a tribute to the original Quake. Sometimes I just boot it and run around solo in my favorite maps. I'm weird, but who isn't!?
        </p>
	`
const contact = `
          <h2>Contact</h2>
          <p>
            Below are a couple of ways to get in contact with me, if you ever need to
            (for whatever reason that may be... I know my devilish looks can be
            mystifying).
          </p>
          <p>
            The contact form below is probably the preferred method. You can alternatively directly contact me at either of the email addresses listed below.
          </p>
          <div>
            <address>
              <a href="mailto:contact@pipertext.net">contact@pipertext.net</a>
              <a href="mailto:cookiefortress@hotmail.com"
                >cookiefortress@hotmail.com</a
              >
            </address>
          </div>
          <p style="margin-top: 1rem">
            Yes, it's a Hotmail email address. No, I did not make it two decades
            ago when I was a fetus. I made it in 2025. I am tryharding the
            old-school aesthetic. Yes, I know I am super
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              >l33t</a
            >.
          </p>
          <h2>Contact Form</h2>
          <form id='contactForm' name='contactForm' method='POST' action="https://formspree.io/f/mzzgbbkn">
            <label for="userEmail">your email</label>
            <input type="email" id='userEmail' name='userEmail' placeholder='gfreeman@blackmesa.com' required>
            <label for="userComments">your beautiful comments</label>
            <textarea name="userComments" id="userComments" required placeholder="wow your website is gorgeous man wow" ></textarea>
            <button type="submit">submit!</button>
          </form>
	`

function renderContentFromHash() {
	switch (window.location.hash) {
		case "#homepage":
			main.innerHTML = homepage;
			main.id = "homeMain";
			break;
		case "#resource":
			main.innerHTML = resource;
			main.id = "resourceMain";
			break;
		case "#articles":
			main.innerHTML = articles;
			main.id = "articlesMain";
			listArticles();
			document.querySelector("#articleSearch").addEventListener("input", () => {
				searchArticles();
			})
			break;
		case "#quotes":
			main.innerHTML = quotes;
			main.id = "quotesMain";
			break;
		case "#about":
			main.innerHTML = about;
			main.id = "aboutMain";
			break;
		case "#contact":
			main.innerHTML = contact;
			main.id = "contactMain";
			break;
		default:
			window.location.hash = "#homepage"; // fallback
	}
}

window.addEventListener("DOMContentLoaded", () => {
	if (!window.location.hash) {
		window.location.hash = "#homepage";
	} else {
		renderContentFromHash();
	}
});

window.addEventListener("hashchange", renderContentFromHash);

document.querySelector("#navHome").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "homepage";
});
document.querySelector("#navResource").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "resource";
});
document.querySelector("#navArticles").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "articles";
});
document.querySelector("#navQuotes").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "quotes";
});
document.querySelector("#navAbout").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "about";
});
document.querySelector("#navContact").addEventListener("click", (e) => {
	e.preventDefault();
	window.location.hash = "contact";
	''
});

// articles page, list articles
function listArticles(searchValue) {
	const articleList = document.querySelector("#articleList");
	articleList.innerHTML = '';

	fetch('/html/articles/_articleList.json')
		.then(response => response.json())
		.then(articles => {
			articles.slice().reverse().forEach(article => {
				const [titleText, dateText, link] = Object.values(article);

				if (searchValue && !titleText.toLowerCase().includes(searchValue.toLowerCase())) {
					return;
				}

				const anchor = document.createElement("a");
				anchor.href = link;

				const title = document.createElement("span");
				title.classList.add("articleName");
				title.textContent = titleText;

				const date = document.createElement("time");
				date.classList.add("articleDate");
				date.textContent = dateText;

				const listItem = document.createElement("li");
				listItem.appendChild(title);
				listItem.appendChild(date);

				anchor.appendChild(listItem);
				articleList.appendChild(anchor);
			});
		})
		.catch(error => console.error('error loading JSON file!!! - ', error));
}

function searchArticles() {
	const searchValue = document.querySelector('input#articleSearch').value;
	console.log(searchValue)
	listArticles(searchValue);
}