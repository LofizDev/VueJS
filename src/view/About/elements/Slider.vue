<script>
import landingImg1 from "@/assets/images/landing-img-1.png";
import landingImg2 from "@/assets/images/landing-img-2.png";
import landingImg3 from "@/assets/images/landing-img-3.png";
import landingImg4 from "@/assets/images/landing-img-4.png";
import user from "@/assets/images/user.png";
import CardItem from "./CardItem.vue";
import "vue3-carousel/dist/carousel.css";

import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
	name: "App",
	components: {
		Carousel,
		Slide,
		Pagination,
		CardItem,
	},
	setup() {
		const reviews = [
			{
				name: "Ngân Võ",
				review: `Thực sự mình rất ấn tượng loại nước uống tại đây, giá cả hợp lý, khâu phục  vụ chu đáo,
			  không gian thoáng mát, địa điểm mới để tụ họp đám bạn chí cốt.`,
			},
			{
				name: "Hoàng Yến",
				review: `Mình thích nhất là ngắm đường phố từ view rooftop tại coder house, cực kì thư giãn và giải tỏa stress,
			 thưởng thức nhiều loại nước uống cực lạ miệng, rất cuốn. Chắc chắn mình sẽ ghé thường xuyên`,
			},
			{
				name: "Khôi Lâm",
				review:
					"Tại đây mình vừa làm quên một vài người bạn, đồng nghiệp mới, cùng chung sở thích đam mê. Thật tuyệt vời khi coder house là nơi tụi mình gặp gỡ, tụ họp mỗi khi có thời gian rảnh",
			},
		];
		return {
			landingImg1,
			landingImg2,
			landingImg3,
			reviews,
			landingImg4,
			user,
			settings: {
				snapAlign: "start",
				itemsToShow: 1,
			},
			breakpoints: {
				768: {
					itemsToShow: 2,
					snapAlign: "start",
				},
				1024: {
					itemsToShow: 2,
					snapAlign: "start",
				},
			},
		};
	},
};
</script>
<template>
	<div class="wrapper">
		<div class="w-full h-full relative overflow-hidden">
			<div class="w-full h-full flex flex-wrap">
				<div
					class="
						review-title
						lg:ml-[7.8%]
						flex-[100%]
						w-full
						lg:max-w-[500px]
						z-[5]
						mt-[35px]
						lg:mt-[198px]
						text-center
						lg:text-left
					"
				>
					<p class="text-[#E1B065] text[14px] lg:text-[24px] leading-[24px] lg:leading-[32px]">
						Cảm nhận của khách hàng
					</p>
					<h3
						class="
							px-[30px]
							lg:px-0
							text-2xl
							lg:text-5xl
							md:text-2xl
							leading-[32px]
							lg:leading-[64px]
							font-bold
							text-[#05273A]
						"
					>
						Khách hàng nói gì về chúng tôi
					</h3>
				</div>
				<div class="w-full h-full lg:flex-1 flex-[100%] z-[5] pt-[30px] lg:pt-[115px] mb-[80px] mx-[5px]">
					<Carousel :items-to-show="2" :settings="settings" :breakpoints="breakpoints" class="max-w-full">
						<Slide v-for="item in reviews" :key="item">
							<div class="w-full px-0 md:px-[15px]">
								<CardItem :name="item.name" :review="item.review" :image="user" />
							</div>
						</Slide>
						<template #addons>
							<pagination />
						</template>
					</Carousel>
				</div>
			</div>
			<img
				:src="landingImg1"
				alt=""
				class="block absolute top-[70px] lg:w-[25.83%] lg:top-[4.5%] left-[-190px] lg:left-[27.7%]"
			/>
			<img :src="landingImg2" alt="" class="absolute hidden lg:block lg:w-[19.68%] lg:left-[40%] lg:bottom-[-10%]" />
			<img
				:src="landingImg3"
				alt=""
				class="absolute bottom-0 right-[45%] lg:w-[5.2%] lg:right-[15.8855%] lg:top-[73.94%]"
			/>
			<img
				:src="landingImg4"
				alt=""
				class="absolute bottom-[-80px] right-[-10%] h-[80%] lg:top-[19.12%] lg:right-[-2.8%]"
			/>
		</div>
	</div>
</template>
<style scoped>
.wrapper {
	@apply sm:px-[16px] pb-[20px];
	max-width: 100%;
	background: url(../../../assets/images/landing-background.png);
}
.carousel .carousel__pagination {
	justify-content: flex-start !important;
}

.carousel__pagination {
	@apply hidden lg:flex;
}
</style>
