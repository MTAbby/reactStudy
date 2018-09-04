/*
 * @Author: shuman
 * @Date: 2018-09-04 11:09:56
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-04 11:36:01
 * @Description: 地图飞线D3绘制
 */
import d3 from 'd3'
import _ from 'lodash'

export default class fleLineMap {
  defaultSetting() {
    return {
      width: '100%',
      height: 500
    }
  }

  /**
   * 初始化实例
   */
  constructor(selector, opt){
    // 获取配置项
    const defaultSetting = this.defaultSetting()
    this.config = _.merge({}, defaultSetting, opt)
    const { width, height } = this.config
    // 创建svg元素
    const svg = d3.select(selector)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
  }

  /**
   * 开始渲染
   * @param {*} data 
   * @param {*} callback 
   */
  render(data, callback) {
    console.log(data)
  }
}