import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

const HomePage = () => import(/* webpackChunkName: "HomePage" */ "@/view/Home/Home.vue");
const AboutPage = () => import(/* webpackChunkName: "AboutPage" */ "@/view/About/About.vue");
const MenuPage = () => import(/* webpackChunkName: "MenuPage" */ "@/view/Menu/Menu.vue");
const GalleryPage = () => import(/* webpackChunkName: "GalleryPage" */ "@/view/Gallery/Gallery.vue");
const EventPage = () => import(/* webpackChunkName: "EventPage" */ "@/view/Event/Event.vue");
const ContactPage = () => import(/* webpackChunkName: "ContactPage" */ "@/view/Contact/Contact.vue");
const MenuDetail = () => import(/* webpackChunkName: "ContactPage" */ "@/view/Menu/Detail.vue");

const routes = [
	{
		path: "/:catchAll(.*)",
		redirect: "/",
	},
	{
		path: "/",
		name: "HomePage",
		component: HomePage,
	},
	{
		path: "/about",
		name: "AboutPage",
		component: AboutPage,
	},
	{
		path: "/menu",
		name: "MenuPage",
		component: MenuPage,
	},
	{
		path: "/menu/:id",
		name: "MenuDetail",
		component: MenuDetail,
	},
	{
		path: "/gallery",
		name: "GalleryPage",
		component: GalleryPage,
	},
	{
		path: "/event",
		name: "EventPage",
		component: EventPage,
	},
	{
		path: "/contact",
		name: "ContactPage",
		component: ContactPage,
	},
];

const router = createRouter({
	history: routerHistory,
	routes: routes,
	scrollBehavior() {
		document.getElementById("app").scrollIntoView();
	},
});

export default router;
