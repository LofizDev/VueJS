<script setup>
import { computed, reactive } from "vue";
import debounce from "lodash/debounce";
import { EMAIL_REGAX } from "@/common/utils";
import { Container } from "@/components/Layout";
import { useContactForm } from "@/composables";

const { submitContactForm, wait } = useContactForm();

const form = reactive({
	firstNameInput: "",
	lastNameInput: "",
	emailInput: "",
	phoneInput: "",
	contentInput: "",
});

const activeSubmit = computed(() =>
	Boolean(
		form.firstNameInput &&
			form.lastNameInput &&
			form.emailInput &&
			form.phoneInput &&
			form.contentInput &&
			!error.firstNameErr &&
			!error.lastNameErr &&
			!error.phoneErr &&
			!error.contentErr &&
			EMAIL_REGAX.test(String(form.emailInput).toLowerCase())
	)
);

const error = reactive({
	firstNameErr: false,
	lastNameErr: false,
	emailErr: false,
	phoneErr: false,
	contentErr: false,
});

// check if the first letter is number or not
const checkText = () => {
	if (!isNaN(form.firstNameInput) && form.firstNameInput !== "") {
		// form.firstNameInput = String(form.firstNameInput).replace(/.$/, "");
		error.firstNameErr = true;
	} else {
		error.firstNameErr = false;
	}

	if (!isNaN(form.lastNameInput) && form.lastNameInput !== "") {
		// form.lastNameErr = String(form.lastNameErr).replace(/.$/, "");
		error.lastNameErr = true;
	} else {
		error.lastNameErr = false;
	}

	if (!isNaN(form.emailInput) && form.emailInput !== "") {
		// form.lastNameErr = String(form.lastNameErr).replace(/.$/, "");
		error.emailErr = true;
	} else {
		error.emailErr = false;
	}
};

const checkPhone = () => {
	// if (isNaN(form.phoneInput) && form.phoneInput !== "") {
	// 	// form.firstNameInput = String(form.firstNameInput).replace(/.$/, "");
	// 	error.phoneErr = true;
	// } else {
	// 	error.phoneErr = false;
	// }

	if (form.phoneInput.length > 12 || form.phoneInput.length < 9) {
		// form.phoneInput = String(form.phoneInput).substring(1, String(form.phoneInput).length);
		error.phoneErr = true;
	} else {
		error.phoneErr = false;
	}

	if (isNaN(form.phoneInput)) {
		// form.phoneInput = form.phoneInput.substring(0, form.phoneInput.length - 1)
		form.phoneInput = String(form.phoneInput).replace(/.$/, "");
	} else {
		form.phoneInput = String(form.phoneInput).replace(/[^\d.]/g, "") ?? form.phoneInput;
	}
};

const debounceCheckEmail = debounce(() => checkEmail(), 400);
// const debounceCheckPhone = debounce(() => {
// 	if (form.phoneInput.length > 12 || form.phoneInput.length < 9) {
// 		// form.phoneInput = String(form.phoneInput).substring(1, String(form.phoneInput).length);
// 		error.phoneErr = true;
// 	} else {
// 		error.phoneErr = false;
// 	}
// }, 700);

const checkEmail = () => {
	if (form.emailInput.length) {
		error.emailErr = !EMAIL_REGAX.test(String(form.emailInput).toLowerCase());
	}
};

const checkContent = () => {
	if (form.contentInput === "") {
		error.contentErr = true;
	} else {
		error.contentErr = false;
	}
};
</script>

