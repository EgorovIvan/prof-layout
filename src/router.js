import { createWebHistory, createRouter } from "vue-router";
import ShopCatalog from './components/ShopCatalog';
import ShoppingCart from './components/ShoppingCart';

const routes = [
	{
		path: "/",
		name: "ShopCatalog",
		component: ShopCatalog,
	},
	{
		path: "/shopping-cart",
		name: "ShoppingCart",
		component: ShoppingCart,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;



