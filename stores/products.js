import { defineStore } from "pinia";

export const useMyProducts = defineStore("products", {
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            try {
                const { data } = await useFetch(
                    "https://my-json-server.typicode.com/Vladoker/myserver/products",
                );
                if (data.value) {
                    this.products = data.value;
                }
            } catch (er) {
                console.error(er);
            }
        },
    },
});
