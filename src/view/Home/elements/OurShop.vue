<script setup>
import { ref } from "vue";

import { MoveSlideRightIcon } from "@/assets/custom_icon";

import our_shop from "@/assets/images/coderhouse-kg13.jpg";
import somebody_smile from "@/assets/images/client-feedback2.jpg";
import mark_q from "@/assets/images/mark_q.png";
import mark_q_2 from "@/assets/images/mark_q_2.png";

const activeSlide = ref(0);

const handleMoveSlide = v => {
	if (!isNaN(v)) {
		if (activeSlide.value >= 0 && activeSlide.value <= mockSlider.length - 1) {
			if ((v === -1 && activeSlide.value === 0) || (v === +1 && activeSlide.value === mockSlider.length - 1)) {
				activeSlide.value = 0;
			} else {
				activeSlide.value += v;
			}
		}
	}
};

const mockSlider = [
	{
		writer: "Ngân Võ",
		content: `Thực sự mình rất ấn tượng loại nước uống tại đây, giá cả hợp lý, khâu phục  vụ chu đáo,
			  không gian thoáng mát, địa điểm mới để tụ họp đám bạn chí cốt.`,
	},
	{
		writer: "Hoàng Yến",
		content: `Mình thích nhất là ngắm đường phố từ view rooftop tại coder house, cực kì thư giãn và giải tỏa stress,
			 thưởng thức nhiều loại nước uống cực lạ miệng, rất cuốn. Chắc chắn mình sẽ ghé thường xuyên`,
	},
	{
		writer: "Khôi Lâm",
		content:
			"Tại đây mình vừa làm quên một vài người bạn, đồng nghiệp mới, cùng chung sở thích đam mê. Thật tuyệt vời khi coder house là nơi tụi mình gặp gỡ, tụ họp mỗi khi có thời gian rảnh",
	},
	{
		writer: "Tuyên Trần",
		content:
			"Ngol !!!",
	},
];
</script>

