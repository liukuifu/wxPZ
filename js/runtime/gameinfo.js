import DataBus from '../databus'
import Button from '../base/button'
import Piece from '../models/piece'
import GameMap from '../runtime/gameMap'
import shapeManage from '../runtime/shapeManage'

let databus = new DataBus()
let gameMap = new GameMap()

const helpButtonPadding = 15


// 拼图图片
const PUZZLE_EASY_SRC = 'images/puzzle-easy.jpg'
const PUZZLE_EASY_WIDTH = 1000
const PUZZLE_EASY_HEIGHT = 1000

const PUZZLE_MIDDLE_SRC = 'images/puzzle-middle.jpg'
const PUZZLE_MIDDLE_WIDTH = 1000
const PUZZLE_MIDDLE_HEIGHT = 1000

const PUZZLE_HARD_SRC = 'images/puzzle-hard.jpg'
const PUZZLE_HARD_WIDTH = 1000
const PUZZLE_HARD_HEIGHT = 1000

// 菜单图片
const IMG_START_SRC = 'images/start.png'
const IMG_START_WIDTH = 800
const IMG_START_HEIGHT = 1000

const IMG_EASY_SRC = 'images/easy.png'
const IMG_EASY_WIDTH = 400
const IMG_EASY_HEIGHT = 200

const IMG_MIDDLE_SRC = 'images/middle.png'
const IMG_MIDDLE_WIDTH = 400
const IMG_MIDDLE_HEIGHT = 200

const IMG_HARD_SRC = 'images/hard.png'
const IMG_HARD_WIDTH = 400
const IMG_HARD_HEIGHT = 200

// 分数背景
const IMG_FS_SRC = 'images/fs_bg.png'
const IMG_FS_WIDTH = 400
const IMG_FS_HEIGHT = 200

const IMG_TIME_SRC = 'images/time_bg.png'
const IMG_TIME_WIDTH = 400
const IMG_TIME_HEIGHT = 200

const IMG_HELP_SRC = 'images/help.png'
const IMG_HELP_WIDTH = 300
const IMG_HELP_HEIGHT = 200

const IMG_HELP_CONTENT_SRC = 'images/puzzle-help.png'
const IMG_HELP_CONTENT_WIDTH = '640'
const IMG_HELP_CONTENT_HEIGHT = '907'

const IMG_HINT_SRC = 'images/hint.png'
const IMG_HINT_WIDTH = 300
const IMG_HINT_HEIGHT = 200

const IMG_HINT_CONTENT_SRC = 'images/wrap.png'
const IMG_HINT_CONTENT_WIDTH = 300
const IMG_HINT_CONTENT_HEIGHT = 300

const IMG_REPLAY_SRC = 'images/replay.png'
const IMG_REPLAY_WIDTH = 300
const IMG_REPLAY_HEIGHT = 200

const IMG_CHANGE_SRC = 'images/change.png'
const IMG_CHANGE_WIDTH = 1020
const IMG_CHANGE_HEIGHT = 800

// // 当前图片
// const IMG_CB_SRC = 'images/cb.png'
// const IMG_CB_WIDTH = 200
// const IMG_CB_HEIGHT = 200

// 下一个图片
const IMG_NEXT_SRC = 'images/paper.png'
const IMG_NEXT_WIDTH = 200
const IMG_NEXT_HEIGHT = 200

const IMG_WIDTH = 200
const IMG_HEIGHT = 200

let instance

