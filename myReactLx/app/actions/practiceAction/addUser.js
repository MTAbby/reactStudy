/*
 * @Author: shuman
 * @Date: 2018-09-03 21:00:53
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-03 21:00:53
 * @Description: 
 */

import createAction from '@/util/createAction'
// ------------------------------------
// 常量
// ------------------------------------
export const ADD_USER_REQUEST = 'ADD_USER_REQUEST'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export const addUserRequest = createAction(ADD_USER_REQUEST, 'valueData')
export const addUserSuccess = createAction(ADD_USER_SUCCESS, 'response')
export const addUserFailed = createAction('ADD_USER_FAILED', 'error')