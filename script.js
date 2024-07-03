document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contact form');
    
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
      
      console.log('Form submitted!', { name, email, message });
      alert(`Thank you, ${name}! Your message has been sent.`);
      
      contactForm.reset();
    });
  });
  