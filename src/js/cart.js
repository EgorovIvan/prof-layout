$(document).ready(function () {


    class Cart {
        constructor(container='.catalog__list') {
            this.container = container;
            this.cartProducts = [];
            this.render();
            this.totalPrice();
        }

        deleteItem() {

        }

        totalCount() {

        }

        render() {
            const block = document.querySelector(this.container);
            for (let product of this.cartProducts) {
                const item = new CartItem(product);
                block.insertAdjacentHTML("beforeend", item.render())
            }
        }

        totalPrice() {
            let sum = 0;
            this.cartProducts.map(product => sum += product.price);
        }
    }
    class CartItem {
        constructor(product) {
            this.id = product.id;
            this.img = product.img;
            this.title = product.title;
            this.text = product.text;
            this.price = product.price;
            this.count = product.count;
        }

        addCount() {

        }

        removeCount() {

        }

        render() {
            return `<li class="catalog__item">
                    <img class="catalog__img" src=${this.img} alt="product-3">
                    <h3 class="catalog__item-title">${this.title}</h3>
                    <p class="catalog__item-text">${this.text}</p>
                    <p class="catalog__item-price">${this.price}</p>
                    <button>-</button>
                    <button>+</button>
                    <button>Удалить</button>
                </li>`
        }
    }

    let list = new Cart();
});
