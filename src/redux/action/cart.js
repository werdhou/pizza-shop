export const addPizzaToCart = (pizzaObj) => ({
    type: "ADD_PIZZA_CART",
    payload: pizzaObj
})

export const addPrice = (price) => ({
    type:  "ADD_PRICE",
    payload: price
})

export const clearCart = () => ({
    type:  "CLEAR_CART"
})

export const removeCartItem = (id) => ({
    type:  "REMOVE_CART_ITEM",
    payload: id
})