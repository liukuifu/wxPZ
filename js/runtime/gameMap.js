import DataBus from '../databus'
import Piece from '../models/piece'

let databus = new DataBus()

const puzzleList3 = [
    [5, 4, 7, 3, 1, 6, 2, 8],
    [5, 3, 1, 7, 4, 8, 2, 6],
    [6, 2, 1, 3, 5, 4, 8, 7],
    [5, 8, 2, 7, 6, 3, 4, 1],
    [6, 1, 4, 8, 7, 2, 3, 5],
    [7, 2, 8, 1, 5, 3, 4, 6],
    [8, 3, 2, 7, 6, 1, 5, 4],
    [2, 7, 8, 3, 6, 1, 5, 4],
    [7, 4, 3, 2, 5, 1, 8, 6],
    [3, 4, 1, 7, 5, 6, 8, 2],
    [6, 1, 3, 8, 5, 2, 4, 7],
    [2, 1, 3, 5, 6, 8, 7, 4],
    [2, 8, 1, 6, 3, 7, 4, 5],
    [7, 6, 1, 5, 4, 8, 2, 3],
    [8, 4, 7, 2, 6, 3, 1, 5],
    [5, 7, 8, 6, 4, 3, 2, 1],
    [6, 7, 4, 5, 1, 3, 8, 2],
    [4, 1, 2, 3, 7, 5, 8, 6],
    [8, 6, 2, 5, 1, 7, 3, 4],
    [6, 8, 4, 2, 3, 7, 1, 5],
    [1, 8, 7, 4, 6, 2, 3, 5],
    [2, 6, 5, 3, 8, 1, 4, 7],
    [7, 3, 8, 5, 6, 2, 1, 4],
    [5, 7, 8, 1, 4, 3, 6, 2],
    [5, 6, 8, 3, 1, 7, 4, 2],
    [5, 7, 2, 6, 1, 3, 8, 4],
    [4, 5, 3, 1, 8, 6, 2, 7],
    [5, 8, 7, 2, 6, 4, 3, 1],
    [8, 7, 5, 2, 3, 1, 6, 4],
    [4, 8, 6, 2, 3, 7, 5, 1],
    [4, 1, 2, 6, 7, 3, 8, 5],
    [3, 6, 7, 5, 4, 1, 8, 2],
    [7, 8, 6, 5, 2, 3, 4, 1],
    [7, 5, 4, 3, 6, 1, 8, 2],
    [5, 8, 4, 3, 6, 2, 1, 7],
    [2, 7, 6, 5, 8, 1, 3, 4],
    [4, 1, 5, 2, 6, 8, 3, 7],
    [2, 1, 8, 7, 4, 3, 6, 5],
    [5, 3, 2, 1, 8, 4, 6, 7],
    [8, 2, 1, 4, 7, 3, 5, 6],
    [1, 4, 6, 5, 8, 3, 7, 2],
    [5, 8, 6, 3, 2, 4, 1, 7],
    [6, 4, 8, 2, 7, 5, 3, 1],
    [7, 1, 6, 4, 5, 3, 8, 2],
    [2, 1, 4, 7, 5, 6, 8, 3],
    [6, 7, 2, 4, 5, 8, 3, 1],
    [6, 5, 8, 3, 7, 4, 2, 1],
    [5, 1, 4, 6, 8, 3, 2, 7],
    [8, 4, 5, 2, 1, 6, 7, 3],
    [5, 2, 4, 6, 1, 7, 3, 8],
    [3, 1, 6, 8, 7, 5, 2, 4],
    [3, 7, 5, 8, 1, 4, 6, 2],
    [3, 8, 6, 1, 2, 4, 5, 7],
    [5, 1, 8, 2, 7, 3, 4, 6],
    [7, 5, 4, 2, 3, 1, 8, 6],
    [8, 3, 5, 1, 7, 4, 2, 6],
    [6, 7, 4, 2, 8, 3, 1, 5],
    [2, 1, 5, 7, 4, 3, 8, 6],
    [1, 6, 2, 7, 5, 8, 4, 3],
    [5, 6, 8, 7, 3, 1, 4, 2],
    [8, 6, 3, 2, 5, 4, 1, 7],
    [7, 6, 1, 8, 2, 3, 5, 4],
    [3, 6, 5, 8, 4, 2, 1, 7],
    [2, 4, 1, 3, 5, 7, 6, 8],
    [3, 2, 1, 8, 5, 6, 7, 4],
    [6, 7, 4, 8, 2, 3, 5, 1],
    [3, 8, 5, 7, 6, 1, 2, 4],
    [5, 6, 8, 3, 4, 7, 2, 1],
    [1, 7, 5, 2, 8, 6, 4, 3],
    [2, 4, 1, 3, 8, 7, 5, 6],
    [6, 1, 5, 3, 8, 2, 4, 7],
    [7, 3, 6, 1, 8, 2, 5, 4],
    [6, 5, 1, 7, 2, 4, 8, 3],
    [5, 1, 8, 6, 2, 7, 3, 4],
    [4, 7, 5, 2, 8, 1, 6, 3],
    [8, 7, 6, 1, 4, 3, 5, 2],
    [5, 4, 2, 8, 6, 7, 1, 3],
    [2, 4, 1, 5, 3, 8, 6, 7],
    [5, 1, 2, 6, 8, 4, 3, 7],
    [5, 7, 1, 2, 3, 6, 4, 8],
    [7, 2, 4, 5, 3, 1, 6, 8],
    [2, 4, 3, 1, 5, 7, 8, 6],
    [4, 5, 1, 3, 8, 7, 2, 6],
    [1, 4, 3, 6, 2, 5, 8, 7],
    [8, 2, 3, 6, 4, 5, 1, 7],
    [1, 5, 2, 6, 3, 7, 4, 8],
    [3, 5, 8, 7, 1, 4, 6, 2],
    [3, 8, 6, 5, 1, 7, 4, 2],
    [8, 3, 4, 2, 5, 6, 1, 7],
    [2, 5, 7, 8, 3, 4, 1, 6],
    [2, 3, 6, 5, 8, 7, 1, 4],
    [7, 6, 5, 3, 2, 8, 1, 4],
    [3, 6, 1, 4, 7, 5, 2, 8],
    [1, 4, 3, 5, 6, 2, 8, 7],
    [8, 2, 6, 4, 3, 7, 5, 1],
    [8, 7, 2, 5, 4, 1, 6, 3],
    [8, 5, 7, 2, 4, 1, 6, 3],
    [3, 1, 6, 8, 7, 2, 4, 5],
    [4, 3, 6, 5, 8, 7, 2, 1]
];
const puzzleList4 = [
    [12, 3, 5, 11, 15, 4, 8, 6, 2, 13, 7, 10, 9, 14, 1],
    [1, 10, 3, 4, 13, 2, 12, 7, 6, 5, 8, 11, 15, 9, 14],
    [3, 11, 14, 2, 13, 8, 15, 10, 12, 6, 5, 1, 4, 7, 9],
    [8, 6, 10, 2, 12, 9, 11, 1, 14, 13, 3, 7, 5, 15, 4],
    [15, 10, 6, 2, 4, 5, 3, 9, 8, 12, 11, 13, 14, 1, 7],
    [14, 13, 1, 9, 12, 3, 8, 15, 11, 6, 4, 2, 10, 5, 7],
    [11, 3, 6, 7, 14, 4, 10, 8, 2, 1, 13, 15, 5, 9, 12],
    [3, 2, 11, 6, 5, 8, 7, 4, 1, 15, 9, 14, 13, 10, 12],
    [7, 13, 8, 5, 12, 3, 6, 4, 10, 9, 15, 11, 2, 1, 14],
    [1, 14, 5, 7, 15, 3, 11, 4, 12, 8, 10, 9, 13, 6, 2],
    [14, 4, 15, 8, 2, 10, 1, 9, 12, 11, 5, 6, 3, 7, 13],
    [2, 11, 1, 8, 5, 4, 12, 13, 14, 3, 10, 15, 9, 7, 6],
    [5, 10, 11, 2, 15, 9, 4, 8, 13, 14, 12, 1, 7, 6, 3],
    [4, 2, 15, 7, 9, 10, 14, 1, 6, 11, 5, 13, 8, 3, 12],
    [1, 5, 15, 8, 11, 6, 10, 13, 2, 3, 9, 7, 4, 12, 14],
    [3, 9, 13, 15, 8, 11, 10, 5, 7, 6, 4, 14, 12, 1, 2],
    [13, 4, 15, 10, 1, 9, 8, 11, 7, 12, 2, 6, 5, 3, 14],
    [4, 1, 12, 11, 7, 2, 9, 5, 8, 13, 15, 10, 14, 3, 6],
    [10, 8, 1, 13, 12, 2, 6, 9, 3, 7, 4, 11, 5, 15, 14],
    [6, 7, 13, 3, 9, 1, 2, 14, 12, 15, 11, 5, 8, 10, 4],
    [5, 13, 8, 4, 14, 6, 15, 10, 3, 12, 7, 9, 1, 2, 11],
    [3, 13, 15, 2, 9, 6, 8, 14, 4, 10, 12, 7, 11, 1, 5],
    [10, 5, 4, 11, 9, 2, 6, 15, 1, 7, 8, 13, 3, 14, 12],
    [6, 14, 3, 5, 13, 7, 11, 2, 4, 10, 1, 12, 8, 15, 9],
    [9, 2, 14, 6, 12, 15, 1, 5, 4, 11, 7, 3, 10, 8, 13],
    [5, 14, 9, 8, 15, 4, 3, 11, 13, 12, 6, 2, 1, 10, 7],
    [7, 10, 4, 11, 8, 14, 13, 2, 3, 12, 9, 6, 5, 1, 15],
    [14, 10, 6, 5, 11, 8, 1, 3, 4, 13, 7, 15, 2, 12, 9],
    [14, 13, 15, 8, 2, 12, 5, 4, 1, 3, 6, 10, 11, 9, 7],
    [11, 15, 6, 8, 14, 7, 9, 5, 2, 4, 13, 1, 10, 3, 12],
    [7, 15, 14, 9, 2, 1, 3, 11, 10, 12, 8, 5, 4, 6, 13],
    [5, 2, 15, 14, 7, 6, 4, 8, 1, 13, 9, 12, 10, 11, 3],
    [8, 10, 11, 1, 14, 13, 5, 3, 9, 12, 15, 4, 2, 7, 6],
    [8, 14, 7, 11, 6, 3, 12, 4, 10, 1, 15, 9, 2, 5, 13],
    [15, 8, 9, 6, 2, 14, 12, 3, 5, 10, 1, 13, 7, 4, 11],
    [6, 15, 7, 10, 1, 3, 12, 4, 8, 14, 5, 2, 9, 11, 13],
    [12, 9, 2, 4, 3, 14, 7, 5, 1, 6, 13, 11, 15, 8, 10],
    [13, 3, 15, 10, 2, 5, 9, 7, 6, 11, 1, 14, 8, 4, 12],
    [13, 11, 2, 8, 15, 1, 9, 5, 6, 12, 4, 3, 14, 10, 7],
    [7, 1, 5, 12, 15, 2, 8, 10, 3, 6, 9, 13, 11, 14, 4],
    [14, 13, 12, 1, 2, 8, 6, 11, 7, 10, 15, 3, 4, 9, 5],
    [3, 8, 13, 10, 12, 14, 5, 11, 1, 15, 9, 4, 7, 2, 6],
    [11, 6, 10, 14, 8, 2, 13, 4, 12, 9, 3, 5, 1, 7, 15],
    [7, 13, 3, 14, 9, 11, 12, 10, 2, 6, 1, 5, 4, 8, 15],
    [2, 3, 6, 4, 14, 12, 13, 1, 5, 10, 8, 11, 9, 7, 15],
    [11, 12, 9, 14, 8, 15, 10, 7, 1, 13, 5, 2, 3, 6, 4],
    [5, 11, 4, 15, 12, 10, 2, 1, 8, 14, 9, 13, 7, 6, 3],
    [14, 9, 13, 7, 1, 4, 2, 3, 8, 11, 15, 5, 10, 6, 12],
    [15, 5, 13, 2, 14, 4, 1, 6, 12, 3, 9, 10, 8, 7, 11],
    [10, 2, 15, 5, 12, 8, 7, 3, 6, 14, 11, 13, 4, 9, 1],
    [11, 5, 4, 2, 7, 13, 3, 1, 12, 9, 14, 6, 10, 15, 8],
    [13, 15, 4, 6, 1, 14, 11, 7, 10, 9, 8, 5, 3, 2, 12],
    [12, 13, 14, 11, 3, 8, 7, 10, 2, 1, 6, 9, 5, 4, 15],
    [12, 8, 15, 3, 9, 2, 5, 14, 4, 6, 11, 7, 1, 10, 13],
    [1, 13, 9, 2, 12, 6, 8, 7, 4, 11, 14, 5, 10, 15, 3],
    [9, 1, 15, 14, 5, 11, 2, 3, 12, 6, 10, 8, 7, 13, 4],
    [13, 2, 11, 14, 15, 4, 9, 6, 1, 3, 7, 10, 5, 8, 12],
    [12, 14, 6, 7, 4, 2, 3, 10, 15, 11, 1, 8, 9, 5, 13],
    [8, 14, 1, 4, 3, 6, 15, 12, 11, 7, 5, 10, 2, 9, 13],
    [8, 12, 9, 4, 3, 11, 15, 6, 5, 7, 2, 13, 14, 10, 1],
    [3, 10, 14, 9, 15, 8, 2, 6, 5, 13, 7, 12, 4, 11, 1],
    [7, 12, 5, 14, 2, 10, 11, 3, 13, 1, 4, 8, 15, 6, 9],
    [4, 15, 5, 11, 9, 12, 14, 13, 6, 7, 10, 2, 1, 3, 8],
    [10, 1, 3, 6, 11, 14, 5, 4, 15, 9, 13, 2, 12, 8, 7],
    [11, 2, 3, 4, 7, 6, 12, 15, 5, 13, 14, 10, 9, 1, 8],
    [11, 6, 5, 9, 15, 14, 4, 3, 1, 13, 12, 8, 10, 2, 7],
    [11, 1, 2, 6, 8, 4, 10, 7, 5, 13, 12, 3, 9, 14, 15],
    [4, 6, 2, 8, 12, 1, 5, 15, 9, 11, 7, 10, 13, 14, 3],
    [9, 7, 2, 8, 11, 5, 4, 15, 12, 1, 6, 13, 14, 10, 3],
    [12, 13, 15, 14, 6, 11, 7, 5, 1, 9, 4, 10, 3, 2, 8],
    [1, 13, 3, 9, 6, 14, 5, 2, 11, 15, 10, 7, 12, 4, 8],
    [13, 10, 11, 15, 2, 14, 7, 5, 6, 3, 9, 8, 4, 12, 1],
    [8, 13, 11, 3, 6, 15, 1, 14, 4, 10, 9, 5, 2, 7, 12],
    [11, 12, 4, 2, 9, 13, 10, 15, 3, 7, 8, 14, 6, 1, 5],
    [3, 15, 2, 12, 9, 10, 13, 6, 5, 8, 14, 7, 4, 11, 1],
    [8, 1, 6, 12, 14, 13, 11, 15, 10, 5, 2, 7, 3, 9, 4],
    [12, 10, 4, 9, 7, 3, 14, 11, 8, 1, 15, 2, 6, 5, 13],
    [3, 6, 15, 13, 2, 4, 9, 10, 7, 11, 8, 14, 1, 5, 12],
    [12, 8, 10, 13, 2, 5, 11, 4, 7, 14, 3, 15, 9, 1, 6],
    [13, 6, 7, 11, 12, 5, 4, 2, 1, 10, 9, 3, 8, 15, 14],
    [1, 10, 12, 6, 7, 13, 3, 9, 2, 15, 8, 14, 5, 4, 11],
    [11, 4, 13, 3, 1, 5, 6, 12, 2, 15, 14, 7, 9, 8, 10],
    [7, 12, 14, 11, 2, 4, 10, 13, 6, 1, 15, 8, 3, 5, 9],
    [15, 5, 9, 7, 4, 1, 6, 12, 14, 3, 2, 13, 11, 8, 10],
    [12, 6, 13, 7, 15, 14, 9, 3, 1, 5, 8, 11, 4, 2, 10],
    [6, 11, 15, 7, 12, 13, 8, 9, 14, 3, 1, 5, 2, 10, 4],
    [14, 15, 2, 12, 11, 10, 13, 9, 1, 5, 4, 3, 7, 8, 6],
    [2, 15, 6, 12, 11, 1, 10, 8, 3, 7, 9, 13, 4, 14, 5],
    [6, 3, 9, 12, 14, 2, 11, 5, 10, 8, 4, 13, 1, 15, 7],
    [4, 1, 7, 14, 9, 3, 6, 2, 12, 10, 15, 13, 11, 5, 8],
    [4, 3, 2, 15, 9, 11, 8, 10, 1, 7, 12, 14, 5, 13, 6],
    [1, 13, 11, 8, 10, 15, 3, 7, 14, 2, 6, 9, 5, 4, 12],
    [3, 14, 15, 12, 7, 9, 11, 5, 10, 2, 6, 4, 1, 8, 13],
    [14, 4, 7, 2, 11, 6, 3, 15, 5, 13, 8, 10, 12, 9, 1],
    [7, 12, 5, 3, 13, 1, 6, 4, 10, 2, 11, 15, 14, 9, 8],
    [3, 1, 7, 13, 6, 15, 12, 5, 11, 4, 9, 2, 14, 8, 10],
    [4, 8, 6, 2, 7, 5, 1, 13, 10, 9, 12, 11, 14, 15, 3],
    [13, 8, 9, 14, 2, 1, 7, 5, 10, 15, 12, 11, 3, 4, 6],
    [15, 2, 5, 3, 9, 7, 4, 12, 1, 6, 11, 13, 10, 8, 14]
];
const puzzleList5 = [
    [18, 12, 23, 5, 7, 11, 9, 2, 4, 20, 15, 13, 16, 10, 22, 21, 24, 19, 17, 3, 8, 6, 1, 14],
    [14, 10, 9, 15, 2, 22, 1, 18, 16, 6, 8, 5, 24, 19, 23, 7, 21, 12, 20, 3, 4, 13, 11, 17],
    [7, 12, 10, 8, 9, 19, 17, 6, 4, 16, 23, 3, 1, 20, 18, 24, 13, 14, 21, 2, 11, 22, 5, 15],
    [20, 10, 5, 17, 15, 19, 2, 13, 3, 6, 21, 23, 9, 4, 24, 12, 22, 16, 7, 18, 14, 11, 1, 8],
    [6, 8, 10, 18, 21, 9, 11, 1, 17, 14, 13, 19, 5, 15, 4, 20, 22, 2, 23, 16, 7, 24, 12, 3],
    [5, 8, 22, 15, 19, 24, 13, 23, 18, 14, 16, 3, 17, 6, 2, 12, 7, 1, 4, 11, 9, 20, 21, 10],
    [22, 1, 13, 14, 16, 11, 21, 9, 6, 24, 23, 5, 4, 18, 7, 2, 8, 19, 3, 15, 12, 20, 17, 10],
    [6, 24, 11, 8, 15, 13, 12, 21, 16, 18, 14, 7, 22, 4, 5, 1, 10, 3, 2, 20, 9, 23, 19, 17],
    [13, 2, 19, 1, 22, 16, 15, 10, 7, 20, 8, 12, 4, 21, 6, 23, 18, 5, 14, 17, 9, 3, 24, 11],
    [3, 7, 13, 6, 16, 12, 19, 15, 20, 14, 8, 4, 1, 17, 11, 5, 22, 18, 24, 2, 23, 21, 9, 10],
    [2, 14, 6, 3, 24, 23, 19, 8, 4, 7, 18, 16, 1, 11, 20, 17, 9, 15, 12, 5, 13, 22, 10, 21],
    [18, 7, 12, 17, 22, 15, 20, 4, 24, 14, 23, 11, 3, 9, 13, 21, 5, 10, 19, 6, 2, 8, 16, 1],
    [15, 21, 12, 11, 6, 9, 16, 8, 14, 20, 22, 10, 24, 4, 19, 2, 17, 18, 1, 13, 3, 23, 5, 7],
    [17, 20, 6, 3, 5, 22, 24, 2, 12, 16, 4, 9, 13, 15, 1, 11, 14, 23, 21, 10, 18, 8, 7, 19],
    [20, 22, 14, 15, 23, 7, 3, 17, 6, 13, 16, 5, 1, 11, 9, 12, 19, 4, 21, 2, 10, 24, 18, 8],
    [8, 7, 16, 9, 2, 5, 20, 4, 19, 3, 13, 12, 17, 14, 18, 23, 10, 15, 22, 24, 1, 11, 6, 21],
    [17, 7, 12, 3, 1, 10, 20, 19, 8, 22, 14, 21, 13, 11, 2, 16, 24, 4, 6, 5, 18, 23, 9, 15],
    [5, 12, 9, 13, 3, 6, 17, 16, 21, 20, 24, 22, 2, 10, 11, 1, 18, 4, 14, 15, 19, 23, 8, 7],
    [2, 24, 8, 21, 5, 6, 3, 14, 1, 15, 13, 11, 17, 23, 10, 7, 19, 18, 4, 22, 9, 20, 12, 16],
    [9, 7, 22, 20, 18, 19, 24, 2, 4, 13, 17, 1, 12, 21, 10, 11, 14, 6, 5, 8, 16, 23, 3, 15],
    [8, 7, 16, 23, 10, 6, 1, 17, 19, 14, 2, 12, 4, 9, 24, 13, 21, 22, 20, 5, 11, 18, 15, 3],
    [22, 12, 7, 17, 6, 20, 1, 21, 11, 24, 16, 2, 18, 9, 5, 13, 4, 14, 8, 15, 23, 19, 3, 10],
    [11, 2, 23, 16, 3, 20, 15, 1, 19, 5, 14, 8, 4, 7, 24, 17, 22, 21, 13, 9, 12, 6, 10, 18],
    [2, 12, 10, 1, 18, 23, 6, 8, 24, 14, 17, 21, 16, 20, 4, 11, 13, 9, 7, 15, 19, 5, 3, 22],
    [8, 19, 1, 24, 5, 18, 9, 14, 22, 13, 11, 4, 6, 17, 21, 20, 2, 3, 15, 10, 16, 7, 23, 12],
    [21, 13, 17, 7, 11, 1, 3, 19, 22, 18, 20, 8, 10, 15, 16, 2, 24, 6, 12, 5, 14, 23, 4, 9],
    [15, 8, 14, 23, 20, 21, 11, 1, 9, 22, 2, 13, 24, 3, 7, 19, 12, 4, 18, 5, 17, 10, 6, 16],
    [11, 1, 7, 9, 23, 19, 2, 10, 5, 12, 22, 4, 6, 16, 13, 3, 17, 24, 8, 21, 20, 14, 18, 15],
    [24, 12, 4, 19, 15, 13, 8, 10, 23, 1, 3, 5, 6, 9, 18, 20, 16, 21, 7, 17, 14, 22, 11, 2],
    [1, 4, 11, 24, 19, 18, 16, 10, 22, 7, 23, 3, 17, 21, 5, 20, 9, 12, 2, 6, 8, 13, 14, 15],
    [7, 23, 13, 9, 1, 4, 8, 24, 15, 20, 14, 16, 21, 6, 5, 12, 3, 10, 2, 18, 11, 19, 22, 17],
    [23, 12, 9, 16, 14, 2, 22, 4, 7, 18, 24, 11, 17, 15, 19, 6, 3, 21, 8, 13, 5, 1, 20, 10],
    [3, 14, 16, 17, 22, 19, 5, 21, 24, 7, 12, 13, 4, 6, 2, 8, 9, 10, 18, 15, 1, 23, 11, 20],
    [18, 4, 22, 17, 8, 24, 1, 16, 7, 19, 21, 15, 13, 2, 23, 10, 5, 6, 20, 14, 9, 12, 3, 11],
    [12, 18, 6, 5, 21, 2, 4, 14, 15, 22, 9, 10, 16, 1, 7, 3, 11, 23, 13, 19, 24, 17, 20, 8],
    [2, 1, 9, 14, 15, 13, 20, 21, 11, 3, 4, 6, 18, 8, 19, 17, 5, 10, 24, 16, 23, 12, 7, 22],
    [17, 10, 3, 22, 21, 12, 24, 23, 4, 8, 19, 5, 13, 11, 1, 9, 15, 18, 6, 14, 2, 7, 20, 16],
    [1, 5, 19, 10, 21, 9, 14, 2, 13, 8, 3, 20, 15, 4, 11, 17, 18, 23, 16, 7, 12, 22, 24, 6],
    [3, 24, 14, 5, 17, 22, 1, 15, 6, 8, 12, 20, 11, 10, 13, 4, 21, 9, 23, 2, 16, 19, 7, 18],
    [6, 19, 12, 3, 20, 4, 21, 1, 2, 16, 9, 23, 22, 13, 24, 17, 15, 8, 7, 11, 14, 5, 10, 18],
    [17, 19, 24, 2, 6, 12, 9, 20, 22, 10, 8, 15, 3, 18, 7, 23, 11, 21, 5, 16, 14, 4, 13, 1],
    [2, 5, 24, 16, 18, 14, 12, 3, 7, 4, 15, 10, 13, 23, 9, 21, 20, 17, 1, 19, 8, 22, 11, 6],
    [16, 22, 23, 24, 12, 18, 6, 20, 14, 7, 9, 19, 8, 17, 1, 21, 10, 5, 11, 15, 4, 3, 13, 2],
    [19, 8, 10, 6, 21, 15, 2, 7, 24, 22, 16, 12, 17, 13, 23, 3, 11, 4, 14, 5, 9, 18, 1, 20],
    [19, 11, 14, 20, 16, 10, 7, 2, 23, 8, 6, 22, 24, 4, 3, 15, 13, 1, 12, 17, 5, 9, 18, 21],
    [18, 23, 20, 19, 5, 8, 22, 21, 14, 10, 1, 6, 12, 7, 16, 9, 3, 24, 13, 4, 11, 17, 2, 15],
    [13, 16, 10, 24, 15, 11, 12, 23, 17, 6, 5, 8, 1, 2, 19, 7, 20, 22, 14, 4, 18, 21, 3, 9],
    [4, 23, 3, 18, 16, 2, 20, 14, 15, 13, 8, 21, 9, 22, 7, 24, 5, 10, 6, 11, 17, 1, 19, 12],
    [9, 1, 3, 17, 7, 20, 11, 22, 4, 5, 24, 10, 13, 23, 14, 18, 19, 8, 2, 12, 15, 21, 6, 16],
    [18, 1, 23, 17, 24, 9, 13, 7, 2, 3, 15, 5, 19, 14, 6, 12, 8, 20, 4, 22, 21, 11, 10, 16],
    [19, 24, 7, 11, 9, 22, 3, 10, 18, 23, 17, 2, 16, 15, 5, 4, 14, 21, 6, 20, 13, 1, 8, 12],
    [6, 12, 11, 23, 15, 13, 20, 22, 10, 8, 17, 24, 18, 14, 3, 19, 21, 2, 1, 9, 16, 7, 4, 5],
    [12, 17, 16, 8, 4, 15, 21, 18, 22, 14, 10, 3, 2, 24, 9, 13, 20, 23, 6, 1, 19, 7, 5, 11],
    [16, 21, 7, 3, 22, 5, 1, 19, 17, 13, 12, 8, 24, 10, 2, 23, 4, 9, 20, 6, 11, 15, 14, 18],
    [7, 19, 22, 12, 11, 3, 18, 8, 23, 13, 15, 5, 4, 2, 17, 9, 1, 6, 21, 16, 20, 14, 24, 10],
    [14, 21, 3, 10, 22, 2, 18, 16, 20, 11, 19, 1, 15, 8, 9, 17, 12, 6, 24, 23, 4, 7, 13, 5],
    [1, 8, 17, 5, 20, 11, 18, 6, 10, 24, 4, 3, 16, 12, 19, 23, 7, 2, 21, 9, 14, 22, 13, 15],
    [7, 10, 4, 19, 12, 20, 14, 2, 5, 23, 21, 9, 18, 15, 16, 11, 22, 3, 17, 6, 24, 13, 1, 8],
    [11, 6, 21, 24, 5, 19, 4, 16, 18, 12, 10, 13, 17, 9, 20, 23, 22, 14, 1, 3, 8, 7, 15, 2],
    [3, 2, 10, 14, 9, 11, 7, 15, 18, 23, 12, 4, 16, 20, 24, 1, 6, 22, 8, 17, 19, 13, 21, 5],
    [3, 24, 17, 11, 14, 9, 12, 7, 5, 16, 19, 10, 1, 4, 13, 21, 2, 8, 23, 22, 6, 18, 20, 15],
    [3, 18, 17, 5, 22, 13, 24, 11, 23, 8, 10, 2, 1, 16, 20, 7, 6, 4, 21, 12, 19, 9, 14, 15],
    [18, 5, 16, 22, 6, 21, 11, 1, 4, 8, 19, 23, 17, 2, 14, 3, 10, 20, 7, 9, 24, 15, 12, 13],
    [17, 10, 9, 13, 8, 7, 19, 22, 5, 3, 21, 23, 18, 2, 15, 1, 14, 11, 24, 4, 16, 6, 20, 12],
    [10, 24, 21, 19, 20, 23, 17, 4, 15, 16, 9, 8, 14, 2, 1, 7, 18, 5, 3, 12, 13, 22, 11, 6],
    [3, 2, 18, 10, 19, 17, 22, 11, 9, 20, 6, 14, 24, 7, 16, 23, 5, 4, 12, 8, 1, 21, 13, 15],
    [16, 11, 13, 20, 10, 15, 3, 24, 9, 23, 14, 6, 19, 5, 2, 18, 1, 4, 7, 17, 22, 21, 12, 8],
    [3, 6, 15, 5, 18, 8, 13, 20, 11, 7, 19, 24, 1, 4, 17, 22, 23, 21, 10, 9, 16, 14, 12, 2],
    [17, 10, 14, 19, 18, 22, 24, 8, 3, 23, 13, 11, 21, 6, 4, 15, 12, 1, 16, 7, 9, 2, 5, 20],
    [8, 17, 24, 11, 5, 13, 16, 20, 12, 1, 7, 23, 6, 22, 19, 3, 18, 10, 2, 14, 4, 21, 9, 15],
    [6, 8, 13, 18, 7, 9, 5, 4, 16, 17, 19, 2, 10, 14, 20, 22, 12, 24, 23, 1, 11, 3, 21, 15],
    [24, 15, 2, 22, 18, 3, 19, 14, 13, 1, 5, 20, 7, 6, 12, 4, 8, 21, 23, 9, 17, 10, 11, 16],
    [1, 9, 4, 23, 19, 15, 10, 5, 3, 24, 18, 21, 22, 13, 7, 8, 11, 16, 6, 14, 17, 12, 20, 2],
    [3, 20, 22, 11, 14, 13, 5, 19, 1, 2, 8, 17, 10, 9, 7, 15, 23, 6, 4, 16, 18, 21, 12, 24],
    [22, 6, 15, 20, 4, 23, 10, 8, 12, 13, 1, 5, 24, 21, 9, 7, 14, 3, 11, 17, 18, 2, 19, 16],
    [16, 17, 6, 10, 13, 23, 24, 7, 12, 14, 22, 18, 20, 5, 15, 2, 9, 8, 3, 11, 4, 1, 21, 19],
    [20, 21, 14, 11, 2, 16, 8, 22, 9, 4, 19, 12, 18, 3, 5, 15, 13, 23, 24, 6, 10, 7, 17, 1],
    [20, 13, 16, 22, 2, 6, 14, 7, 10, 19, 17, 4, 9, 5, 12, 1, 11, 3, 23, 24, 21, 15, 8, 18],
    [5, 22, 14, 23, 8, 15, 18, 1, 16, 20, 4, 12, 3, 19, 21, 7, 2, 6, 11, 10, 24, 9, 17, 13],
    [14, 18, 23, 7, 6, 13, 5, 24, 8, 11, 17, 12, 10, 2, 9, 19, 4, 15, 16, 3, 20, 22, 21, 1],
    [15, 8, 23, 24, 2, 12, 7, 19, 9, 18, 6, 14, 13, 4, 22, 11, 16, 3, 20, 10, 5, 1, 21, 17],
    [10, 3, 24, 1, 19, 23, 4, 2, 12, 18, 5, 9, 8, 17, 15, 22, 7, 6, 14, 20, 11, 21, 13, 16],
    [14, 9, 16, 23, 6, 2, 7, 15, 11, 8, 5, 21, 13, 4, 10, 18, 20, 24, 22, 17, 19, 1, 3, 12],
    [2, 21, 15, 3, 8, 19, 11, 16, 24, 22, 17, 23, 9, 12, 6, 20, 5, 13, 7, 10, 4, 14, 1, 18],
    [4, 13, 6, 2, 21, 14, 10, 1, 8, 5, 18, 3, 16, 23, 20, 22, 17, 19, 15, 12, 7, 11, 9, 24],
    [21, 10, 3, 13, 20, 14, 23, 16, 24, 9, 7, 1, 11, 5, 22, 15, 4, 8, 2, 18, 6, 19, 12, 17],
    [18, 7, 4, 14, 19, 13, 15, 10, 16, 22, 2, 23, 21, 1, 5, 9, 20, 11, 24, 3, 8, 12, 17, 6],
    [22, 24, 10, 17, 1, 4, 12, 9, 21, 13, 3, 5, 8, 20, 11, 16, 15, 23, 14, 6, 19, 2, 18, 7],
    [16, 10, 17, 14, 12, 15, 7, 9, 18, 24, 2, 11, 4, 1, 13, 5, 23, 21, 6, 8, 19, 3, 20, 22],
    [11, 9, 20, 10, 22, 15, 13, 18, 6, 24, 1, 8, 7, 3, 5, 14, 16, 12, 19, 21, 23, 4, 17, 2],
    [17, 19, 7, 15, 18, 20, 16, 9, 6, 14, 8, 5, 1, 3, 11, 12, 10, 21, 23, 24, 22, 13, 4, 2],
    [5, 24, 22, 20, 12, 19, 14, 9, 15, 21, 13, 6, 4, 10, 18, 3, 8, 2, 11, 16, 7, 17, 1, 23],
    [5, 24, 23, 15, 12, 8, 7, 17, 4, 11, 19, 13, 14, 6, 20, 10, 9, 2, 22, 1, 3, 21, 16, 18],
    [16, 13, 5, 11, 1, 22, 21, 15, 18, 19, 12, 17, 10, 2, 24, 23, 6, 9, 7, 14, 8, 4, 3, 20],
    [24, 1, 18, 8, 14, 3, 2, 15, 5, 9, 23, 4, 22, 12, 19, 10, 6, 20, 16, 13, 7, 17, 11, 21],
    [19, 22, 23, 10, 7, 17, 14, 13, 21, 3, 4, 11, 24, 6, 12, 18, 15, 8, 1, 9, 20, 16, 5, 2],
    [22, 16, 6, 12, 21, 17, 24, 4, 5, 7, 18, 10, 1, 19, 14, 23, 11, 3, 2, 20, 13, 15, 9, 8],
    [18, 1, 2, 11, 15, 10, 22, 4, 12, 19, 21, 5, 23, 20, 6, 24, 7, 9, 14, 13, 8, 16, 17, 3],
    [20, 9, 5, 19, 17, 13, 12, 2, 10, 16, 24, 4, 7, 6, 14, 8, 3, 11, 1, 22, 18, 21, 23, 15]
];
const puzzleMap3 = [
    "ullurdruldrdluldrulurddr",
    "llurdrulurdldluurrdlldrr",
    "uulldrdlurrdllurrulldrrulddr",
    "luurddluruldlurrddluldrr",
    "luldrulurdldruruldrdllurrd",
    "uulldrrdluurddluldrr",
    "luruldrdlluurdldrurdllurdr",
    "lulurdrulddrullurddlurdr",
    "lulurdrulddluurrdd",
    "uldluurrdllurdruldrd",
    "ullurdldruurddluruldrd",
    "ululdrdruulldrurdd",
    "ullurrdldrullurdldrurd",
    "uulddluurdrulddluurddr",
    "luurddluulddruulddrurd",
    "ulldruurddluulddruurdluldrrd",
    "lluruldrruldrdllurrulddr",
    "luldrrullurrddlurd",
    "uuldldrulurdrulddrulldrurd",
    "uuldrullddruulddrrulldrr",
    "uulddlurdruulddruuldldrr",
    "ulldrruulddlurrullddrr",
    "lurulddrullurdldruulddrr",
    "luuldrdlurruldrdluruldrd",
    "uuldlurddruuldldrr",
    "ulldrurdlluruldrdlururdd",
    "ulurdlldrruulddrullurddr",
    "uulddruuldldrulurddruuldldrr",
    "lulurddluurdrdllurrulldrrd",
    "uuldrullddrrulldruuldrdr",
    "luldrulurrddlurd",
    "uuldrdllurrdlluruldrrulddr",
    "uldlurulddruurddluurdlldrr",
    "luurddlulurrdldluurrdd",
    "uullddrurulldrrdluruldrd",
    "luuldrrdllurrulldrdrulurdd",
    "ulldrulurddruuldrd",
    "llururddllurulddrurd",
    "ululddruldrruldlurdrulurdd",
    "luulddrrulurddlulurrdd",
    "luuldrrdlluurdruldldrr",
    "uuldldrurdlurulldrrdluurdd",
    "uullddruldrruuldrulldrdr",
    "llurrdlluurddlurrulddr",
    "uldrulurddlluruldrrd",
    "ululddrurullddruuldrrulddr",
    "uullddrruullddrurullddrr",
    "ulldruuldrrdluurdluldrrd",
    "uulldrdrulurddluuldrrd",
    "llurrulldrrdllurrdluurdd",
    "ulldruuldrrdlurullddrr",
    "lluruldrrdllurruldrd",
    "ululddruruldldrruldlurrd",
    "luuldrurdlulddrurd",
    "uuldrdluruldlurddlurrd",
    "luruldlurdldrulurdrd",
    "uullddrurdluurdlulddruldrr",
    "llururddllurulddrr",
    "uulldrdluurddlurrulddr",
    "uulddlurdruulldrdlurulddrr",
    "ululddruurddlurulldrrd",
    "luurdldluurddruldlurrd",
    "uuldldruuldrrdlurulddr",
    "uldrulldrrullurrdllurddr",
    "lulurrdllurdldrruulddlurdr",
    "uldluurdlurrddluurddllurrd",
    "uldrulldruulddrurulldrrd",
    "uullddruulddrruullddrr",
    "luurddluruldldrruuldrd",
    "uldrulldrrullurrdllurdrd",
    "ullurdldrurdluruldrd",
    "uldruuldlurddluurddr",
    "llururddluuldrurdluldrdr",
    "ulldrulurdrulddrulldrr",
    "llururddluurdlldrulurdrd",
    "ululdrurddluruldrdllurrulddr",
    "uldrulldruuldrurdd",
    "ulldrulurrdllurddr",
    "uldlurdrulldrulurrdlldrr",
    "ulurddlulurdldrr",
    "lluurrdldluurrdllurddr",
    "luuldrdlurrdluldrr",
    "uldrulldrrulurdllurdrd",
    "uuldldrulurrddluuldrrd",
    "uuldldruuldrurddlurd",
    "ulurdldrulldrruldr",
    "llurrulldrrdluruldrd",
    "llurulddrurdluruldldrr",
    "uuldlurdldrurulldrurdd",
    "uuldrdluldrurulldrrd",
    "ulldrruullddrr",
    "uuldlurdldrurullddrr",
    "lurullddruruldlurddr",
    "uldlururddllurrulddr",
    "uullddrrululddruuldrurdd",
    "lluurdrdlluurddluurrdd",
    "uulddluurdrdluldruruldlurdrd",
    "lulurrdlldrrulurdldr",
    "uldruuldldrulurddr"
];

