<template>
	<main>
		<section class="brand">
			<img class="brand__img" src="../../public/img/man.png" alt="man">
			<div class="brand__title-wrp">
				<img class="brand__title-img" src="../../public/img/pillar.png" alt="">
				<h1 class="brand__title">the brand <span class="brand__subtitle">of luxerious <span
						class="brand__subtitle-pink">fashion</span></span></h1>
			</div>
		</section>
		<section class="sales">
			<div class="container">
				<h2 class="visually-hidden">sales</h2>
				<ul class="sales__list">
					<li class="sales__item sales__item-woman">
						<p class="sales__slogan">30% off</p>
						<p class="sales__text">for women</p>
					</li>
					<li class="sales__item sales__item-man">
						<p class="sales__slogan">hot deal</p>
						<p class="sales__text">for men</p>
					</li>
					<li class="sales__item sales__item-kids">
						<p class="sales__slogan">new arrivals</p>
						<p class="sales__text">for kids</p>
					</li>
					<li class="sales__item-shoes">
						<p class="sales__slogan">luxirous & trendy</p>
						<p class="sales__text">accesories</p>
					</li>
				</ul>
			</div>
		</section>
		<section class="catalog">
			<div class="container catalog__wrp">
				<h2 class="catalog__title">Fetured Items</h2>
				<p class="catalog__text">Shop for items based on what we featured in this week</p>
				<CatalogProducts :products="$root.presentationProducts" v-on:add-product="addProduct"/>
				<router-link to="/catalog">
					<div class="catalog__btn btn">
						<a href="#" class="catalog__btn-link btn-text">
							Browse All Product
						</a>
					</div>
				</router-link>
			</div>
		</section>
		<div class="info">
			<div class="container">
				<ul class="info__list">
					<li class="info__item">
						<img class="info__img" src="../../public/img/delivery.svg" alt="delivery">
						<h3 class="info__title">Free Delivery</h3>
						<p class="info__text">Worldwide delivery on all.
							Authorit tively morph <br> next-generation innov tion with extensive models.</p>
					</li>
					<li class="info__item">
						<img class="info__img" src="../../public/img/sales-discounts.svg" alt="sales-discounts">
						<h3 class="info__title">Sales & discounts</h3>
						<p class="info__text">Worldwide delivery on all.
							Authorit tively morph <br> next-generation innov tion with extensive models.</p>
					</li>
					<li class="info__item">
						<img class="info__img" src="../../public/img/assurance.svg" alt="assurance">
						<h3 class="info__title">Quality assurance</h3>
						<p class="info__text">Worldwide delivery on all.
							Authorit tively morph <br> next-generation innov tion with extensive models.</p>
					</li>
				</ul>
			</div>
		</div>
	</main>
</template>

<script>
	import CatalogProducts from "./CatalogProducts";
	
	export default {
		name: "HomePage",
		components: {
			CatalogProducts,
		},
		methods: {
			addProduct(product) {
				let find = this.$root.cartItems.find((item => product.id_product === item.id_product))
				if (find) {
					this.$root.putJson(`${this.$root.api + this.$root.cartUrl + "/" + find.id_product}`, {quantity: 1})
						.then(data => {
							if (data.result === 1) {
								find.quantity++;
							}
						})
				} else {
					const prod = Object.assign({quantity: 1}, product);
					this.$root.postJson(`${this.$root.api + this.$root.cartUrl}`, prod)
						.then(data => {
							if (data.result === 1) {
								this.$root.cartItems.push(prod)
							}
						})
				}
			},
		},
	}
</script>