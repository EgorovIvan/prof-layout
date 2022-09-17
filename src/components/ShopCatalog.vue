<template>
	<main>
		<section class="page-name">
			<div class="container page-name__wrp">
				<h2 class="page-name__title">new arrivals</h2>
				<p class="page-name__breadcrumbs">home / men /
					<span class="page-name__breadcrumbs-active">new arrivals</span>
				</p>
			</div>
		</section>
		<section class="filter">
			<div class="container filter__wrp">
				<div class="filter__btn-menu">
					<h2 class="filter__title open-filter" v-on:click="openFilter">Filter</h2>
					<button class="filter__burger open-filter" v-on:click="openFilter">
						<svg width="15" height="10" viewBox="0 0 15 10">
							<path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667
                    8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167
                    0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667
                    0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10
                    4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333
                    0.833333 5.83333Z"/>
						</svg>
					</button>
				</div>
				<div class="filter__menu">
					<div class="filter__btn-menu">
						<h2 class="filter__title color-active close-filter" v-on:click="closeFilter">Filter</h2>
						<button class="filter__burger color-active close-filter" v-on:click="closeFilter">
							<svg width="15" height="10" viewBox="0 0 15 10">
								<path d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667
                        8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167
                        0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667
                        0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10
                        4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333
                        0.833333 5.83333Z"/>
							</svg>
						</button>
					</div>
					<ul class="filter__menu-list">
						<li class="filter__menu-item">
							<h2 class="filter__menu-title">
								<img class="filter__menu-img" src="../../public/img/pillar.png" alt="pillar"> category
							</h2>
							<hr class="filter__hr-title">
							<ul class="filter__submenu-list">
								<li class="filter__submenu-item">Accessories</li>
								<li class="filter__submenu-item">Bags</li>
								<li class="filter__submenu-item">Denim</li>
								<li class="filter__submenu-item">Hoodies & Sweatshirts</li>
								<li class="filter__submenu-item">Jackets & Coats</li>
								<li class="filter__submenu-item">Polos</li>
								<li class="filter__submenu-item">Shirts</li>
								<li class="filter__submenu-item">Shoes</li>
								<li class="filter__submenu-item">Sweaters & Knits</li>
								<li class="filter__submenu-item">T-Shirts</li>
								<li class="filter__submenu-item">Tanks</li>
							</ul>
						</li>
						<li class="filter__menu-item">
							<h2 class="filter__menu-title">
								<img class="filter__menu-img" src="../../public/img/pillar.png" alt="pillar">brand
							</h2>
							<hr class="filter__hr-title">
						</li>
						<li class="filter__menu-item">
							<h2 class="filter__menu-title">
								<img class="filter__menu-img" src="../../public/img/pillar.png" alt="pillar">designer
							</h2>
							<hr class="filter__hr-title">
						</li>
					</ul>
				</div>
				
				<div class="filter__select-list">
					<select class="filter__select btn" aria-label="Default select example">
						<option selected>trending now</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					<select class="filter__select" aria-label="Default select example">
						<option selected>size</option>
						<option value="xs">xs</option>
						<option value="s">s</option>
						<option value="m">m</option>
						<option value="l">l</option>
					</select>
					<select class="filter__select btn" aria-label="Default select example">
						<option selected>price</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</div>
			</div>
		</section>
		<section class="catalog">
			<div class="container catalog__wrp">
				<h2 class="visually-hidden">sales</h2>
				<CatalogProducts :products="$root.filtered" v-on:add-product="addProduct"/>
				<div class="catalog__pagination">
					<button class="catalog__prev arrow">
						<svg class="btn-prev" width="8" height="14" viewBox="0 0 13 23">
							<path d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498
                0.649902L12.6998 3.7499Z"/>
						</svg>
					</button>
					<a class="catalog__pagination-number" href="#">1</a>
					<a class="catalog__pagination-number" href="#">2</a>
					<a class="catalog__pagination-number" href="#">3</a>
					<a class="catalog__pagination-number" href="#">4</a>
					<a class="catalog__pagination-number" href="#">5</a>
					<a class="catalog__pagination-number" href="#">6.....20</a>
					<button class="catalog__next arrow">
						<svg class="btn-next" width="8" height="14" viewBox="0 0 13 23">
							<path d="M0.299805 19.2499L8.0498 11.4999L0.299805 3.7499L1.8498 0.649902L12.6998 11.4999L1.8498
                22.3499L0.299805 19.2499Z"/>
						</svg>
					</button>
				</div>
			</div>
		</section>
		<div class="info">
			<div class="container">
				<ul class="info__list">
					<li class="info__item">
						<img class="info__img" src="img/delivery.svg" alt="delivery">
						<h3 class="info__title">Free Delivery</h3>
						<p class="info__text">Worldwide delivery on all.
							Authorit tively morph <br> next-generation innov tion with extensive models.</p>
					</li>
					<li class="info__item">
						<img class="info__img" src="img/sales-discounts.svg" alt="sales-discounts">
						<h3 class="info__title">Sales & discounts</h3>
						<p class="info__text">Worldwide delivery on all.
							Authorit tively morph <br> next-generation innov tion with extensive models.</p>
					</li>
					<li class="info__item">
						<img class="info__img" src="img/assurance.svg" alt="assurance">
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
		name: "ShopCatalog",
		components: {
			CatalogProducts,
		},
		methods: {
			openFilter() {
				let filterMenu = document.querySelector('.filter__menu');
				filterMenu.style.visibility = 'visible';
			},
			closeFilter() {
				let filterMenu = document.querySelector('.filter__menu');
				filterMenu.style.visibility = 'hidden';
			},
			addProduct(product) {
				let find = this.$root.cartItems.find((item => product.id_product === item.id_product))
				if (find) {
					this.$root.putJson(`${this.$root.api + this.$root.cartUrl + "/" + find.id_product}`, {quantity: 1})
						.then(data => {
							if(data.result === 1){
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