const getRandom = function(list){
    return list[Math.floor(Math.random() * list.length)]
    // return [1, 2, 3, 4, 5, 6, 7, 8]
}

let instance

export default class GameMap {
    constructor(){
        if (instance)
            return instance

        instance = this
    }

    getMap(stage = 3){
        switch (stage) {
            case 3:
                return getRandom(puzzleList3);
            case 4:
                return getRandom(puzzleList4);            
            case 5:
                return getRandom(puzzleList5);                           
            default:
                return getRandom(puzzleList3);                
        }
    }

  // 初期化页面单元格数组
  initBoard () {
    //console.log("initBoard")
    //this.boardHeight = 22;
    //console.log("boardHeight : " + this.boardHeight)
    //this.boardWidth = 16;
    //console.log("boardWidth : " + this.boardWidth)
    var s = 24 * 16;
    for (var i = 0; i < s; i++) {
      databus.board.push(0);
    }
    //console.log(databus.board)
    //this.boardDiv = document.getElementById('board); //for debugging
  }
  // 初期化图片数组
  initShapes() {
    //console.log("initShapes SSS")
    databus.curSqs = [];
    databus.curComplete = false;
    // 转移图片数组
    this.shiftTempShapes();

    //console.log("initShapes databus.tempShapes ： ")
    //console.log(databus.tempShapes)

    databus.curShapeIndex = databus.tempShapes[0];

    console.log(databus.curShapeIndex)
    console.log(databus.shapes[databus.curShapeIndex])

    //databus.curShape = databus.shapes[databus.curShapeIndex];
    databus.curShape.push(new Piece(databus.curShapeIndex, databus.shapes[databus.curShapeIndex]))
    //databus.curShape[1]=[databus.nextX,databus.nextY]

    //console.log(databus.curShape)

    this.initNextShape();
    this.setCurCoords(databus.spawnX, databus.spawnY);
    //this.drawShape(databus.curX, databus.curY, databus.curShape, 'a');
    //console.log("initShapes EEE")
  }

