<script setup>
import grab_food_logo from "@/assets/images/grab_food_logo.png";
import shoppe_food_logo from "@/assets/images/shoppe_food_logo.png";
</script>

<template>
	<div class="flex flex-col justify-center items-center w-full h-[20.625rem] lg:h-[30.813rem] bg-white text-[#05273A]">
		<div class="flex flex-col items-center space-y-2">
			<p class="text-2xl lg:text-[4rem] leading-6 lg:leading-[5.5rem] font-feature-settings font-bold">
				Đặt hàng online
			</p>
			<p class="w-[90%] md:w-[80%] lg:w-[60%] text-sm lg:text-base leading-6 text-center font-medium">
				Mua hàng của Coder House hãy đặt ngay tại đây. Giao hàng nhanh chóng tận tay.
			</p>
		</div>

		<div class="flex mt-[1.875rem] space-x-[1.653rem] lg:space-x-[3.125rem]">
			<button
				class="
					flex
					justify-center
					w-[10.063rem]
					lg:w-[18.938rem] lg:h-[9.125rem]
					bg-[#00B14F]
					hover:shadow-glowing-green
					active:shadow-glowing-green
					rounded-[8px]
				"
			>
				<img :src="grab_food_logo" class="rounded-[8px]" />
			</button>
			<button
				class="
					flex
					justify-center
					w-[10.063rem]
					lg:w-[18.938rem] lg:h-[9.125rem]
					bg-[#ED4C2F]
					hover:shadow-glowing-red
					active:shadow-glowing-red
					rounded-[8px]
				"
			>
				<img :src="shoppe_food_logo" class="rounded-[8px]" />
			</button>
		</div>
	</div>
</template>
<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}
</style>
