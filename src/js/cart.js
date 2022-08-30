$(document).ready(function () {

    // const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

    let cartData = [...JSON.parse(localStorage.getItem("toCart"))];

    class Cart {
        constructor(container = '.shop-cart__list') {
            this.container = container;
            this.cartProducts = cartData;

            // Добавление товаров в корзину
            // this._getProducts()
            //     .then(data => {
            //         this.cartProducts = data.contents;
            //         this.render();
            //     });
            this.totalPrice();
            this.render();
        }

        // Запрос данных
        // _getProducts() {
        //     return fetch(`${API}/getBasket.json`)
        //         .then(result => result.json())
        //         .catch(error => {
        //             console.log(error);
        //         })
        // }

        // Метод очистки корзины
        clearItems() {
            try {
                let collection = document.querySelectorAll('.shop-cart__item');
                for (let elem of collection) {
                    elem.remove();
                }
            } catch (e) {
                console.log(e);
            }
            localStorage.removeItem("toCart");
        }

        // Общая сумма товаров в корзине
        totalPrice() {
            let sum = 0;
            this.cartProducts.map(product => sum += product.price*product.quantity);
            document.getElementById('grand_total').value = sum;
        }

        // Удаление товара
        deleteItem(id) {
            this.cartProducts = this.cartProducts.filter(item => item.id_product !== id)
            cartData = cartData.filter(item => item.id_product !== id)
            let string = JSON.stringify(cartData);
            localStorage.setItem("toCart", string);
        }

        // Метод уменьшения количества товара
        removeCount(id) {
            this.quantity > 0 ? this.quantity-- : this.quantity = 0;
            this.cartProducts.map(item => {
                if (item.id_product === id) {
                    item.quantity > 0 ? item.quantity-- : item.quantity = 0;
                    document.getElementById(`input-${id}`).value = item.quantity;
                }
            })
        }

        // Метод увеличения количества товара
        addCount(id) {
            this.cartProducts.map(item => {
                if (item.id_product === id) {
                  item.quantity = item.quantity + 1;
                    document.getElementById(`input-${id}`).value = item.quantity;
                }
            })
        }

        render() {
            const block = document.querySelector(this.container);
            for (let product of this.cartProducts) {
                const item = new CartItem(product);
                block.insertAdjacentHTML("beforeend", item.render())

                let closeBtn = document.getElementById(`close-${item.id}`)

                // Обработчик события удаления продукта из корзины
                closeBtn.addEventListener('click', () => {
                    this.deleteItem(item.id)
                    let tagItem = closeBtn.closest('.shop-cart__item');
                    tagItem.remove();
                    this.totalPrice();
                })

                let removeBtn = document.getElementById(`minus-${item.id}`)

                // Обработчик события уменьшения количества продукта в корзине
                removeBtn.addEventListener('click', () => {
                    this.removeCount(item.id);
                    this.totalPrice();
                })

                let addBtn = document.getElementById(`plus-${item.id}`)

                // Обработчик события увеличение количества продукта в корзине
                addBtn.addEventListener('click', () => {
                    this.addCount(item.id);
                    this.totalPrice();
                })
            }
        }
    }

    class CartItem {
        constructor(product, img = './img/null.png') {
            this.id = product.id_product;
            this.img = img;
            this.title = product.product_name;
            this.price = product.price;
            this.quantity = product.quantity;
        }

        render() {
            return `<li class="shop-cart__item">
						<img class="shop-cart__img" src=${this.img} alt="cart1">
						<div class="shop-cart__info">
							<h2 class="shop-cart__title">${this.title}</h2>
							<p class="shop-cart__text">Price: <span class="shop-cart__color-text"> ${this.price}</span> </p>
							<p class="shop-cart__text">Color: Red</p>
							<p class="shop-cart__text">Size: Xl </p>
							<p class="shop-cart__text">Quantity:
								<input id="input-${this.id}" class="shop-cart__input" type="text" value=${this.quantity}>
								<button id="minus-${this.id}" class="shop-cart__count"><img src="./img/minus.png"></button>
								<button id="plus-${this.id}" class="shop-cart__count"><img src="./img/plus.png" ></button>
								</p>
							<button id="close-${this.id}" class="shop-cart__btn-close btn-close" type="button" >
								<svg class="icon-close" width="18" height="18" viewBox="0 0 13 13"
									 xmlns="http://www.w3.org/2000/svg">
									<path d="M7.4158 6.00409L11.7158 1.71409C11.9041 1.52579 12.0099 1.27039 12.0099
										1.00409C12.0099
										0.73779 11.9041 0.482395 11.7158 0.294092C11.5275 0.105788 11.2721 0 11.0058 0C10.7395 0 10.4841
										0.105788 10.2958 0.294092L6.0058 4.59409L1.7158 0.294092C1.52749 0.105788 1.2721 -1.9841e-09 1.0058
										0C0.739497 1.9841e-09 0.484102 0.105788 0.295798 0.294092C0.107495 0.482395 0.0017066 0.73779
										0.0017066 1.00409C0.0017066 1.27039 0.107495 1.52579 0.295798 1.71409L4.5958 6.00409L0.295798
										10.2941C0.20207 10.3871 0.127676 10.4977 0.0769072 10.6195C0.0261385 10.7414 0 10.8721 0 11.0041C0
										11.1361 0.0261385 11.2668 0.0769072 11.3887C0.127676 11.5105 0.20207 11.6211 0.295798
										11.7141C0.388761 11.8078 0.499362 11.8822 0.621222 11.933C0.743081 11.9838 0.873786 12.0099 1.0058
										12.0099C1.13781 12.0099 1.26852 11.9838 1.39038 11.933C1.51223 11.8822 1.62284 11.8078 1.7158
										11.7141L6.0058 7.41409L10.2958 11.7141C10.3888 11.8078 10.4994 11.8822 10.6212 11.933C10.7431
										11.9838 10.8738 12.0099 11.0058 12.0099C11.1378 12.0099 11.2685 11.9838 11.3904 11.933C11.5122
										11.8822 11.6228 11.8078 11.7158 11.7141C11.8095 11.6211 11.8839 11.5105 11.9347 11.3887C11.9855
										11.2668 12.0116 11.1361 12.0116 11.0041C12.0116 10.8721 11.9855 10.7414 11.9347 10.6195C11.8839
										10.4977 11.8095 10.3871 11.7158 10.2941L7.4158 6.00409Z"/>
								</svg>
							</button>
						</div>
					</li>`
        }
    }

    let list = new Cart();
    let clearProducts = document.querySelector('.clear');

    // Обработчик события очистки корзины
    clearProducts.addEventListener('click', () => {
        list.clearItems();
    })
});
