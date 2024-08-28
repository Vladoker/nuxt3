/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            container: {
                center: true,
                screens: {
                    xl: "1745px",
                },
            },
            colors: {
                yellow: "#FFF7EB",
                green: "#337566",
                black: "#0F0F0F",
                gray: "#DBDBDB",
                red: "#BD3223",
                "light-gray": "#F5F5F5",
                "light-gray2": "#6B6B6B",
                "light-gray3": "#E8E8E8",
                "light-gray4": "#CCCCCC",
                "light-gray5": "#EDEDED",
                "light-black": "#1B1D22",
            },
            fontSize: {
                sm: [
                    "15px",
                    {
                        lineHeight: "24px",
                        fontWeight: "500",
                    },
                ],
            },
        },
    },
    plugins: [],
};
