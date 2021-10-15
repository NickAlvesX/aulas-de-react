import { useState, createContext } from "react";

const initialItems = [
  { id: 0, product: 'Tenis', price: 15, counter: 0, description: 'Pra por no pé', image: 'https://static.netshoes.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1602007269' },
  { id: 1, product: 'Blusa', price: 10, counter: 0, description: 'Pra por no corpo no frio' },
  { id: 2, product: 'Camisa', price: 15, counter: 0, description: 'Pra por no corpo no calor' },
  { id: 3, product: 'Meia', price: 5, counter: 0, description: 'Pra por no pé no frio' }
]

export const ItemsContext = createContext({})

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialItems)

  const getItemsAmount = () => {
    let itemsAmount = 0

    items.forEach(item => {
      if (item.counter > 0) {
        itemsAmount += 1
      }
    })

    return itemsAmount
  }

  const itemsAmount = getItemsAmount()

  return (
    <ItemsContext.Provider value={{ items, setItems, itemsAmount }}>
      {children}
    </ItemsContext.Provider>
  )
}

export default ItemsProvider
