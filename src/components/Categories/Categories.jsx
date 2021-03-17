import React, { memo } from 'react'
import PropTypes from 'prop-types'

const Categories = memo(
    function Categories({ items, selectTitleName, onClickCategory, activeCategory }) {

        const onSelectItem = (item, index) => {

            selectTitleName(item)
            onClickCategory(index)
            if (item === null) {
                onClickCategory(null)
            }
        }
        return (
            <div className="categories">
                <ul>
                    <li className={activeCategory === null ? "active" : ''}
                        onClick={() => {
                            selectTitleName(null)
                            onSelectItem(null)
                        }} >Все</li>
                    {items &&
                        items.map((item, idx) => (
                            <li onClick={() => onSelectItem(item, idx)}
                                className={idx === activeCategory ? "active" : ''}
                                key={`${item}_${idx}`}>
                                {item}
                            </li>
                        )
                        )}
                </ul>
            </div>
        )
    })

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func
}

Categories.defaultProps = { activeCategory: null, items: [] }

export default Categories


