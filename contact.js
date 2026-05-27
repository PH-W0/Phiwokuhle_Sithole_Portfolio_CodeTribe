const form = document.querySelector('.contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const submitButton = document.getElementById('submit');
const newdiv = document.createElement('div');
form.appendChild(newdiv);

function  validateForm(form, name, email, message) {
    if (name.value.trim() === '') {
        alert('Please enter your name.');
        return false;
    } else if (email.value.trim() === '') {
        alert('Please enter your email.');
        return false;
    } else if (!RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email.value)) {
        alert('Please enter a valid email address.');
        return false;
    } else if (message.value.trim() === '' || message.value.trim().length < 10) {
        alert('Please enter a message with at least 10 characters.');
        return false;
    }
    return true;
}


// I WILL DEAL WITH THIS LATER.