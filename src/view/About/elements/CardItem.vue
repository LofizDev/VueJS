<script>
import { ref } from "vue";
export default {
	props: {
		name: String,
		image: String,
		review: String,
	},
};
</script>
<template>
	<div class="card relative">
		<img :src="image" alt="user" className="block rounded-[50%] w-[70px] h-[70px]" />
		<div class="text-2xl text-[#05273A] my-4">{{ name }}</div>
		<div class="px-0 sm:px-[20px] whitespace-normal">{{ review }}</div>
	</div>
</template>
<style scoped>
.card {
	@apply w-full h-auto  flex flex-col items-center justify-center py-[50px];
	background: linear-gradient(
		109.1deg,
		rgba(255, 255, 255, 0.7) 0%,
		rgba(255, 255, 255, 0.315) 99.38%,
		rgba(255, 255, 255, 0.49) 99.38%
	);
	backdrop-filter: blur(20px);
	border-radius: 5px;
	/* min-height: 400px; */
}
@media only screen and (min-width: 1200px) {
	.card {
		height: 365px;
		/* background-color: red; */
	}
}
</style>
