function load() {
  // Hamburger Menu
  const btnHamburger = document.querySelector("#btnHamburger");
  const overlay = document.querySelector('.overlay');
  const fadeEls = document.querySelectorAll(".has-fade");
  const span = document.querySelectorAll(".span");
  
  // Arrow Buttons
  const arrowLeft = document.querySelector(".arrows__toggle--left-1");
  const arrowRight = document.querySelector(".arrows__toggle--right-1");
  const arrowLeftDt = document.querySelector(".arrows__toggle--left-2");
  const arrowRightDt = document.querySelector(".arrows__toggle--right-2");
  const slides = document.querySelectorAll(".slide");
  const slidesDesktop = document.querySelectorAll(".slide-dt");
  const heroText = document.querySelectorAll(".hero__toggle--content");
  
  /////////////////////////////////////////////////////////////
  
  let activeSlide = 0;
  let maxSlide = slides.length;
  let activeText = 0;
  let maxText = heroText.length;
  
  //// Functions ////
  
  // Slider //
  function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove("active"));
    slides[activeSlide].classList.add("active");
  };
  
  function setActiveSlideDt() {
    slidesDesktop.forEach((slide) => slide.classList.remove("active"));
    slidesDesktop[activeSlide].classList.add("active");
  };
  
  function setActiveText() {
    heroText.forEach((text) => text.classList.remove("active"));
    heroText[activeText].classList.add("active");
  };
  
  function nextSlide() {
    if (activeSlide === maxSlide - 1 && activeText === maxText - 1) {
      activeSlide = 0;
      activeText = 0;
    } else {
      activeSlide++;
      activeText++;
    }
    setActiveSlide();
    setActiveSlideDt();
    setActiveText();
  }
  
  function prevSlide() {
    if (activeSlide === 0 && activeText === 0) {
      activeSlide = maxSlide - 1;
      activeText = maxText - 1;
    } else {
      activeSlide--;
      activeText--;
    }
    setActiveSlide();
    setActiveSlideDt();
    setActiveText();
  }
  
  // Hamburger Menu //
  function toggleMenu() {
    if (btnHamburger.classList.contains("open")) {
      btnHamburger.classList.remove("open");
      fadeEls.forEach((el) => {
        el.classList.remove("fade-in");
        el.classList.add("fade-out");
      });
      
      // Span Color Change
      span.forEach((el) => {
        el.style.background = "white";
      });
    } else {
      btnHamburger.classList.add("open");
      fadeEls.forEach((el) => {
        el.classList.remove("fade-out");
        el.classList.add("fade-in");
      });
      
      // Span Color Change
      span.forEach((el) => {
        el.style.background = "#a1a1a1";
      });
    }
  };
  
  //// Events ////
  //// Hamburger Menu ////
  btnHamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);
  
  // Arrow Slider //
  arrowLeft.addEventListener("click", prevSlide);
  arrowRight.addEventListener("click", nextSlide);
  arrowLeftDt.addEventListener("click", prevSlide);
  arrowRightDt.addEventListener("click", nextSlide);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
load();
  