/*
 * @Author: shuman
 * @Date: 2018-09-03 21:26:59
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-03 22:13:38
 * @Description: 定义用户添加的reducers
 */
 
const initialState = {
  pending: true,
  logged: true
}
const addUser = (state = initialState, action) => {
  if(action.type === 'ADD_USER_SUCCESS') {
    console.log(111111)
    return action.response
  }
  return state
}
export default addUser