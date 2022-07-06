<script setup>
import { ref, onMounted } from "vue";

import { Footer, Header } from "@/components/Layout";

import grabFoodIcon from "@/assets/icons/grab_food_stick.png";
import shopeeFoodIcon from "@/assets/icons/shopee_food_stick.png";
import messengerIcon from "@/assets/icons/mesenger_stick.png";
import goTopIcon from "@/assets/icons/go_top_stick.png";

import grab_food_logo from "@/assets/icons/grab_food_stick.png";
import shoppe_food_logo from "@/assets/icons/shopee_food_stick.png";

const showGoTop = ref(false);
const lastScrollPosition = ref(0);
const scrollBehavior = () => {
	document.getElementById("app").scrollIntoView({ behavior: "smooth" });
};
const onScroll = () => {
	// Get the current scroll position
	const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
	if (currentScrollPosition > 100) {
		showGoTop.value = true;
	} else {
		showGoTop.value = false;
	}
	// Set the current scroll position as the last scroll position
	lastScrollPosition.value = currentScrollPosition;
};

onMounted(() => {
	window.addEventListener("scroll", onScroll);
});
</script>

<template>
	<div class="flex justify-center items-start bg-white w-full h-full text-base text-[#05273A]">
		<!-- <div class="fixed top-[30%] right-0 z-20">
			<div class="">
				<img
					:src="grab_food_logo"
					class="mb-4 relative right-[-75px] h-[65px] w-[138px] cursor-pointer transition-all hover:right-0"
				/>
				<img
					:src="shoppe_food_logo"
					class="relative cursor-pointer right-[-75px] h-[65px] w-[138px] mr-[-50px] transition-all hover:right-0"
				/>
			</div>
		</div> -->
		<div class="fixed bottom-4 right-2 z-20 transition-all">
			<img :src="messengerIcon" class="mb-2 w-[60px] h-[60px] cursor-pointer" />
			<img
				:src="goTopIcon"
				class="w-[60px] h-[60px] cursor-pointer"
				:class="{ hidden: !showGoTop }"
				@click="scrollBehavior"
			/>
		</div>
		<div class="relative flex flex-col items-center min-h-screen bg-bg-85 w-full">
			<Header />
			<div
				class="
					bg-white
					w-full
					min-h-[calc(100vh-4.125rem)]
					sm:min-h-[calc(100vh-5.625rem)]
					4xl:min-h-[calc(100vh-8.125rem)]
				"
			>
				<slot />
			</div>
			<Footer />
		</div>
	</div>
</template>
