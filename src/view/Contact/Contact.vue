<script setup>
import { ref } from "vue";
import { Banner } from "@/components/Banner";
import { Container } from "@/components/Layout";
import { Map } from "@/components/Map";
import { ContactForm, SubmitAlert } from "./elements";

import someImage from "@/assets/images/coderhouse-kg13.jpg";
</script>

<template>
	<div class="w-full">
		<Banner />
		<Container class="bg-white">
			<div class="flex flex-col w-full">
				<SubmitAlert />

				<div class="flex flex-col lg:flex-row items-center justify-between w-full mb-[1.875rem] lg:mb-[8.125rem]">
					<div class="flex flex-col text-[#021824]">
						<p class="mb-[0.813rem] text-2xl leading-8 font-semibold">Địa chỉ</p>
						<p class="mb-[1.688rem] text-base leading-6 font-semibold font-feature-settings">
							Số 2 Thống Nhất, Phường Bình Thọ Thành phố Thủ Đức, HCMC
						</p>
						<p class="mb-[0.813rem] text-2xl leading-8 font-semibold">Điện thoại</p>
						<p class="mb-[1.688rem] text-base leading-6 font-semibold font-feature-settings">(+84) 976 40 20 80</p>
						<p class="mb-[0.813rem] text-2xl leading-8 font-semibold">Thời gian mở/đóng cửa</p>
						<p class="mb-[1.688rem] text-base leading-6 font-semibold font-feature-settings">
							Thứ 2 – Chủ nhật Từ 7:30 đến 22:00
						</p>
					</div>

					<img :src="someImage" class="hidden lg:block max-w-[43rem] max-h-[28.438rem] bg-gray-400 object-cover" />
				</div>

				<div class="w-full mb-[8.125rem]">
					<ContactForm />
				</div>
			</div>
		</Container>
		<Map />
	</div>
</template>

<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}
</style>
