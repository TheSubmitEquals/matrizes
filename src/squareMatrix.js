import { Matrix } from "./matrix.js"

export function squareMatrix(matrixA, matrixB) {

    if (matrixA.line !== matrixA.column || matrixB.line !== matrixB.column) {
        return "Erro: Uma das matrizes informadas não é quadrada!"
    }

    if (matrixA.line !== matrixB.column || matrixA.column !== matrixB.line || matrixB.column !== matrixA.column || matrixB.line !== matrixA.line) {
        return "O número de elementos de uma das matrizes impede o calculo que deve ser feito sobre elas."
    }

    return matrixA.subtration(
        new Matrix(matrixA.line, matrixB.column, matrixB.transposed(

            new Matrix(matrixA.line, matrixB.column, matrixB.subtration(

                new Matrix(matrixA.line, matrixB.column, matrixA.multiply(

                    new Matrix(matrixA.line, matrixB.column, matrixA.transposed(matrixA)),
                    matrixB

                )),
                matrixA

            ))
        )),
        new Matrix(matrixA.line, matrixB.column, matrixA.multiplyByNumber(2))
    )

}