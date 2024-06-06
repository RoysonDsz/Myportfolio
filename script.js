// Menu toggle
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Smooth scrolling
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    // Close menu on click (for mobile view)
    navbar.classList.remove('active');
  });
});

// Scroll reveal
ScrollReveal().reveal('.home-content, .about-photo, .about-details, .work, .contact', {
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

// Typed.js for multiple text
new Typed('.multiple-text', {
  strings: ['Web Developer', 'Programmer', 'Tech Enthusiast'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

// Tab functionality
const tabLinks = document.querySelectorAll('.tab-links');
const tabContents = document.querySelectorAll('.tab-contents');

tabLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('.tab-links.active-link').classList.remove('active-link');
    document.querySelector('.tab-contents.active-tab').classList.remove('active-tab');
    link.classList.add('active-link');
    document.getElementById(link.getAttribute('data-tab')).classList.add('active-tab');
  });
});

// Back to top button
const footerIconTop = document.querySelector('.footer-iconTop a');
footerIconTop.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector(footerIconTop.getAttribute('href')).scrollIntoView({
    behavior: 'smooth'
  });
});


document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'YOUR_SERVICE_ID';
  const templateID = 'YOUR_TEMPLATE_ID';

  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      alert('Your message has been sent successfully!');
    }, (err) => {
      alert('Failed to send the message. Please try again.');
      console.log(JSON.stringify(err));
    });
});

