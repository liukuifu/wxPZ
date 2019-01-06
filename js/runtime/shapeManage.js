import shape from './shape'
import DataBus from '../databus'

let databus = new DataBus()
let nextShape = null
let currentShape = null

class ShapeManage {
  constructor() { }

  createShape() {
    if (currentShape == null && nextShape == null) {
      currentShape = this._createShape()
      nextShape = this._createShape()
    }
    if (currentShape == null && nextShape != null) {
      currentShape = nextShape
      nextShape = this._createShape()
    }
    return currentShape
  }
  _createShape() {
    //console.log("_createShape SSS");
    //console.log(databus.shapes.length);
    let num = Math.ceil(Math.random() * databus.shapes.length)
    //console.log(num);
    let rtnshape = new shape(1, 4)
    rtnshape.name = num
    rtnshape.img.src = 'images/' + rtnshape.name + '.png'
    //let deg = Math.ceil(Math.random() * databus.shapes.length)
    //rtnshape.deg = deg
    //this._rotate(deg, rtnshape, true)
    //databus.st = Date.now()
    //console.log("_createShape EEE");
    return rtnshape
  }
  dispose() {
    currentShape = null
  }
  _rotate(deg, shape, isInit) {
    switch (deg) {
      case "a":
        shape.transformHDeg(isInit)
        break
      case "h":
        shape.transformSDeg(isInit)
        break
      case "s":
        shape.transformXDeg(isInit)
        break
      case "x":
        shape.transformADeg(isInit)
        break
    }
  }
  rotate(flg) {
    this._rotate(flg, currentShape, false)
  }
  getNextShape() {
    return nextShape
  }
}
let manager = new ShapeManage()
export default manager
