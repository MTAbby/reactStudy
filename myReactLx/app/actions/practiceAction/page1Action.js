/*
 * @Author: shuman
 * @Date: 2018-08-28 16:31:52
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 16:21:51
 * @Description: 练习页面一
 */

import createAction from '@/util/createAction'
// ------------------------------------
// 常量
// ------------------------------------
export const PAGE1_REQUEST = 'PAGE1_REQUEST'
export const PAGE1_SUCCESS = 'PAGE1_SUCCESS'

// ------------------------------------
// Actions
// ------------------------------------
export const page1Request = createAction(PAGE1_REQUEST)
export const page1Success = createAction(PAGE1_SUCCESS, 'response')
export const page1Failed = createAction('PAGE1_FAILED', 'error')