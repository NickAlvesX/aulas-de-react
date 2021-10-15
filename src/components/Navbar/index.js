import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ItemsContext } from "../ItemsProvider";
import { containerStyle, numberStyle, Link } from './styled'
import { HOME, SHOPPING_LIST } from "../../routes";

const Index = () => {
  const history = useHistory()
  const { itemsAmount } = useContext(ItemsContext)

  return (
    <div style={containerStyle}>
      <div style={numberStyle}>
        {itemsAmount}
      </div>
      <span>Items</span>
      <Link onClick={() => history.push(HOME)}>Home</Link>
      <Link onClick={() => history.push(SHOPPING_LIST)}>Carrinho de Compras</Link>
    </div>
  )
}

export default Index
