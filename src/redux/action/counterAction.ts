import { createAction } from "@reduxjs/toolkit"

export const increment = createAction("counter/increment")

export const decrement = createAction("counter/decrement")

export const setValue = createAction<number>("counter/setValue")

// const setValue = createAction("counter/setValue") // no TS
// export default , only one