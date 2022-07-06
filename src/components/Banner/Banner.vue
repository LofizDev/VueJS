<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

import bannerImage from "@/assets/images/banner.png";
import bannerMobileImage from "@/assets/images/banner_mobile.png";

const route = useRoute();
const router = useRouter();

const title = ref("");

onMounted(() => {
	switch (route.fullPath) {
		case "/contact":
			title.value = "Liên hệ";
			break;
		case "/event":
			title.value = "Sự kiện";
			break;
		case "/gallery":
			title.value = "Thư viện ảnh";
			break;
		case "/menu":
			title.value = "Thực đơn";
			break;
		case "/about":
			title.value = "Giới thiệu";
			break;
		default:
			title.value = "Not found";
			break;
	}
});
</script>

<template>
	<div class="relative flex justify-center w-full h-full min-h-[5.625rem] bg-slate-300">
		<img :src="bannerMobileImage" class="block sm:hidden w-full object-cover" />
		<img :src="bannerImage" class="hidden sm:block w-full object-cover" />

		<div class="absolute top-[13.5%] sm:top-[29.047619%] w-max">
			<p class="text-white font-bold text-base sm:text-4xl 2xl:text-[4rem] 4xl:text-7xl leading-[1.125rem]">
				{{ title }}
			</p>
		</div>
		<div
			class="absolute flex justify-center items-center bottom-0 w-full h-[34.2%] max-h-[6.25rem] bg-[rgba(0,0,0,0.5)]"
		>
			<router-link
				:to="{ name: 'HomePage' }"
				class="text-[rgba(255,255,255,0.5)] font-medium text-xs sm:text-base xl:text-lg 4xl:text-2xl leading-6"
				>Trang chủ</router-link
			>
			<div class="text-white mx-2">/</div>
			<p class="text-white font-medium text-xs sm:text-base xl:text-lg 4xl:text-2xl leading-6">{{ title }}</p>
		</div>
	</div>
</template>

<style scoped></style>
