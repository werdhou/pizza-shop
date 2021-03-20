const initialState = {
    items: {},
    totalPrice: 0,
    totalPizzasCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PIZZA_CART": {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items,
                action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }
            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items)
            const totalPrice = getTotalPrice(allPizzas)
            return {
                ...state,
                items: newItems,
                totalPizzasCount: allPizzas.length,
                totalPrice
            }
        }
        case "ADD_PRICE":
            return {
                ...state,
                totalPrice: action.payload
            }
        case "CLEAR_CART":
            return {
                ...state,
                totalPizzasCount: 0,
                totalPrice: 0,
                items: {}
            }
        case "REMOVE_CART_ITEM":
            const newItems = {
                ...state.items
            }
            const currentTotalPrice = newItems[action.payload].totalPrice
            const currentTotalCount = newItems[action.payload].items.length
            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalPizzasCount: state.totalPizzasCount - currentTotalCount
            }

        default:
            return state
    }
}

export default cartReducer