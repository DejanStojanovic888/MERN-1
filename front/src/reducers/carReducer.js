const carReducer = (state = [], action) => {
  switch (action.type) {
    case 'SET_CARS':
      return action.payload
    case 'ADD_CAR':
      return [action.payload, ...state]
    case 'DELETE_CAR':
      return state.filter(car => car._id !== action.payload) // id je action.payload
    default:
      return state
  }
}

export default carReducer