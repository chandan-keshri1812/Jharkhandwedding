// console.log("Hello, world!");

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');


});

window.onscroll = () => {
    navLinks.classList.remove("nav-active");
};




// /_________________________________

const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        aboutSection.classList.add("show");
    }
});
// /_____________________________

const cards = document.querySelectorAll(".card");
const title = document.getElementById("detail-title");
const desc = document.getElementById("detail-desc");
const bg = document.getElementById("bgBlur");

let current = 0;
let startX = 0;
let isDragging = false;
let autoSlide;

/* UPDATE UI */
function updateCarousel() {
    cards.forEach((card, index) => {
        card.className = "card";

        if (index === current) {
            card.classList.add("active");
        } else if (index === current - 1) {
            card.classList.add("left1");
        } else if (index === current - 2) {
            card.classList.add("left2");
        } else if (index === current + 1) {
            card.classList.add("right1");
        } else if (index === current + 2) {
            card.classList.add("right2");
        }
    });

    /* UPDATE DETAILS */
    const activeCard = cards[current];
    title.innerText = activeCard.dataset.title;
    desc.innerText = activeCard.dataset.desc;

    /* UPDATE BACKGROUND */
    const img = activeCard.querySelector("img").src;
    bg.style.backgroundImage = `url(${img})`;
}

/* NEXT / PREV */
function next() {
    current = (current + 1) % cards.length;
    updateCarousel();
}
function prev() {
    current = (current - 1 + cards.length) % cards.length;
    updateCarousel();
}

/* AUTO SLIDE */
function startAuto() {
    autoSlide = setInterval(next, 3000);
}
function stopAuto() {
    clearInterval(autoSlide);
}

/* DRAG / SWIPE */
const gallery = document.getElementById("gallery");

gallery.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    stopAuto();
});

gallery.addEventListener("mouseup", (e) => {
    if (!isDragging) return;
    let diff = e.clientX - startX;

    if (diff > 50) prev();
    else if (diff < -50) next();

    isDragging = false;
    startAuto();
});

/* TOUCH SUPPORT */
gallery.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    stopAuto();
});

gallery.addEventListener("touchend", (e) => {
    let diff = e.changedTouches[0].clientX - startX;

    if (diff > 50) prev();
    else if (diff < -50) next();

    startAuto();
});

/* CLICK */
cards.forEach((card, index) => {
    card.addEventListener("click", () => {
        current = index;
        updateCarousel();
    });
});

/* INIT */
updateCarousel();
startAuto();


// ------------------
const boxes = document.querySelectorAll(".package-box");

boxes.forEach(box => {
    box.addEventListener("click", () => {

        boxes.forEach(b => b.classList.remove("active"));

        box.classList.add("active");
    });
});


// --------------------------
function changeTheme(theme) {
    document.body.className = theme;
}


//  service section 
const servicecards = document.querySelectorAll(".service-card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

servicecards.forEach(card => {
    observer.observe(card);
});




// ----------------------------
//  why choose us 
const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

whyCards.forEach(card => {
    whyObserver.observe(card);
});


// _______________________

const track = document.querySelector(".testimonial-track");
const cardss = document.querySelectorAll(".testimonial-card");

let index = 0;

function slideTestimonials() {
    index++;
    if (index >= cardss.length) index = 0;

    const cardWidth = cards[0].offsetWidth + 20;
    track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(slideTestimonials, 3000);

/* Scroll Animation */
const observers = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observers.observe(card));


// video showcase 

const videoCards = document.querySelectorAll(".video-card");
const modal = document.getElementById("videoModal");
const iframe = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close-btn");

/* Open Modal */
videoCards.forEach(card => {
  card.addEventListener("click", () => {
    iframe.src = card.getAttribute("data-video");
    modal.classList.add("active");
  });
});

/* Close Modal */
closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
  iframe.src = "";
});

/* Close on outside click */
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
    iframe.src = "";
  }
});

/* Scroll Animation */
const vsobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

videoCards.forEach(card => vsobserver.observe(card));



//  process 
const steps = document.querySelectorAll(".process-step");

const processObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

steps.forEach(step => processObserver.observe(step));
