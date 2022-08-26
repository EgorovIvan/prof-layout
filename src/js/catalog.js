$(document).ready(function () {

    class ProductsItem {
        constructor(id, img, title, text, price) {
            this.id = id;
            this.img = img;
            this.title = title;
            this.text = text;
            this.price = price;
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

    class ProductList {
        constructor() {
            this.products = [];
        }

        fetchProducts() {
            this.products = [
                {
                    id: 1, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 2, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 3, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 4, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 5, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 6, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 7, img: "img/product-4.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 8, img: "img/product-3.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
                {
                    id: 9, img: "img/product-6.jpg", title: "ellery x m'o capsule", text: "Known for her sculptural " +
                        "takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda " +
                        "Operandi.", price: "$52.00"
                },
            ];
        }

        render() {
            let listHtml = '';
            this.products.forEach(product => {
                const ProductItem = new ProductsItem(product.id, product.img,
                    product.title, product.text, product.price);
                listHtml += ProductItem.render();
            });
            document.querySelector('.catalog__list').innerHTML = listHtml;
        }
    }

    const list = new ProductList();
    list.fetchProducts();
    list.render();

});
