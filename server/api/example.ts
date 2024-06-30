export default defineEventHandler(async (event) => {
    const config = useRuntimeConfig();
    const secrets = {
        apiUrl: config.private?.API_PROVIDER_URL
    };
    const strapi_jwt = event.context.strapi_jwt;

    const result: ApiBody = {
        ok: false,
        status: 500
    };

    try {
        const body = await readBody(event);
        const data = await $fetch(
            `${secrets.apiUrl}/api/example`,
            {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${strapi_jwt}`
                },
                body: {
                    uid: body.uid
                }
            }
        );
        if (typeof data.error !== "undefined") {
            result.status = data.error.status;
            result.error = data.error.message;
        } else {
            result.status = 200;
            result.ok = true;
        }
    } catch (e) {
    }

    return result;
});
