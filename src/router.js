import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/components/HomePage";
import ShopCatalog from './components/ShopCatalog';
import ProductPage from './components/ProductPage';
import ShoppingCart from './components/ShoppingCart';
import RegPage from "@/components/RegPage";

const routes = [
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
	},
	{
		path: "/catalog",
		name: "ShopCatalog",
		component: ShopCatalog,
	},
	{
		path: "/product",
		name: "ProductPage",
		component: ProductPage,
	},
	{
		path: "/cart",
		name: "ShoppingCart",
		component: ShoppingCart,
	},
	{
		path: "/registration",
		name: "RegPage",
		component: RegPage,
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router;