export default class GameInfo {
  constructor() {
    if (instance)
      return instance
    instance = this

    // 开始菜单背景
    let imgStartRatio = (databus.screenWidth * 0.8) / IMG_START_WIDTH
    this.imgStart = new Button(
      IMG_START_SRC,
      (databus.screenWidth - imgStartRatio * IMG_START_WIDTH) / 2,
      (databus.screenHeight - imgStartRatio * IMG_START_HEIGHT) / 2,
      imgStartRatio * IMG_START_WIDTH,
      imgStartRatio * IMG_START_HEIGHT
    )

    //开始菜单按钮
    let btnRatio = (databus.screenWidth * 0.4) / IMG_EASY_WIDTH
    this.btnEasy = new Button(
      IMG_EASY_SRC,
      (databus.screenWidth - btnRatio * IMG_EASY_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_EASY_HEIGHT) / 2 - btnRatio * IMG_EASY_HEIGHT * 1.5,
      btnRatio * IMG_EASY_WIDTH,
      btnRatio * IMG_EASY_HEIGHT
    )

    this.btnMiddle = new Button(
      IMG_MIDDLE_SRC,
      (databus.screenWidth - btnRatio * IMG_MIDDLE_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_MIDDLE_HEIGHT) / 2,
      btnRatio * IMG_MIDDLE_WIDTH,
      btnRatio * IMG_MIDDLE_HEIGHT
    )

    this.btnHard = new Button(
      IMG_HARD_SRC,
      (databus.screenWidth - btnRatio * IMG_HARD_WIDTH) / 2,
      (databus.screenHeight - btnRatio * IMG_HARD_HEIGHT) / 2 + btnRatio * IMG_HARD_HEIGHT * 1.5,
      btnRatio * IMG_HARD_WIDTH,
      btnRatio * IMG_HARD_HEIGHT
    )

    // 分数
    let fsRatio = (databus.screenWidth * 0.16) / IMG_FS_WIDTH
    //console.log("分数块 位置：" + (databus.contentPadding))
    //console.log("分数块 位置：" + (fsRatio * IMG_TIME_HEIGHT-20))
    this.fsBanner = new Button(
      IMG_FS_SRC,
      databus.contentPadding,
      fsRatio * IMG_TIME_HEIGHT - 20,
      fsRatio * IMG_FS_WIDTH,
      fsRatio * IMG_FS_HEIGHT
    )

    // 时间块
    let timeRatio = (databus.screenWidth * 0.16) / IMG_TIME_WIDTH
    //console.log("时间块 位置：" + (databus.contentPadding))
    //console.log("时间块 位置：" + (timeRatio * IMG_TIME_HEIGHT + helpButtonPadding))
    this.timeBanner = new Button(
      IMG_TIME_SRC,
      databus.contentPadding,
      timeRatio * IMG_TIME_HEIGHT + helpButtonPadding,
      timeRatio * IMG_TIME_WIDTH,
      timeRatio * IMG_TIME_HEIGHT
    )

    // 下一个图形
    let nextRatio = (databus.screenWidth * 0.16) / IMG_NEXT_WIDTH
    
    this.nextDis = new Button(
      IMG_NEXT_SRC,
      (databus.screenWidth / 2) - (nextRatio / 2) - databus.pzzlPadding,
      databus.pzzlPadding - 12,
      nextRatio * IMG_NEXT_WIDTH,
      nextRatio * IMG_NEXT_HEIGHT
    )

    // 重玩按钮
    let replayRatio = (databus.screenWidth * 0.12) / IMG_REPLAY_WIDTH
    this.btnReplay = new Button(
      IMG_REPLAY_SRC,
      (databus.contentPadding + databus.contentWidth) - replayRatio * IMG_REPLAY_WIDTH,
      //databus.contentPaddingTop - (replayRatio * IMG_REPLAY_HEIGHT + helpButtonPadding),
      replayRatio * IMG_REPLAY_HEIGHT + helpButtonPadding,
      replayRatio * IMG_REPLAY_WIDTH,
      replayRatio * IMG_REPLAY_HEIGHT
    )

    // // 提示按钮
    // let hintRatio = (databus.screenWidth * 0.12) / IMG_HINT_WIDTH
    // this.btnHint = new Button(
    //   IMG_HINT_SRC,
    //   this.btnReplay.x - (hintRatio * IMG_HINT_WIDTH + 10),
    //   //databus.contentPaddingTop - (hintRatio * IMG_HINT_HEIGHT + helpButtonPadding),
    //   hintRatio * IMG_HINT_HEIGHT + helpButtonPadding,
    //   hintRatio * IMG_HINT_WIDTH,
    //   hintRatio * IMG_HINT_HEIGHT
    // )

    // let hintContentRatio = (databus.contentWidth * 0.6) / IMG_HINT_CONTENT_WIDTH
    // this.hintContent = new Button(
    //   IMG_HINT_CONTENT_SRC,
    //   (databus.contentPadding + databus.contentWidth) - hintContentRatio * IMG_HINT_CONTENT_WIDTH,
    //   databus.contentPaddingTop - (hintContentRatio * IMG_HINT_CONTENT_HEIGHT + helpButtonPadding),
    //   hintContentRatio * IMG_HINT_CONTENT_WIDTH,
    //   hintContentRatio * IMG_HINT_CONTENT_HEIGHT
    // )

    // 帮助按钮
    let helpRatio = (databus.screenWidth * 0.12) / IMG_HELP_WIDTH
    this.btnHelp = new Button(
      IMG_HELP_SRC,
      this.btnReplay.x - (helpRatio * IMG_HELP_WIDTH + 10),
      //this.btnHint.x - (helpRatio * IMG_HELP_WIDTH + 10),
      //databus.contentPaddingTop - (helpRatio * IMG_HELP_HEIGHT + helpButtonPadding),
      helpRatio * IMG_HELP_HEIGHT + helpButtonPadding,
      helpRatio * IMG_HELP_WIDTH,
      helpRatio * IMG_HELP_HEIGHT
    )

    // 帮助内容
    let helpContentHeight = (databus.screenWidth / IMG_HELP_CONTENT_WIDTH) * IMG_HELP_CONTENT_HEIGHT
    this.helpContent = new Button(
      IMG_HELP_CONTENT_SRC,
      0,
      databus.screenHeight - helpContentHeight,
      databus.screenWidth,
      helpContentHeight
    )

    // // 当前图形
    // let cbDis = (databus.screenWidth * 0.16) / IMG_CB_WIDTH
    // this.cbDis = new Button(
    //   IMG_CB_SRC,
    //   (databus.screenWidth / 2) - (nextDis / 2) - databus.pzzlPadding,
    //   databus.pzzlPadding*3,
    //   cbDis * IMG_CB_WIDTH,
    //   cbDis * IMG_CB_HEIGHT
    // )

    //变形按钮
    let changeRatio = (databus.screenWidth * 0.12) / IMG_CHANGE_WIDTH
    // console.log("变形按钮 databus.contentPadding : " + databus.contentPadding)
    // console.log("变形按钮 databus.screenHeight : " + databus.screenHeight)
    this.btnChange = new Button(
      IMG_CHANGE_SRC,
      databus.contentPadding,
      //databus.contentPaddingTop - (replayRatio * IMG_REPLAY_HEIGHT + helpButtonPadding),
      databus.screenHeight - (databus.contentPadding * 2 - 15),
      databus.contentWidth * (IMG_CHANGE_WIDTH / 1000),
      changeRatio * IMG_CHANGE_HEIGHT
      // , {
      //   touchEnd: this.rotateButtonTouchEnd.bind(this)
      // }
    )
  }


