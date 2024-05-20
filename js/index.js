//button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    let scrollButton = document.getElementById("scrollButton");

    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }

    if (document.body.scrollTop > 10570 || document.documentElement.scrollTop > 10570) {
        scrollButton.classList.add("active");
    } else {
        scrollButton.classList.remove("active");
    }
}

//background

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    let parallaxElement = document.getElementById('parallax');
    parallaxElement.style.backgroundPositionY = 23 + (scrollPosition / 17) + '%'
});


//menu
let prevScrollpos = window.pageYOffset;

window.addEventListener('scroll', function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || currentScrollPos <= 1150) {
        document.getElementById("menu").style.top = "0";
        document.getElementById("menu").style.borderBottom = "solid 1 black";
    } else {
        document.getElementById("menu").style.top = "-100px"; // skrytí navbaru
    }
    prevScrollpos = currentScrollPos;
});

//svg-line

let svgObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let path = document.getElementById("my-path")
            path.style.animation = "draw 8s forwards"
            console.log("Animace spuštěna")
            observer.unobserve(entry.target) // Zastavit sledování po spuštění animace
        }
    })
})

svgObserver.observe(document.getElementById("my-svg"))

//growing steps
let stepsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let path = document.getElementById("path-steps")
            path.style.animation = "draw 7s forwards"
            observer.unobserve(entry.target)
        }
    })
})

stepsObserver.observe(document.getElementById("my-steps"))

// scrolling circle
let timer;

window.addEventListener('scroll', function () {
    let circle = document.getElementById("circle-about")
    circle.style.transform += "rotate(1deg)"
    clearTimeout(timer);
    timer = setTimeout(() => {
        circle.style.transform = ""
    }, 12000)
});

//show stars
let starsObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let path = document.getElementById("stars-small")
            path.style.width = "13" + "%"
            observer.unobserve(entry.target)
        }
    })
})

starsObserver.observe(document.getElementById("my-stars"))

window.addEventListener('scroll', function() {
    let scroll = window.scrollY;
    let parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = 'translateY(' + scroll * -0.5 + 'px)';
});
