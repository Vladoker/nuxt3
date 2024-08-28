import { defineStore } from "pinia";

export const useMyUser = defineStore("user", {
    state: () => ({
        user: null,
    }),
    actions: {
        async fetchUser() {
            try {
                const tokenJWTCookie = useCookie("token_jwt");
                if (tokenJWTCookie.value?.access) {
                    const { data } = await useFetch(
                        "https://api.conneto.com/accounts/api/auth/users/me/",
                        {
                            headers: {
                                Authorization: `Bearer ${tokenJWTCookie.value.access}`,
                            },
                        },
                    );
                    if (data.value) {
                        this.user = data.value;
                    }
                }
            } catch (er) {
                console.error(er);
            }
        },
    },
});
