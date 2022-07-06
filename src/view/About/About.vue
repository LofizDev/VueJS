<script setup>
import { Banner } from "@/components/Banner";
import { Container } from "@/components/Layout";
import { CardItem, Slider, ImageList } from "./elements";
import { Map } from "@/components/Map";
import user from "@/assets/images/user.png";
</script>

<template>
	<div class="h-full w-full bg-white">
		<Banner />
		<div class="mx-auto max-w-default">
			<div class="w-full">
				<Container class="bg-[#f7f7f7]">
					<div class="intro">
						<div class="intro__item">
							<div class="intro__item-header">Câu chuyện</div>
							<div class="intro__item-sub-text">
								Ra đời với khát khao trở thành nơi đồng hành dành riêng cho các coder trên hành trình phát triển sự
								nghiệp
							</div>
						</div>
						<div class="intro__item">
							<div class="intro__item-header">Sứ mệnh</div>
							<div class="intro__item-sub-text">
								Mang đến không gian thoáng mát, khơi gợi cảm hứng, tập trung làm việc và dễ dàng trao đổi kiến thức
							</div>
						</div>
						<div class="intro__item">
							<div class="intro__item-header">Thực đơn</div>
							<div class="intro__item-sub-text">
								Menu độc đáo, thức uống mới lạ chỉ có tại CoderHouse chắc chắn sẽ làm hài lòng các coder khó tính nhất
							</div>
						</div>
					</div>
				</Container>
				<div class="statistic">
					<div class="statistic__item-left">
						<div class="statistic__item py-[40px] px-[20px] lg:py-[60px] lg:px-[37px];">
							<p class="sub-text">Phát triển</p>
							<p class="main-text">
								Chúng tôi mong muốn mang đến cho bạn những trải nghiệm đáng nhớ mỗi lần đến CoderHouse.
							</p>
						</div>
					</div>
					<div class="statistic__item-right">
						<div class="statistic__item px-[20px] lg:py-[60px] lg:px-[37px] child2">
							<p class="total-number">70+</p>
							<p class="item-name">Thức uống</p>
						</div>
						<div class="statistic__item child3 px-[20px] lg:py-[60px] lg:px-[37px]">
							<p class="total-number">500+</p>
							<p class="item-name">Thành viên</p>
						</div>
						<div class="statistic__item child4 px-[20px] lg:py-[60px] lg:px-[37px]">
							<p class="total-number">25+</p>
							<p class="item-name">Workshop</p>
						</div>
					</div>
				</div>
				<div class="b flex flex-wrap lg:p-[115px] lg:pb-[200px] w-full box-border bg-[#ffffff]">
					<div class="flex-[100%] lg:flex-[50%] max-w-full lg:max-w-[50%] box-border">
						<div class="relative w-full flex">
							<img
								src="../../assets/images/pouring.png"
								class="flex-1 hidden lg:block lg:w-[82.91%] w-full object-cover"
								alt="pouring"
							/>
							<img
								src="../../assets/images/pouring-rect.png"
								class="flex-1 block lg:hidden lg:w-[82.91%] w-full object-cover"
								alt="pouring"
							/>
							<img
								src="../../assets/images/breads.png"
								class="absolute -bottom-[142px] -left-[70px] lg:block hidden w-[40.31%]"
								alt="breads"
							/>
						</div>
					</div>
					<div
						class="
							flex-[100%]
							mt-[30px]
							mb-[40px]
							lg:flex-[50%]
							p-[16px]
							lg:pl-[50px]
							max-w-full
							lg:max-w-[50%]
							box-border
						"
					>
						<h2 class="font-bold text-[32px] title-our-story leading-[44px] 2xl:text-[50px] 2xl:leading-[72px]">
							CÂU CHUYỆN CỦA CODERHOUSE
						</h2>
						<p class="leading-[32px] mt-[4px] text-justify">
							Xuất phát điểm là lập trình viên, chúng tôi luôn hiểu rõ lập trình viên cần gì, muốn gì và từ đó Coder
							House ra đời với khát khao trở thành nơi đồng hành dành riêng cho các Coder trên hành trình phát triển sự
							nghiệp của mình.
						</p>
						<p class="leading-[32px] text-justify py-4">
							CoderHouse là sự kết hợp mô hình mới gồm làm việc và thư giãn. Mỗi khu vực đều được tối ưu cho nhu cầu
							hoạt động riêng.
						</p>
						<p class="leading-[32px] text-justify py-4 mt-[-10px]">
							- Toàn bộ không gian tại CoderHouse thoáng mát, thư thái để thưởng thức nước uống và làm việc. <br />
							- Nơi thường xuyên tổ chức các buổi meetup về lập trình & công nghệ để các thành viên trong cộng đồng
							Coder gặp mặt kết bạn giao lưu, chia sẻ kinh nghiệm cải tiến trong công việc.
						</p>
						<div class="leading-[32px] text-justify">
							<p class="ml-[10px] relative special-text">
								Không chỉ đơn thuần là nơi cung ứng dịch vụ, CoderHouse mang tin thần là nơi truyền cảm hứng sáng tạo ra
								các ý tưởng đột phá, mang đến cảm giác gần gũi, thân thuộc cho các Coder khi ghé thăm.
							</p>
						</div>
						<p class="leading-[32px] pt-4 text-justify">
							CoderHouse gửi lời cảm ơn chân thành và hy vọng sẽ mang đến cho các coder những trải nghiệm tuyệt vời
							nhất.
						</p>
					</div>
				</div>
				<Slider />
				<ImageList />
				<div class="h-[2vh] w-full"></div>
			</div>
		</div>
		<Map />
	</div>
