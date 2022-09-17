<template>
	<HeaderComponent v-on:filter="filter"/>
	<div v-if="error">
		<AccessError/>
	</div>
	<div v-else>
		<router-view></router-view>
	</div>
	<FooterComponent/>
</template>
	

<script>
	import AccessError from "@/components/AccessError";
	import HeaderComponent from "@/components/HeaderComponent"
	import FooterComponent from "@/components/FooterComponent";
	
	export default {
		name: "App",
		components: {
			HeaderComponent,
			FooterComponent,
			AccessError
		},
		data() {
			return {
				api: 'http://localhost:3000',
				catalogUrl: '/api/products',
				cartUrl: '/api/cart',
				products: [],
				filtered: [],
				presentationProducts: [],
				advertising: [],
				cartItems: [],
				error: false,
			}
		},
		methods: {
			filter(userSearch) {
				const regexp = new RegExp(userSearch, 'i');
				this.filtered = this.products.filter(product => regexp.test(product.product_name));
			},
			getJson(url) {
				return fetch(url)
					.then(result => result.json())
					.catch(error => {
						console.log(error);
						this.error = true;
					})
			},
			postJson(url, data){
				return fetch(url, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(result => result.json())
					.catch(error => {
						console.log(`ошибка записи: ${error}`);
					})
			},
			putJson(url, data){
				return fetch(url, {
					method: 'PUT',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				})
					.then(result => result.json())
					.catch(error => {
						console.log(`ошибка обновления: ${error}`);
					})
			},
			deleteJson(url){
				return fetch(url, {
					method: 'DELETE',
				})
					.then(() => {
						console.log('removed');
					}).catch(err => {
						console.log(`ошибка удаления: ${err}`);
					});
			},
		},
		mounted() {
			this.getJson(`${this.api + this.catalogUrl}`)
				.then(data => {
					for (let el of data) {
						this.products.push(el);
						this.filtered.push(el);
					}
					this.presentationProducts = this.products.slice(0, 6)
					this.advertising = this.products.slice(0, 3)
				});
			this.getJson(`${this.api + this.cartUrl}`)
				.then(data => {
					for (let el of data.contents){
						this.cartItems.push(el);
					}
				});
		},
	}
</script>
