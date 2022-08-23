$(document).ready(function () {
    const products = [
        {id: 1, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 2, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 3, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 4, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 5, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 6, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 7, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 8, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
        {id: 9, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                "Operandi.", price: "$52.00"},
    ]

    const renderProductsItem = (item) => {
        return `<li class="catalog__item">
                    <img class="catalog__img" src=${item.img} alt="product-3">
                    <h3 class="catalog__item-title">${item.title}</h3>
                    <p class="catalog__item-text">${item.text}</p>
                    <p class="catalog__item-price">${item.price}</p>
                </li>`
    };

    const renderProductsList = (list) => {
        let productsList = list.map(item => renderProductsItem(item));
        document.querySelector('.catalog__list').innerHTML = productsList.join('');
    };

    renderProductsList(products);
});
