const storage = window.localStorage;

export default function loadFromStorage(key) {
    try {
        const value = storage.getItem(key);
        return JSON.parse(value);
    } catch (error) {
        console.error(error);

        return null;
    }
}
