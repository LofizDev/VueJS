<script setup>
import { ref, watch } from "vue";
import { onClickOutside } from "@vueuse/core";

import { useSlider } from "@/composables";
import { CloseModalIcon, MoveSlideRightIcon } from "@/assets/custom_icon";

import someImage from "@/assets/images/contact_some_image.png";
import image_1w2h from "@/assets/images/1w2h.png";
import test_size_image from "@/assets/images/test_size_image.png";

import gallery1 from "@/assets/images/coderhouse-kg4.jpg";
import gallery2 from "@/assets/images/coderhouse-kg19.jpg";
import gallery3 from "@/assets/images/coderhouse-kg10.jpg";
import gallery4 from "@/assets/images/coderhouse-kg16.jpg";
import gallery5 from "@/assets/images/coderhouse-kg14.jpg";
import gallery6 from "@/assets/images/coderhouse-kg24.jpg";
import gallery8 from "@/assets/images/coderhouse-kg13.jpg";
import gallery9 from "@/assets/images/coderhouse-kg7.jpg";
import gallery10 from "@/assets/images/coderhouse-kg11.jpg";
import gallery11 from "@/assets/images/coderhouse-kg17.jpg";
import gallery12 from "@/assets/images/coderhouse-kg23.jpg";

const { active, handleToggleSlider } = useSlider();

const target = ref(null);

const activeDelay = ref(false);

onClickOutside(target, () => handleToggleSlider(false));

watch(
	() => active.value,
	() => {
		if (active.value) {
			activeDelay.value = true;
		} else {
			setTimeout(() => {
				activeDelay.value = false;
			}, 300);
		}
	}
);

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
	{ img: gallery1 },
	{ img: gallery9 },
	{ img: gallery8 },
	{ img: gallery6 },
	{ img: gallery5 },
	{ img: gallery4 },
	{ img: gallery3 },
	{ img: gallery2 },
	{ img: gallery10 },
	{ img: gallery11 },
];
</script>

<template>
	<div class="fixed flex inset-0 bg-[rgba(0,0,0,0.75)]" :class="activeDelay ? 'z-30' : 'z-[-10]'">
		<div
			ref="target"
			class="
				flex
				justify-center
				items-center
				m-auto
				w-full
				max-w-[90%]
				md:max-w-[80%]
				xl:max-w-[63.75%]
				h-full
				max-h-[35%]
				md:max-h-[40%]
				lg:max-h-[65%]
				xl:max-h-[71.4%]
			"
			:class="active ? 'animate-blow-up-modal' : 'animate-de-blow-up-modal'"
		>
			<button
				class="
					absolute
					bottom-[100%]
					right-0
					text-white
					hover:text-red-500
					active:text-red-500
					bg-[rgba(0,0,0,0.3)]
					rounded-[5px]
				"
				@click="handleToggleSlider(false)"
			>
				<CloseModalIcon class="w-8 h-8 md:w-auto md:h-auto" />
			</button>
			<img
				v-for="(item, i) in mockSlider"
				:key="i"
				:src="item.img"
				class="h-full bg-slate-600 object-cover"
				:class="i === activeSlide ? 'block animate-slide-right' : 'hidden'"
			/>
			<button
				class="absolute my-auto right-0 text-white hover:text-green-600 active:text-green-600"
				@click="handleMoveSlide(1)"
			>
				<MoveSlideRightIcon class="w-8 h-8 md:w-auto md:h-auto" />
			</button>
			<button
				class="absolute my-auto left-0 text-white hover:text-green-600 active:text-green-600 rotate-180"
				@click="handleMoveSlide(-1)"
			>
				<MoveSlideRightIcon class="w-8 h-8 md:w-auto md:h-auto" />
			</button>
		</div>
	</div>
</template>
