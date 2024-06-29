export default defineEventHandler((event) => {
    event.context.strapi_jwt = getCookie(event, "strapi_jwt")
});
