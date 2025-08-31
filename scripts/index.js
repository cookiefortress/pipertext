import { nav } from '/scripts/nav.js';
import { layout } from '/scripts/layout.js';
import { themes } from '/scripts/themes.js';

import { typewriter } from '/scripts/typewriter.js';

layout();
nav();
themes();

if(window.location.hash === '#homepage') {
	typewriter("#pageHeaderName", "> pipertext", 200, true, true)
}