<template>
	<div class="flex flex-col w-full">
		<div class="flex flex-col xl:flex-row">
			<img :src="our_shop" class="flex w-full xl:w-1/2" />

			<div class="flex flex-col w-full xl:w-1/2 bg-[#F7F7F7]">
				<div
					class="
						flex flex-col
						justify-center
						items-center
						lg:items-start lg:w-[37.5rem]
						xl:w-[31.25rem]
						h-full
						mx-auto
						my-5
						2xl:my-[11.563%]
					"
				>
					<p class="text-[#E1B065] font-semibold text-sm lg:text-2xl leading-6">Giới thiệu</p>
					<p
						class="
							text-2xl
							lg:text-[3.3rem]
							leading-6
							lg:leading-[4.5rem]
							font-bold
							mt-2
							font-feature-settings
							text-center
							lg:text-left
						"
					>
						Cửa hàng của chúng tôi
					</p>
					<p
						class="
							w-[90%]
							md:w-[50%]
							lg:w-auto
							text-sm
							lg:text-base
							leading-6
							font-medium
							mt-2
							text-center
							lg:text-left
						"
					>
						Một không gian để gặp gỡ đồng nghiệp, họp nhóm, lên ý tưởng sáng tạo hay đơn giản là chill sau những giờ làm
						việc căng thẳng.
					</p>
					<button class="btn-default rounded-[5px] mt-[2.5rem] p-4">
						<router-link to="/about">
							<p class="text-white text-base leading-6 font-medium text-center">Xem thêm</p>
						</router-link>
					</button>
				</div>

				<div class="flex flex-col lg:flex-row">
					<div class="flex lg:w-2/3">
						<div
							class="
								flex flex-col
								justify-center
								items-center
								w-full
								py-8
								lg:py-[3.5rem]
								space-y-1
								xl:space-y-2
								2xl:space-y-[0.938rem]
								bg-[#42506A]
								text-white
							"
						>
							<p class="text-semibold text-[2rem] leading-[3rem] font-feature-settings text-center">70+</p>
							<p class="text-semibold text-base leading-6 font-feature-settings text-center">Thức uống</p>
						</div>
						<div
							class="
								flex flex-col
								justify-center
								items-center
								w-full
								lg:py-[3.5rem]
								space-y-1
								lg:space-y-2
								2xl:space-y-[0.938rem]
								bg-[#05273A]
								text-white
							"
						>
							<p class="text-semibold text-[2rem] leading-[3rem] font-feature-settings text-center">500+</p>
							<p class="text-semibold text-base leading-6 font-feature-settings text-center">Thành viên</p>
						</div>
					</div>
					<div
						class="
							flex flex-col
							justify-center
							items-center
							lg:w-1/3
							py-8
							lg:py-[3.5rem]
							space-y-1
							lg:space-y-2
							2xl:space-y-[0.938rem]
							bg-[#021824]
							text-white
						"
					>
						<p class="text-semibold text-[2rem] leading-[3rem] font-feature-settings text-center">25+</p>
						<p class="text-semibold text-base leading-6 font-feature-settings text-center">Workshop</p>
					</div>
				</div>
			</div>
		</div>

		<div class="flex flex-col lg:flex-row">
			<div class="flex flex-col items-start xl:items-center h-auto lg:w-1/2 bg-[#F1F1F1] px-3 xl:px-0">
				<div class="hidden xl:flex items-end space-x-[3.375rem]">
					<img :src="mark_q" class="w-[30%] mt-[5.438rem] object-cover" />
					<p
						class="
							w-[60%]
							mb-5
							text-[#05273A]
							xl:text-[2.5rem]
							2xl:text-[4rem]
							xl:leading-[4.063rem]
							2xl:leading-[5.5rem]
							font-bold font-feature-settings
						"
					>
						Khách hàng nói gì về chúng tôi
					</p>
				</div>

				<p class="block xl:hidden w-[80%] text-2xl leading-6 font-bold text-[#05273A] mt-[4.063rem]">
					Khách hàng nói gì về chúng tôi
				</p>

				<div class="relative flex flex-col w-full xl:w-[70%] h-full mt-[1.875rem] xl:mt-[2.813rem]">
					<div
						v-for="(item, i) in mockSlider"
						:key="i"
						:class="i === activeSlide ? 'block animate-slide-right' : 'hidden'"
					>
						<p class="xl:w-[70%] min-h-[4.5rem] text-sm xl:text-base leading-6 font-medium custom-line">
							{{ item.content }}
						</p>
						<p class="mt-[0.938rem] xl:mt-5 text-2xl leading-[2rem] xl:leading-6 text-[#05273A] font-semibold">
							{{ item.writer }}
						</p>
					</div>

					<div class="flex space-x-[1.563rem] mt-[2rem] mb-[2.5rem] xl:my-[3.625rem]">
						<button
							class="text-[#42506A] hover:text-green-600 active:text-green-600 rotate-180"
							@click="handleMoveSlide(-1)"
						>
							<MoveSlideRightIcon class="w-8 h-8 md:w-auto md:h-auto" />
						</button>

						<button class="text-[#42506A] hover:text-green-600 active:text-green-600" @click="handleMoveSlide(1)">
							<MoveSlideRightIcon class="w-8 h-8 md:w-auto md:h-auto" />
						</button>
					</div>

					<img :src="mark_q_2" class="xl:hidden absolute bottom-[3.5rem] right-0 w-[20%] mt-[5.438rem]" />
				</div>
			</div>

			<img :src="somebody_smile" class="hidden lg:flex w-full lg:w-1/2 object-cover" />
		</div>
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

.custom-line {
	overflow: hidden;
	text-overflow: ellipsis;
	height: 127px;
	display: -webkit-box;
	-webkit-line-clamp: 5; /* number of lines to show */
	line-clamp: 5;
	-webkit-box-orient: vertical;
	/* word-break: break-all; */
}
</style>
