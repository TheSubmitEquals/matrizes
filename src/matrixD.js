export function getMatrixDValue(linha,coluna) {
    linha++;
    coluna++;
    if (linha === coluna) {
        return 3 * linha;
    } else {
        return linha - coluna ** 2;
    }
}

export function createMatrixD() {
    let matrixD = new Array(new Array, new Array, new Array);

    for (let linha = 0; linha < 3; linha++) {
        
        for (let coluna = 0; coluna < 1; coluna ++) {
        
            matrixD[linha][coluna] = getMatrixDValue(linha, coluna);
        
        }
    
    }

    return matrixD;
}