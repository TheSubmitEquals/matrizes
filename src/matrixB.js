import { Matrix } from "./matrix.js"

function getMatrixBValue(line, column) {
    line++;
    column++;
    return line/column;
}


const createMatrixB = () => {
    let matrixB = new Array(new Array(3), new Array(3), new Array(3));
    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++){

            matrixB[line][column] = getMatrixBValue(line,column);

        }

    }

    return matrixB;
}

export const matrixB = new Matrix(3,3,createMatrixB());
