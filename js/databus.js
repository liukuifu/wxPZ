// import Pool from './base/pool'
const screenWidth = window.innerWidth
const screenHeight = window.innerHeight
const contentWidth = window.innerWidth * 0.85

let instance


/**
 * 全局状态管理器
 * 
 * @export
 * @class DataBus
 */
export default class DataBus {
  constructor() {
    // console.log("DataBus SSS");
    if (instance)
      return instance

    instance = this

    this.screenWidth = screenWidth
    this.screenHeight = screenHeight
    this.contentWidth = contentWidth
    this.contentPadding = (this.screenWidth - this.contentWidth) / 2
    // console.log("this.screenHeight : " + this.screenHeight);
    // console.log("this.contentWidth : " + this.contentWidth);
    // console.log("this.contentPadding : " + this.contentPadding);
    this.contentPaddingTop = this.screenHeight - this.contentWidth - this.contentPadding;
    // console.log("this.contentPaddingTop : " + this.contentPaddingTop);
    this.puzzleImg = null

    this.pzzlWidth = this.contentWidth * (1020 / 1000)
    // console.log("this.pzzlWidth : " + this.pzzlWidth);
    this.pzzlPadding = (this.screenWidth - this.pzzlWidth) / 2
    // console.log("this.pzzlPadding : " + this.pzzlPadding);

    this.spawnX = (this.contentWidth/2)-(this.contentWidth/8)
    this.spawnY = this.pzzlPadding * 3

    this.reset()
    // console.log("DataBus EEE");
  }

  /**
   * 重启游戏，重制数据
   * 
   * @memberof DataBus
   */
  reset() {
    this.board=[]
    this.startTime = Date.now()
    this.pieces = []
    this.gameStart = false        
    this.gameOver = false
    this.showHelp = false
    this.showHint = false
    this.emptyPosition = 0
    this.puzzleImg = null
    this.shapes =[
      [
        1
      ],
      [
        2
      ],
      [
        3
      ],
    ]
    this.tempShapes = []
    this.currentShape = null
    this.curShape=[]
    this.curShapeIndex = null
    this.curX = 0
    this.curY = 0
    this.curSqs = []
    this.nextShape = null
    this.nextShapeDisplay = null
    this.nextShapeIndex = null
    this.nextX = 0
    this.nextY = 0 
    this.ucellw = 0
    this.sqs = []
    this.ns = null
    this.st = null
    this.answerMapObj=null
    this.fs = 0
  }

  
  /**
   * 返回当前的游戏时间
   * 
   * @returns 
   * @memberof DataBus
   */
  getCurrentTime(){
    //console.log("getCurrentTime SSS")
    let time = Math.floor((Date.now() - this.startTime) / 1000);
    //console.log(time)
    let minute = Math.floor(time / 60)
    if (minute < 10) {
      minute = '0' + minute
    }
    let second = Math.floor(time % 60)
    if (second < 10) {
      second = '0' + second
    }
    //console.log(second)
    //console.log("getCurrentTime EEE")
    return minute + ':' + second
  }

}