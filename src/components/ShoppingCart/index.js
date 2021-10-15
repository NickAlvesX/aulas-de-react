import {ItemContainer} from "../styled";
import Counter from "../Counter";
import Description from "../Description";
import React, { useContext, useState } from "react";
import { ItemsContext } from "../ItemsProvider";

const ShoppingCart = () => {
  const { items, setItems } = useContext(ItemsContext)
  const [selectedItem, setSelectedItem] = useState({})

  const handleOnDelete = product => {
    const newItems = items.filter(item => product !== item.product)

    setItems(newItems)
  }

  const onChangeCounter = (product, counter) => {
    const newItems = items.map(item => {
      if (item.product === product) {
        return {
          ...item,
          counter
        }
      }

      return item
    })

    setItems(newItems)
  }

  const clearCounter = () => {
    const newItems = items.map(item => ({ ...item, counter: 0 }))

    setItems(newItems)
  }

  return (
    <div>
      <ItemContainer bgColor="orange" onClick={clearCounter} clickable>Refazer</ItemContainer>
      {items.map(item => (
        <Counter
          key={item.id}
          product={item.product}
          price={item.price}
          onDelete={() => handleOnDelete(item.product)}
          counter={item.counter}
          setCounter={counter => onChangeCounter(item.product, counter)}
          onClick={() => setSelectedItem(item)}
        />
      ))}
      <Description key={selectedItem.id} item={selectedItem} />
    </div>
  )
}

export default ShoppingCart
