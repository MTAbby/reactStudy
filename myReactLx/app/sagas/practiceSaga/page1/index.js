/*
 * @Author: shuman
 * @Date: 2018-08-29 09:45:49
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-30 16:23:30
 * @Description: 用户列表的saga
 */

import { call, put, take } from 'redux-saga/effects'
import { fetch } from '@/util/request'
// import { requestFailed } from '@/actions/common'
import { 
  PAGE1_REQUEST,
  page1Success
} from '@/actions/practiceAction/page1Action'

const apiFetchPracticePage1 = () => {
  return fetch('fetchPage1')
}

export function* fetchPracticePage1() {
  try {
    yield take(PAGE1_REQUEST, fetchPracticePage1)
    const response = yield call(apiFetchPracticePage1)
    if(response.data.code === 1) {
      yield put(page1Success(response.data.result))
    } else {
      // yield put(requestFailed('apply failed'))
    }
  } catch(error){
    // yield put(requestFailed(error.message))
  }
}