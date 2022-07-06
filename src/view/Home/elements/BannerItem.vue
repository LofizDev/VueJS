<script>
import { ref } from "vue";
import arrowLeft from "@/assets/icons/icon_arrow_left.png";
import arrowRight from "@/assets/icons/icon_right_arrow.png";

export default {
	props: { item: Object },
};
</script>

<template>
	<div class="relative bg-white">
		<img :src="item.img" class="w-full h-full max-h-[50.87500rem] object-cover" />
		<div class="absolute flex flex-col h-full justify-center top-0 left-0 px-8 xl:px-16 z-10">
			<div class="w-[55%] sm:w-[60%] mb-4 xl:mb-8 text-left">
				<p class="text-[#E1B065]">{{ item.subTitle }}</p>
				<h1
					class="title-banner text-[16px] leading-[24px] xl:text-[64px] lg:leading-[88px] font-bold mb-2 xl:mb-4"
					:style="{ color: item.textColor }"
				>
					{{ item.title }}
				</h1>
				<p class="w-full hidden sm:block lg:w-[50%]" :style="{ color: item.textColor }">{{ item.desc }}</p>
			</div>
			<div class="flex">
				<button
					class="
						rounded-full
						border border-white
						w-[32px]
						h-[32px]
						lg:w-[50px] lg:h-[50px]
						mr-2
						carousel-control-prev
						flex
						items-center
						justify-center
						p-0
						text-center
						opacity-100
					"
					type="button"
					data-bs-target="#carouselBanner"
					data-bs-slide="prev"
				>
					<img src="../../../assets/icons/icon_arrow_left.png" />
				</button>
				<button
					href="#"
					class="
						rounded-full
						border border-white
						w-[32px]
						h-[32px]
						lg:w-[50px] lg:h-[50px]
						carousel-control-next
						flex
						items-center
						justify-center
						p-0
						text-center
						opacity-100
					"
					data-bs-target="#carouselBanner"
					data-bs-slide="next"
				>
					<img src="../../../assets/icons/icon_right_arrow.png" />
				</button>
			</div>
		</div>
	</div>
	<div class="flex-col md:flex-row md:flex items-center relative mt-4 xl:mt-[-50px] px-8 xl:px-16">
		<div class="flex flex-shrink-0">
			<img
				v-for="(img, idx) in item.thumb.img"
				:key="idx"
				:src="img"
				class="w-[100px] h-[100px] xl:w-[250px] xl:h-[250px] mr-4"
			/>
		</div>
		<div class="ml-0 sm:ml-8 mt-8 text-center md:text-left md:mt-0">
			<h3 class="text-[16px] leading-[24px] md:text-[32px] md:leading-[40px] mb-2 mt-10 font-bold">
				{{ item.thumb.title }}
			</h3>
			<p>{{ item.thumb.desc }}</p>
		</div>
	</div>
</template>

<style scoped>
@media only screen and (max-width: 1440px) {
	.title-banner {
		font-size: 50px;
		line-height: 70px;
	}
}
@media only screen and (max-width: 1140px) {
	.title-banner {
		font-size: 40px;
		line-height: 55px;
	}
}
@media only screen and (max-width: 940px) {
	.title-banner {
		font-size: 34px;
		line-height: 50px;
	}
}
@media only screen and (max-width: 850px) {
	.title-banner {
		font-size: 25px;
		line-height: 36px;
	}
}
@media only screen and (max-width: 650px) {
	.title-banner {
		font-size: 16px;
		line-height: 24px;
	}
}
</style>
