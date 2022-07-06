<script setup>
import Image from "@/assets/images/image-inside-home.png";
import Add from "@/assets/images/add.png";
import gallery3 from "@/assets/images/coderhouse-kg10.jpg";
import gallery4 from "@/assets/images/coderhouse-kg16.jpg";
import gallery6 from "@/assets/images/coderhouse-kg24.jpg";
import gallery8 from "@/assets/images/coderhouse-kg13.jpg";
import gallery9 from "@/assets/images/coderhouse-kg7.jpg";
import gallery12 from "@/assets/images/coderhouse-kg23.jpg";
</script>
<template>
	<div class="w-full grid grid-cols-2 md:grid-cols-5">
		<div class="image-list__item">
			<img :src="gallery4" alt="" class="h-[240px] md:h-[303px] object-cover" />
		</div>
		<div class="image-list__item">
			<img :src="gallery6" alt="" class="h-[240px] md:h-[303px] object-cover" />
		</div>
		<div class="image-list__item">
			<img :src="gallery9" alt="" class="h-[240px] md:h-[303px] object-cover" />
		</div>
		<div class="image-list__item">
			<img :src="gallery8" alt="" class="h-[240px] md:h-[303px] object-cover" />
		</div>
		<div class="image-list__item w-full relative grid grid-cols-2 col-span-2 md:grid-cols-1 md:col-span-1">
			<div class="flex">
				<img :src="gallery3" alt="" class="block object-cover h-[240px] md:h-[303px]" />
				<img :src="Image" alt="" class="block object-cover md:hidden" />
			</div>

			<router-link to="/gallery">
				<div
					class="
						absolute
						w-full
						h-full
						left-1/2
						top-1/2
						transform
						-translate-x-1/2 -translate-y-1/2
						flex flex-col
						justify-center
						items-center
						bg-[rgba(0,0,0,0.5)]
					"
				>
					<img :src="Add" alt="" width="64" height="64" />
					<p class="text-2xl text-white">Xem thêm</p>
				</div>
			</router-link>
		</div>
	</div>
</template>
<style scoped></style>
