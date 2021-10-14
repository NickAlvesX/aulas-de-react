import React from 'react'

const containerStyle = {
  height: '50px',
  backgroundColor: '#F8F9FA',
  width: '100%',
  padding: '8px 16px',
  display: 'flex',
  alignItems: 'center'
}

const numberStyle = {
  width: 30,
  height: '25px',
  backgroundColor: '#17A2B8',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 10,
  color: '#ffffff',
  borderRadius: 10
}

const Navbar = props => (
  <div style={containerStyle}>
    <div style={numberStyle}>
      {props.itemsAmount}
    </div>
    <span>Items</span>
  </div>
)

export default Navbar
