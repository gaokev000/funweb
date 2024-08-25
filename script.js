const buttonHeight = 50;
const buttonWidth = 120;
const maxWidth = window.innerWidth/2 - buttonWidth-10;
const maxHeight = window.innerHeight/2 - buttonHeight-10;

window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('button2');
    button.addEventListener('click', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
})
