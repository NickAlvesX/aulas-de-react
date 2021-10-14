import {DescriptionContainer} from "./styled";
import React, { useState } from "react";

const Description = ({ item }) => {
  const [myItem, setMyItem] = useState(item)

  return (
    <DescriptionContainer>
      {myItem.description}
      <img style={{ width: 100, height: 100 }} src={myItem.image}/>
    </DescriptionContainer>
  )
}

export default Description
