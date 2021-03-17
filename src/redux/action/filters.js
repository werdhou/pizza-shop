export const setSortBy = (name, order) => ({
    type: "SET_SORT_BY",
    payload: name,
    order
})

export const setCategory = (catIndex) => ({
    type: "SET_CATEGORY",
    payload: catIndex,
})