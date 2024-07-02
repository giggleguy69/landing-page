document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your message!');
        contactForm.reset();
    });
});
