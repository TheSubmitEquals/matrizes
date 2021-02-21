export function getMatrixCValue(linha,coluna) {
    linha++;
    coluna++;
    
    if (linha === coluna) {
    
        return 1;
    
    } else {
    
        return linha * coluna;
    
    }

}

export function createMatrixC () {
    let matrixC = new Array(new Array, new Array)
    
    for (let linha = 0; linha < 2; linha++) {

        for (let coluna = 0; coluna < 3; coluna++) {

            matrixC[linha][coluna] = getMatrixCValue(linha,coluna); 

        }

    }

    return matrixC;
}
