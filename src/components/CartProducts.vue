<template>
	<ul class="shop-cart__list">
		<CartItem class="shop-cart__item" v-for="item of products" :img="img" :key="item.id_product" :product="item"/>
	</ul>
</template>

<script>
	import CartItem from "./CartItem";
	
	export default {
		name: "CatalogProducts",
		props: ['products', 'img'],
		components: {
			CartItem
		}
	}
</script>