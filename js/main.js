$(document).ready(function () {

    let openMenu = document.getElementById('open-btn');
    let closeMenu = document.getElementById('close-btn');

    let navigation = document.getElementById('menu');

    openMenu.addEventListener('click', function () {
        navigation.style.opacity = '1';
    });

    closeMenu.addEventListener('click', function () {
        navigation.style.opacity = '0';
    });
});
