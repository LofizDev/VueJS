import { reactive, toRefs } from "vue";

const state = reactive({
	success: false,
	fail: false,
	wait: false,
});

const randomIntFromInterval = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
};

export default function useContactForm() {
	const submitContactForm = v => {
		state.wait = true;
		state.success = false;
		state.fail = false;
		clearTimeout();
		console.log(v);

		setTimeout(() => {
			if (randomIntFromInterval(0, 1) === 1) {
				state.success = true;
				state.wait = false;

				setTimeout(() => {
					state.success = false;
				}, 5000);
			} else {
				state.fail = true;
				state.wait = false;

				setTimeout(() => {
					state.fail = false;
				}, 2000);
			}
		}, 3000);
	};

	const closeAlert = () => {
		state.success = false;
		state.fail = false;
		clearTimeout();
	};

	return { ...toRefs(state), submitContactForm, closeAlert };
}
