export class Matrix {

    constructor (line, column, matrix) {
        this.line = line;
        this.column = column;
        this.matrix = matrix;
    }

    sum (matrixA, matrixB) {
        let matrixE = new Array(matrixA.line);
        
        for (let index = 0; index < matrixA.line; index++) {
            matrixE[index] = new Array(matrixA.column);
        }

        for (let line = 0; line < matrixA.line; line ++) {
            for (let column = 0; column < matrixA.column; column ++) {
                matrixE[line][column] = matrixA.matrix[line][column] + matrixB.matrix[line][column]    
            }
        }

        return matrixE
    }

    transposed (matrixA) {
        let matrixE = new Array(matrixA.column);

        for (let index = 0; index < matrixA.column; index++) {
            matrixE[index] = new Array(matrixA.column);
        }
    
        for (let line = 0; line < matrixA.line; line++) {

            for (let column = 0; column < matrixA.column; column++) {

                matrixE[column][line] = matrixA.matrix[line][column] 

            }
        }

        return matrixE;
    }

    subtration (matrixA, matrixB) {
        let matrixE = new Array(matrixA.line);
        
        for (let index = 0; index < matrixA.line; index++) {
            matrixE[index] = new Array(matrixA.column);
        }

        for (let line = 0; line < matrixA.line; line++) {

            for (let column = 0; column < matrixA.column; column++) {

                matrixE[line][column] = matrixA.matrix[line][column] - matrixB.matrix[line][column]

            }

        } 

        return matrixE
    }

    multiply(matrixA, matrixB) {
        let matrixE = new Array(matrixA.line);

        if (matrixA.column !== matrixB.line) {
            return "O número de colunas da primeira Matriz, é diferente do numero de linhas da segunda Matriz."
        }

        for (let line = 0; line < matrixA.line; line++){
            matrixE[line] = new Array(matrixB.column);
        }
    
        for (let line = 0; line < matrixA.line; line++) {
    
            for (let column = 0; column < matrixB.column; column++) {
    
                matrixE[line][column] = 0;
    
                for (let multiply = 0; multiply < 3; multiply++) {
    
                    matrixE[line][column] += matrixA.matrix[line][multiply] * matrixB.matrix[multiply][column];
    
                }
    
            }
    
        }
    
        return matrixE;
    }
    
    multiplyByNumber(number) {

        let matrixE = new Array(this.line);
        
        for (let index = 0; index < this.line; index++){
            matrixE[index] = new Array(this.column);
        }  
    
        for (let line = 0; line < this.line; line++) {
    
            for (let column = 0; column < this.column; column++) {
    
                matrixE[line][column] = number * this.matrix[line][column]
    
            }
    
        }
    
        return matrixE;
    }
}