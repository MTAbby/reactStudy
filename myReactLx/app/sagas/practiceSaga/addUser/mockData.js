/*
 * @Author: shuman
 * @Date: 2018-09-03 21:08:38
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-03 22:15:46
 * @Description: 新增加用户
 */

 export default {
    url: '/practice/page1/addUser',
    mock: {
        'code': 1,
        'msg': 'success',
        'result': {
            'message|+1': ['数据已成功存入数据库', '数据已成功存入数据库1', '数据已成功存入数据库2']
        }
    }
 }