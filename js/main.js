import EventUtil from './base/eventUtil'
import BackGround from './runtime/background'
import GameInfo from './runtime/gameinfo'
import DataBus from './databus'
import shapeManage from './runtime/shapeManage'
import Piece from './models/piece'

let ctx = canvas.getContext('2d')
let databus = new DataBus()
//let piece //= new Piece()

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
    this.rows = 23
    this.bg = new BackGround(ctx)
    this.gameInfo = new GameInfo()

    let eventUtil = new EventUtil(((e) => {
      this.gameInfo.tap(e)
    }).bind(this), ((e) => {
      this.movePieces(e.direction);
    }).bind(this))

    //this.piece

    databus.reset()

    //console.log(databus.curShape)
    window.requestAnimationFrame(
      this.loop.bind(this),
      // databus.pieces.forEach((item, position) => {
      //   //console.log(item)
      //   //console.log(position)
      //   item.render(ctx);
      // }
      databus.curShape.forEach((item, position) => {
        //console.log(item)
        //console.log(position)
        item.render(ctx);
      })
    )
  }

  /**
   * 移动方块的方法
   * 
   * @param {any} direction 移动方向
   * @returns 
   * @memberof Main
   */
  movePieces(direction) {
    //console.log("movePieces SSS")
    //console.log(direction)
    //console.log(databus.currentShape)
    let flg
    if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 2) {
      flg = 'a'
    } else if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 1) {
      flg = 's'
    } else if (databus.currentShape.size.row == 1 && databus.currentShape.size.column == 2) {
      flg = 'h'
    } else {
      flg = 'x'
    }
    let tc = 0
    //this.targetPiece.row = 0
    //this.targetPiece.column = 0
    //console.log(databus.currentShape.position.column)
    tc = databus.currentShape.position.column
    switch (direction) {
      case 'up':
        //targetPiece = databus.emptyPosition + databus.stage
        break;
      case 'down':
        //targetPiece = databus.emptyPosition - databus.stage
        break;
      case 'left':
        //this.targetPiece = databus.curShape.position
        //this.targetPiece.row = databus.currentShape.position.row
        //this.targetPiece.column = databus.currentShape.position.column - 1

        if (tc <= 1) {
          return
        }
        databus.currentShape.position.column -= 1
        //console.log(databus.currentShape.position.column)
        // if (Math.floor(targetPiece / databus.stage) !== Math.floor(databus.emptyPosition / databus.stage)) {
        //   // 如果两个商不相等，说明左右滑动出现了换行现象，不能执行
        //   return;
        // }
        break;
      case 'right':
        //this.targetPiece = databus.currentShape.position
        //this.targetPiece.row = databus.currentShape.position.row
        //this.targetPiece.column = databus.currentShape.position.column + 1
        if (flg == 'a' || flg == 'h') {
          if (tc >= 15) {
            return
          }
        } else {
          if (tc >= 16) {
            return
          }
        }
        databus.currentShape.position.column += 1
        //console.log(databus.currentShape.position.column)
        // if (Math.floor(targetPiece / databus.stage) !== Math.floor(databus.emptyPosition / databus.stage)) {
        //   return;
        // }
        break;
      default:
        break;
    }
    databus.emptyPosition = this.targetPiece
    this.gameInfo.update(databus.currentShape)
    // databus.currentShape.forEach((item) => {
    //   if (item.position === targetPiece) {
    //     item.move(item.position.row,item.position.column)
    //     databus.emptyPosition = this.targetPiece
    //   }
    // })
    //console.log("movePieces EEE")
  }
  /**
     * 创建新的方块
     */
  ShapeMove() {
    if (databus.gameOver == false){
      if (!databus.currentShape) {
        //this.checkGameOver()
        databus.currentShape = shapeManage.createShape()
        //this.piece = new Piece(databus.currentShape)
        //console.log(databus.currentShape)
      } else {
        //console.log(databus.gameStart)
        if (databus.gameStart) {
          //console.log(databus.st)
          //console.log(Date.now())
          this.time = Math.floor((Date.now() - databus.st) / 1000);
          //console.log(this.time)
          // 移动间隔时间
          if (this.time == 1) {
            //console.log("ROW + 1")
            databus.st = Date.now()
            databus.currentShape.position.row += 1
            this.gameInfo.update(databus.currentShape)
            //this.piece = new Piece(databus.currentShape)//.update()
            let flag = this.checkMerge(databus.currentShape)

            // 不能进行移动,则更新base数组这块区域为1
            if (!flag) {
              //databus.currentShape.position.row -= 1
              //console.log(databus.currentShape.position.row)
              //console.log(databus.currentShape.position.column)

              this.markBoardShape(databus.currentShape)

              //this.mergeBase(1)
              //this.CalculaScore()
              databus.sqs.push(new Piece(databus.currentShape))

              this.checkUs()

              //console.log(databus.sqs)
              databus.currentShape = null
              shapeManage.dispose()
            } else {
              //this.mergeBase(2)
            }
            //this.piece.update()
            //this.time = 0
          }
        }
      }
    }
  }
  checkUs() {
    // console.log("checkUs SSS")
    // console.log(databus.currentShape.position.column);
    // console.log(databus.currentShape.position.row);
    // console.log(databus.currentShape.size.row);
    // console.log(databus.currentShape.size.column);
    var flg = ''
    if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 2) {
      flg = 'a'
    } else if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 1) {
      flg = 's'
    } else if (databus.currentShape.size.row == 1 && databus.currentShape.size.column == 2) {
      flg = 'h'
    } else {
      flg = 'x'
    }
    if (flg != 'a') {
      //console.log("取得下一行的值 ： ");
      //console.log(this.getUtilState(databus.currentShape.position.column, databus.currentShape.position.row));
      var c = 0;
      var stopCheck = false;
      c = this.getUtilState(databus.currentShape.position.column, databus.currentShape.position.row - 1, flg)
      if(c>0){
        databus.fs +=c
      }
      // switch (this.getUtilState(databus.currentShape.position.column, databus.currentShape.position.row - 1, flg)) {
      //   case 'F':
      //     //this.removeRow(databus.currentShape.position.column, databus.currentShape.position.row);
      //     c++;
      //     break;
      //   default:
      //     break;
      // }
    }
    // console.log("checkUs EEE")
  }
  getUtilState(x, y, flg) {
    // console.log("getUtilState SSSSS")
    var rtn = 0
    var key = ''
    // console.log(x);
    // console.log(y);
    // console.log(flg);
    var t1 = ''
    var t2 = ''
    var t3 = ''
    var t4 = ''
    var cx = x - 1
    var removeBoardArray
    var removeBlockArray
    if (x == 1) {
      t1 = this.boardPos(cx, y);
      t2 = this.boardPos(cx + 1, y);
      t3 = this.boardPos(cx, y + 1);
      t4 = this.boardPos(cx + 1, y + 1);

      // console.log('x == 1 ' + x + ',' + y + 't1 : ' + t1)
      // console.log('x == 1 ' + (x + 1) + ',' + y + 't2 : ' + t2)
      // console.log('x == 1 ' + x + ',' + (y + 1) + 't3 : ' + t3)
      // console.log('x == 1 ' + (x + 1) + ',' + (y + 1) + 't4 : ' + t4)

      key = t1 + t2 + t3 + t4
      // console.log(" 111 : " + key);
      if (databus.answerMapObj.has(key)) {
        // console.log(databus.answerMapObj.get(key))
        rtn = databus.answerMapObj.get(key)

        removeBoardArray = [[cx, y], [cx + 1, y], [cx, y + 1], [cx + 1, y + 1]]
        if (flg == "h") {
          //调用 文字消除
          removeBlockArray = [[x, y], [x + 1, y]]
        } else if (flg == "s") {
          //调用 文字消除
          removeBlockArray = [[x, y], [x, y + 1]]
        }
        //调用 更换图片
        this.changeImg(x, y, key)
      }
    } else if (x > 1) {
      if (flg == "h") {
        // 与下侧进行匹配
        t1 = this.boardPos(cx, y);
        t2 = this.boardPos(cx + 1, y);
        t3 = this.boardPos(cx, y + 1);
        t4 = this.boardPos(cx + 1, y + 1);

         // console.log('x > 1 flg == h ' + x + ',' + y + 't1 : ' + t1)
         // console.log('x > 1 flg == h ' + (x + 1) + ',' + y + 't2 : ' + t2)
         // console.log('x > 1 flg == h ' + x + ',' + (y + 1) + 't3 : ' + t3)
         // console.log('x > 1 flg == h ' + (x + 1) + ',' + (y + 1) + 't4 : ' + t4)

        key = t1 + t2 + t3 + t4
        // console.log(" 222 : " + key);

        if (databus.answerMapObj.has(key)) {
          // console.log(databus.answerMapObj.get(key))
          rtn = databus.answerMapObj.get(key)
          removeBoardArray = [[cx, y], [cx + 1, y], [cx, y + 1], [cx + 1, y + 1]]

          if (t3.indexOf("x") != -1 && t4.indexOf("x") != -1) {
            removeBlockArray = [[x, y], [x, y + 1], [x + 1, y + 1]]
            // console.log(removeBlockArray)
          } else {
            removeBlockArray = [[x, y], [x, y + 1]]
          }
          //调用 更换图片
          this.changeImg(x, y, key)
        }
      }
      else if (flg == "s") {
        // 与左侧进行匹配
        t1 = this.boardPos(cx - 1, y);
        t2 = this.boardPos(cx, y);
        t3 = this.boardPos(cx - 1, y + 1);
        t4 = this.boardPos(cx, y + 1);
        // console.log('x > 1 flg == s 左侧 ' + (x - 1) + ',' + y + 't1 : ' + t1)
        // console.log('x > 1 flg == s 左侧 ' + x + ',' + y + 't2 : ' + t2)
        // console.log('x > 1 flg == s 左侧 ' + (x - 1) + ',' + (y + 1) + 't3 : ' + t3)
        // console.log('x > 1 flg == s 左侧 ' + x + ',' + (y + 1) + 't4 : ' + t4)
        key = t1 + t2 + t3 + t4
        // console.log(" 333 : " + key);

        if (databus.answerMapObj.has(key)) {
          // console.log(databus.answerMapObj.get(key))
          rtn = databus.answerMapObj.get(key)
          removeBoardArray = [[cx - 1, y], [cx, y], [cx - 1, y + 1], [cx, y + 1]]
          removeBlockArray = [[x, y], [x - 1, y]]
          //调用 更换图片
          this.changeImg(x-1, y, key)

        } else {
          // 与右侧侧进行匹配
          t1 = this.boardPos(cx, y);
          t2 = this.boardPos(cx + 1, y);
          t3 = this.boardPos(cx, y + 1);
          t4 = this.boardPos(cx + 1, y + 1);

          // console.log('x > 1 flg == s 右侧 ' + x + ',' + y + 't1 : ' + t1)
          // console.log('x > 1 flg == s 右侧 ' + (x + 1) + ',' + y + 't2 : ' + t2)
          // console.log('x > 1 flg == s 右侧 ' + x + ',' + (y + 1) + 't3 : ' + t3)
          // console.log('x > 1 flg == s 右侧 ' + (x + 1) + ',' + (y + 1) + 't4 : ' + t4)
          key = t1 + t2 + t3 + t4
          // console.log(" 444 : " + key);
          if (databus.answerMapObj.has(key)) {
            // console.log(databus.answerMapObj.get(key))
            rtn = databus.answerMapObj.get(key)
            removeBoardArray = [[cx, y], [cx + 1, y], [cx, y + 1], [cx + 1, y + 1]]
            removeBlockArray = [[x, y], [x + 1, y]]
            //调用 更换图片
            this.changeImg(x, y, key)
          }
        }
      } else {
        // 与右下进行匹配
        t1 = this.boardPos(cx, y);
        t2 = this.boardPos(cx + 1, y);
        t3 = this.boardPos(cx, y + 1);
        t4 = this.boardPos(cx + 1, y + 1);

        // console.log('x > 1 flg == s 右下 ' + x + ',' + y + 't1 : ' + t1)
        // console.log('x > 1 flg == s 右下 ' + (x + 1) + ',' + y + 't2 : ' + t2)
        // console.log('x > 1 flg == s 右下 ' + x + ',' + (y + 1) + 't3 : ' + t3)
        // console.log('x > 1 flg == s 右下 ' + (x + 1) + ',' + (y + 1) + 't4 : ' + t4)

        key = t1 + t2 + t3 + t4
        // console.log(" 555 : " + key);

        if (databus.answerMapObj.has(key)) {
          // console.log(databus.answerMapObj.get(key))
          rtn = databus.answerMapObj.get(key)
          removeBoardArray = [[cx, y], [cx + 1, y], [cx, y + 1], [cx + 1, y + 1]]
          removeBlockArray = [[x, y], [x - 1, y]]
          //调用 更换图片
          this.changeImg(x-1, y, key)

        } else {

          // 与左下进行匹配
          t1 = this.boardPos(cx - 1, y);
          t2 = this.boardPos(cx, y);
          t3 = this.boardPos(cx - 1, y + 1);
          t4 = this.boardPos(cx, y + 1);

          // console.log('x > 1 flg == s 左下 ' + (x - 1) + ',' + y + 't1 : ' + t1)
          // console.log('x > 1 flg == s 左下 ' + x + ',' + y + 't2 : ' + t2)
          // console.log('x > 1 flg == s 左下 ' + (x - 1) + ',' + (y + 1) + 't3 : ' + t3)
          // console.log('x > 1 flg == s 左下 ' + x + ',' + (y + 1) + 't4 : ' + t4)

          key = t1 + t2 + t3 + t4
          // console.log(" 666 : " + key);

          if (databus.answerMapObj.has(key)) {
            // console.log(databus.answerMapObj.get(key))
            rtn = databus.answerMapObj.get(key)
            removeBoardArray = [[cx - 1, y], [cx, y], [cx - 1, y + 1], [cx, y + 1]]
            removeBlockArray = [[x, y], [x - 1, y]]
            //调用 更换图片
            this.changeImg(x-1, y, key)
          } else {

            // 与右上进行匹配
            t1 = this.boardPos(cx, y + 1);
            t2 = this.boardPos(cx + 1, y + 1);
            t3 = this.boardPos(cx, y);
            t4 = this.boardPos(cx + 1, y);

            // console.log('x > 1 flg == s 右上 ' + x + ',' + (y + 1) + 't1 : ' + t1)
            // console.log('x > 1 flg == s 右上 ' + (x + 1) + ',' + (y + 1) + 't2 : ' + t2)
            // console.log('x > 1 flg == s 右上 ' + x + ',' + y + 't3 : ' + t3)
            // console.log('x > 1 flg == s 右上 ' + (x + 1) + ',' + y + 't4 : ' + t4)

            key = t1 + t2 + t3 + t4
            // console.log(" 777 : " + key);

            if (databus.answerMapObj.has(key)) {
              // console.log(databus.answerMapObj.get(key))
              rtn = databus.answerMapObj.get(key)
              removeBoardArray = [[cx, y + 1], [cx + 1, y + 1], [cx, y], [cx + 1, y]]
              removeBlockArray = [[x, y], [x - 1, y]]
              //调用 更换图片
              this.changeImg(x-1, y, key)
            } else {
              // 与左上进行匹配
              t1 = this.boardPos(cx - 1, y + 1);
              t2 = this.boardPos(cx, y + 1);
              t3 = this.boardPos(cx - 1, y);
              t4 = this.boardPos(cx, y);

              // console.log('x > 1 flg == s 左上 ' + (x - 1) + ',' + (y + 1) + 't1 : ' + t1)
              // console.log('x > 1 flg == s 左上 ' + x + ',' + (y + 1) + 't2 : ' + t2)
              // console.log('x > 1 flg == s 左上 ' + (x - 1) + ',' + y + 't3 : ' + t3)
              // console.log('x > 1 flg == s 左上 ' + x + ',' + y + 't4 : ' + t4)

              key = t1 + t2 + t3 + t4
              // console.log(" 888 : " + key);

              if (databus.answerMapObj.has(key)) {
                // console.log(databus.answerMapObj.get(key))
                rtn = databus.answerMapObj.get(key)
                removeBoardArray = [[cx - 1, y + 1], [cx, y + 1], [cx - 1, y], [cx, y]]
                removeBlockArray = [[x, y], [x - 1, y]]
                //调用 更换图片
                this.changeImg(x-1, y, key)
              }
            }
          }
        }
      }
    }

  if(rtn>0){
      //调用 单元格复位
      this.removeBoardPos(removeBoardArray)

      //调用 文字消除
      this.removeBlock(removeBlockArray);
  }
    return rtn;
    //return 'E';
  }
  //更换图片
  changeImg(x, y, key) {
    for (var i = 0; i < databus.sqs.length; i++) {
      if (x == databus.sqs[i].positionX && (y + 1) == databus.sqs[i].positionY) {
        console.log("值相同");
        console.log(databus.sqs[i].positionX);
        console.log(databus.sqs[i].positionY);
        console.log(key);
        console.log(databus.sqs[i]);
        databus.sqs[i].img.src = 'images/' + key + '.png'
        if (databus.sqs[i].height < databus.sqs[i].width){
          databus.sqs[i].height = databus.sqs[i].height*2
        } else if (databus.sqs[i].height > databus.sqs[i].width) {
          databus.sqs[i].width = databus.sqs[i].width*2
        } else {
          databus.sqs[i].height = databus.sqs[i].height * 2
          databus.sqs[i].width = databus.sqs[i].width * 2
        }
        //databus.sqs[i].
        break
      }
    }
  }
  //文字消除
  removeBlock(removeBlockArray) {
    // console.log("removeBlock SSS")
    // console.log(removeBlockArray)
    // console.log(databus.sqs)
    var index = []
    var removeflg = false
    for (var m = 0; m < removeBlockArray.length; m++) {
      //removeflg = false
      // console.log(removeBlockArray[m][0])
      // console.log(removeBlockArray[m][1])
      for (var i = 0; i < databus.sqs.length; i++) {
        if (removeBlockArray[m][0] == databus.sqs[i].positionX && (removeBlockArray[m][1] + 1) == databus.sqs[i].positionY)        {
          // console.log("值相同");
          // console.log(databus.sqs[i].positionX);
          // console.log(databus.sqs[i].positionY);
          removeflg = true
          index.push(i)
          break
        }
      }
    }
    if (removeflg) {
      // console.log(index)
      // console.log(index.sort(this.compare))
      //console.log(index.length)

      // for (var n = index.length; n > 0; n--) {
      for (var n = 0; n < index.length; n++) {
        // console.log(n)
        // console.log(index[n])
        databus.sqs.splice(index[n], 1);
      }
      // console.log("数组内移除 ： ");
      // console.log(databus.sqs)
    }
    // console.log("removeBlock EEE")
  }
  compare(x, y) {
    if (x < y) {
      return 1;
    } else if (x > y) {
      return -1;
    } else {
      return 0;
    }
  }
  // 单元格复位
  removeBoardPos(removeBoardArray) {
    // console.log("removeBoardPos SSS")
    // console.log(removeBoardArray)
    for (var m = 0; m < removeBoardArray.length; m++) {
      // console.log(removeBoardArray[m][0])
      // console.log(removeBoardArray[m][1])
      this.markBoardAt(removeBoardArray[m][0], removeBoardArray[m][1], 0);
    }
    // console.log("removeBoardPos EEE")
  }

  /**
   * 检查是否能合并
   */
  checkMerge(cs) {
    //console.log("checkMerge SSS")
    let startRowIndex = databus.currentShape.position.row - databus.currentShape.keyPixe.row
    let endRowIndex = startRowIndex + databus.currentShape.size.row - 1
    let startColumnIndex = databus.currentShape.position.column - databus.currentShape.keyPixe.column
    let endColumnIndex = startColumnIndex + databus.currentShape.size.column - 1
    if (startRowIndex > endRowIndex || startColumnIndex > endColumnIndex) {
      //console.log("checkMerge EEE false 111111")
      return false
    }
    if (startRowIndex < 0 || endRowIndex > this.rows - 1 || startColumnIndex < 0 || endColumnIndex > this.columns - 1) {
      //console.log("checkMerge EEE false 2222222222")
      return false
    }
    if (this.isCollision(cs)) {
      //console.log("checkMerge EEE false 3333333333")
      return false
    }

    // let mergeSource = databus.currentShape.data
    // for (let row = startRowIndex; row <= endRowIndex; row++) {
    //   for (let column = startColumnIndex; column <= endColumnIndex; column++) {
    //     if (mergeSource[this.indexTransform(row, 'row')][this.indexTransform(column, 'column')] === 1 && this.base[row][column] === 1) {
    //       console.log("checkMerge EEE false 2222222")
    //       return false
    //     }
    //   }
    // }
    //console.log("checkMerge EEE true")
    return true
  }
  // 检查下部是否已经有图片了
  isCollision(cs) {
    //console.log("isCollision")
    var me = this;
    var bool = false;
    // console.log("isCollision SSSSS")
    // console.log("markBoardShape x : " + cs.position.column)
    // console.log("markBoardShape y : " + cs.position.row)
    // console.log("markBoardShape size x : " + cs.size.column)
    // console.log("markBoardShape size y : " + cs.size.row)
    var flg
    var newX
    var newY
    var nameX
    var nameY
    if (cs.size.row == 2 && cs.size.column == 2) {
      flg = 'a'
    } else if (cs.size.row == 2 && cs.size.column == 1) {
      flg = 's'
    } else if (cs.size.row == 1 && cs.size.column == 2) {
      flg = 'h'
    } else {
      flg = 'x'
    }
    //console.log(flg)
    for (let i = 0; i < cs.size.row; i++) {
      for (let m = 0; m < cs.size.column; m++) {
        newX = cs.position.column + m - 1
        nameX = String(i + 1)
        nameY = String(m + 1)
        // console.log(cs.name)
        // console.log(nameX)
        // console.log(nameY)
        if (flg == 'a' || flg == 's') {
          newY = cs.position.row + i
        } else if (flg == 'x') {
          newY = cs.position.row + i
        } else {
          newY = cs.position.row + i
        }
        if (this.boardPos(newX, newY) !== 0) {
          bool = true;
          return bool;
        }
        //this.markBoardAt(newX, newY, flg + cs.name + nameX + nameY);
      }
    }
    //console.log(databus.board);
    //console.log("markBoardShape EEEEE")
    return bool;
  }
  indexTransform(Index, type) {
    if (type === 'row') {
      return Index - databus.currentShape.position.row + databus.currentShape.keyPixe.row
    } else {
      return Index - databus.currentShape.position.column + databus.currentShape.keyPixe.column
    }
  }
  /**
   * 标记被占用的小单元格
   */
  markBoardShape(cs) {
    // console.log("markBoardShape SSSSS")
    // console.log("markBoardShape x : " + cs.position.column)
    // console.log("markBoardShape y : " + cs.position.row)
    // console.log("markBoardShape size x : " + cs.size.column)
    // console.log("markBoardShape size y : " + cs.size.row)
    var flg
    var newX
    var newY
    var nameX
    var nameY
    if (cs.size.row == 2 && cs.size.column == 2) {
      flg = 'a'
    } else if (cs.size.row == 2 && cs.size.column == 1) {
      flg = 's'
    } else if (cs.size.row == 1 && cs.size.column == 2) {
      flg = 'h'
    } else {
      flg = 'x'
    }
    //console.log(flg)
    for (let i = 0; i < cs.size.row; i++) {
      for (let m = 0; m < cs.size.column; m++) {
        newX = cs.position.column + m - 1
        newY = cs.position.row + i - 1
        nameX = String(i + 1)
        nameY = String(m + 1)
        //console.log(cs.name)
        //console.log(nameX)
        //console.log(nameY)
        this.markBoardAt(newX, newY, flg + cs.name + nameX + nameY);
      }
    }
    // console.log(databus.board);
    //console.log("markBoardShape EEEEE")
  }
  // 取得单元格内容
  boardPos(x, y) {
    //console.log("boardPos")
    return databus.board[this.getBoardIdx(x, y)];
  }
  markBoardAt(x, y, val) {
    // console.log("markBoardAt SSSSS")
    // console.log(x)
    // console.log(y)
    // console.log(val)
    databus.board[this.getBoardIdx(x, y)] = val;
    // console.log("markBoardAt EEEEE")
  }

  // 计算出单元格的索引
  getBoardIdx(x, y) {
    // console.log("getBoardIdx SSSSS")
    return x + (y * 16);
    // console.log("getBoardIdx EEEEE")
  }

  checkGameOver() {
    //console.log("checkGameOver SSSSS")
    if (databus.gameOver){// || databus.curShape.length === 0) {
      return
    }
    for (let i = 0; i < 16; i++) {

      //console.log(databus.board[this.getBoardIdx(i, 1)])
      if (typeof databus.board[this.getBoardIdx(i, 1)] === "undefined"){
        break
      }
      if (databus.board[this.getBoardIdx(i, 1)] !== 0) {
        // if (piece.index !== piece.position) {
        //console.log("databus.gameOver = true")
        databus.gameOver = true
        //break
        return true
      }
    }
    //databus.gameOver = true
    //databus.finalTime = databus.getCurrentTime()
    //console.log("checkGameOver EEEEE")
  }

  /**
   * canvas重绘函数
   * 每一帧重新绘制所有的需要展示的元素
   */
  render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //this.piece.render(ctx)
    this.bg.render(ctx)

    databus.sqs.forEach((item) => {
      item.render(ctx);
    })
    this.gameInfo.render(ctx)
  }

  // 游戏逻辑更新主函数
  update() {
    // 统计是否有动画正在播放
    let isAniPlaying = false

    //console.log(databus.curShape)
    // databus.curShape.forEach((item) => {
    //   item.update();
    //   if (item.ani !== 1) {
    //     isAniPlaying = true
    //   }
    // })

    isAniPlaying = this.checkGameOver()
    // 如果没有动画正在播放，查看游戏是否结束
    if (!isAniPlaying) {
      //isAniPlaying = false
      // 方块移动
      this.ShapeMove()
    }

  }

  // 实现游戏帧循环
  loop() {
    this.update()
    this.render()

    window.requestAnimationFrame(
      this.loop.bind(this),
      canvas
    )
  }
}
