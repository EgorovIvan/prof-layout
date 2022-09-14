<template>
	<div class="catalog__list">
		<ProductItem class="catalog__item" v-for="item of products" :key="item.id_product" :img="item.img" :product="item"/>
	</div>
</template>

<script>
	import ProductItem from "./ProductItem";
	
	export default {
		name: "CatalogProducts",
		props: ['products'],
		components: {
			ProductItem,
		},
	}
</script>