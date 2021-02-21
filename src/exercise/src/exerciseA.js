export function sum(matrixA, matrixB) {
    
    let matrixE = new Array(new Array, new Array, new Array)
    
    for (let line = 0; line < 3; line ++) {

        for (let column = 0; column < 3; column ++) {

            matrixE[line][column] = matrixA[line][column] + matrixB[line][column]    

        }

    }

    return matrixE
}
