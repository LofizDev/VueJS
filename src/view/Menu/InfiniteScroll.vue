<template>
	<div class="infi-scroll-comp-root">
		<div ref="scrollContainer" class="scroll-container">
			<div ref="listContainer" class="list-container">
				<div class="max-w-[1170px] mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-7">
					<div v-for="(item, index) in getUniqueValue" :key="index">
						<router-link :to="`/menu/${item.Id}`">
							<div class="bg-white rounded-[5px] mb-1 sm:mb-5 cursor-pointer">
								<img src="./drinkImages/not-img.png" class="w-full h-full object-cover" alt="drink" />
								<div class="flex flex-col mt-[10px]">
									<p class="mb-1 max-w-[100%] font-semibold text-[#021824]">{{ item.Name }}</p>
									<span class="max-w-[70%] leading-6 text-[#5C5C5C] text-sm">{{ item.Description }}</span>
								</div>
							</div>
						</router-link>
					</div>
				</div>
			</div>
			<div v-if="canLoadMore" class="flex mt-11 mb-16 justify-center">
				<div
					style="border-top-color: #e5e9f2"
					class="justify-center w-6 h-6 border-4 border-[#0D5ACA] border-solid rounded-full animate-spin"
				></div>
				<p class="text-[#828282] ml-2 mt-[2px]">Loading</p>
			</div>

			<div ref="sentinel" class="sentinel"></div>
		</div>
	</div>
</template>

<script>
import { result } from "lodash";
export default {
	inject: ["services"],
	props: {
		categoryId: {
			type: String,
			required: false,
			default: null,
		},
	},
	data() {
		return {
			list: [],
			uniqueValue: [],
			uniqueDrink: [],
			getUniqueValue: [],
			isLoadingMore: false,
			canLoadMore: true, //list has to end at some point
			//extra stuff
			initialLoad: true, //initial load state ,if you want  to use a different BIGGER loading animation  etc
			pageNumber: 1, //canLoadMore is set to false when last page is reached
			pageCount: 27,
			isLast: false,
		};
	},
	created() {
		this.getAllMenu();
	},
	unmounted() {
		// if (this.listEndObserver) {
		// 	this.listEndObserver.disconnect();
		// }
	},
	mounted() {
		this.getNextItem();
	},
	methods: {
		async getAllMenu() {
			this.canLoadMore = true;
			var query = {
				Page: this.pageNumber,
				Limit: this.pageCount,
				BranchId: "",
				CategoryId: this.categoryId,
				KeySearch: "",
				includeInactive: true,
			};
			await this.services.getAll(`inventoryitems/paging`, query).then(result => {
				// console.log("res", result);
				if (result.data.Data) {
					result.data.Data.map(element => {
						this.list.push(element);
					});
				} else {
					this.list = [];
				}
				this.canLoadMore = false;
			});
			// const unique = this.list.filter(item => item.CategoryID === "00000000-0000-0000-0000-000000000000");
			// const uni = this.list.filter(item => item.UnitID === "00000000-0000-0000-0000-000000000000");
			const filtering = this.list.filter(
				item =>
					item.UnitName !== "Kg" &&
					item.UnitName !== "Bịch" &&
					item.UnitName !== "Lon" &&
					item.UnitName !== "Hộp" &&
					item.UnitName !== "Quả" &&
					item.UnitName !== "Chai" &&
					item.UnitID === "00000000-0000-0000-0000-000000000000"
			);
			this.getUniqueValue = filtering;
		},
		getNextItem() {
			window.onscroll = () => {
				if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
					this.pageNumber++;
					this.getAllMenu();
				}
			};
		},
	},
};
</script>

<style></style>
