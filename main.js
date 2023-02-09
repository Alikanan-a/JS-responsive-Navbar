// Gets the Mobile Nav icon by its ID
const ham = document.querySelector('.ham');
const ham_icon = ham.querySelector('span');
// Gets the Mobile Nav container
const mobile_menu = document.querySelector('.mobile-menu');
ham.addEventListener('click', () => {
    ham_icon.innerText = ham_icon.innerText === 'menu' ?
        "close" :
        'menu ';
    mobile_menu.classList.toggle('open')
})