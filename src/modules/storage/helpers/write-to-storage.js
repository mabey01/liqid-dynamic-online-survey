const storage = window.localStorage;

export default function loadFromStorage(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        storage.setItem(key, serializedValue);
    } catch (error) {
        console.error(error);

        return null;
    }
}
