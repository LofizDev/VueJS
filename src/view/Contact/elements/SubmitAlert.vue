<script setup>
import { InfoAlertIcon, CloseAlertIcon } from "@/assets/custom_icon";

import { useContactForm } from "@/composables";

const { success, fail, closeAlert } = useContactForm();
</script>

<template>
	<div class="flex flex-col justify-center w-full h-[1.875rem] lg:h-[8.125rem]">
		<div
			class="hidden items-center w-full p-4 rounded-[5px]"
			:class="{ '!flex bg-[#DEF7EC]  animate-dropdown': success, '!flex bg-[#ffccc7]  animate-de-dropdown': fail }"
		>
			<InfoAlertIcon class="mr-[0.875rem]" :class="{ 'text-[#046C4E]': success, 'text-[#ff4d4f]': fail }" />
			<p class="text-base leading-6 font-medium" :class="{ 'text-[#046C4E]': success, 'text-[#ff4d4f]': fail }">
				{{ success ? "Yêu cầu của bạn đã được gửi đi thành công!" : null }}
				{{ fail ? "Yêu cầu của bạn gửi đi không thành công!" : null }}
			</p>
			<button
				class="ml-auto p-1 transition-all hover:scale-110 hover:bg-slate-200 rounded-full"
				:class="{ 'text-[#046C4E]': success, 'text-[#ff4d4f]': fail }"
                @click="closeAlert"
			>
				<CloseAlertIcon />
			</button>
		</div>
	</div>
</template>
