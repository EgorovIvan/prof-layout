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

    let openSearch = document.getElementById('open-search');

    let search = document.getElementById('search');
    let searchInput = document.getElementById('search-input');

    openSearch.addEventListener('click', function () {
        search.style.width = "300px"
        search.style.borderColor = "#F16D7F"
        searchInput.disabled = false;
    });

    document.addEventListener( 'click', (e) => {
        const withinBoundaries = e.composedPath().includes(search);

        if ( ! withinBoundaries ) {
            search.style.width = "0"
            search.style.borderColor = "#222222"
            searchInput.disabled = true;
            searchInput.value = "";
        }
    });

    let filterMenu = document.querySelector('.filter__menu');
    let filterBtn = document.querySelector('.filter__btn-menu');

    document.querySelector('.open-filter').onclick = function() {
        filterMenu.style.opacity = '1';
        filterBtn.style.zIndex = '1';
    };

    document.querySelector('.close-filter').onclick = function() {
        filterMenu.style.opacity = '0';
        filterBtn.style.zIndex = '4';
    };
});
