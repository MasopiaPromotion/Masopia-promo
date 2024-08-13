// Dark Mode Toggle
const toggleButton = document.getElementById('toggle-dark-mode');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    toggleButton.textContent = body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Navbar Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.innerHTML = navbar.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Form Validation
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you for your message. We will get back to you soon.';
        formMessage.style.color = 'green';
        contactForm.reset();
    }
});
