import React from 'react'

const Categories = (props) => {
  console.log(props)
  return (
    <li
      className={`${props.isactive === props.name ? 'active' : ''} grid_sorting_button button d-flex flex-column justify-content-center align-items-center`}
      onClick={() => props._onFilterByCategories(props.name, props.id)}
    >
      {props.name}
    </li>
  )
}

export default Categories
