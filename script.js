// Book opening animation on page load
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('book-opening-overlay').classList.add('opened');
    }, 300);
    setTimeout(function() {
        document.getElementById('book-opening-overlay').style.display = 'none';
    }, 1700);
});

toggleMenu = document.getElementById("toggle-menu");
activeNav = document.getElementById("nav-links");

toggleMenu.addEventListener("click", function() {
    if(activeNav.style.height === "0px" ){ 
        activeNav.style.height = "350px";
    }else{
        activeNav.style.height = "0px";
    }
});

// Typewriter effect for three about-pera paragraphs
const typewriterTexts = [
    "Hi, I’m <b>Mohammed Farsan</b>. I’m a front-end developer. I knew HTML, CSS, JavaScript, jQuery, and Bootstrap. I can make any website look beautiful and attractive.",
    "I love coding and design. I can make clean, modern, and mobile-friendly websites. I work hard/smart and always try new things to improve my skills.",
    "I believe in myself. Anything you imagine, I can try to build it"
];

function typeWriterEffect(elementId, text, delay, callback) {
    let i = 0;
    function type() {
        if (i < text.length) {
            // Handle HTML tags
            if (text[i] === "<") {
                let close = text.indexOf(">", i);
                element.innerHTML += text.substring(i, close + 1);
                i = close + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, 30);
        } else if (callback) {
            setTimeout(callback, delay);
        }
    }
    const element = document.getElementById(elementId);
    element.innerHTML = "";
    type();
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriterEffect("typewriter1", typewriterTexts[0], 400, function() {
        typeWriterEffect("typewriter2", typewriterTexts[1], 400, function() {
            typeWriterEffect("typewriter3", typewriterTexts[2], 0);
        });
    });
});

function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Reveal elements on scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-animate');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight - 60 && rect.bottom > 60) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        firstName: document.getElementById('firstName').value.trim(),
        lastName: document.getElementById('lastName').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim()
    };
    console.log(formData); // You can replace this with your own logic (e.g., AJAX)
    alert('Thank you for contacting! (Check the console for submitted data)');
    this.reset();
});

document.getElementById('ressume').addEventListener('click', function() {
    const link = document.createElement('a');
    link.href = '/pdf-folder/Farsan-Front-End-Resume.pdf'; // Change to your actual PDF file name
    link.download = 'Farsan-MHD-Resume.pdf';  // The name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});