  // rotateButtonTouchEnd() {
  //   console.log("改变图形")
  //   console.log(databus.currentShape)
  //   // if (this.currentShape) {
  //   //   if (this.playVoice) {
  //   //     this.musicManage.playHit()
  //   //   }
  //   //   if (this.rotateDirection === 0) {
  //   //     shapeManage.rotate(this.rotateDirection)
  //   //     let flag = this.checkMerge()
  //   //     if (!flag) {
  //   //       shapeManage.rotate(this.rotateDirection === 0 ? 1 : 0)
  //   //     } else {
  //   //       this.mergeBase(2)
  //   //     }
  //   //   }
  //   // }
  // }

  tap(event) {
    if (!databus.gameStart) {
      return this.tapGameStart(event)
    }
    if (!databus.gameOver) {
      return this.tapGamePlaying(event)
    }
    return this.tapGameOver(event)
  }

  tapGameStart(event) {
    // console.log(event)
    // console.log(databus.contentWidth)
    // console.log((databus.contentWidth / 8))

    // console.log(databus.screenWidth)
    // console.log(databus.pzzlPadding)

    databus.nextX = (databus.screenWidth - IMG_WIDTH) / 2
    // console.log(databus.nextX)
    databus.nextY = databus.pzzlPadding
    // console.log(databus.nextY)
    databus.ucellw = (databus.contentWidth / 8)

    if (this.btnEasy.isTapped(event.x, event.y)) {
      databus.stage = 3
      databus.gameStart = true
      databus.st = Date.now()
      databus.puzzleImg = {
        src: PUZZLE_EASY_SRC,
        width: PUZZLE_EASY_WIDTH,
        height: PUZZLE_EASY_HEIGHT
      }
    } else if (this.btnMiddle.isTapped(event.x, event.y)) {
      databus.stage = 4
      databus.gameStart = true
      databus.st = Date.now()
      databus.puzzleImg = {
        src: PUZZLE_MIDDLE_SRC,
        width: PUZZLE_MIDDLE_WIDTH,
        height: PUZZLE_MIDDLE_HEIGHT
      }
    } else if (this.btnHard.isTapped(event.x, event.y)) {
      databus.stage = 5
      databus.gameStart = true
      databus.st = Date.now()
      databus.puzzleImg = {
        src: PUZZLE_HARD_SRC,
        width: PUZZLE_HARD_WIDTH,
        height: PUZZLE_HARD_HEIGHT
      }
    } else {
      return
    }

    // // 设定初始的空位
    // databus.emptyPosition = (databus.stage * databus.stage) - 1
    // console.log(databus.emptyPosition )

    // // 选择随机地图并将图块放进数列中
    // let randomMap = gameMap.getMap(databus.stage)
    // console.log(randomMap)
    // for (let i = 0; i < randomMap.length; i++) {
    //   let position = randomMap[i] - 1;
    //   databus.pieces.push(new Piece(i, position, databus.stage))
    // }

    // 初期化页面单元格数组
    gameMap.initBoard();
    this.initAnswer();
    // // 初期化图片数组
    // gameMap.initShapes();
    this.piece = new Piece(databus.currentShape)
    console.log(shapeManage.getNextShape().img.src)
    console.log((databus.screenWidth / 2))
    console.log((databus.screenWidth * 0.16) / IMG_NEXT_WIDTH)
    let nR = (databus.screenWidth * 0.16) / IMG_NEXT_WIDTH
    console.log((nR / 2))
    console.log((databus.screenWidth / 2) - (nR / 2) - databus.pzzlPadding)
    console.log(databus.pzzlPadding - 12)
    this.nextDis = new Button(
      shapeManage.getNextShape().img.src,
      (databus.screenWidth / 2) - (nR / 2) - databus.pzzlPadding,
      databus.pzzlPadding - 12,
      nR * IMG_NEXT_WIDTH,
      nR * IMG_NEXT_HEIGHT
    )
    // this.piece = databus.currentShape
    databus.startTime = Date.now()
    this.puzzleImg = new Image()
    this.puzzleImg.src = databus.puzzleImg.src
  }

