export default function getHumanFloat(number = 0) {
    if (!Number.isFinite(number)) return 0;

    return Math.round(number * 100) / 100;
}
