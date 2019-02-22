let uuid = 0;

const create = (x, y, value) => {
    uuid += 1;

    return {
        id: uuid,
        value: value || 0,
        position: { x, y },
    };
};

export default create;
