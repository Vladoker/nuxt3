import { defineStore } from "pinia";

export const useMyAgents = defineStore("agents", {
    state: () => ({
        agents: [],
    }),
    actions: {
        async fetchAgents() {
            try {
                const { data } = await useFetch(
                    "https://my-json-server.typicode.com/Vladoker/myserver/agents",
                );
                if (data.value) {
                    this.agents = data.value;
                }
            } catch (er) {
                console.error(er);
            }
        },
    },
});
