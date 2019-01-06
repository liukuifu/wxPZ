import DataBus from '../databus'
import Bezier from '../libs/bezier'
import GameMap from '../runtime/gameMap'

let gameMap = new GameMap()

const PIECE_WRAPPER_SRC = 'images/cb.png'
const PIECE_WRAPPER_WIDTH = 200
const PIECE_WRAPPER_HEIGHT = 200

// const ANI_SPEED = 0.2
const ANI_SPEED = 1

let databus = new DataBus()
let easeInOut = Bezier(0.42, 0, 0.58, 1)

function getPositionXY(positionX, positionY) {
  // console.log("getPositionXY SSS")
  // console.log(positionX)
  // console.log(positionY)
  // console.log(databus.ucellw)
  let width = databus.contentWidth / 16 //databus.stage
  // console.log(width)
  let result = {}
  
  result.x = ((databus.screenWidth - databus.contentWidth) / 2) + ((positionX - 1) * width)
  
  result.y = databus.contentPadding * 3.7 + ((positionY - 1) * width)
  
  // console.log("getPositionXY EEE")
  return result
}

export default class Piece {

  /**
   * Creates an instance of Piece.
   * @param {number} [index=0] 该拼图的序数
   * @param {number} [positionX=0] 该拼图当前的位置
   * @memberof Piece
   */
  constructor(currentShape) {
    //console.log(currentShape)
    this.st = Date.now()
    //this.index = index
    this.imgname = currentShape.name
    this.positionX = currentShape.position.column
    this.positionY = currentShape.position.row
    this.visible = true
    // console.log(this.imgname)
    // console.log(this.positionX)
    // console.log(this.positionY)

    // 根据contentWidth、index和stage来判断如何绘制图片
    let width = databus.ucellw /2

    this.img = new Image()
    this.img.src = 'images/' + this.imgname + '.png'
    //console.log(this.img.src)

    let positionXY = getPositionXY(this.positionX, this.positionY)
    //console.log(positionXY)
    this.x = positionXY.x
    this.y = positionXY.y
    this.width = width * currentShape.size.column
    this.height = width * currentShape.size.row
    // console.log(this.width)
    // console.log(this.height)

    this.wrapperImg = new Image()
    this.wrapperImg.src = PIECE_WRAPPER_SRC
  }

  // 设定新的方块位置
  move(positionX = 0, positionY = 0) {
    console.log("move SSS")
    //console.log(positionY)
    //this.ani = 0
    this.positionX = positionX
    let positionXY = getPositionXY(positionX, positionY)
    this.x = positionXY.x
    this.y = positionXY.y
    console.log(this.x)
    console.log(this.y)
    // this.newX = positionXY.x
    // this.newY = positionXY.y
    // this.oldX = this.x
    // this.oldY = this.y
    console.log("move EEE")
  }

  // 更新方块位置
  update() {
    console.log("update SSS")
    this.time = Math.floor((Date.now() - this.st)/1000);
    //console.log(this.time)
    // 移动间隔时间
    if (this.time == 3.000) {
      console.log(this.positionX)
      console.log(this.positionY)
      this.st = Date.now()
      //console.log("time == 5")
      this.time=0
      if (this.positionY < 11) {
        // console.log("databus.tempShapes : ")
        // console.log(databus.tempShapes)
        // console.log("databus.curShape : ")
        // console.log(databus.curShape)
        // console.log("databus.curShapeIndex : ")
        // console.log(databus.curShapeIndex)
        // console.log("databus.curSqs : ")
        // console.log(databus.curSqs)
        // console.log("databus.nextShape : ")
        // console.log(databus.nextShape)
        // console.log("databus.nextShapeDisplay : ")
        // console.log(databus.nextShapeDisplay)
        // console.log("databus.nextShapeIndex : ")
        // console.log(databus.nextShapeIndex)
        // console.log("databus.sqs : ")
        // console.log(databus.sqs)
        // this.positionY = this.positionY + 1
        this.move(this.positionX, this.positionY)
      } else {
        // 初期化图片数组
        //gameMap.initShapes();
        // this.positionX = 0
        // this.positionY = 0
        // databus.curShapeIndex = databus.nextShapeIndex
        // databus.curShape.push(new Piece(databus.curShapeIndex, databus.shapes[databus.curShapeIndex]))
      }
    }
    // if (this.ani >= 1) {
    //   this.ani = 1
    //   this.x = this.newX
    //   this.y = this.newY
    //   return
    // }
    // this.ani += ANI_SPEED
    // this.x = this.oldX + (this.newX - this.oldX) * easeInOut(this.ani)
    // this.y = this.oldY + (this.newY - this.oldY) * easeInOut(this.ani)
    console.log("update EEE")
  }

  // 绘制方块
  render(ctx) {
    //console.log(this.x)
    //console.log(this.y)
    if (!this.visible) {
      console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB")
      return
    }
    ctx.drawImage(
      this.wrapperImg,
      this.x,
      this.y,
      this.width,
      this.height
    )

    ctx.drawImage(
      this.img,
      //this.sx,
      //this.sy,
      //this.swidth,
      //this.sheight,
      this.x,
      this.y,
      this.width,
      this.height
    )

  }
  // 每一帧更新子弹位置
  // update() {
  //   this.y += this[__.speed]

  //   // 对象回收
  //   if (this.y > window.innerHeight + this.height)
  //     databus.removeEnemey(this)
  // }
}