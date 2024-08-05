export async function getItemsBy(type, slug) {
    try {
        const response = (
            await fetch(`http://localhost:3000/api/${type}/${slug}`)
        ).json();
        return response;
    } catch (error) {
        return null;
    }
}

export async function getElement(type) {
    try {
        const response = (
            await fetch(`http://localhost:3000/api/${type}`)
        ).json();
        return response;
    } catch (error) {
        return null;
    }
}
