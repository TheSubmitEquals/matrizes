import { Matrix } from "./exercise/matrix.js"

export function getMatrixDValue(line,column) {
    line++;
    column++;
    if (line === column) {
        return 3 * line;
    } else {
        return line - column ** 2;
    }
}

export function createMatrixD() {
    let matrixD = new Array(new Array, new Array, new Array);

    for (let line = 0; line < 3; line++) {
        
        for (let column = 0; column < 1; column ++) {
        
            matrixD[line][column] = getMatrixDValue(line, column);
        
        }
    
    }

    return matrixD;
}

export const matrixD = new Matrix(3,1,createMatrixD());