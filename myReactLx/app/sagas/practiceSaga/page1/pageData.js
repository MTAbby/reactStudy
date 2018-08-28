/*
 * @Author: shuman
 * @Date: 2018-08-28 16:38:26
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-28 16:41:25
 * @Description: 练习页一的模拟数据
 */

export default {
    url: '/practice/page1',
    mock: {
        'code': 1,
        'msg': 'success',
        'result': {
            'pageList': [
                {
                    'name|+1': 1,
                    'id': '11111',
                    'quantity|+1': [1, 100, 1100, 30, 345, 67567, 35, 1]
                }
            ]
        }
    }
}