

const PIECE_WRAPPER_SRC = 'images/cb.png'
const PIECE_WRAPPER_WIDTH = 200
const PIECE_WRAPPER_HEIGHT = 200
  
  export default class Shape {
  /**
   *  方块
   *   *****
   *   *****
   *   *****
   */
  constructor(position_row, position_column) {
    this.position = {}
    this.position.row = 1
    this.position.column = 8
    this.name=""
    this.keyPixe = {
      row: 1,
      column: 1
    }
    this.size = {
      row: 2,
      column: 2
    }
    this.data = [[1, 1], [1, 1]]
    this.img = new Image()
    //this.img.src = 'images/' + this.name + '.png'
    this.wrapperImg = new Image()
    this.wrapperImg.src = PIECE_WRAPPER_SRC
  }
  transformHDeg() {
    this.keyPixe = {
      row: 1,
      column: 1
    }
    this.size = {
      row: 1,
      column: 2
    }
    this.data = [[1, 0], [1, 0]] 
  }
  transformSDeg() {
    this.keyPixe = {
      row: 1,
      column: 1
    }
    this.size = {
      row: 2,
      column: 1
    }
    this.data = [[1, 1], [0, 0]]  
  }
  transformXDeg() {
    this.keyPixe = {
      row: 1,
      column: 1
    }
    this.size = {
      row: 1,
      column: 1
    }
    this.data = [[1, 0], [0, 0]] 
  }
  transformADeg() {
    this.keyPixe = {
      row: 1,
      column: 1
    }
    this.size = {
      row: 2,
      column: 2
    }
    this.data = [[1, 1], [1, 1]] 
  }
}
