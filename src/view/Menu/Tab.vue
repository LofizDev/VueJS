<template>
	<Carousel :tabs="tabs" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Carousel from "./Carousel.vue";

export default defineComponent({
	components: {
		Carousel,
	},
	inject: ["services"],
	setup() {
		const _tabs = [
			{ id: 0, title: "All" },
			{ id: 1, title: "Breakfasts" },
			{ id: 2, title: "Desserts" },
			{ id: 3, title: "Beverages" },
		];
		const tabs = ref(_tabs);

		return { tabs };
	},
	created() {
		//load first page
		this.loadCategory();
	},
	mounted() {},
	methods: {
		async loadCategory() {
			return await this.services.getAllGet(`categories/list`).then(result => {
				console.log(result.data.Data);
				const dataCategory =
					result.data.Data.filter(x => !x.IsLeaf).map((z, index) => {
						return {
							currentId: index,
							id: z.Id,
							title: z.Name,
						};
					}) || [];
				this.tabs = [{ id: 0, title: "Tất cả" }, ...dataCategory];
			});
		},
	},
});
</script>
