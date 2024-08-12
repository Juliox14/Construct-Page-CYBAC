import axios from 'axios';

export async function getItemsBy(type, slug) {
    try {
        const response = await axios.get(`/api/${type}/${slug}`);
        return response.data;
    } catch (error) {
        return null;
    }
}

export async function getElement(type) {
    try {
        const response = await axios.get(`/api/${type}`);
        return response.data;
    } catch (error) {
        return null;
    }
}