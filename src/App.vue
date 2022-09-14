<template>
	<div v-if="error">
		<AccessError/>
	</div>
	<div v-else>
		<router-view/>
	</div>
</template>
	

<script>
	import AccessError from "@/components/AccessError";
	
	export default {
		name: "App",
		components: {
			AccessError
		},
		data() {
			return {
				api: 'http://localhost:3000',
				error: false,
			}
		},
		methods: {
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
		},
	}
</script>
