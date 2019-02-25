let uuid = 0;

export default ({
    id,
    x,
    y,
    value,
    stacked,
}) => {
    if (!id) {
        uuid += 1;
    }

    return ({
        id: id || uuid,
        x,
        y,
        value,
        stacked: !!stacked,
    });
};
