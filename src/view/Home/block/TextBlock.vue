<script>
import { ref } from "vue";

export default {
	props: { item: Object },
};
</script>

<template>
	<div class="px-4">
		<p class="text-[#E1B065]">Chào mừng đến với</p>
		<h1 class="text-[32px] leading-[48px] md:text-[64px] md:leading-[88px] font-bold mb-4">CoderHouse</h1>
		<p class="mb-4">
			Sed massa ac est ornare pharetra imperdiet nibh. Nunc tellus ullamcorper porta scelerisque eu mauris faucibus sed.
			Aliquet volutpat porta nisi.
		</p>
		<button class="h-[56px] px-4 bg-[#05273A] hover:bg-[#0D5ACA] text-white rounded-[5px]">
			<p class="text-base leading-6 font-medium">Đi tham quan</p>
		</button>
	</div>
</template>

<style scoped></style>
