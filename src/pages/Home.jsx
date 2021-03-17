import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Sort, Categories, PizzaBlock, PizzaLoaded } from '../components'
import { addPizzaToCart } from '../redux/action/cart'
import { setCategory, setSortBy } from '../redux/action/filters'
import { fetchPizzas } from '../redux/action/pizzas'

const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }]

export default function Home() {

    const dispatch = useDispatch()
    const { pizzas, isLoaded, sortBy, category, order } = useSelector(({ pizzas, filters }) => {
        return {
            pizzas: pizzas.items,
            isLoaded: pizzas.isLoaded,
            sortBy: filters.sortBy,
            category: filters.category,
            order: filters.order
        }
    })
    const { pizzaVarieties } = useSelector(({ categories }) => {
        return {
            pizzaVarieties: categories.items
        }
    })
    const { cartItems } = useSelector(({ cart }) => {
        return {
            cartItems: cart.items
        }
    })

    const [selectTitle, setSelectTitle] = useState(null)

    const onSelectSortType = useCallback((name, order) => {
        dispatch(setSortBy(name, order))
    }, [dispatch])

    const onSelectCategory = useCallback((idx) => {
        dispatch(setCategory(idx))
    }, [dispatch])

    const handleAddPizzaToCart = useCallback((obj) => {
        dispatch(addPizzaToCart(obj))
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category, order))
    }, [sortBy, category, dispatch, order])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    selectTitleName={setSelectTitle}
                    items={pizzaVarieties} />
                <Sort activeSortType={sortBy} sortItems={sortItems} onClickSortType={onSelectSortType} />
            </div>
            <h2 className="content__title">{selectTitle ? selectTitle : 'Все пиццы'}</h2>
            <div className="content__items">
                {isLoaded
                    ?
                    pizzas.map(pizza => (
                        <PizzaBlock onClickAddPizza={handleAddPizzaToCart} key={pizza.id} addedCount={cartItems[pizza.id] && cartItems[pizza.id].items.length} {...pizza} />
                    ))
                    :
                    Array(12).fill(0).map((_, index) => (
                        <PizzaLoaded className="pizza-block" key={index} />
                    ))
                }
            </div>
        </div>

    )
}
