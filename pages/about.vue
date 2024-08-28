<template>
    <main>
        <Navbar />
        <ApplicationLogo class="mt-6 md:hidden" />
        <div class="mx-auto md:max-w-[600px]">
            <div class="mt-8 p-4 md:p-5">
                <h6 class="text-xl font-semibold md:text-2xl">О компании</h6>
                <p class="mt-2 text-sm font-normal md:text-[17px]">
                    Копкой занимаемся 15 лет. Все началось с хобби и плавно
                    переросло в любимую работу. Работаем с профессиональной
                    техникой.
                </p>
            </div>
            <div class="mt-2 p-4 opacity-50 md:mt-3 md:p-5">
                <div class="flex w-full items-center justify-between">
                    <h6 class="text-xl font-semibold md:text-2xl">
                        Режим работы
                    </h6>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M8.11997 9.29L12 13.17L15.88 9.29C16.27 8.9 16.9 8.9 17.29 9.29C17.68 9.68 17.68 10.31 17.29 10.7L12.7 15.29C12.31 15.68 11.68 15.68 11.29 15.29L6.69997 10.7C6.30997 10.31 6.30997 9.68 6.69997 9.29C7.08997 8.91 7.72997 8.9 8.11997 9.29Z"
                            fill="#0F0F0F"
                        />
                    </svg>
                </div>
                <span class="mt-2 md:mt-2 md:text-[17px]">
                    Сегодня с 8:00 до 23:00
                </span>
            </div>
            <img class="mt-2 md:hidden" src="/img/map.jpg" alt="map" />
            <div
                class="p-4 pb-12 md:mt-3 md:flex md:items-center md:justify-between md:p-5"
            >
                <div>
                    <h6 class="text-xl font-semibold md:text-2xl">
                        Местоположение
                    </h6>
                    <p
                        class="mt-2 text-sm font-normal text-green md:text-[17px]"
                    >
                        Ростов на Дону, Воронежская ул., 42А корп. 12
                    </p>
                </div>
                <img
                    class="hidden h-[132px] w-[200px] rounded-r-xl md:block"
                    src="/img/map2.jpg"
                    alt="map"
                />
            </div>
        </div>
    </main>
</template>
