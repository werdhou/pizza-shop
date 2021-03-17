let initialState = {
    items: [
        "Мясные", "Вегатаринские", "Гриль", "Острые", "Закрытые", "От Шефа"
    ],
    pizzas: []
}

const categoriesReducer = (state = initialState, action) => {
    if (action.type === 'SET_CATEGORIES') {
        return {
            ...state,
            pizzas: action.payload
        }
    }
    return state

}

export default categoriesReducer