import { Matrix } from "./exercise/matrix.js";

function getMatrixCValue(line,column) {
    line++;
    column++;
    
    if (line === column) {
    
        return 1;
    
    } else {
    
        return line * column;
    
    }

}

function createMatrixC () {
    let matrixC = new Array(new Array, new Array)
    
    for (let line = 0; line < 2; line++) {

        for (let column = 0; column < 3; column++) {

            matrixC[line][column] = getMatrixCValue(line,column); 

        }

    }

    return matrixC;
}

export const matrixC = new Matrix(2,3,createMatrixC());