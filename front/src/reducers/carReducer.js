const carReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARS':
      return action.payload
    default:
      return state
  }
}

export default carReducer