export function multiply(matrixA, matrixB) {
    let matrixE = new Array(new Array(), new Array(), new Array());

    for (let line = 0; line < 3; line++) {

        for (let column = 0; column < 3; column++) {

            matrixE[line][column] = 0;

            for (let multiply = 0; multiply < 3; multiply++) {

                matrixE[line][column] += matrixA[line][multiply] * matrixB[multiply][column];

            }



        }

    }

    return matrixE;
}