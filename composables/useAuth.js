export const useLogOutJWT = () => {
    const tokenJWTCookie = useCookie("token_jwt");
    tokenJWTCookie.value = null;
    navigateTo("login", { redirectCode: 301 });
};

export const useRefreshToken = async (refresh) => {
    const token = await $fetch(
        "https://api.conneto.com/accounts/api/auth/jwt/refresh/",
        {
            method: "POST",
            body: {
                refresh,
            },
        },
    )
        .then((res) => res)
        .catch((err) => err);

    return token;
};

export const useVerifyToken = async (access) => {
    const token = await $fetch(
        "https://api.conneto.com/accounts/api/auth/jwt/verify/",
        {
            method: "POST",
            body: {
                token: access,
            },
        },
    )
        .then((res) => res.data)
        .catch((err) => err.data);

    return token;
};
