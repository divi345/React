import React from 'react'
import ItemsList from './ItemsList'
const Content = ({items, setItems, handleCheck, handleDelete}) => {
   return (
    <main>
      {(items.length) ? (
       <ItemsList 
         items={items}
         setItems={setItems}
         handleCheck={handleCheck}
         handleDelete={handleDelete}/>
      ) : (
        <p style={{ marginTop:'2rem' }}>Your list is empty</p>
      )
}
    </main>
  )
}

export default Content