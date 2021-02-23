import { sum } from './src/exerciseA.js';
import { transposed, subtraction, multiplyByTwo } from './src/exerciseB.js';
import { multiply } from './src/exerciseC.js';
import { createMatrixA } from '../matrixA.js';
import { createMatrixB } from '../matrixB.js';
import { createMatrixC } from '../matrixC.js';
import { createMatrixD } from '../matrixD.js';

const matrixA = createMatrixA();
const matrixB = createMatrixB();

export const letterA = sum(matrixA, matrixB);
export const letterB = subtraction(transposed(matrixA), multiplyByTwo(matrixB));
export const letterC = multiply(matrixA,matrixB);
