/* eslint-disable no-param-reassign */
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import createReducer from '@/util/createReducer'
// import { LOAD_PRODUCT_SUCCESS } from '@/actions/productAction'
// import { LOAD_SM_SUCCESS } from '@/actions/smAction'
import LoggedUserReducer from './loggedUserReducer'
import { PAGE1_SUCCESS } from '@/actions/practiceAction/page1Action'
// import SmUserReducer from './smUserReducer'

// 根据action.type生成通用的reducer
const practicePageData1 = createReducer(PAGE1_SUCCESS)
// const smReducer = createReducer(LOAD_SM_SUCCESS)

/**
 * 主reducers方法，合并各个子reducer
 * @param {object} asyncReducers 
 */
export const makeRootReducer = (asyncReducers) => {
  // console.log(1111,SmUserReducer)
  return combineReducers({
    loggedUser: LoggedUserReducer,
    practicePageData1: practicePageData1,
    // product: productReducer,
    // routing: routerReducer,
    // smList: SmUserReducer,
    ...asyncReducers
  })
}

/**
 * 注入异步 Reducer
 * @param {object} store store
 * @param {string} name 名称
 * @param {object} asyncReducer reducer
 */
export function injectAsyncReducer(store, name, asyncReducer) {
  store.asyncReducers[name] = asyncReducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
}

export default makeRootReducer
