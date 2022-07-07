<template>
	<div
		class="
			max-w-[1170px]
			mx-auto
			tabs-container
			lg:flex-1
			flex-[100%]
			mt-[0px]
			md:mt-[20px]
			lg:mt-[97px]
			mb-[20px]
			lg:mb-[40px]
		"
	>
		<Carousel :items-to-show="4">
			<template #slides="{ slidesCount }">
				<Slide v-for="(tab, index) in tabs" :key="tab.id">
					<p class="titleMenu" v-bind:class="[tabIndex === tab.id ? 'activeClass' : '']" @click="currentTab(tab.id)">
						{{ tab.title }}
					</p>
				</Slide>
			</template>
		</Carousel>
	</div>
	<div class="">
		<div v-if="tabIndex === 0">
			<img
				class="object-contain px-[16px] h-[auto] sm:mb-[52px] mx-auto mb-[20px]"
				src="../../assets/images/menu-promotion.png"
				alt="coffe-sale"
			/>
			<Infinite-scroll class="mt-[20px] lg:mt-[52px] px-4" />
		</div>

		<div v-for="(tab, index) in tabs" :key="tab.id">
			<InfiniteScroll
				v-if="tabIndex === tab.id && index > 0"
				:category-id="tab.id"
				class="infi-scroll px-4"
			></InfiniteScroll>
		</div>

		<div class="mb-[60px]"></div>
	</div>
</template>

<script>
import { defineComponent, toRefs } from "vue";
import InfiniteScroll from "./InfiniteScroll.vue";
import { Carousel, Pagination, Navigation, Slide } from "vue3-carousel";
import "vue3-carousel/dist/carousel.css";

export default defineComponent({
	name: "Basic",
	props: {
		tabs: Array,
	},
	components: {
		Carousel,
		Slide,
		Pagination,
		Navigation,
		InfiniteScroll,
	},

	setup(props, { emit }) {
		const { tabs } = toRefs(props);
		const x = e => {
			console.log("x", e);
		};

		return { tabs };
	},
	data() {
		return {
			tabIndex: 0,
		};
	},
	methods: {
		currentTab: function (tabNumber) {
			this.tabIndex = tabNumber;
		},
	},
});
</script>

<style scoped>
.carousel .carousel__pagination {
	justify-content: flex-start !important;
}

.tabs-container {
	display: flex;
	padding: 13px 0;
	overflow: hidden;
	margin-left: auto;
	position: relative;
	justify-content: center;
}
.carousel__slide {
	width: auto !important;
}
.titleMenu {
	margin: 0 24px;
	font-size: 24px;
	cursor: pointer;
	user-select: none;
}
.activeClass {
	color: #e1b065;
}
@media only screen and (max-width: 1222px) {
	.tabs-container {
    width: calc(100vw - 32px);
	}
	.carousel__slide:last-of-type {
	margin-right: 16px;
}
}
@media only screen and (max-width: 1020px) {
	.titleMenu {
		font-size: 20px !important;
	}
}
@media only screen and (max-width: 950px) {
	.titleMenu {
		font-size: 17px !important;
	}
}
@media only screen and (max-width: 550px) {
	.tabs-container {
		justify-content: start !important;
	}
}
@media only screen and (max-width: 760px) {
	.titleMenu {
		font-size: 14px !important;
		margin-right: 25px;
	}
	.tabs-container {
		border-bottom: 1px solid #ececec;
		justify-content: start;
	}
	.titleMenu {
		margin-left: 0px;
	}
	.titleMenu:nth-child(1) {
		/* margin-left: 16px; */
	}
}
</style>
