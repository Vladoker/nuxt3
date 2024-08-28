export default defineNuxtRouteMiddleware(async (to, from) => {
    const tokenJWTCookie = useCookie("token_jwt");
    if (!tokenJWTCookie.value) {
        return navigateTo("/login", { redirectCode: 403 });
    }

    const tokenVerification = await useVerifyToken(tokenJWTCookie.value.access);

    if (tokenVerification && tokenVerification?.code == "token_not_valid") {
        const getAccessToken = await useRefreshToken(
            tokenJWTCookie.value.refresh,
        );

        if (getAccessToken && "access" in getAccessToken) {
            tokenJWTCookie.value.access = getAccessToken.access;
        } else {
            tokenJWTCookie.value = null;
            return navigateTo("/login", { redirectCode: 403 });
        }
    }
});
