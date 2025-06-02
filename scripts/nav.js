const main = document.querySelector("main");
const homepage = `
        <h2>Homepage</h2>
        <p>
          Pipertext is a love letter to the old web; when it seemed
          to be a never-ending adventure through others' little corners of the grand series of tubes you're viewing this website through. I was personally
          born too late to have seen it myself, but regardless I have become
          very fond of the aesthetics and culture of the time.
          </p><figure class="card">
            <img src="/res/img/pheonix.png" alt="A picture of Netscape Navigator in 1995.">
            <figcaption>
              The original
              <a href="https://en.wikipedia.org/wiki/Firefox#History" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a>
              logo from 2002, when it was still named <i>Pheonix</i>, and then
              later <i>Firebird</i>, before rebranding to <i>Firefox</i>
            </figcaption>
          </figure>
        <p>
          The early web was a human experience. Compared to today, anyways; websites weren't so cookie cutter and lifeless, and websites made by ordinary people were the majority, showing
          off their interests, passions, and ability to write killer sites. I've grown up in
          a world where the web is primarily accessed through social media;
          divisive content designed to keep you addicted is the norm. This site is my contribution to the human-centric web!
        </p>
        <p>
          I've compiled
          <a href="#resource">lots of resources</a> if you're
          interested in making your website look like it's straight out of the
          Y2K era. But I'm sure many would agree that the best strategy for that is just to <a href="https://www.theodinproject.com/" target="_blank" rel="noopener noreferrer">dive in</a>. Keep on puffing! :D
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
        <p>I am continuously adding new guides in the form of articles here. This serves not only as good practice for myself, but hopefully a decent resource for beginners to learn more about the tools of the trade in layman's terms!</p>
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
                there is a metric shit ton out there!
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
        <a href='/html/dynamicUI.html'>
            <li>
              <span class='articleName'>Project - Dynamic UI</span>
              <time class='articleDate'>2025/05/08</time>
            </li>
          </a>
          <a href='/html/tictactoeRevisited.html'>
            <li>
              <span class='articleName'>Project - Tic Tac Toe Revisited</span>
              <time class='articleDate'>2025/04/25</time>
            </li>
          </a>
          <a href='/html/todo.html'>
            <li>
              <span class='articleName'>Project - Todo List</span>
              <time class='articleDate'>2025/04/20</time>
            </li>
          </a>
          <a href='/html/tictactoe.html'>
            <li>
              <span class='articleName'>Project - Tic Tac Toe</span>
              <time class='articleDate'>2025/04/12</time>
            </li>
          </a>
          <a href='/html/library.html'>
            <li>
              <span class='articleName'>Project - Library</span>
              <time class='articleDate'>2025/04/10</time>
            </li>
          </a>
          <a href='/html/semanticHTML.html'>
            <li>
              <span class='articleName'>The beauty of semantic HTML</span>
              <time class='articleDate'>2025/04/08</time>
            </li>
          </a>
          <a href='/html/microsoft50.html'>
            <li>
              <span class='articleName'>50 years of Microsoft</span>
              <time class='articleDate'>2025/04/06</time>
            </li>
          </a>
          <a href='/html/touchPipertext.html'>
            <li>
              <span class='articleName'>touch pipertext.ptml</span>
              <time class='articleDate'>2025/04/06</time>
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
          I would love it if you sent any resources you think belong here my
          way. The <a href="contact.html">contact page</a> lists two email
          addresses you can contact me at.
        </p>
        <p>
          I do indeed actually smoke a pipe. I know
          society tends to view all tobacco as a cancer-slingin' conglomerate, and that's maybe for the best. It's not good for you. I can assure you, however: it is not
          addiction (I can quit any day, I swear).
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
          <form id='contactForm' name='contactForm' method='POST' onsubmit="event.preventDefault(); window.location.href = '/html/thx.html';" action="https://formspree.io/f/mzzgbbkn">
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