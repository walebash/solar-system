const toggleButton = document.getElementsByClassName('toggle-button')[0];
console.log(toggleButton);
const navContent = document.getElementsByClassName('nav-content')[0];
console.log(navContent);

toggleButton.addEventListener('click', () => {
    navContent.classList.toggle('active');
})