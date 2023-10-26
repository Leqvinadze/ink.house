// BURGER
const burgerMenu = document.querySelector('.burger__menu');
const cart = document.querySelector(".cart");
const burgerNav = document.querySelector(".nav");


burgerMenu.addEventListener("click", function(e) {
    document.body.classList.toggle("no-scroll");
    burgerMenu.classList.toggle('active');
    burgerNav.classList.toggle('active');
    cart.classList.toggle('active');
});


const burgerLinks = document.querySelectorAll('.nav a');


burgerLinks.forEach(function(link) {
    link.addEventListener('click', function() {

        document.body.classList.remove("no-scroll");
        burgerMenu.classList.remove('active');
        burgerNav.classList.remove('active');
        cart.classList.remove('active');
    });
});


// TABS
document.getElementById('tab1').classList.add('active');


const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
    tab.addEventListener('click', () => {

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        tabs.forEach(t => {
            t.classList.remove('active');
        });

        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
        tab.classList.add('active');
    });
});