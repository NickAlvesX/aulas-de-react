import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth)

  const updateWidth = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', updateWidth)

    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  return width
}

export const useDocumentTitle = title => {
  useEffect(() => {
    document.title = title
  })
}

export const useFormInput = initialState => {
  const [value, setValue] = useState(initialState)

  const onChange = e => {
    setValue(e.target.value)
  }

  return {
    value,
    onChange
  }
}
