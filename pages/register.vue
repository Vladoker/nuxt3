<template>
    <div>
        <div>
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
                        Sign up
                    </h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form
                        class="space-y-6"
                        action="#"
                        method="POST"
                        @submit.prevent="handleSignUp"
                    >
                        <div>
                            <label
                                for="email"
                                class="text-gray-900 block text-sm font-medium leading-6"
                                >Name</label
                            >
                            <div class="mt-2">
                                <input
                                    name="name"
                                    type="text"
                                    required=""
                                    class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    v-model="user.name"
                                />
                            </div>
                        </div>
                        <div>
                            <label
                                for="email"
                                class="text-gray-900 block text-sm font-medium leading-6"
                                >Surname</label
                            >
                            <div class="mt-2">
                                <input
                                    name="surname"
                                    type="text"
                                    required=""
                                    class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    v-model="user.surname"
                                />
                            </div>
                        </div>
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
                                    v-model="user.email"
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
                            </div>
                            <div class="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autocomplete="current-password"
                                    required=""
                                    class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    v-model="user.password"
                                />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label
                                    for="password"
                                    class="text-gray-900 block text-sm font-medium leading-6"
                                    >Confirm password</label
                                >
                            </div>
                            <div class="mt-2">
                                <input
                                    name="password2"
                                    type="password"
                                    required=""
                                    class="text-gray-900 ring-gray-300 placeholder:text-gray-400 block w-full rounded-md border-0 px-3 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    v-model="user.password2"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                :class="{
                                    'opacity-50': !identicalPass,
                                }"
                                :disabled="!identicalPass"
                                type="submit"
                                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign un
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <UiModal
            :show="user.showModal"
            :text="modaltext"
            @close="user.showModal = false"
        />
    </div>
</template>

<script setup>
definePageMeta({
    layout: "clean",
});

const user = ref({
    name: "",
    surname: "",
    email: "",
    password: "",
    password2: "",
    showModal: false,
});
const modaltext = ref("");
const errors = ref([]);

const identicalPass = computed(
    () =>
        user.value.password == user.value.password2 &&
        user.value.password != "",
);

async function handleSignUp() {
    try {
        await $fetch("https://api.conneto.com/accounts/api/auth/users/", {
            method: "POST",
            body: {
                fullname: `${user.value.name} ${user.value.surname}`,
                email: user.value.email,
                password: user.value.password,
                user_pd_messages: false,
            },
        });

        await $fetch(
            "https://api.conneto.com/accounts/api/verify-user-email/",
            {
                method: "POST",
                body: {
                    email: user.value.email,
                },
            },
        );

        modaltext.value =
            "Необходимо зайти на почту и подтвердить адрес электроннойпочты для портала conneto";
        user.value.showModal = true;
    } catch (er) {
        console.error(er);
        errors.value = Object.values(er?.data || {});
        modaltext.value = errors.value.join(" ");
        user.value.showModal = true;
    }
}
</script>

<style lang="scss" scoped></style>
