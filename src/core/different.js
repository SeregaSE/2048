export default (current, next) => {
    const filtered = current.filter(n => !n.stacked);

    if (filtered.length !== next.length) {
        return true;
    }

    for (let i = filtered.length - 1; i >= 0; i -= 1) {
        const a = filtered[i];
        const b = next.find(n => n.id === a.id);

        if (!b || a.value !== b.value || a.x !== b.x || a.y !== b.y) {
            return true;
        }
    }

    return false;
};
