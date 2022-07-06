<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { Layout } from "./components/Layout";
</script>

<template>
	<Layout>
		<router-view v-slot="{ Component }">
			<transition name="scale">
				<component :is="Component" />
			</transition>
		</router-view>
	</Layout>
</template>
<style>
#app {
	font-family: "Montserrat", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #05273a;
	font-size: 14px;
}
.scale-enter-active {
	transition: all 0.25 ease-in-out;
	opacity: 0.9;
}
.scale-enter-from,
.scale-leave-to {
	opacity: 0;
	/* transform: scale(0.99); */
}
</style>
