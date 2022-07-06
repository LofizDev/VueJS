<script setup>
import { Banner } from "@/components/Banner";
import { Container } from "@/components/Layout";
import { Slider } from "./elements";

import someImage from "@/assets/images/contact_some_image.png";
import test_size_image from "@/assets/images/test_size_image.png";
import image_1w2h from "@/assets/images/1w2h.png";
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

import { useSlider } from "@/composables";

const { handleToggleSlider } = useSlider();
</script>

<template>
	<div class="w-full">
		<Slider />
		<Banner />
		<div
			class="
				flex flex-col
				lg:flex-row
				w-full
				space-y-1
				md:space-y-2
				lg:space-y-0 lg:space-x-5
				px-[1rem]
				xl:px-[5.46875%]
				pt-[1.875rem]
				xl:pt-[9.53125%]
				bg-white
			"
		>
			<div class="w-full lg:w-[45%] overflow-hidden">
				<img
					:src="gallery1"
					class="w-full h-full object-cover max-w-[100%] bg-slate-400 cursor-pointer transition-all hover:scale-105"
					@click="handleToggleSlider"
				/>
			</div>

			<div class="flex flex-row w-full lg:w-[55%] space-x-1 md:space-x-2 lg:space-x-5">
				<div class="flex flex-col space-y-1 md:space-y-2 lg:space-y-5 w-full">
					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery3"
							class="bg-slate-400 object-cover w-full h-full cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>

					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery4"
							class="bg-slate-400 w-full h-full object-cover cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>
				</div>

				<div class="flex flex-col space-y-1 md:space-y-2 lg:space-y-5 w-full">
					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery5"
							class="bg-slate-400 w-full h-full object-cover cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>

					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery6"
							class="bg-slate-400 w-full h-full object-cover cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>
				</div>
			</div>
		</div>

		<div
			class="
				flex flex-col
				lg:flex-row
				w-full
				space-y-1
				md:space-y-2
				lg:space-y-0 lg:space-x-5
				px-[1rem]
				xl:px-[5.46875%]
				pb-[1.875rem]
				xl:pb-[9.53125%]
				pt-1
				lg:pt-5
				bg-white
			"
		>
			<div class="flex flex-row w-full lg:w-[45%] space-x-1 md:space-x-2 lg:space-x-5">
				<div class="flex flex-col space-y-1 md:space-y-2 lg:space-y-5 w-full">
					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery8"
							class="bg-slate-400 w-full h-full cursor-pointer object-cover transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>

					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery9"
							class="bg-slate-400 w-full h-full cursor-pointer object-cover transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>
				</div>

				<div class="flex flex-col space-y-1 md:space-y-2 lg:space-y-5 w-full">
					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery11"
							class="bg-slate-400 w-full h-full object-cover cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>

					<div class="w-full h-full overflow-hidden">
						<img
							:src="gallery10"
							class="bg-slate-400 w-full object-cover h-full cursor-pointer transition-all hover:scale-105"
							@click="handleToggleSlider"
						/>
					</div>
				</div>
			</div>

			<div class="w-full lg:w-[55%] overflow-hidden">
				<img
					:src="gallery2"
					class="w-full h-full bg-slate-400 object-cover cursor-pointer transition-all hover:scale-105"
					@click="handleToggleSlider"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
