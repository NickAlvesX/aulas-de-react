import React, { useState } from 'react'
import Navbar from './Navbar';
import Description from './Description';
import Counter from "./Counter";
import {ItemContainer} from "./styled";

const initialItems = [
  { id: 0, product: 'Tenis', price: 15, counter: 0, description: 'Pra por no pé', image: 'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1602007269' },
  { id: 1, product: 'Blusa', price: 10, counter: 0, description: 'Pra por no corpo no frio' },
  { id: 2, product: 'Camisa', price: 15, counter: 0, description: 'Pra por no corpo no calor' },
  { id: 3, product: 'Meia', price: 5, counter: 0, description: 'Pra por no pé no frio' }
]

const App = () => {
  const [items, setItems] = useState(initialItems)
  const [selectedItem, setSelectedItem] = useState({})

  const handleOnDelete = product => {
    const newItems = items.filter(item => product !== item.product)

    setItems(newItems)
  }

  const getItemsAmount = () => {
    let itemsAmount = 0

    items.forEach(item => {
      if (item.counter > 0) {
        itemsAmount += 1
      }
    })

    return itemsAmount
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

  const itemsAmount = getItemsAmount()

  return (
    <>
      <Navbar itemsAmount={itemsAmount} />
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
    </>
  )
}

export default App
