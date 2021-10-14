import React from 'react'
import { useWindowWidth, useDocumentTitle, useFormInput } from "../hooks";

const FunctionComponent = () => {
  const firstName = useFormInput('')
  const lastName = useFormInput('')

  const width = useWindowWidth()
  useDocumentTitle(firstName.value)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <span>Function Component</span>
      <input {...firstName} />
      <input {...lastName} />
      <span>{width}</span>
    </div>
  )
}

export default FunctionComponent
