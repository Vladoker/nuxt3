<template>
    <section class="m-auto flex flex-col items-center justify-center">
        <ApplicationLogo class="hidden md:flex" />
        <button
            class="mt-6 hidden rounded-xl bg-green px-5 py-4 text-sm text-white hover:bg-[#337566e0] md:block"
            @click="showPhone = true"
            v-if="!showPhone"
        >
            Показать номер телефона
        </button>
        <h2 v-else class="mt-6 text-[17px] text-green">
            <a href="tel:+37379228242">079 228 242</a>
        </h2>
        <nav class="mt-2 w-full max-w-[560px] md:mt-8">
            <ul
                class="no-scrollbar flex h-10 items-center gap-2 overflow-auto text-nowrap px-4 md:justify-center"
            >
                <li class="">
                    <nuxt-link
                        class="rounded-xl bg-light-gray3 px-3 py-2 text-sm text-black"
                        to="/"
                    >
                        Товары и услуги
                        <span class="text-light-gray2">{{
                            productsCount
                        }}</span>
                    </nuxt-link>
                </li>
                <li class="">
                    <nuxt-link
                        class="rounded-xl bg-light-gray3 px-3 py-2 text-sm text-black"
                        to="/agents"
                    >
                        Агенты
                        <span class="text-light-gray2">{{ agentsCount }}</span>
                    </nuxt-link>
                </li>
                <li class="">
                    <nuxt-link
                        class="rounded-xl bg-light-gray3 px-3 py-2 text-sm text-black"
                        to="/about"
                    >
                        О компании
                    </nuxt-link>
                </li>
            </ul>
        </nav>
        <div class="mt-2 h-[1px] w-full bg-light-gray4 md:mt-8"></div>
    </section>
</template>
<script setup>
const showPhone = ref(false);
const productStore = useMyProducts();
const agentStore = useMyAgents();

const agentsCount = computed(() =>
    agentStore.agents.length ? agentStore.agents.length : "",
);
const productsCount = computed(() =>
    productStore.products.length ? productStore.products.length : "",
);
</script>

<style lang="scss" scoped>
.router-link-exact-active {
    border: 1px solid black;
}
</style>
