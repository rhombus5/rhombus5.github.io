/* --- Navigation & UI --- */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

// Toggle Mobile Menu
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  
  // Animate burger icon
  const bars = hamburgerBtn.querySelectorAll('.bar');
  if (isOpen) {
    bars[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
    bars[1].style.opacity = '0';
    bars[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
  } else {
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  }
});

// Close menu when clicking a link
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    // reset burger icon
    const bars = hamburgerBtn.querySelectorAll('.bar');
    bars[0].style.transform = 'none';
    bars[1].style.opacity = '1';
    bars[2].style.transform = 'none';
  });
});

/* --- Cart Logic --- */
let cartCount = 0;
const cartBadge = document.getElementById('cartBadge');
const buyButtons = document.querySelectorAll('.deal-buy-btn');

buyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    cartCount++;
    cartBadge.textContent = cartCount;
    
    // Add a bounce animation to the badge
    cartBadge.style.transform = 'scale(1.5)';
    setTimeout(() => {
      cartBadge.style.transform = 'scale(1)';
    }, 200);

    // Optional: Toast notification (styled alert)
    const btnText = btn.textContent;
    btn.textContent = "Added!";
    btn.style.backgroundColor = "#2e7d32";
    setTimeout(() => {
      btn.textContent = btnText;
      btn.style.backgroundColor = ""; // reset
    }, 1500);
  });
});

/* --- Carousel Logic --- */
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;
let autoPlayInterval;

function showSlide(index) {
  // Wrap around
  if (index >= slides.length) currentIndex = 0;
  else if (index < 0) currentIndex = slides.length - 1;
  else currentIndex = index;

  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  slides[currentIndex].classList.add('active');
  dots[currentIndex].classList.add('active');
}

function nextSlide() { showSlide(currentIndex + 1); }
function prevSlide() { showSlide(currentIndex - 1); }
function jumpToSlide(index) { showSlide(index); }

// Event Listeners
nextBtn.addEventListener('click', () => {
  nextSlide();
  resetAutoPlay();
});

prevBtn.addEventListener('click', () => {
  prevSlide();
  resetAutoPlay();
});

// Auto Play logic
function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 5000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

// Pause on hover
const carouselContainer = document.querySelector('.carousel-container');
carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
carouselContainer.addEventListener('mouseleave', startAutoPlay);

// Initialize
startAutoPlay();

/* --- Smooth Scroll for Anchors --- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if(targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if(targetElement){
        const headerOffset = 70;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
        });
    }
  });
});