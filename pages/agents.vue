<template>
    <main>
        <Navbar />
        <div class="mt-6 flex flex-col items-center pb-12">
            <AgentCard
                class="mt-2 md:mt-3"
                v-for="card in agents"
                :key="card.id"
                :img="card.img"
                :name="card.name"
                :status="card.status"
                :rating="card.rating"
                :comments="card.comments"
                :desc="card.desc"
            />
        </div>
    </main>
</template>

<script setup>
definePageMeta({
    middleware: "auth-jwt",
});
const store = useMyAgents();

const agents = computed(() => store.agents);

await store.fetchAgents();
</script>
