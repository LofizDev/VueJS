import { reactive, toRefs } from "vue";

const state = reactive({
	active: false,
});

export default function useSlider() {
	const handleToggleSlider = v => {
		if (typeof variable !== "boolean") {
			state.active = !state.active;
		}

		state.active = v;
	};

	return { ...toRefs(state), handleToggleSlider };
}
