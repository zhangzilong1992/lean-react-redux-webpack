export const onIncreaseClickSync = () => {
  return (dispatch, getState) => {
    console.log(getState())
    setTimeout(() => {
      dispatch({ type: 'increase' })
    }, 1000)
  }
}

export const onDecreaseClickSync = () => {
  return (dispatch, getState) => {
    console.log(getState())
    setTimeout(() => {
      dispatch({ type: 'decrease' })
    }, 1000)
  }
}

export const onIncreaseClick = () => {
  return { type: 'increase' }
}

export const onDecreaseClick = () => {
  return { type: 'decrease' }
}