const sample = (state = [], action) => {
  switch (action.type) {
    case 'ACTION_1':
      return state.concat([
        {
          data: action.data,
          id: action.id
        }
      ])
    default:
      return state
  }
}

export default sample