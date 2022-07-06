<script setup>
import { InstaIcon, FacebookIcon, TwitterIcon } from "@/assets/custom_icon";
</script>

<template>
	<div class="text-center w-full bg-white px-4 py-8 footer">
		<img class="mb-4 m-auto w-[430px]" src="../../assets/images/big-logo.svg" />
		<p class="mb-4">
			CONTACT INFO : <br />
			CoderHouse - Coffee & Working for Developer <br />Số 2, Thống Nhất, Phường Bình Thọ, Thành phố Thủ Đức
			<br />
			(+84) 976 40 20 80
		</p>
		<div class="flex w-full justify-center items-center space-x-[0.625rem] 2xl:space-x-[0.938rem]">
			<a
				href="https://www.facebook.com/coderhouse.vn"
				class="flex justify-center items-center w-[3.125rem] h-[3.125rem] rounded-full bg-white"
			>
				<FacebookIcon />
			</a>
			<a
				href="https://twitter.com/coderhousevn"
				class="flex justify-center items-center w-[3.125rem] h-[3.125rem] rounded-full bg-white"
			>
				<TwitterIcon />
			</a>
			<a
				href="https://www.instagram.com/coderhouse.vn"
				class="flex justify-center items-center w-[3.125rem] h-[3.125rem] rounded-full bg-white"
			>
				<InstaIcon />
			</a>
		</div>
	</div>
	<div class="bg-[#F1F1F1] p-4 w-full text-center">© Coder House All Rights Reserved 2022</div>
</template>

<style scoped>
.footer {
	background: url("../../assets/images/bg-footer.png") repeat 0 0;
}
</style>
