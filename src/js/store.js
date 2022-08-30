$(document).ready(function () {

    const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

    class Store {
        constructor() {
            this.cartProducts = [];
            this._getProducts()
                .then(data => {
                    this.cartProducts = data.contents;
                });
        }

        _getProducts() {
            return fetch(`${API}/getBasket.json`)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        }
    }

});