<template>
	<Container class="px-0">
		<div class="flex flex-col w-full space-y-[1.875rem]">
			<div class="flex flex-col lg:flex-row space-y-[1.875rem] lg:space-y-0 space-x-0 lg:space-x-[1.875rem]">
				<div class="flex flex-col w-full">
					<label class="input-form">
						<input
							v-model.trim="form.firstNameInput"
							type="text"
							class="input-content"
							placeholder="Tên"
							@input="checkText"
						/>
					</label>
					<span v-if="error.firstNameErr" class="input-error">Tên của bạn chưa đúng</span>
				</div>

				<div class="flex flex-col w-full">
					<label class="input-form">
						<input
							v-model.trim="form.lastNameInput"
							type="text"
							class="input-content"
							placeholder="Họ"
							@input="checkText"
						/>
					</label>
					<span v-if="error.lastNameErr" class="input-error">Họ của bạn chưa đúng</span>
				</div>
			</div>

			<div class="flex flex-col lg:flex-row space-y-[1.875rem] lg:space-y-0 space-x-0 lg:space-x-[1.875rem]">
				<div class="flex flex-col w-full">
					<label class="input-form">
						<input
							v-model.trim="form.emailInput"
							type="text"
							class="input-content"
							placeholder="Email"
							@input="debounceCheckEmail(), checkText()"
						/>
					</label>
					<span v-if="error.emailErr" class="input-error">Địa chỉ email của bạn chưa đúng.</span>
				</div>

				<div class="flex flex-col w-full">
					<label class="input-form">
						<input
							v-model.trim="form.phoneInput"
							type="text"
							class="input-content"
							placeholder="Điện thoại"
							@input="checkPhone"
						/>
					</label>
					<span v-if="error.phoneErr" class="input-error">Số điện thoại của bạn chưa đúng</span>
				</div>
			</div>

			<div class="w-full">
				<textarea
					v-model.trim="form.contentInput"
					type="text"
					class="
						border border-solid border-[#CECECE]
						py-[1.125rem]
						px-[1.25rem]
						rounded-[5px]
						bg-transparent
						w-full
						h-[110px]
						outline-none
						text-[1rem]
						leading-[1.2rem]
						font-normal
						resize-none
						custom-scrollbar
					"
					placeholder="Nội dung"
					@input="checkContent"
				/>
				<span v-if="error.contentErr" class="input-error">Bạn cần nhập nội dung yêu cầu</span>
			</div>

			<div class="flex items-center space-x-[1.875rem]">
				<button
					class="
						w-full
						md:w-[10.625rem]
						h-[3.5rem]
						opacity-50
						text-white
						rounded-[5px]
						!mt-[3.75rem]
						cursor-pointer
						btn-submit-default
					"
					:class="!activeSubmit ? 'btn-submit-default' : 'opacity-100'"
					:disabled="!activeSubmit"
					@click="activeSubmit ? submitContactForm(form) : null"
				>
					<p class="text-base leading-6 font-medium">GỬI</p>
				</button>

				<div v-show="wait" class="flex justify-center items-center !mt-[3.75rem]">
					<div
						class="
							justify-center
							w-6
							h-6
							bg-transparent
							border-4 border-t-[#e5e9f2] border-[#0D5ACA] border-solid
							rounded-full
							animate-spin
						"
					></div>
					<div class="text-[#828282] ml-2 animate-[bounce_1s_ease-in-out_infinite]">L</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.05s]">o</div>
					<div class="text-[#9b7878] animate-[bounce_1s_ease-in-out_infinite_.1s]">a</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.15s]">d</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.2s]">i</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.25s]">n</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.3s]">g</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.35s]">.</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.4s]">.</div>
					<div class="text-[#828282] animate-[bounce_1s_ease-in-out_infinite_.45s]">.</div>
				</div>
			</div>
		</div>
	</Container>
</template>

<style scoped>
textarea::-webkit-scrollbar {
	width: 12px;
}
textarea::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	-webkit-border-radius: 10px;
	border-radius: 10px;
}

textarea::-webkit-scrollbar-thumb {
	-webkit-border-radius: 10px;
	border-radius: 10px;
	background: rgba(255, 0, 0, 0.8);
	-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}

.input-form {
	@apply flex justify-center items-center w-full h-[3.75rem] max-h-[3.75rem] border border-solid border-[#CECECE] rounded-[5px] py-[1.125rem] px-[1.25rem];
}

.input-content {
	@apply w-full border-none
					outline-none
					focus:outline-none focus:border-none
					hover:outline-none hover:border-none placeholder-[#AAAAAA]
                    

    text-base leading-6 font-medium;
}

.input-error {
	@apply font-medium text-base leading-6 mt-[5px] text-[#EB5757];
}

.btn-submit-default {
	@apply hover:bg-[#0D5ACA] hover:bg-left;
	background: linear-gradient(to left, #05273a 50%, #0d5aca 49%) right;
	background-size: 202%;
	transition: 0.25s ease-out;
}

.btn-submit-active {
	background-position: left;
}
</style>
