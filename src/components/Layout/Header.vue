<script setup>
import { ref, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useWindowScroll, useWindowSize } from "@vueuse/core";

import { WebLogoIcon, InstaIcon, FacebookIcon, TwitterIcon } from "@/assets/custom_icon";
import Menu from "./Menu.vue";

const route = useRoute();

const isScroll = ref(false);

const { w, y } = useWindowScroll();
const { height } = useWindowSize();

watch(
	() => y.value,
	() => {
		if (y.value >= height.value / 2) {
			return (isScroll.value = true);
		}
		return (isScroll.value = false);
	}
);

const selectedTab = ref(-1);

const checkTab = v => {
	let tempArr = v.split("/").filter(x => !!x);
	let routeName = "";
	if (tempArr.length) {
		routeName = tempArr[tempArr.length - 1];
	}

	if (!routeName) {
		selectedTab.value = 0;
	} else if (routeName.includes("about")) {
		selectedTab.value = 1;
	} else if (routeName.includes("menu")) {
		selectedTab.value = 2;
	} else if (routeName.includes("gallery")) {
		selectedTab.value = 3;
	} else if (routeName.includes("event")) {
		selectedTab.value = 4;
	} else if (routeName.includes("contact")) {
		selectedTab.value = 5;
	} else {
		console.error("Route failed, please check");
		// selectedTab.value = 0;
	}
};

watch(
	() => route.fullPath,
	() => {
		checkTab(route.fullPath);
	}
);

onMounted(() => {
	checkTab(route.fullPath);
});
</script>

<template>
	<nav class="w-full h-[4.125rem] sm:h-[5.625rem] 4xl:h-[8.125rem]">
		<div
			class="
				relative
				flex
				items-center
				w-full
				h-[4.125rem]
				sm:h-[5.625rem]
				4xl:h-[8.125rem]
				p-header-custom
				bg-white
				transition-all
				ease-in-out
				py-2
			"
			:class="{
				'!fixed  left-0 right-0 z-[99999999999999999999] 4xl:!h-[5.625rem] shadow-2xl':
					isScroll || (y >= 150 && !isScroll),
				'top-0 animate-fade-out': isScroll,
				'top-[-100%] animate-fade-in': y >= 150 && !isScroll,
			}"
		>
			<div class="absolute xl:hidden w-full">
				<Menu :activeTab="selectedTab" />
			</div>

			<div class="flex justify-center w-full xl:w-max">
				<router-link to="/">
					<WebLogoIcon class="w-[8.25rem] h-[3.125rem] sm:w-[10.625rem] sm:h-[4rem]" />
				</router-link>
			</div>

			<div
				class="
					hidden
					xl:flex
					flex-col
					w-full
					font-bold
					text-base
					font-feature-settings
					text-[#05273A]
					ml-[3.75rem]
					2xl:ml-[9.89583333%]
				"
			>
				<div class="flex justify-start items-center space-x-[2.1875rem]">
					<router-link to="/" class=""> Trang chủ </router-link>
					<router-link to="/about" class=""> Giới thiệu </router-link>
					<router-link to="/menu" class=""> Thực đơn </router-link>
					<router-link to="/gallery" class=""> Thư viện ảnh </router-link>
					<!-- <router-link to="/event" class=""> Sự kiện </router-link> -->
					<router-link to="/contact" class=""> Liên hệ </router-link>
				</div>

				<div
					class="transition-all ease-in-out w-[60px] h-[2px] mt-[0.313rem] 4xl:mt-[0.625rem] bg-[#05273A]"
					:class="{
						'!w-[84px] translate-x-0': selectedTab === 0,
						'!w-[83.5px] translate-x-[141%]': selectedTab === 1,
						'!w-[84px] translate-x-[278%]': selectedTab === 2,
						'!w-[110px] translate-x-[317%]': selectedTab === 3,
						'!w-[10%] translate-x-[600%]': selectedTab === 4,
						'!w-[60px] translate-x-[822%]': selectedTab === 5,
					}"
				></div>
			</div>

			<div class="hidden xl:flex items-center space-x-[0.625rem] 2xl:space-x-[0.938rem] text-[#42506A]">
				<a href="https://www.facebook.com/coderhouse.vn">
					<button
						class="
							flex
							justify-center
							items-center
							w-[3.125rem]
							h-[3.125rem]
							rounded-full
							bg-[#F7F7F7]
							hover:text-black
						"
					>
						<FacebookIcon />
					</button>
				</a>
				<a href="https://twitter.com/coderhousevn">
					<button
						class="
							flex
							justify-center
							items-center
							w-[3.125rem]
							h-[3.125rem]
							rounded-full
							bg-[#F7F7F7]
							hover:text-black
						"
					>
						<TwitterIcon />
					</button>
				</a>
				<a href="https://www.instagram.com/coderhouse.vn">
					<button
						class="
							flex
							justify-center
							items-center
							w-[3.125rem]
							h-[3.125rem]
							rounded-full
							bg-[#F7F7F7]
							hover:text-black
						"
					>
						<InstaIcon />
					</button>
				</a>
			</div>
		</div>
	</nav>
</template>

<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}
.p-header-custom {
	padding: 0 105px;
}
@media only screen and (max-width: 1400px) {
	.p-header-custom {
		padding: 0 60px;
	}
}
@media only screen and (max-width: 1280px) {
	.p-header-custom {
		padding: 0 0px;
	}
}
</style>
