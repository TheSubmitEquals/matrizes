export function getMatrixAValue(line, column) {
    line++;
    column++;
    if (line === column) {
        return line + column;
    } else {
        return 0;
    }
}

export const createMatrixA = () => {
    let matrixA = new Array(new Array(3), new Array(3), new Array(3));
    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++){

            matrixA[line][column] = getMatrixAValue(line,column);

        }

    }
    return matrixA
}