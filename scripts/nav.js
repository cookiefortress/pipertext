const main = document.querySelector("main");
const homepage = `
        <h2>Homepage</h2>
        <p>
          Pipertext is my love letter to the old web; a time when the net seemed
          to be an underground honey hole with a vast library of talented,
          creative people showing off the things they love. I was personally
          born too late to have seen it myself, but I nonetheless have grown
          very fond of the aesthetics and "society" of the time!
          </p><figure class="card">
            <img src="/img/pheonix.png" alt="A picture of Netscape Navigator in 1995.">
            <figcaption>
              The original
              <a href="https://en.wikipedia.org/wiki/Firefox#History" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
              logo from 2002, when it was still named <i>Pheonix</i>, and then
              later <i>Firebird</i>, before rebranding to <i>Firefox</i>
            </figcaption>
          </figure>
        <p></p>
        <p>
          The early web represented a <em>human</em> experience. It wasn't
          without its flaws, but what is? Compared to today, it seems so
          beautiful; pages handcrafted by people of all walks of life, showing
          off their interests, passions, and awesome websites. I've grown up in
          a world where the web is primarily accessed through social media;
          divisive content designed to keep you addicted is the name of the
          game. This site is my contribution to the fun &amp; human-centric net!
        </p>
        <p>
          I've compiled
          <a href="resource/resource.html">lots of resources</a> if you're
          interested in making your website look like it's straight out of the
          Y2K era as well. Keep on puffing! :D
        </p>
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
          materials for your use in web 1.0-esque designs, and other general web development stuff. If you
          think there's anything that could be added here, please
          <a href="/index.html#contact">send it my way</a>!
        </p>
        <hr>
        <h2>Guides</h2>
        <p>I am continuously adding new guides in the form of articles here. This serves not only as good practice for myself, but hopefully a decent resource for beginners to learn more about the tools of the trading in layman's terms!</p>
        <hr>
        <div id="resourceContainer">
          <a href="/resource/communities.html">
            <div>
              <h2>Communities</h2>
              <p>
                There's a lot of communities out there dedicated to the web 1.0
                design niche. Take a look at some and join 'em!
              </p>
            </div>
          </a>
          <a href="/resource/icons.html">
            <div>
              <h2>Icons</h2>
              <p>
                88x31 icons are like the heartbeat of the old web! Luckily,
                there is a metric <em>shit</em> ton out there!
              </p>
            </div>
          </a>
          <a href="/resource/websites.html">
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
        <ul>
        <a href="/html/dynamicUI.html">
            <li>
              <span class="articleName">Project - Dynamic UI</span>
              <time class="articleDate">2025/05/08</time>
            </li>
          </a>
          <a href="/html/tictactoeRevisited.html">
            <li>
              <span class="articleName">Project - Tic Tac Toe Revisited</span>
              <time class="articleDate">2025/04/25</time>
            </li>
          </a>
          <a href="/html/todo.html">
            <li>
              <span class="articleName">Project - Todo List</span>
              <time class="articleDate">2025/04/20</time>
            </li>
          </a>
          <a href="/html/tictactoe.html">
            <li>
              <span class="articleName">Project - Tic Tac Toe</span>
              <time class="articleDate">2025/04/12</time>
            </li>
          </a>
          <a href="/html/library.html">
            <li>
              <span class="articleName">Project - Library</span>
              <time class="articleDate">2025/04/10</time>
            </li>
          </a>
          <a href="/html/semanticHTML.html">
            <li>
              <span class="articleName">The beauty of semantic HTML</span>
              <time class="articleDate">2025/04/08</time>
            </li>
          </a>
          <a href="/html/microsoft50.html">
            <li>
              <span class="articleName">50 years of Microsoft</span>
              <time class="articleDate">2025/04/06</time>
            </li>
          </a>
          <a href="/html/touchPipertext.html">
            <li>
              <span class="articleName">touch pipertext.ptml</span>
              <time class="articleDate">2025/04/06</time>
            </li>
          </a>
        </ul>
	`
