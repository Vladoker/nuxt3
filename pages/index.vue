<template>
    <main>
        <Navbar />
        <div class="mx-auto my-6 max-w-[438px] px-4">
            <UiSelect />
        </div>
        <div class="container mb-5 px-4 xl:mb-20 2xl:px-0">
            <div
                class="grid justify-items-center gap-x-4 gap-y-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-6 xl:grid-cols-4 xl:gap-y-[60px]"
            >
                <ProductCard
                    v-for="card in products"
                    :key="card.id"
                    :img="card.img"
                    :views="card.views"
                    :day="card.day"
                    :price="card.price"
                    :desc="card.desc"
                    :status="card.status"
                />
            </div>
        </div>
    </main>
</template>
<script setup>
useSeoMeta({
    title: "My Amazing Site",
    ogTitle: "My Amazing Site",
    description: "This is my amazing site, let me tell you all about it.",
    ogDescription: "This is my amazing site, let me tell you all about it.",
    ogImage: "https://example.com/image.png",
    twitterCard: "summary_large_image",
});

const store = useMyProducts();

const products = computed(() => store.products);

await store.fetchProducts();
</script>
