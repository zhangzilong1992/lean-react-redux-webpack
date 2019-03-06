export const onIncreaseClickSync = () => {
  // return (dispatch, getState) => {
  //   setTimeout(() => {
  //     dispatch({ type: 'increase' })
  //   }, 1000)
  // }
  return async (dispatch, getState) => {
    await dispatch({ type: 'increase' })
    await sleep(2)
    await dispatch({ type: 'increase' })
  }
}

const sleep = (s) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, s * 1000);
  })
}

export const onDecreaseClickSync = () => {
  return (dispatch, getState) => {
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