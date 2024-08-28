<template>
    <footer class="border-t border-gray bg-light-gray">
        <div class="container px-4 pb-10 pt-6 2xl:px-0">
            <ul
                class="flex flex-col gap-y-5 text-sm text-light-gray2 md:hidden"
            >
                <li class="text-black">© Annonce 2023</li>
                <li><nuxt-link to="#">Документы</nuxt-link></li>
                <li><nuxt-link to="/about">О компании</nuxt-link></li>

                <li><nuxt-link to="#">Продавцам</nuxt-link></li>
                <li><nuxt-link to="#">Покупателям</nuxt-link></li>
                <li><nuxt-link to="#">Разместить объявление</nuxt-link></li>
                <li class="flex items-center text-black">
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_83_1088)">
                            <rect
                                x="1"
                                y="1"
                                width="16"
                                height="16"
                                rx="8"
                                fill="white"
                            />
                            <rect
                                x="1"
                                y="1"
                                width="16"
                                height="5.33333"
                                fill="white"
                            />
                            <rect
                                x="1"
                                y="6.33331"
                                width="16"
                                height="5.33333"
                                fill="#0945E0"
                            />
                            <rect
                                x="1"
                                y="11.6667"
                                width="16"
                                height="5.33333"
                                fill="#DB0606"
                            />
                        </g>
                        <rect
                            x="0.5"
                            y="0.5"
                            width="17"
                            height="17"
                            rx="8.5"
                            stroke="black"
                            stroke-opacity="0.04"
                        />
                        <defs>
                            <clipPath id="clip0_83_1088">
                                <rect
                                    x="1"
                                    y="1"
                                    width="16"
                                    height="16"
                                    rx="8"
                                    fill="white"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                    <span class="ml-[6px]">Русский</span>
                </li>
            </ul>
            <ul class="hidden gap-x-5 text-sm text-light-gray2 md:flex">
                <li class="text-black">© Annonce 2023</li>
                <li><nuxt-link to="#">Документы</nuxt-link></li>
                <li><nuxt-link to="/about">О компании</nuxt-link></li>
            </ul>
        </div>
    </footer>
</template>
