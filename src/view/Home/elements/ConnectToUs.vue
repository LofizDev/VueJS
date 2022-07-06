<script setup></script>

<template>
	<div
		class="
			flex flex-col
			justify-center
			items-center
			xl:w-[50.375rem]
			h-full
			mx-auto
			mt-[4.063rem]
			mb-[4.375rem]
			lg:mt-[8.125rem] lg:mb-[4.375rem]
		"
	>
		<p class="text-[#E1B065] font-semibold text-sm lg:text-2xl leading-6">Liên hệ</p>
		<p
			class="
				text-2xl
				lg:text-[3.7rem]
				leading-[2rem]
				lg:leading-[4.8rem]
				font-bold
				mt-2
				font-feature-settings
				text-center
			"
		>
			Liên hệ với chúng tôi để biết thêm nhiều sự kiện
		</p>
		<p class="w-[90%] md:w-[50%] lg:w-[94%] text-sm lg:text-[16px] leading-6 font-medium mt-2 text-center">
			Coder House sẵn sàng đáp ứng các nhu cầu tổ chức sự kiện, talk show, meeting với các chủ đề liên quan đến Công
			nghệ và Lập Trình. Mang đến những thông tin thú vị bổ ích cho người tham gia.
		</p>
		<button class="btn-default rounded-[5px] mt-[2.5rem] p-4">
			<router-link to="/contact">
				<p class="text-white text-base leading-6 font-medium text-center">Liên hệ ngay</p>
			</router-link>
		</button>
	</div>
</template>

<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}

.btn-default {
	@apply hover:bg-[#0D5ACA] hover:bg-left active:bg-left;
	background: linear-gradient(to left, #05273a 50%, #0d5aca 49%) right;
	background-size: 202%;
	transition: 0.25s ease-out;
}
</style>
