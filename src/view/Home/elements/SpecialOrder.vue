<script>
import landing_background from "@/assets/images/landing_background.png";
import landing_page_item_1 from "@/assets/images/landing_page_item_1.png";
import landing_page_item_2 from "@/assets/images/landing_page_item_2.png";
import landing_page_item_3 from "@/assets/images/landing_page_item_3.png";
import landing_page_item_4 from "@/assets/images/landing_page_item_4.png";
import order_item_1 from "../../Menu/drinkImages/not-img.png";
export default {
	inject: ["services"],

	data() {
		return {
			list: [],
			listOne: [],
			listTwo: [],
			isLoadingMore: false,
			//extra stuff
			initialLoad: true, //initial load state ,if you want  to use a different BIGGER loading animation  etc
			pageNumber: 1, //canLoadMore is set to false when last page is reached
			pageCount: 50,
			isLast: false,
			landing_background,
			landing_page_item_1,
			landing_page_item_2,
			landing_page_item_3,
			landing_page_item_4,
			order_item_1,
		};
	},
	created() {
		this.getAllMenu();
	},
	mounted() {},
	methods: {
		async getAllMenu() {
			var query = {
				Page: this.pageNumber,
				Limit: this.pageCount,
				BranchId: "",
				CategoryId: this.categoryId,
				KeySearch: "",
				includeInactive: true,
			};
			await this.services.getAll(`inventoryitems/paging`, query).then(result => {
				if (result.data.Data) {
					result.data.Data.forEach(element => {
						if (this.list.indexOf(element) === -1) {
							this.list.push(element);
						}
					});
					console.log("ok", this.list);
				} else {
					this.list = [];
				}
			});
			const randomData = [
				{
					Description: "",
					Id: "64657d31-677c-4419-a9cb-baa3884f1991",
					Name: "Rượu Baileys Strawberries cream 700ml",
				},
				{
					Description: "",
					Id: "255625c2-56e1-44a3-8cad-15650e4d10ac",
					Name: "Phô Mai Sữa Chua Nướng",
				},
				{
					Description: "",
					Id: "d70babfe-bbb3-41fb-aafa-d16ebc96ce37",
					Name: "Matcha đá xay",
				},
				{
					Description: "",
					Id: "ab09c991-b593-4c5a-8652-f41fb46fffb7",
					Name: "Debug-coffee",
				},
				{
					Description: "",
					Id: "387bbfa8-4224-4e0c-93ac-6d3b00e1e9cb",
					Name: "Bánh Flan Gato",
				},
				{
					Description: "",
					Id: "8db2acca-2c1d-4555-9c76-6dbe661e7bce",
					Name: "Backend Coffee (Cafe Đen)",
				},
				{
					Description: "",
					Id: "7e362c77-176d-4b87-9da8-91da05262045",
					Name: "Watermelon Juice (Dưa hấu ép)",
				},
			];
			const randomData2 = [
				{
					Description: "",
					Id: "6c5f8e7a-4afe-429f-ad42-4339396edc82",
					Name: "UI/UX Coffee (Bạc xỉu)",
				},
				{
					Description: "",
					Id: "af961a68-ea82-4195-a2ba-3566b8ee49a4",
					Name: "Tropical Tea (Trà vải)",
				},
				{
					Description: "",
					Id: "a35e92d0-fe02-4a05-aea4-bf39fe4a328e",
					Name: "Sunset Coldbrew (Coldbrew Cam)",
				},
				{
					Description: "",
					Id: "f8835580-7190-4b81-8a96-a7ed38f5bb7a",
					Name: "Sinh tố Bơ",
				},
				{
					Description: "",
					Id: "a8324636-a5ff-4aca-8176-a3b36347da94",
					Name: "Rainbow Coldbrew (Coldbrew Đậu biếc & Cam)",
				},
				{
					Description: "",
					Id: "741cab3e-5e7a-4f3c-aaa0-d48a873a6bfd",
					Name: "Pineapple Juice (Thơm ép)",
				},
				{
					Description: "",
					Id: "efb8e67b-38c7-4c3f-b52d-5db4dc4da11a",
					Name: "Lemon-ice (Chanh đá)",
				},
			];

			// const unique = this.randomData;
			this.listOne = randomData.slice(0, 7);
			this.listTwo = randomData2.slice(0, 7);

			function getMultipleDrinkRandom(listOne, num) {
				const shuffled = [...listOne].sort(() => 0.5 - Math.random());

				return shuffled.slice(0, num);
			}
			function getMultipleDrinkRandomm(listTwo, num) {
				const shuffled = [...listTwo].sort(() => 0.5 - Math.random());

				return shuffled.slice(0, num);
			}
			this.listOne = getMultipleDrinkRandom(this.listOne, 4);
			this.listTwo = getMultipleDrinkRandomm(this.listTwo, 4);
		},
	},
};
</script>

