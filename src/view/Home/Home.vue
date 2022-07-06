<script setup>
import { Info, SpecialOrder, OrderOnline, OurShop, ConnectToUs } from "./elements";
import { Map } from "@/components/Map";
import { Banner } from "./block";
</script>

<template>
	<div class="flex flex-col items-center w-full bg-white">
		<Banner />
		<div class="flex flex-col items-center m-auto pt-[6.25rem] xl:pt-[12.5rem] pb-16 px-4 text-center">
			<p class="text-[#E1B065] text-sm lg:text-2xl">Chào mừng đến với</p>
			<h1 class="text-[32px] leading-[48px] md:text-[64px] md:leading-[88px] font-bold mb-4">CoderHouse</h1>
			<p class="w-full lg:w-[62%] 2xl:w-[45%] font-medium text-base leading-6 text-[#021824] text-center">
				Ngôi nhà "chung" dành cho các coder có cùng niềm đam mê, Kết nối cộng đồng coder. Coder House là nơi giải tỏa
				căng thẳng, cùng nhau chia sẻ công việc.
			</p>
			<button class="btn-default rounded-[5px] p-4 mt-[2.5rem]">
				<router-link to="/gallery">
					<p class="text-base leading-6 font-medium text-white">Đi tham quan</p>
				</router-link>
			</button>
		</div>

		<div class="flex flex-col w-full max-w-default">
			<Info />
			<SpecialOrder />
			<!-- <OrderOnline /> -->
			<OurShop />
			<ConnectToUs />
		</div>

		<Map />
	</div>
</template>

<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}
.btn-default {
	@apply hover:bg-[#0D5ACA] hover:bg-left;
	background: linear-gradient(to left, #05273a 50%, #0d5aca 49%) right;
	background-size: 202%;
	transition: 0.25s ease-out;
}
</style>
