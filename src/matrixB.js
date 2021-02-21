export function getMatrixBValue(line, column) {
    line++;
    column++;
    return line/column;
}


export const createMatrixB = () => {
    let matrixB = new Array(new Array(3), new Array(3), new Array(3));
    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++){

            matrixB[line][column] = getMatrixBValue(line,column);

        }

    }

    return matrixB;
}