<template>
	<div class="relative flex w-full h-[85rem] lg:h-[63rem]">
		<img :src="landing_background" class="bg-repeat object-cover h-full" />
		<!-- <div class="bg-img w-full h-full"></div> -->
		<img
			:src="landing_page_item_1"
			class="hidden md:block absolute top-[2%] 2xl:top-[8.313%] left-0 w-[20%] md:w-[30%] 2xl:w-auto"
		/>
		<img
			:src="landing_page_item_2"
			class="hidden md:block absolute bottom-[2%] 2xl:bottom-[6.25%] left-0 w-[20%] md:w-[30%] 2xl:w-auto"
		/>
		<img
			:src="landing_page_item_3"
			class="hidden md:block absolute top-[2%] md:top-[7%] 2xl:top-[8.313%] right-0 w-[20%] md:w-[25%] 2xl:w-auto"
		/>
		<img
			:src="landing_page_item_4"
			class="hidden md:block absolute bottom-[2%] 2xl:bottom-[8.313%] right-0 w-[20%] md:w-[30%] 2xl:w-auto"
		/>

		<div class="absolute z-10 flex flex-col items-center w-full space-y-[5.125%] mt-[8.125%] mb-[6.438%]">
			<div class="flex flex-col items-center">
				<p class="text-[2rem] lg:text-[4rem] leading-8 lg:leading-[5.5rem] font-bold text-center font-feature-settings">
					Thực đơn
				</p>
				<p class="w-[80%] lg:w-[62%] 2xl:w-[60%] font-medium text-base leading-6 text-[#021824] text-center">
					Những loại thức uống được pha chế một cách độc đáo, chỉ có thể thưởng thức tại Coder House. Hãy đến và trải
					nghiệm ngay.
				</p>
				<router-link to="/menu">
					<button class="btn-default rounded-[5px] p-4 mt-[2.5rem]">
						<p class="text-base leading-6 font-medium text-center text-white">Tất cả thực đơn</p>
					</button>
				</router-link>
			</div>

			<div class="flex flex-col lg:flex-row space-y-[1.5rem] lg:space-y-0 lg:space-x-[3.125rem]">
				<div class="flex flex-col space-y-[1.5rem] lg:space-y-[2.5rem]">
					<div
						v-for="(item, index) in listOne"
						:key="index"
						class="flex cursor-pointer flex-row lg:items-center space-x-[0.938rem]"
					>
						<router-link :to="`/menu/${item.Id}`">
							<img :src="order_item_1" class="w-[108px] h-[108px]" />
						</router-link>
						<div class="flex flex-col justify-between 2xl:w-[27.313rem] lg:h-full">
							<div class="flex flex-col justify-center h-full">
								<router-link :to="`/menu/${item.Id}`">
									<p class="text-base lg:text-2xl font-semibold leading-6 lg:leading-8 text-[#012824]">
										{{ item.Name }}
									</p>
									<p class="font-medium text-sm lg:text-base leading-6 text-[#5C5C5C] mt-2 lg:mt-[0.688rem]">
										{{ item.Description }}
									</p>
								</router-link>
							</div>
							<div class="border border-solid border-[#EBEBEB] w-full h-[2px]"></div>
						</div>
					</div>
				</div>

				<div class="flex flex-col space-y-[1.5rem] lg:space-y-[2.5rem]">
					<div
						v-for="(item, index) in listTwo"
						:key="index"
						class="flex cursor-pointer flex-row lg:items-center space-x-[0.938rem]"
					>
						<router-link :to="`/menu/${item.Id}`">
							<img :src="order_item_1" class="w-[108px] h-[108px]" />
						</router-link>
						<div class="flex flex-col justify-between 2xl:w-[27.313rem] lg:h-full">
							<div class="flex flex-col justify-center h-full">
								<router-link :to="`/menu/${item.Id}`">
									<p class="text-base lg:text-2xl font-semibold leading-6 lg:leading-8 text-[#012824]">
										{{ item.Name }}
									</p>
									<p class="font-medium text-sm lg:text-base leading-6 text-[#5C5C5C] mt-2 lg:mt-[0.688rem]">
										{{ item.Description }}
									</p>
								</router-link>
							</div>
							<div class="border border-solid border-[#EBEBEB] w-full h-[2px]"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.font-feature-settings {
	font-feature-settings: "pnum" on, "lnum" on;
}

.btn-default {
	@apply hover:bg-[#0D5ACA] hover:bg-left;
	background: linear-gradient(to left, #05273a 50%, #0d5aca 49%) right;
	background-size: 202%;
	transition: 0.25s ease-out;
}
</style>
