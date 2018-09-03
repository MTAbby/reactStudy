
const initialState = {
  pending: true,
  logged: true,
  user: {}
}
const practicePage1 = (state = initialState, action) => {
  console.log('ssssss', state, action)
  if(action.type === 'PAGE1_SUCCESS') {
    return action.response
  }
  return state
}
export default practicePage1