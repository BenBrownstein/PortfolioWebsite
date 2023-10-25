document.addEventListener('DOMContentLoaded', function () {
    const showFormButton = document.getElementById('show-contact-form');
    const contactForm = document.getElementById('contact-form');
    const emailForm = document.getElementById('email-form');

    showFormButton.addEventListener('click', () => {
        contactForm.style.display = 'block';
    });

    emailForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // You can use a "mailto" link to open the user's email client
        window.location.href = `mailto:${email}?subject=My Subject&body=${message}`;

        // Clear the form
        emailForm.reset();
        // Close the form
        contactForm.style.display = 'none';
    });
});
