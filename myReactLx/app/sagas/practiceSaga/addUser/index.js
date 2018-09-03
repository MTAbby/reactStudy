/*
 * @Author: shuman
 * @Date: 2018-09-03 21:07:15
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-03 22:08:34
 * @Description: 新增加用户
 */

import { call, put, take } from 'redux-saga/effects'
import { fetch } from '@/util/request'
import {
    ADD_USER_REQUEST,
    addUserSuccess
} from '@/actions/practiceAction/addUser'

const apiFetchAddUser = (valueData) => {
    console.log('rrrrrrrrrrrrrr',valueData)
    return fetch('fetchAddUser', valueData)
}

export function* fetchAddUser() {
    try {
        const { valueData } = yield take(ADD_USER_REQUEST)
        const response = yield call(apiFetchAddUser, valueData)
        if(response.data.code === 1) {
            yield console.log('dddddddddddd',response.data.result)
            yield put(addUserSuccess(response.data.result))
        } else {
            console.log('apply failed')
          // yield put(requestFailed('apply failed'))
        }
      } catch(error){
        yield console.log('error')
        // yield put(requestFailed(error.message))
      }
}