import React from 'react'
import LineItem from './LineItem'
const ItemsList = ({items, setItems, handleCheck, handleDelete}) => {
  return (
    <ul>
        {items.map((item)=>(
          <LineItem
           item={item}
           setItems={setItems}
           key={item.id}
           handleCheck={handleCheck}
           handleDelete={handleDelete}/>
        ))}
        
       </ul>
  )
}

export default ItemsList


