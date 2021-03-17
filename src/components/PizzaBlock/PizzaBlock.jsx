import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Button from '../Button/Button'


function PizzaBlock(pizza) {
    const types = ['тонкое', 'традиционное']
    const aviableSize = [26, 30, 40]

    const [activeType, setActiveType] = React.useState(pizza.types[0])
    const [activeSize, setActiveSize] = React.useState(pizza.sizes[0])

    const onSelectType = (idx) => {
        setActiveType(idx)
    }
    const onSelectSize = (idx) => {
        setActiveSize(idx)
    }

    const onAddPizza = () => {
        const obj = {
            id: pizza.id,
            name: pizza.name,
            imageUrl: pizza.imageUrl,
            price: pizza.price,
            type: types[activeType],
            size: activeSize
        }
        pizza.onClickAddPizza(obj)
    }

    return (

        <div className="pizza-block">
            <img
                className="pizza-block__image"
                src={pizza.imageUrl}
                alt="Pizza"
            />
            <h4 className="pizza-block__title">{pizza.name}</h4>
            <div className="pizza-block__selector">
                <ul>
                    {types.map((type, idx) => (
                        <li key={idx + type}
                            onClick={() => onSelectType(idx)}
                            className={classNames({
                                "active": activeType === idx,
                                "disabled": !pizza.types.includes(idx)
                            })}>
                            {type}
                        </li>
                    ))}
                </ul>
                <ul>
                    {aviableSize.map((size, idx) => (
                        <li key={idx}
                            onClick={() => onSelectSize(size)}
                            className={classNames({
                                "active": activeSize === size,
                                "disabled": !pizza.sizes.includes(size)
                            })}>
                            {`${size} см`}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="pizza-block__bottom">
                <div className="pizza-block__price">от {pizza.price} ₽</div>
                <Button onClick={onAddPizza} className="button button--outline button--add">
                    <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                        />
                    </svg>
                    <span>Добавить</span>
                    {pizza.addedCount && 
                    <i>{pizza.addedCount}</i> }
                </Button>
            </div>
        </div>
    )
}

PizzaBlock.propTypes = {
    isLoading: PropTypes.bool
}

PizzaBlock.defaultProps = {
    isLoading: false
}

export default PizzaBlock