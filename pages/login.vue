<template>
    <div
        class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
    >
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
                class="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
            />
            <h2
                class="text-gray-900 mt-10 text-center text-2xl font-bold leading-9 tracking-tight"
            >
                Sign in to your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
                class="space-y-6"
                action="#"
                method="POST"
                @submit.prevent="handleLogin"
            >
                <div>
                    <label
                        for="email"
                        class="text-gray-900 block text-sm font-medium leading-6"
                        >Email address</label
                    >
                    <div class="mt-2">
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autocomplete="email"
                            required=""
                            class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model="login"
                        />
                    </div>
                </div>

                <div>
                    <div class="flex items-center justify-between">
                        <label
                            for="password"
                            class="text-gray-900 block text-sm font-medium leading-6"
                            >Password</label
                        >
                        <div class="text-sm">
                            <a
                                href="#"
                                class="font-semibold text-indigo-600 hover:text-indigo-500"
                                >Forgot password?</a
                            >
                        </div>
                    </div>
                    <div class="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autocomplete="current-password"
                            required=""
                            class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            v-model="password"
                        />
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign in
                    </button>
                    <button
                        @click="$router.push({ name: 'register' })"
                        type="button"
                        class="mt-2 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Register
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "clean",
});
const userStore = useMyUser();

const tokenJWTCookie = useCookie("token_jwt");
const login = ref("v5v_95@mail.ru");
const password = ref("Admin12345");

async function handleLogin() {
    await $fetch("https://api.conneto.com/accounts/api/auth/jwt/create/", {
        method: "POST",
        body: {
            email: login.value,
            password: password.value,
        },
    })
        .then(async (res) => {
            tokenJWTCookie.value = res;
            login.value = "";
            password.value = "";
            await userStore.fetchUser();
            navigateTo({ name: "index" });
        })
        .catch((er) => {
            console.error(er);
        });
}
</script>

<style lang="scss" scoped></style>
