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


function showDescription(description) {
  document.getElementById('defaultDescription').style.display = "none";
  const previousDescription = document.getElementsByClassName("montserrat-regular description show")[0];
  if (previousDescription) {
    previousDescription.className = "montserrat-regular description no-show";
  }

  document.getElementById(description).className = "montserrat-regular description show";
}

function addToCart(cookie) {
  console.log(cookie);
  order[cookie] ++;
  console.log(order);
  toggleHidden('buy-counter');
  updateCounter();
  updateOrderSummary();
  updateOrderTotal();
}

function toggleHidden(thing) {
  if (document.getElementById(thing).className = "buy-counter no-show") {
    document.getElementById(thing).className = "buy-counter show";
  } else {
    document.getElementById(thing).className = "buy-counter no-show";
  }
}

function updateCounter() {
  const counter = document.getElementById('buy-counter');
  counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

const order = {
  'Blueberry Twirl': 0,
  'Chocolate Chip': 0,
  'Chocolate': 0,
  'Craisin': 0,
  'Frosted Stripes': 0,
  'Macadamia Nut': 0,
  'Peanut Butter': 0,
  'Snickerdoodle': 0
}

function updateOrderSummary() {
  let orderSummary = '<br>';
  for (let cookie in order) {
    if (order[cookie] !== 0) {
      orderSummary += `${cookie}: ${order[cookie]} <br>`;
    }
  }
  document.getElementById('order-summary').innerHTML = orderSummary;
}

function updateOrderTotal() {
  let orderTotal = 0.00;
  for (let cookie in order) {
    if (order[cookie] !== 0) {
      orderTotal += 1.25;
    }
  }
  document.getElementById('order-total').innerHTML = orderTotal;
}