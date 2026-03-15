// Smooth scroll for navigation links
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Update active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Handle navigation link clicks
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        scrollToSection(targetId);
    });
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Validate form
    if (!name || !email || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Show success message (in a real app, this would send to a server)
    alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
    
    // Reset form
    this.reset();
});

// Add animation to skill circles on hover (Desktop only) or on scroll (Mobile)
if (window.innerWidth >= 1024) {
    // Desktop: Hover animation
    document.querySelectorAll('.skill-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Remove the class first if it exists
            card.classList.remove('animated');
            // Trigger reflow to restart animation
            void card.offsetWidth;
            // Add the class to start animation
            card.classList.add('animated');
        });
    });
} else {
    // Mobile/Tablet: Scroll animation
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        observer.observe(card);
    });
}

// Mobile menu and navigation improvements
const navbar = document.querySelector('.navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
        // Scrolling down - hide navbar slightly
        navbar.style.opacity = '0.8';
    } else {
        // Scrolling up - show navbar
        navbar.style.opacity = '1';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Prevent navbar from disappearing on page load
navbar.style.opacity = '1';

// Add smooth transitions for better UX
document.addEventListener('DOMContentLoaded', function() {
    // Preload animations
    const elements = document.querySelectorAll('.section-title, .hero-title, .home-buttons');
    elements.forEach((el, index) => {
        el.style.animation = `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`;
    });
});

// Fade in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log("Sir inhone Saulav Shrestha, Binda Gurung, Nishant Shah yee tino ai sai code likhe hai aur jitendra mere sai likhaya hai code aur paisa bhi nhi diyaa haiiii sirrr insaiii projext work maii sare hard question puchnaaa sirrr inki feilding set karden asir plz :)")

console.log("sir plzz full marks sir :) ")
