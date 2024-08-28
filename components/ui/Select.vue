<template>
    <div class="custom-select relative" ref="selectElem">
        <button
            class="relative flex w-full rounded-xl border border-gray bg-light-gray5 p-4 pr-10"
            @click="show = !show"
        >
            <span class="text-sm">{{ selectedName }}</span>
            <img
                class="absolute right-4"
                :class="{ active: show }"
                src="/img/icons/selectArrow.svg"
                alt="arrow"
            />
        </button>
        <Transition>
            <div
                v-if="show"
                class="absolute z-10 mt-2 w-full rounded-xl bg-light-gray text-sm drop-shadow-lg"
            >
                <template v-for="item in catalog" :key="item.id">
                    <ul class="px-2 pt-3">
                        <li
                            class="flex cursor-pointer items-center justify-between p-3"
                            @click="onSelect(item)"
                        >
                            <span>{{ item.title }}</span>
                            <img
                                v-if="item.selected"
                                class="h-6 w-6"
                                src="/img/icons/check.svg"
                                alt="check"
                            />
                        </li>
                    </ul>
                    <div
                        class="px-5 pb-3"
                        v-for="cat in item.categories"
                        :key="cat.id"
                    >
                        <span
                            class="block cursor-default pt-6 text-[13px] text-light-gray2"
                            >{{ cat.name }}</span
                        >
                        <ul>
                            <li
                                class="flex cursor-pointer justify-between pt-3 font-normal text-black"
                                v-for="catItem in cat.value"
                                :key="catItem.id"
                                @click="onSelect(catItem)"
                            >
                                <div>
                                    {{ catItem.name }}
                                    <span class="ml-2 text-light-gray2">{{
                                        catItem.count
                                    }}</span>
                                </div>
                                <img
                                    v-if="catItem.selected"
                                    class="h-6 w-6"
                                    src="/img/icons/check.svg"
                                    alt="check"
                                />
                            </li>
                        </ul>
                    </div>
                </template>
            </div>
        </Transition>
    </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const props = defineProps({
    options: Array,
    label: String,
});

const show = ref(false);
const selectElem = ref(null);
const catalog = ref([
    {
        id: 1,
        title: "Все товары и услуги",
        selected: true,
        categories: [
            {
                id: 1,
                name: "Категория 1",
                value: [
                    { id: 1, name: "Гробы", count: 5, selected: false },
                    { id: 2, name: "Урны", count: 12, selected: false },
                ],
            },
            {
                id: 2,
                name: "Категория 2",
                value: [
                    { id: 1, name: "Тапки", count: 2, selected: false },
                    { id: 2, name: "Покрывало", count: 1, selected: false },
                ],
            },
        ],
    },
]);
const selectedName = ref(catalog.value[0]?.title);

onClickOutside(selectElem, () => (show.value = false));
function onSelect(target) {
    catalog.value.forEach((e) => {
        e.selected = false;
        e.categories.forEach((j) => {
            j.value.forEach((child) => {
                child.selected = false;
            });
        });
    });
    target.selected = true;
    selectedName.value = target?.title ?? target.name;
    show.value = false;
}
</script>
<style lang="scss" scoped>
.custom-select img {
    transition: transform 0.3s;
    &.active {
        transform: rotate(-180deg);
    }
}
</style>
