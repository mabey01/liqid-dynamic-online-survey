export default function getPercentage(value = 0, max = 100, min = 0) {
    if (!Number.isFinite(value)) return 0;

    return ((value - min) * 100) / (max - min);
}
