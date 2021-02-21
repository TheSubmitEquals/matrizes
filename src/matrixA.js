export function getMatrixAValue(linha, coluna) {
    linha++;
    coluna++;
    if (linha === coluna) {
        return linha + coluna;
    } else {
        return 0;
    }
}

export const createMatrixA = () => {
    let matrixA = new Array(new Array(3), new Array(3), new Array(3));
    for (let linha = 0; linha < 3; linha++) {

        for (let coluna = 0; coluna < 3; coluna++){

            matrixA[linha][coluna] = getMatrixAValue(linha,coluna);

        }

    }
    return matrixA
}