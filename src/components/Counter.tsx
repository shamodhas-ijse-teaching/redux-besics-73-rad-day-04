import { useDispatch, useSelector } from "react-redux"
import { decrement, increment, setValue } from "../redux/action/counterAction"

const Counter = () => {
  const count = useSelector((state: any) => state?.counter?.count)
  //   useSelector((state) => {return state?.counter?.count})
  
  const dispatch = useDispatch()

  const handleIncrement = () => {
    dispatch(increment())
  }

  const handleDecrement = () => {
    dispatch(decrement())
  }

  const handleReset = () => {
    dispatch(setValue(0))
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default Counter
