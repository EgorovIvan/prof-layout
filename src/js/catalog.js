$(document).ready(function () {

    class ProductList {
        constructor(container='.catalog__list') {
            this.container = container;
            this.products = [];
            this._fetchProducts();
            this.render();
            this.totalPrice();
        }

        _fetchProducts() {
            this.products = [
                {
                    id: 1, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 2, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 3, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 4, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 5, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 6, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 7, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 8, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
                {
                    id: 9, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: 52.00
                },
            ];
        }

        render() {
            const block = document.querySelector(this.container);
            for (let product of this.products) {
                const ProductItem = new ProductsItem(product);
                block.insertAdjacentHTML("beforeend", ProductItem.render())
            }
        }

        totalPrice() {
            let sum = 0;
            this.products.map(product => sum += product.price);
            console.log(`Общая сумма товаров: ${sum}`)
        }
    }
    export default class ProductsItem{
        constructor(product) {
            this.id = product.id;
            this.img = product.img;
            this.title = product.title;
            this.text = product.text;
            this.price = product.price;
        }

        render() {
            return `<li class="catalog__item">
                    <img class="catalog__img" src=${this.img} alt="product-3">
                    <h3 class="catalog__item-title">${this.title}</h3>
                    <p class="catalog__item-text">${this.text}</p>
                    <p class="catalog__item-price">${this.price}</p>
                </li>`
        }
    }

    let list = new ProductList();
});

