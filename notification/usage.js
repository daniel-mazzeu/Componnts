import { createNotification } from './notification.js';

document.addEventListener('DOMContentLoaded', () => {
    const myButton = document.getElementById('notify');

    if (myButton) {
        myButton.addEventListener('click', () => {
            createNotification('Welcome!', 'Thanks for visiting our site.', 5);
        });
    }
});