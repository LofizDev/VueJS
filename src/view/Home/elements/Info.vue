<script setup>
import someImage from "@/assets/images/coderhouse-kg1.jpg";
import coderhouse2 from "@/assets/images/coderhouse-kg7.jpg";
import coderhouse3 from "@/assets/images/coderhouse-kg9.jpg";
import coderhouse4 from "@/assets/images/coderhouse-kg11.jpg";
import coderhouse5 from "@/assets/images/coderhouse-kg17.jpg";
import { BuildingMarkIcon, LocationMarkIcon, PhoneMarkIcon } from "@/assets/custom_icon";
</script>

<template>
	<div class="flex flex-col lg:flex-row">
		<div class="flex w-full">
			<img :src="someImage" class="w-1/2 h-[12.938rem] sm:h-full object-cover" />
			<img :src="coderhouse2" class="w-1/2 h-[12.938rem] sm:h-full object-cover" />
		</div>
		<div class="flex w-full">
			<div class="flex justify-center items-center w-1/2 bg-[#42506A]">
				<div class="flex flex-col justify-center items-center w-full h-[12.938rem] sm:h-full p-5">
					<div class="bg-[#F1F1F1] rounded-full p-[15px] md:p-[25px] mb-[0.938rem]">
						<LocationMarkIcon />
					</div>
					<p class="font-medium text-sm md:text-2xl lg:text-xl leading-6 2xl:leading-8 text-white text-center">
						Số 2 Thống Nhất,
					</p>
					<p class="font-medium text-sm md:text-2xl lg:text-xl leading-6 2xl:leading-8 text-white text-center">
						Phường Bình Thọ,
					</p>
					<p class="font-medium text-sm md:text-2xl lg:text-xl leading-6 2xl:leading-8 text-white text-center">
						Thành phố Thủ Đức
					</p>
				</div>
			</div>
			<img :src="coderhouse5" class="w-1/2 h-[12.938rem] sm:h-full object-cover" />
		</div>
	</div>

	<div class="flex flex-col lg:flex-row">
		<div class="flex w-full">
			<img :src="coderhouse3" class="w-1/2 h-[12.938rem] sm:h-full object-cover" />
			<div class="flex justify-center items-center w-1/2 bg-white">
				<div
					class="
						flex flex-col
						justify-center
						items-center
						space-y-1
						md:space-y-3
						xl:space-y-[2.25rem]
						h-[12.938rem]
						sm:h-full
					"
				>
					<div class="bg-[#F1F1F1] rounded-full p-[15px] md:p-[25px] mb-[0.938rem]">
						<PhoneMarkIcon />
					</div>
					<p class="font-medium text-sm md:text-2xl lg:text-xl leading-6 2xl:leading-8 text-[#021824] text-center">
						(+84) 976 40 20 80
					</p>
				</div>
			</div>
		</div>
		<div class="flex w-full">
			<img :src="coderhouse4" class="w-1/2 h-[12.938rem] sm:h-full object-cover" />
			<div class="flex justify-center items-center w-1/2 bg-[#05273A]">
				<div
					class="
						flex flex-col
						justify-center
						items-center
						space-y-1
						md:space-y-3
						xl:space-y-[2.25rem]
						h-[12.938rem]
						sm:h-full
					"
				>
					<div class="bg-[#F1F1F1] rounded-full p-[15px] md:p-[25px] mb-[0.938rem]">
						<BuildingMarkIcon />
					</div>
					<p class="w-[68%] font-medium text-sm md:text-2xl lg:text-xl leading-6 2xl:leading-8 text-white text-center">
						Thứ 2 - Chủ Nhật 7:30 - 22:00
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
