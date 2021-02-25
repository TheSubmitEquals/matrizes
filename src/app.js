import { matrixA } from './matrixA.js';
import { matrixB } from './matrixB.js';
import { matrixC } from './matrixC.js';
import { matrixD } from './matrixD.js';
import { Matrix } from './matrix.js';

export const letterA = matrixA.sum(matrixA, matrixB);
export const letterB = matrixA.subtration(new Matrix(matrixA.line, matrixB.column, matrixA.transposed(matrixA)), new Matrix(matrixB.line, matrixB.column, matrixB.multiplyByNumber(2)));
export const letterC = matrixA.multiply(matrixA, matrixB);
export const letterD = matrixC.multiply(new Matrix(matrixC.line, matrixC.column, matrixC.multiplyByNumber(2)), matrixD);
export const letterE = matrixB.multiply(matrixB, new Matrix(matrixD.column, matrixD.line, matrixD.transposed(matrixD)));
export const letterF = matrixA.transposed(new Matrix(matrixA.line, matrixC.line, matrixA.multiply(new Matrix(matrixA.column, matrixA.line, matrixA.transposed(new Matrix(matrixA.line, matrixA.column, matrixA.multiplyByNumber(2)))),new Matrix(matrixC.column, matrixC.line, matrixC.transposed(new Matrix(matrixC.line, matrixC.column, matrixC.multiplyByNumber(3)))))));