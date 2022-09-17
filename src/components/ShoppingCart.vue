<template>
	<main>
		<section class="page-name">
			<div class="container page-name__wrp">
				<h2 class="page-name__title">shopping cart</h2>
			</div>
		</section>
		<section class="shop">
			<div class="container shop__wrp">
				<div class="shop-cart">
					<CartProducts :products="cart" v-on:remove-count="removeCount" v-on:add-count="addCount" v-on:delete-item="deleteItem"/>
					<div class="shop-cart__btns">
						<button class="shop-cart__btn btn clear" v-on:click="$root.clear">clear shopping cart</button>
						<button class="shop-cart__btn btn">continue shopping</button>
					</div>
				</div>
				<div class="shop-shipping">
					<div>
						<h3 class="shop-shipping__title">shipping address</h3>
						<input type="text" class="shop-shipping__input input" required placeholder="Bangladesh">
						<input type="text" class="shop-shipping__input input" required placeholder="State">
						<input type="text" class="shop-shipping__input input" required placeholder="Postcode / Zip">
						<button class="shop-shipping__btn btn">get a quote</button>
					</div>
					<div class="shop-total">
						<p class="shop-total__text">sub total
							<input class="shop-total__text-input" type="text" value="$900" disabled></p>
						<h3 class="shop-total__title">grand total
							<input id="grand_total" class="shop-total__title-input" type="text" :value="cartPrice" disabled>
						</h3>
						<hr class="shop-total__line">
						<button class="shop-total__btn btn" v-on:click="render">proceed to checkout</button>
					</div>
				</div>
			</div>
		</section>
	</main>
</template>

<script>
	import CartProducts from "./CartProducts";
	
	export default {
		name: "ShoppingCart",
		components: {
			CartProducts
		},
		data() {
			return {
				cartUrl: '/api/cart',
				cart: [],
				cartPrice: 0,
			}
		},
		methods: {
			removeCount(product) {
				this.$root.putJson(`${this.$root.api + this.cartUrl + "/" + product.id_product}`, {quantity: -1})
					.then(data => {
						if(data.result === 1){
							if (product.quantity>0) {
								product.quantity--;
							} else {
								return product.quantity;
							}
						}
					})
				this.totalPrice();
			},
			addCount(product) {
				this.$root.putJson(`${this.$root.api + this.cartUrl + "/" + product.id_product}`, {quantity: 1})
					.then(data => {
						if(data.result === 1){
								product.quantity++;
						}
					})
				this.totalPrice();
			},
			deleteItem(product) {
				this.$root.deleteJson(`http://localhost:3000/api/cart/${product.id_product}`)
					.then(() => {
						this.cart = this.cart.filter(item => item.id_product !== product.id_product)
					})
				this.totalPrice();
			},
			clear() {
				// let collection = document.querySelectorAll('.shop-cart__item');
				// for (let elem of collection) {
				// 	elem.remove();
				// }
				// this.cart = [];
			},
			totalPrice() {
				let sum = 0;
				this.cart.map(product => {
					return sum += product.price * product.quantity;
				});
				this.cartPrice = sum;
			},
		},
		mounted() {
			this.$root.getJson(`${this.$root.api + this.cartUrl}`)
				.then(data => {
					for (let el of data.contents) {
						this.cart.push(el);
					}
					this.totalPrice();
				});
		}
	}
</script>