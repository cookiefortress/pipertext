import { nav } from '/scripts/nav.js';
import { layout } from '/scripts/layout.js';
import { themes } from '/scripts/themes.js';
import { typewriter } from '/scripts/typewriter.js';

document.querySelector("header").id = 'pageHeader';
document.querySelector("nav").id = 'pageNavbar';
document.querySelector("aside").id = 'pageSidebar';
document.querySelector("main").id = 'pageMain';
document.querySelector("footer").id = 'pageFooter';

layout();
themes();

if(!window.location.hash && window.location.pathname.endsWith('/')) {
	window.location.hash = '#homepage';
}

if(window.location.hash === '#homepage'
	|| window.location.hash === '#articles'
	|| window.location.hash === '#resource'
	|| window.location.hash === '#quotes'
	|| window.location.hash === '#about'
	|| window.location.hash === '#contact'
) {
	nav();
}

if(window.location.hash === '#homepage') {
	typewriter("#pageHeaderName", "> pipertext", 200, true, true, true);
}
else {
	typewriter("#pageHeaderName", "> pipertext", 5, false, true);
}