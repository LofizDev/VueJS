<script setup>
import { ref } from "vue";
import { BannerItem } from "../elements";
import img1 from "@/assets/images/home_banner1.png";
import img2 from "@/assets/images/home_banner2.png";
import img3 from "@/assets/images/home_banner3.png";

import thumb1_1 from "@/assets/images/thumb_banner1_1.png";
import thumb1_2 from "@/assets/images/thumb_banner1_2.png";
import thumb1_3 from "@/assets/images/thumb_banner1_3.png";

import thumb2_1 from "@/assets/images/thumb_banner2_1.png";
import thumb2_2 from "@/assets/images/thumb_banner2_2.png";
import thumb2_3 from "@/assets/images/thumb_banner2_3.png";

import thumb3_1 from "@/assets/images/thumb_banner3_1.png";
import thumb3_2 from "@/assets/images/thumb_banner3_2.png";
import thumb3_3 from "@/assets/images/thumb_banner3_3.png";

const listBanner = [
	{
		img: img1,
		subTitle: "Coffee",
		title: "Cà phê - Người bạn của coder mỗi khi gặp bug",
		desc: "Thoải mái chiến đấu với deadline, fix bug không ngần ngại cùng tách cà phê Coder House",
		textColor: "#05273A",
		thumb: {
			title: "Cà phê tươi cho những ý tưởng mới",
			desc: "Coder House giúp lam tỏa năng lượng làm việc tập trung sáng tạo của Coder bằng tách cà phê thơm.",
			img: [thumb1_1, thumb1_2, thumb1_3],
		},
	},
	{
		img: img2,
		subTitle: "Metting",
		title: "Meeting, talk show giao lưu học hỏi",
		desc: "Không gian tổ chức các buổi hội thảo, sự kiện, talk show quy mô vừa và nhỏ. Đội ngũ chuyên nghiệp, lịch thiệp, chu đáo trong các khâu chuẩn bị.",
		textColor: "#FFFFFF",
		thumb: {
			title: "Nhiều chương trình workshop, meeting bổ ích chờ bạn khám phá.",
			desc: "Theo dõi website thường xuyên để cập nhật thông tin sớm nhất.",
			img: [thumb2_1, thumb2_2, thumb2_3],
		},
	},
	{
		img: img3,
		subTitle: "Workplace",
		title: "Không gian làm việc hiệu quả",
		desc: "Khu vực làm việc riêng tư, yên tĩnh sẽ tiếp thêm cho bạn năng lượng và động lực hoàn thành các mục tiêu.",
		textColor: "#FFFFFF",
		thumb: {
			title: "Nơi làm việc vô cùng lý tưởng",
			desc: `Nhiều không gian làm việc cho bạn lựa chọn, độc đáo nhất là mô hình "Tổ kén" cực kì riêng tư. `,
			img: [thumb3_1, thumb3_2, thumb3_3],
		},
	},
];
</script>

<template>
	<div id="carouselBanner" class="w-full carousel slide carousel-fade relative" data-bs-ride="carousel">
		<div class="carousel-inner relative w-full overflow-hidden">
			<div
				v-for="(item, idx) in listBanner"
				:key="idx"
				class="carousel-item relative w-full float-left"
				:class="{ active: idx === 0 }"
			>
				<BannerItem :item="item" />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
