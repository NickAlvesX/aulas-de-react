import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ItemContainer = styled.div`
  background-color: ${props => props.bgColor};
  padding: 10px;
  margin: 10px 5px;
  color: #ffffff;
  border-radius: 5px;
  cursor: ${props => props.clickable ? 'pointer' : 'inherit'};
  user-select: none;
  width: 40px;
  display: flex;
  justify-content: center;
`

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`