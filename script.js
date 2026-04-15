console.log("Hello, world!");

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');


});

window.onscroll = () => {
    navLinks.classList.remove("nav-active");
};



console.log("about section start, ");

// /_________________________________

const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
        aboutSection.classList.add("show");
    }
});
// /_____________________________


// ------------------
console.log("package box section start, ");

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
console.log("service section start, ");

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
console.log("why chooose us section start, ");

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
console.log("testimonial section start, ");


const track = document.querySelector(".testimonial-track");
const cardss = document.querySelectorAll(".testimonial-card");

let index = 0;

function slideTestimonials() {
    index++;
    if (index >= cardss.length) index = 0;

    const cardWidth = cardss[0].offsetWidth + 20;
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

cardss.forEach(card => observers.observe(card));



// --------------------------------------------
// video showcase 
console.log("video showcase section start, ");


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


console.log("video  middle showcase section start, ");

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

console.log("video 2nd midddl section start, ");


/* Scroll Animation */
const vsobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

videoCards.forEach(card => vsobserver.observe(card));


// -------------------------------------------
//  process  section 
console.log("process section start, ");

const steps = document.querySelectorAll(".process-step");

const processObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

steps.forEach(step => processObserver.observe(step));
console.log("hello chandan")



// --------------------------------------------
//  galley section for photo
console.log("gallecy sec slide  section start, ");

const tracksec = document.querySelector(".gallery-tracksec");

let speed = 1;

function animate() {
    tracksec.style.transform = `translateX(-${speed}px)`;
    speed += 0.3;
    requestAnimationFrame(animate);
}

// Optional (uncomment if you want JS control instead of CSS)
animate();


// --------------------------



//  call to action section

console.log("call to action  section start, ");

// Set target date (EDIT THIS)
const targetDate1 = new Date("2026-04-20T23:59:59").getTime();
// console.log("hello chandan")
console.log(targetDate1);

const timer = setInterval(() => {
    const now = new Date().getTime();
    const diff = targetDate1 - now;

    if (diff <= 0) {
        clearInterval(timer);
        document.querySelector(".countdowncta").innerHTML = "Offer Expired!";
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}, 1000);




// -------------------------------------About section  -----------------------------

