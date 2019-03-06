
export default {
  namespace: 'model',
  store: {
    count: 0
  },
  reducer: {
    save(state, action) {
      const payload = action
      delete payload.type
      return { ...state, ...payload }
    }
  },
  action: {
    add: async (dispatch) => {
      dispatch({ type: 'save', })
    }
  }
}