</template>

<style scoped>
.banner {
	@apply relative w-full;
	height: 420px;
	background: url(../../assets/images/background1.png);
	background-size: cover;
	background-position: center;
	box-sizing: border-box;
	display: block;
}
.banner__main-text {
	@apply absolute left-1/2 whitespace-nowrap text-[14px] leading-[24px] lg:text-[24px] lg:leading-[88px];
	font-weight: bold;
	font-size: 64px;
	line-height: 88px;
	top: 30%;
	transform: translateX(-50%);
	text-align: center;
	color: #ffffff;
}

.intro {
	@apply flex flex-wrap justify-center w-full  py-4 lg:py-[70px];
	background: #f7f7f7;
	/* background: red; */
}
.intro__item {
	@apply flex-[100%] max-w-full lg:flex-[33.33334%] lg:max-w-[33.33334%] my-3 lg:my-0 box-border;
	padding: 10px 30px;
}

.intro__item-header {
	font-weight: 600;
	font-size: 24px;
	line-height: 32px;
	text-align: center;
	color: #05273a;
}

.intro__item-sub-text {
	font-weight: 500;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	color: #021824;
	max-width: 380px;
	margin: auto;
}

.statistic {
	width: 100%;
	display: flex;
}
.statistic__item {
	@apply py-[40px] px-[20px] lg:py-[60px] lg:px-[37px];
	width: 100%;
	min-height: 40px;
	color: #ffffff;
}
.statistic__item-left {
	width: 50%;
	background: #e1b065;
}
.statistic__item-right {
	width: 50%;
	display: flex;
	flex: 1;
}
.intro__item-header {
	margin-bottom: 10px;
}
/* .statistic__item:not(:first-child) {
	@apply flex items-center justify-center flex-col;
} */

.child2 {
	background-color: #42506a !important;
}
.child3 {
	background-color: #05273a !important;
}
.child4 {
	background-color: #021824 !important;
}

.sub-text {
	@apply text-[12px] leading-[24px] lg:text-[16px] lg:leading-[24px];
	font-weight: 500;
	color: #ffffff;
}

.main-text {
	@apply text-[15px] leading-[24px] lg:text-[24px] lg:leading-[32px];
	font-weight: 600;
	color: #ffffff;
}

.total-number {
	font-weight: bold;
	font-size: 32px;
	line-height: 48px;
	text-align: center;
	font-feature-settings: "pnum" on, "lnum" on;
	color: #ffffff;
}

.item-name {
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	font-feature-settings: "pnum" on, "lnum" on;
	color: #ffffff;
}

.special-text::before {
	position: absolute;
	top: 0;
	left: -10px;
	content: "";
	display: block;
	background: #e1b065;
	width: 4px;
	height: 100%;
}
.text2 {
	margin-top: 20px;
}
@media only screen and (max-width: 1015px) {
	.text2 {
		margin-top: 0;
	}
}
@media only screen and (max-width: 1400px) {
	.title-our-story {
		font-size: 25px;
	}
}
@media only screen and (max-width: 980px) {
	.statistic {
		flex-direction: column;
	}
	.statistic__item-left {
		width: 100%;
	}
	.statistic__item-right {
		width: 100%;
	}
}
</style>
