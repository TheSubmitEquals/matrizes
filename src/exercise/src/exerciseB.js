export function transposed(matrixA) {
    
    let matrixResult = new Array(new Array(), new Array(), new Array());
    
    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++) {

            matrixResult[line][column] = matrixA[column][line] 

        }

    }

    return matrixResult;

}

export function subtraction(matrixTransposed, matrixB) {

    let matrixE = new Array(new Array, new Array, new Array)

    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++) {

            matrixE[line][column] = matrixTransposed[line][column] - matrixB[line][column]

        }

    } 

    return matrixE

}

export function multiplyByTwo(matrixB) {

    let matrixResult = new Array(new Array(), new Array(), new Array())

    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++) {

            matrixResult[line][column] = 2 * matrixB[line][column]

        }

    }

    return matrixResult;

}