  initAnswer() {
    databus.answerMapObj = new Map();
    databus.answerMapObj.set('s111s111s121s121', 1);//林
    databus.answerMapObj.set('h111h112x111x111', 2);//森
    databus.answerMapObj.set('h211h212h211h212', 1);//昌
    databus.answerMapObj.set('s211s211s221s221', 1);//昍
    databus.answerMapObj.set('h211h212x211x211', 2);//晶
    databus.answerMapObj.set('h311h312h311h312', 1);//圭
    databus.answerMapObj.set('h311h312x311x311', 2);//垚

    databus.answerMapObj.set('h211h212h111h112', 4);//杲
    databus.answerMapObj.set('h111h112h211h212', 4);//杳
    databus.answerMapObj.set('h211h212h311h312', 4);//圼
    databus.answerMapObj.set('s111s311s121s321', 4);//杜
    //databus.answerMapObj.set('tuh1tuh2tututuh1tuh2', 4);//㙓
  }
  tapGamePlaying(event) {
    //databus.st = Date.now()
    if (databus.showHelp && this.helpContent.isTapped(event.x, event.y)) {
      return databus.showHelp = false
    }

    if (databus.showHint && this.hintContent.isTapped(event.x, event.y)) {
      return databus.showHint = false
    }

    if (this.btnReplay.isTapped(event.x, event.y)) {
      databus.reset()
    }

    if (this.btnHelp.isTapped(event.x, event.y)) {
      return databus.showHelp = true
    }

    // if (this.btnHint.isTapped(event.x, event.y)) {
    //   return databus.showHint = true
    // }

    if (this.btnChange.isTapped(event.x, event.y)) {
      //console.log("改变图形")
      //console.log(databus.currentShape)
      var flg
      if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 2) {
        flg = 'a'
      } else if (databus.currentShape.size.row == 2 && databus.currentShape.size.column == 1) {
        flg = 's'
      } else if (databus.currentShape.size.row == 1 && databus.currentShape.size.column == 2) {
        flg = 'h'
      } else {
        flg = 'x'
      }
      shapeManage.rotate(flg)
      this.update(databus.currentShape)
      //return databus.showHelp = true
    }

  }

  tapGameOver(event) {
    if (this.btnReplay.isTapped(event.x, event.y)) {
      databus.reset()
    }
  }
  update(data) {
    //console.log(data)
    this.piece = new Piece(data)
    let nR = (databus.screenWidth * 0.16) / IMG_NEXT_WIDTH
    //console.log((nR / 2))
    //console.log((databus.screenWidth / 2) - (nR / 2) - databus.pzzlPadding)
    //console.log(databus.pzzlPadding - 12)
    this.nextDis = new Button(
      shapeManage.getNextShape().img.src,
      (databus.screenWidth / 2) - (nR / 2) - databus.pzzlPadding,
      databus.pzzlPadding - 12,
      nR * IMG_NEXT_WIDTH,
      nR * IMG_NEXT_HEIGHT
    )
  }
  render(ctx) {
    // console.log("render SSS")
    // console.log("databus.gameStart : ")
    // console.log(databus.gameStart)
    // console.log("databus.gameOver : ")
    // console.log(databus.gameOver)
    if (!databus.gameStart) {
      return this.renderGameStart(ctx)
    }
    if (!databus.gameOver) {
      return this.renderGamePlaying(ctx)
    }
    // console.log("render SSS")
    return this.renderGameOver(ctx)
  }

  renderGameStart(ctx) {
    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
    ctx.globalAlpha = 1;

    this.imgStart.render(ctx)
    this.btnEasy.render(ctx)
    this.btnMiddle.render(ctx)
    this.btnHard.render(ctx)
  }
  renderGamePlaying(ctx) {
    //console.log("renderGamePlaying SSS")
    // 绘制分数
    this.fsBanner.render(ctx)
    ctx.fillStyle = "#ffffff"
    ctx.font = "15px Arial"
    ctx.fillText(
      databus.fs,
      this.fsBanner.x + (this.fsBanner.width / 2 - 18),
      this.fsBanner.y + (this.fsBanner.height / 2 + 5)
    )

    // 绘制时间
    this.timeBanner.render(ctx)
    ctx.fillStyle = "#ffffff"
    ctx.font = "15px Arial"
    ctx.fillText(
      databus.getCurrentTime(),
      this.timeBanner.x + (this.timeBanner.width / 2 - 18),
      this.timeBanner.y + (this.timeBanner.height / 2 + 5)
    )

    this.btnHelp.render(ctx)
    //this.btnHint.render(ctx)
    this.btnReplay.render(ctx)
    if (databus.showHelp) {
      ctx.fillStyle = "black";
      ctx.globalAlpha = 0.6;
      ctx.fillRect(0, 0, databus.screenWidth, databus.screenHeight);
      ctx.globalAlpha = 1;
      this.helpContent.render(ctx)
    }
    // if (databus.showHint) {
    //   ctx.drawImage(
    //     this.puzzleImg,
    //     this.hintContent.x,
    //     this.hintContent.y,
    //     this.hintContent.width,
    //     this.hintContent.height
    //   )
    //   this.hintContent.render(ctx)
    // }
    
    this.nextDis.render(ctx)
    //console.log(databus.nextShape)
    //console.log(databus.shapes)
    //this.cbDis.render(ctx)
    // 变形按钮
    this.btnChange.render(ctx)
    //console.log(this.piece)
    this.piece.render(ctx)
    //console.log("renderGamePlaying EEE")
  }

  renderGameOver(ctx, score) {

    ctx.drawImage(
      this.puzzleImg,
      databus.contentPadding,
      databus.contentPaddingTop,
      databus.contentWidth,
      databus.contentWidth
    )

    this.btnReplay.render(ctx)

    // 绘制半透明背景
    ctx.fillStyle = "black";
    ctx.globalAlpha = 0.6;
    ctx.fillRect(databus.contentPadding, databus.contentPaddingTop, databus.contentWidth, 50)
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#ffffff"
    ctx.font = "18px Arial"
    ctx.fillText(
      '恭喜！您用' + databus.finalTime + '完成了拼图！',
      databus.contentPadding + 10,
      databus.contentPaddingTop + 30,
    )
  }

}