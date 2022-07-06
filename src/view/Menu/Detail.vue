<template>
	<div class="flex justify-center flex-col md:flex-row items-center mt-9">
		<img src="./drinkImages/not-img.png" class="w-[370px] h-[370px] md:w-[570px] md:h-[570px]" alt="drink" />
		<div class="flex flex-col ml-[0px] md:ml-[50px]">
			<p class="mb-1 max-w-[100%] text-[23px] leading-[48px] md:text-[32px] font-semibold text-[#021824]">
				{{ detail.Name }}
			</p>
			<span class="max-w-[70%] leading-6 text-[#5C5C5C] text-sm">{{ detail.Description }}</span>
		</div>
	</div>
</template>
<script>
export default {
	inject: ["services"],
	data() {
		return {
			detail: {},
		};
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
	},
	created() {
		//load first page
		console.log(this.id);
		this.getDetail();
	},
	mounted() {},
	methods: {
		async getDetail() {
			return await this.services.getDetail(`inventoryitems/detail/${this.id}`).then(result => {
				this.detail = result.data.Data;
				console.log(result.data.Data);
			});
		},
	},
};
</script>
