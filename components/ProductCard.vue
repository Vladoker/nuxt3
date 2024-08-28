<template>
    <div class="max-w-[414px]">
        <div
            class="relative max-h-[322px] max-w-[414px] overflow-hidden rounded-[20px]"
        >
            <div class="absolute left-2 top-2 flex" v-if="status != 'HIDDEN'">
                <div
                    class="flex cursor-default items-center rounded-xl bg-[#1b1d22] bg-opacity-60 px-2 py-1"
                >
                    <svg
                        class="text-light-gray"
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.25 4C7.25 4 2.98 7.11 1.25 11.5C2.98 15.89 7.25 19 12.25 19C17.25 19 21.52 15.89 23.25 11.5C21.52 7.11 17.25 4 12.25 4ZM12.25 16.5C9.49 16.5 7.25 14.26 7.25 11.5C7.25 8.74 9.49 6.5 12.25 6.5C15.01 6.5 17.25 8.74 17.25 11.5C17.25 14.26 15.01 16.5 12.25 16.5ZM12.25 8.5C10.59 8.5 9.25 9.84 9.25 11.5C9.25 13.16 10.59 14.5 12.25 14.5C13.91 14.5 15.25 13.16 15.25 11.5C15.25 9.84 13.91 8.5 12.25 8.5Z"
                            fill="#F5F5F5"
                        />
                    </svg>
                    <span
                        class="ml-2 text-[13px] font-medium text-light-gray"
                        >{{ views }}</span
                    >
                </div>
                <div
                    class="ml-1 flex cursor-default items-center rounded-xl bg-[#1B1D22] bg-opacity-60 px-2 py-1"
                >
                    <svg
                        width="25"
                        height="24"
                        viewBox="0 0 25 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.25 4H18.25V3C18.25 2.45 17.8 2 17.25 2C16.7 2 16.25 2.45 16.25 3V4H8.25V3C8.25 2.45 7.8 2 7.25 2C6.7 2 6.25 2.45 6.25 3V4H5.25C4.14 4 3.25 4.9 3.25 6V20C3.25 21.1 4.14 22 5.25 22H19.25C20.35 22 21.25 21.1 21.25 20V6C21.25 4.9 20.35 4 19.25 4ZM18.25 20H6.25C5.7 20 5.25 19.55 5.25 19V9H19.25V19C19.25 19.55 18.8 20 18.25 20Z"
                            fill="#F5F5F5"
                        />
                    </svg>

                    <span class="ml-2 text-[13px] font-medium text-light-gray"
                        >{{ day }} дня</span
                    >
                </div>
            </div>
            <button
                class="absolute right-2 top-2 cursor-pointer rounded-xl bg-light-gray px-3 py-[6px] text-[13px] md:hidden"
            >
                Действия
            </button>
            <img :src="img" alt="logo" />
        </div>
        <h5 class="mt-4 text-[17px] font-medium text-black">{{ price }}</h5>
        <h6 class="mt-3 text-sm">{{ desc }}</h6>
        <hr class="mt-2 text-light-gray3" />
        <div
            class="mt-5 flex cursor-default items-center justify-center"
            v-if="status == 'HIDDEN'"
        >
            <span class="text-sm text-red">Объявление скрыто</span>
        </div>
        <div
            class="mt-5 flex cursor-default items-center justify-center"
            v-else-if="status == 'PROMOTION' || isPromote"
        >
            <span class="text-sm text-green">Объявление продвигается</span>
        </div>
        <div class="mt-3 flex items-center justify-between" v-else>
            <span
                class="cursor-default text-[13px] font-normal text-light-gray2"
                >Увеличьте количество просмотров</span
            >
            <button
                class="rounded-xl bg-green px-3 py-2 text-sm text-light-gray"
                @click="isPromote = true"
            >
                Продвигать
            </button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    img: String,
    views: Number,
    day: Number,
    price: String,
    desc: String,
    status: String,
    type: String,
});
const isPromote = ref(false);
</script>
