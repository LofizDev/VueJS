<script setup>
import { ref, reactive, watch } from "vue";
import { useRoute } from "vue-router";
import debounce from "lodash/debounce";
import { useWindowScroll, onClickOutside, useElementVisibility } from "@vueuse/core";

import { InstaIcon, FacebookIcon, TwitterIcon } from "@/assets/custom_icon";

const { y } = useWindowScroll();

const route = useRoute();

const target = ref(null);
const targetVisible = ref(null);

onClickOutside(target, () => {
	console.log("click outside");

	isClickingInside.value = false;
});

const targetIsVisible = useElementVisibility(targetVisible);

const props = defineProps({
	activeTab: { type: Number, default: -1 },
});

const isClickingInside = ref(false);
const isClickMenu = ref(false);

const menu = reactive({
	isOpen: false,
	isClose: true,
});

const handleClickingInside = () => {
	console.log("click inside");
	isClickingInside.value = true;
};

const handleClickingMenu = () => {
	isClickMenu.value = true;
};

const handleMenuBehavior = () => {
	if (isClickingInside.value && isClickMenu.value) {
		setTimeout(() => {
			menu.isOpen = !menu.isOpen;
			menu.isClose = !menu.isClose;
			isClickMenu.value = false;
		}, 150);
	} else if (isClickingInside.value) {
		setTimeout(() => {
			menu.isOpen = true;
			menu.isClose = false;
		}, 150);
	} else {
		setTimeout(() => {
			menu.isOpen = false;
			menu.isClose = true;
		}, 150);
	}
};

const debounceClick = debounce(() => handleMenuBehavior(), 50);

window.addEventListener("click", () => debounceClick());

watch(
	() => targetIsVisible.value,
	() => {
		if (!targetIsVisible.value) {
			menu.isOpen = false;
			menu.isClose = true;
		}
	}
);
</script>

<template>
	<div
		ref="target"
		class="relative flex items-center w-full h-[4.125rem] sm:h-[5.625rem] 4xl:h-[8.125rem]"
		@click="handleClickingInside"
	>
		<div
			class="
				relative
				flex flex-col
				justify-center
				items-center
				w-[1.125rem]
				h-[0.938rem]
				sm:w-[24px] sm:h-[21px]
				transition-all
				duration-500
				ease-in-out
				ml-[5.46875%]
			"
			@click="handleClickingMenu"
		>
			<span
				class="absolute top-[1px] right-0 block w-full bg-black h-[2px] rounded-lg"
				:class="{ 'animate-rotate-45 w-full': menu.isClose, 'animate-close-down w-0': menu.isOpen }"
			></span>
			<span
				class="block w-full bg-black h-[2px] rounded-lg transition-all duration-300 ease-in-out animate-rotate-45"
				:class="{ 'transform rotate-45': menu.isOpen }"
			></span>
			<span
				class="absolute w-full bg-black h-[2px] rounded-lg transition-all duration-300 ease-in-out animate-rotate-45"
				:class="{ 'transform -rotate-45': menu.isOpen }"
			></span>
			<span
				class="
					absolute
					bottom-[1px]
					left-0
					block
					w-full
					bg-black
					h-[2px]
					rounded-lg
					transition-all
					duration-300
					ease-in-out
					animate-rotate-45
				"
				:class="{ 'animate-rotate-45 w-full': menu.isClose, 'animate-close-down w-0': menu.isOpen }"
			></span>
		</div>

		<div
			ref="targetVisible"
			class="
				absolute
				w-full
				top-[4.125rem]
				sm:top-[5.625rem]
				left-0
				right-0
				z-[999999999999999999999]
				transition-w-h
				duration-[.1s]
				ease-linear
				bg-white
				shadow-2xl
				max-h-[calc(100vh-4.125rem)]
				sm:max-h-[calc(100vh-5.625rem)]
				overflow-y-auto
			"
			:class="{
				' w-full sm:w-[412px]': menu.isOpen,
				' w-0': menu.isClose,
			}"
			@click="handleClickingInside"
		>
			<div
				class="
					flex flex-col
					justify-start
					w-full
					select-none
					whitespace-nowrap
					px-[2.188rem]
					py-[15px]
					lg:py-[2.188rem]
					space-y-[12px]
					lg:space-y-[2.188rem]
					text-[#05273A]
					font-bold
					text-base
					leading-6
				"
				:class="{ invisible: menu.isClose }"
			>
				<div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/" class="w-1/2" @click="handleClickingMenu"> Trang chủ</router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[84.1px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 0 }"
					/>
				</div>

				<div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/about" class="w-1/2" @click="handleClickingMenu"> Giới thiệu </router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[84.1px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 1 }"
					/>
				</div>

				<div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/menu" class="w-1/2" @click="handleClickingMenu"> Thực đơn </router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[84.1px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 2 }"
					/>
				</div>

				<div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/gallery" class="w-1/2" @click="handleClickingMenu"> Thư viện ảnh </router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[110px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 3 }"
					/>
				</div>

				<!-- <div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/event" class="w-1/2" @click="handleClickingMenu"> Sự kiện </router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[64.1px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 4 }"
					/>
				</div> -->

				<div class="group flex flex-col w-full transition-all duration-100 hover:ml-5">
					<router-link to="/contact" class="w-1/2" @click="handleClickingMenu"> Liên hệ </router-link>
					<span
						class="mt-[0.625rem] bg-[#05273A] h-[2px] w-0 transition-w-h group-hover:w-[64.1px]"
						:class="{ '!w-[24px] group-hover:!w-[95%]': props.activeTab === 5 }"
					/>
				</div>

				<div class="flex items-center space-x-[0.625rem] 2xl:space-x-[0.938rem] mt-[2.813rem] text-[#42506A]">
					<a href="https://www.facebook.com/coderhouse.vn">
						<div
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
						</div>
					</a>
					<a href="https://twitter.com/coderhousevn">
						<div
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
						</div>
					</a>

					<a href="https://www.instagram.com/coderhouse.vn">
						<div
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
						</div>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.btn-default {
	@apply hover:bg-[#0D5ACA] hover:bg-left;
	background: linear-gradient(to left, transparent 50%, #0d5aca 50%) right;
	background-size: 202%;
	transition: 0.1s ease-out;
}
</style>
