const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue(
    {
        el: '#app',
        data: {
            catalogUrl: '/catalogData.json',
            products: [],
            filtered: [],
            cart: JSON.parse(localStorage.getItem("toCart")),
            img: './img/null.png',
            userSearch: '',
            show: false,
            cartPrice: 0,
        },
        methods: {
            filter() {
                const regexp = new RegExp(this.userSearch, 'i');
                this.filtered = this.products.filter(product => regexp.test(product.product_name));
            },
            getJson(url) {
                return fetch(url)
                    .then(result => result.json())
                    .catch(error => {
                        console.log(error);
                    })
            },
            addProduct(product) {
                let catalogStorage = JSON.parse(localStorage.getItem("toCart"));
                let find = catalogStorage.find((item => product.id_product === item.id_product))
                if (find) {
                    find.quantity++;
                } else {
                    this.$set(product, 'quantity', 1);
                    catalogStorage.push(product);
                }
                let string = JSON.stringify(catalogStorage);
                localStorage.setItem("toCart", string);
            },
            clear() {
                let collection = document.querySelectorAll('.shop-cart__item');
                for (let elem of collection) {
                    elem.remove();
                }
                this.cart = [];
                localStorage.removeItem("toCart");
                this.totalPrice();
            },
            deleteItem(id) {
                this.cart = this.cart.filter(item => item.id_product !== id)
                let string = JSON.stringify(this.cart);
                localStorage.setItem("toCart", string);
                this.totalPrice();
            },
            removeCount(id) {
                this.cart.map(item => {
                    if (item.id_product === id) {
                        item.quantity > 0 ? item.quantity-- : item.quantity = 0;
                    }
                })
                let string = JSON.stringify(this.cart);
                localStorage.setItem("toCart", string);
                this.totalPrice();
            },
            addCount(id) {
                this.cart.map(item => {
                    if (item.id_product === id) {
                        item.quantity++;
                    }
                })
                let string = JSON.stringify(this.cart);
                localStorage.setItem("toCart", string);
                this.totalPrice();
            },
            totalPrice() {
                let sum = 0;
                this.cart.map(product => {
                    return sum += product.price * product.quantity
                });
                this.cartPrice = sum;
            },
        },
        mounted() {
            this.getJson(`${API + this.catalogUrl}`)
                .then(data => {
                    for (let el of data) {
                        this.products.push(el);
                    }
                    localStorage.setItem("toCart", JSON.stringify([]));
                    this.filter();
                    this.totalPrice();
                });
        }
    })