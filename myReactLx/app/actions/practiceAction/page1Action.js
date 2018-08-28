/*
 * @Author: shuman
 * @Date: 2018-08-28 16:31:52
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-28 16:41:33
 * @Description: 练习页面一
 */

import createAction from '@/util/createAction'
// ------------------------------------
// 常量
// ------------------------------------
export const PAGE1_REQUEST = 'PAGE1_REQUEST'
export const PAGE1_FAILED = 'PAGE1_FAILED'
export const PAGE1_OUT = 'PAGE1_OUT'
// ------------------------------------
// Actions
// ------------------------------------
export const PAGE1Request = createAction(PAGE1_REQUEST)
export const PAGE1Success = createAction('PAGE1_SUCCESS')
export const PAGE1Failed = createAction(PAGE1_FAILED, 'error')
export const logout = createAction(PAGE1_OUT)