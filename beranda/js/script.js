document.addEventListener('DOMContentLoaded', function() {
    // Inisialisasi AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth scrolling untuk navbar links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navbar aktif pada scroll
    window.addEventListener('scroll', function() {
        let scrollPosition = window.pageYOffset;
        document.querySelectorAll('section').forEach(section => {
            if (scrollPosition >= section.offsetTop - 60 && scrollPosition < section.offsetTop - 60 + section.offsetHeight) {
                let currentId = section.attributes.id.value;
                removeAllActiveClasses();
                addActiveClass(currentId);
            }
        });
    });

    function removeAllActiveClasses() {
        document.querySelectorAll(".navbar-nav a").forEach(el => {
            el.classList.remove("active");
        });
    }

    function addActiveClass(id) {
        let selector = `.navbar-nav a[href="#${id}"]`;
        document.querySelector(selector).classList.add("active");
    }
});


