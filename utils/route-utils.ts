export function getPageFromRoute(totalPages: Ref<number>) {
    const route = useRoute();
    return computed(() => {
        const routeParam = Array.isArray(route.query.page) ? route.query.page[0] : route.query.page;
        const page = parseInt(routeParam || "1");
        if (!Number.isFinite(page) || page > totalPages.value) {
            return 1;
        }
        return page;
    });
}
