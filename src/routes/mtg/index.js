export let rand = () => {
    return Math.random().toString(36).substr(2); // remove `0.`
};

export let id_gen = () => {
    return rand() + rand(); // to increase length
};