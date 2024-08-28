<template>
    <header class="flex h-14 items-center bg-yellow md:h-16 md:px-8">
        <div class="flex w-full items-center justify-between p-4 md:hidden">
            <div
                class="flex h-[24px] w-[24px] flex-col items-center justify-center space-y-1"
            >
                <span class="h-[2px] w-[18px] rounded-sm bg-black"></span>
                <span class="h-[2px] w-[18px] rounded-sm bg-black"></span>
                <span class="h-[2px] w-[18px] rounded-sm bg-black"></span>
            </div>
            <img class="ml-18 max-w-[136px]" src="/img/logo.png" alt="logo" />
            <div>
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        x="12.5"
                        y="0.5"
                        width="15"
                        height="15.001"
                        rx="7.5"
                        fill="#337566"
                    />
                    <rect
                        x="12.5"
                        y="0.5"
                        width="15"
                        height="15.001"
                        rx="7.5"
                        stroke="white"
                    />
                    <path
                        d="M19.6992 12.001V6.94678C19.6992 6.77848 19.701 6.61019 19.7046 6.44189C19.7082 6.2736 19.7135 6.10889 19.7207 5.94775C19.7279 5.78662 19.7368 5.63265 19.7476 5.48584C19.6724 5.5682 19.5793 5.65771 19.4683 5.75439C19.3608 5.85107 19.2445 5.95133 19.1191 6.05518L18.2222 6.7749L17.5884 5.97461L19.9141 4.14844H20.9722V12.001H19.6992Z"
                        fill="#F5F5F5"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12H9ZM7 14C7 14.5523 7.44772 15 8 15C8.55228 15 9 14.5523 9 14H15C15 14.5523 15.4477 15 16 15C16.5523 15 17 14.5523 17 14H19V22C19 23.1046 18.1046 24 17 24H7C5.89543 24 5 23.1046 5 22V14H7ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12H19C20.1046 12 21 12.8954 21 14V22C21 24.2091 19.2091 26 17 26H7C4.79086 26 3 24.2091 3 22V14C3 12.8954 3.89543 12 5 12H7Z"
                        fill="#0F0F0F"
                    />
                    <rect
                        x="12.5"
                        y="0.5"
                        width="15"
                        height="15.001"
                        rx="7.5"
                        fill="#337566"
                    />
                    <rect
                        x="12.5"
                        y="0.5"
                        width="15"
                        height="15.001"
                        rx="7.5"
                        stroke="white"
                    />
                    <path
                        d="M19.6992 12.001V6.94678C19.6992 6.77848 19.701 6.61019 19.7046 6.44189C19.7082 6.2736 19.7135 6.10889 19.7207 5.94775C19.7279 5.78662 19.7368 5.63265 19.7476 5.48584C19.6724 5.5682 19.5793 5.65771 19.4683 5.75439C19.3608 5.85107 19.2445 5.95133 19.1191 6.05518L18.2222 6.7749L17.5884 5.97461L19.9141 4.14844H20.9722V12.001H19.6992Z"
                        fill="#F5F5F5"
                    />
                </svg>
            </div>
        </div>
        <div class="container hidden items-center justify-between md:flex">
            <div class="flex">
                <img
                    class="mr-3 cursor-pointer"
                    src="/img/logo.png"
                    alt="logo"
                    @click="$router.push('/')"
                />
                <button
                    class="flex items-center justify-center rounded-full bg-light-gray3 px-4 py-3 text-sm"
                >
                    <svg
                        class="mr-1"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M6 5C5.44772 5 5 5.44772 5 6V8C5 8.55228 5.44772 9 6 9H8C8.55228 9 9 8.55228 9 8V6C9 5.44772 8.55228 5 8 5H6ZM3 6C3 4.34315 4.34315 3 6 3H8C9.65685 3 11 4.34315 11 6V8C11 9.65685 9.65685 11 8 11H6C4.34315 11 3 9.65685 3 8V6ZM13 6C13 4.34315 14.3431 3 16 3H18C19.6569 3 21 4.34315 21 6V8C21 9.65685 19.6569 11 18 11H16C14.3431 11 13 9.65685 13 8V6ZM16 5C15.4477 5 15 5.44772 15 6V8C15 8.55228 15.4477 9 16 9H18C18.5523 9 19 8.55228 19 8V6C19 5.44772 18.5523 5 18 5H16ZM3 16C3 14.3431 4.34315 13 6 13H8C9.65685 13 11 14.3431 11 16V18C11 19.6569 9.65685 21 8 21H6C4.34315 21 3 19.6569 3 18V16ZM6 15C5.44772 15 5 15.4477 5 16V18C5 18.5523 5.44772 19 6 19H8C8.55228 19 9 18.5523 9 18V16C9 15.4477 8.55228 15 8 15H6ZM16 15C15.4477 15 15 15.4477 15 16V18C15 18.5523 15.4477 19 16 19H18C18.5523 19 19 18.5523 19 18V16C19 15.4477 18.5523 15 18 15H16ZM13 16C13 14.3431 14.3431 13 16 13H18C19.6569 13 21 14.3431 21 16V18C21 19.6569 19.6569 21 18 21H16C14.3431 21 13 19.6569 13 18V16Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                    Все категории
                </button>
            </div>
            <div class="flex items-center space-x-6">
                <span
                    class="hidden cursor-default items-center px-[6px] py-1 text-[15px] lg:flex"
                >
                    <svg
                        class="mr-1"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M8 2C6.93914 2 5.92178 2.41372 5.17165 3.15049C4.42151 3.88725 4 4.88648 4 5.92842C4 9.07112 8 13 8 13C8 13 12 9.07112 12 5.92842C12.0001 5.41248 11.8967 4.90226 11.6957 4.42559C11.4947 3.94891 11.2001 3.51531 10.8286 3.15049C10.4572 2.78567 10.016 2.49604 9.53066 2.29863C9.04533 2.10123 8.5253 1.99993 8 2ZM8 7.5C7.68362 7.5 7.37443 7.40836 7.11135 7.23574C6.84828 7.06313 6.64324 6.81704 6.52211 6.52998C6.40099 6.24292 6.36915 5.92705 6.43079 5.62227C6.49243 5.31748 6.64464 5.03748 6.86828 4.81768C7.09191 4.59787 7.37693 4.44874 7.6872 4.38799C7.99747 4.32723 8.31903 4.35731 8.61139 4.47607C8.90375 4.59484 9.15376 4.79682 9.32969 5.05508C9.50562 5.31334 9.59961 5.61661 9.59984 5.92734C9.59991 6.13377 9.55852 6.33817 9.47816 6.52891C9.3978 6.71965 9.28001 6.89314 9.13145 7.03916C8.98289 7.18518 8.80663 7.30063 8.61248 7.37969C8.41834 7.45875 8.21017 7.49993 8 7.5Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                    Ростов-на-Дону
                </span>
                <span class="h-8 w-[1px] bg-light-gray4"></span>
                <span class="cursor-pointer px-3 py-2 text-sm text-green"
                    >Разместить объявление</span
                >
                <button
                    class="flex items-center space-x-2 rounded-3xl bg-light-gray3 py-1 pl-3 pr-1"
                >
                    <div
                        class="flex h-[24px] w-[24px] flex-col items-center justify-center space-y-1"
                    >
                        <span
                            class="h-[2px] w-[18px] rounded-sm bg-black"
                        ></span>
                        <span
                            class="h-[2px] w-[18px] rounded-sm bg-black"
                        ></span>
                        <span
                            class="h-[2px] w-[18px] rounded-sm bg-black"
                        ></span>
                    </div>
                    <img
                        class="h-10 w-10 rounded-full object-center"
                        src="/img/avatar.png"
                        alt="avatar"
                    />
                </button>
            </div>
        </div>
    </header>
</template>
