import React from 'react'
import { Container, ProductContainer, ItemContainer } from "./styled";

const Counter = props => {
  const subtractCounter = () => {
    if (props.counter > 0) {
      props.setCounter(props.counter - 1)
    }
  }

  return (
    <Container>
      <span onClick={props.onClick}>{props.product}</span>
      <ProductContainer>
        <ItemContainer bgColor="black">{props.counter || 'Zero'}</ItemContainer>
        <ItemContainer onClick={() => props.setCounter(props.counter + 1)} bgColor="green" clickable>
          +
        </ItemContainer>
        <ItemContainer onClick={subtractCounter} bgColor={props.counter > 0 ? 'blue' : 'gray'} clickable={props.counter > 0}>
          -
        </ItemContainer>
        <ItemContainer onClick={props.onDelete} bgColor="red" clickable>
          Lixo
        </ItemContainer>
        {props.price}
      </ProductContainer>
    </Container>
  )
}

export default Counter
