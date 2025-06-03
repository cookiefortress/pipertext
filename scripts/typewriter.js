(function () {
  // select the h1 with class "pipertext"
  let header = document.querySelector(".pipertext");

  // makes pipertext invisible
  function makeInvis() {
    header.style.visibility = "hidden";
  }
  // makes pipertext visible
  function makeVis() {
    header.style.visibility = "visible";
  }
  // makes pipertext blink (invis, vis, invis etc.)
  function blink() {
    for (let i = 0; i < 2; i++) {
      setTimeout(() => makeInvis(), i * 600);
      setTimeout(() => makeVis(), i * 600 + 300);
    }
  }

  async function typewriter(str) {
    header.textContent = "";
    for (let i = 0; i < str.length; i++) {
      await new Promise((resolve) => {
        setTimeout(() => {
          header.textContent += str[i];
          if (str[i] == ">") header.textContent += " ";
          resolve();
        }, 200);
      });
    }
    setTimeout(() => {
      blink();
    }, 200);
  }

  const pipertext = ">pipertext";
  typewriter(pipertext);
})();