const quotes = `
	<h2>Quotes</h2>
        <p>
          This page is simply a collection of quotes which I really like. Enjoy!
        </p>
        <hr />
        <div id="quotes">
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
          anyways? It's supposed to be a little unoptimized, right?!
        </p>
        <figure class="card" id="ricostay">
          <img
            src="/img/ricostay.png"
            alt="A screencap of one of my first Web 1.0-themed website designs, Ricostay"
            id="ricostayImg"
          />
          <figcaption id="ricostayCard">
            A screencap of Ricostay, an early webpage of mine
          </figcaption>
        </figure>
        <p class="floatLeftFix">
          Regardless, I've wanted a website with web 1.0 aesthetics for as long
          as I can remember. Pictured on the left is one of my first decent
          attempts at doing so - a
          <a
            href="https://developer.valvesoftware.com/wiki/Ricochet"
            target="_blank"
            rel="noopener noreferrer"
            >Ricochet</a
          >
          (obscure game by Valve) fan/information page. Ricostay was never
          actually hosted, but it was a cute little way for me to practice a bit
          of design. If you couldn't tell yet, I absolutely love
          <a
            href="https://en.wikipedia.org/wiki/Consolas"
            target="_blank"
            rel="noopener noreferrer"
            >Consolas</a
          >.
        </p>
        <p>
          Pipertext is meant to be my love letter to the old web. As is
          mentioned on the homepage, I was born in 2004. I unfortunately didn't
          get to experience the Net in its infancy. Most consider web 1.0 to
          have "ended" in 2004, but it's really an arbitrary definition.
          Nonetheless, I was an Annoying Orange kid. I grew up knowing the web
          in a way similar to what it is today: commercialized, and largely
          centralized, too.
        </p>
        <figure class="card">
          <img
            src="/img/runningMan.png"
            id="runningMan"
            alt="The AOL running man!"
          />
          <figcaption id="runningManCard">The running man!</figcaption>
        </figure>
        <p>
          The nerdy and more wholesome nature of the young web is something I
          missed out on, but I strongly believe it can live on. We don't need to
          make this place so polarizing and patronizing, and we don't need to
          use the social media applications that encourage it. Today, the Web is
          seen as a negative thing, and it <em>often is</em>, but it doesn't
          need to be that way. It wasn't initially; don't get me wrong, there's
          three things you can't escape: death, taxes, and dickheads on the
          Internet. We can nonetheless work to support a more productive and
          positive community on the Web.
        </p>

        <p>
          The goal is for Pipertext to reference, archive, and detail anything
          and everything related to the old web. Designs, components,
          pictures/backgrounds, old websites that are still running, old
          websites that have been archived in some way, modern depictions of web
          1.0, and everything in between. Again, compiling a lot of this sort of
          information onto one website will be really interesting and helpful
          for me, but also, hopefully, for you.
        </p>
        <p>
          I enjoy modern depictions of the style about as much as authentic old
          ones. What I mean is that I also want to archive things I see as
          uplifting and innocent; perhaps these are not old websites, nor even
          modern websites made with the style in mind, just those that try to
          spread a positive message of some kind. To me, that seems in line with
          the aura of the pre-2010s web, too.
        </p>
        <hr />
        <h2>A Few Notes</h2>
        <p>
          Firstly, this website is designed desktop-first. As described above, I
          really dislike the polarizing nature of the current web; I can only
          imagine the emails that will one day find themselves in my inbox due
          to a decision like that one. For the purposes of Pipertext, there's
          really not much reason to have amazing support on smaller screens. For
          me, anyways, I tend to find it easier to collapse a design than to
          expand it. Personal preference! I do make sure it's <em>legible</em>,
          but pretty? You be the judge! :-D
        </p>
        <p>
          Secondly, you'll notice that in the footer, I have only validated my
          CSS through W3C's website. Their HTML validator
          <strong>hates</strong> fun, and therefore <code>&lt;marquee&gt;</code> tags.
          So it won't pass Pipertext. Because I am stubborn, as well as a bit
          opinionated on whether or not HTML tags should be deprecated (don't
          break the web), I utterly refuse to rid of my
          <code>&lt;marquee&gt;</code> tags. Sorry anti-fun dudes.
        </p>
        <p>
          I would love it if you sent any resources you think belong here my
          way. The <a href="contact.html">contact page</a> lists two email
          addresses you can contact me at.
        </p>
        <p>
          Because I am certain that the brave netizens who scour these lands
          will ask at some point: I do indeed actually smoke a pipe. I know
          society tends to lump all tobacco together now, and that may be for
          the best! It's not good for you. But I can assure you it is not
          addiction (I can quit any day I swear), and I do not inhale. :D
        </p>
        <img
          src="/gif/smiley_smoke.gif"
          alt="A little smiley, seemingly enjoying a cigarette"
        />
	`
const contact = `
          <h2>Contact</h2>
          <p>
            There a couple of ways to get in contact with me, if you need to
            (for whatever reason that may be... I know my devilish looks can be
            mystifying).
          </p>
          <p>
            The first following email address is probably the most ideal way,
            but it really doesn't matter. It automatically forwards emails to my
            primary email. If you have any recommendations, questions, or
            comments otherwise, I will reply to you from my primary email
            address which is listed below as well.
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
});