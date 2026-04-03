// useCounter hook

import { useState } from "react"

// useCounter(1) - start with 1
// useCounter() -start with 0

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  //   const incriment = () => setCount(count + 1)
  const increment = () => setCount((countData) => countData + 1)

  const decrement = () => setCount((countData) => countData - 1)

  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

export default useCounter