  // 转移图片数组
  shiftTempShapes() {
    console.log("shiftTempShapes")
    try {
      console.log(databus.tempShapes)
      if (typeof databus.tempShapes === "undefined" || databus.tempShapes === null || databus.tempShapes.length === 0) {
        this.initTempShapes();
      } else {
        databus.tempShapes.shift();
      }
    } catch (e) {
      throw new Error("Could not shift or init tempShapes: " + e);
    }
  }
  // 初期化下一个图片数组
  initNextShape() {
    //console.log("initNextShape SSS")
    if (typeof databus.tempShapes[1] === 'undefined') { this.initTempShapes(); }
    try {
      databus.nextShapeIndex = databus.tempShapes[1];
      //console.log(databus.nextShapeIndex);
      //console.log(databus.shapes);
      databus.nextShape = databus.shapes[databus.nextShapeIndex];
      //console.log(databus.nextShape);
      databus.nextShape[1] = [databus.nextX, databus.nextY]
      this.drawNextShape(databus.nextShape);
    } catch (e) {
      throw new Error("Could not create next shape. " + e);
    }
    //console.log("initNextShape EEE")
  }

  // 初期化临时图片数组
  initTempShapes() {
    console.log("initTempShapes")
    //databus.tempShapes = [];
    for (var i = 0; i < databus.shapes.length; i++) {
      databus.tempShapes.push(i);
    }
    var k = databus.tempShapes.length;
    while (--k) { //Fisher Yates Shuffle
      var j = Math.floor(Math.random() * (k + 1));
      var tempk = databus.tempShapes[k];
      var tempj = databus.tempShapes[j];
      databus.tempShapes[k] = tempj;
      databus.tempShapes[j] = tempk;
    }
    console.log("initTempShapes databus.tempShapes ： ")
    console.log(databus.tempShapes)
  }

  // 绘制下一个图片
  drawNextShape(nextShape) {
    //console.log("drawNextShape SSS")
    databus.ns = [];
    for (var i = 0; i < databus.nextShape.length; i++) {
      //ns[i] = this.createSquare(this.nextShape[i][0] + 2, this.nextShape[i][1] + 2, this.nextShapeIndex, 'a', i);
      databus.ns[i] = databus.nextShape;
    }
    //console.log(databus.ns);
    // this.nextShapeDisplay.innerHTML = '';
    // for (var k = 0; k < ns.length; k++) {
    //   this.nextShapeDisplay.appendChild(ns[k]);
    // }
    // console.log(nextShape)
    // var imgUrl = 'images/' + nextShape[0][1]+'.jpg'
    // ctx.drawImage(
    //   this.imgUrl,
    //   nextShape[1][0],
    //   nextShape[1][1],
    //   databus.ucellw * 2,
    //   databus.ucellw * 2
    // )

    //console.log("drawNextShape EEE")
  }

  // 设置当前图片的位置
  setCurCoords(x, y) {
    //console.log("setCurCoords")
    databus.curX = x;
    databus.curY = y;
  }
}