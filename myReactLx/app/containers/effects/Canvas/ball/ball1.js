/*
 * @Author: shuman
 * @Date: 2018-09-07 10:29:58
 * @LastEditors: shuman
 * @LastEditTime: 2018-09-07 15:38:59
 * @Description: 小球撞边
 */

let canvas = ''
let ctx = ''
let raf = ''
let ballData = []

class ballPrototype {
  constructor(x, y, vx, vy, radius, color) {
    this.x = x
    this.y = y
    this.vx = vx
    this.vy = vy
    this.radius = radius
    this.color = color
    // this.drawBall = this.drawBall()
  }

  /**
   * 绘制一个圆球
   */
  drawBall() {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true)
    ctx.closePath()
    ctx.fillStyle = this.color
    ctx.fill()
  }

  changeBall(i){
    ctx.clearRect(0, 0, 800, 400)
    this.drawBall()
    this.x += this.vx
    this.y += this.vy
  }

  animt() {
    for(let i = 0; i< 3; i++){
      this.changeBall(i)
    }
    setInterval(() => {
      this.changeBall()
    }, Math.floor(1000/60))

  }
}

class ball1 extends ballPrototype{
  constructor(id){
    super(100, 100, 5, 2, 25, 'blue')
    canvas =  document.getElementById(id)
    ctx = canvas.getContext('2d')
  }
  
  draw() {
    this.animt()
  }
  
}

export default ball1