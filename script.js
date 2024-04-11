function showpage(button, newpage) {
  buttonid = button.id;

  allpages = document.getElementsByClassName("page show");

  for (let page of allpages) {
    document.getElementById(page.id).className = "page no-show";
  }
  document.getElementById(newpage).className = "page show";
}

const homeHero = document.getElementById("home-hero");

function change1(div) {
  div.style.backgroundImage = "url(images/andie-lemonade-top.jpg)";
}

function change2(div) {
  div.style.backgroundImage = "url(images/andie-pink-lemonade-top.jpg)";
}

function change3(div) {
  div.style.backgroundImage = "url(images/andie-chocolate-top.jpg)";
}

function slideshow() {
  change1(homeHero);
  setTimeout(function () {
    change2(homeHero);
    setTimeout(function () {
      change3(homeHero);
      setTimeout(slideshow, 5000);
    }, 5000);
  }, 5000);
}

slideshow();
