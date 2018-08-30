/*
 * @Author: shuman
 * @Date: 2018-08-28 16:38:26
 * @LastEditors: shuman
 * @LastEditTime: 2018-08-29 09:53:45
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
                    'name': '@cname',
                    'id': '@ID',
                    'state': ['true', 'false'],
                    'org': 'XXXX机构',
                    'role': ['系统管理员','普通用户']

                }
            ]
        }
    }
}