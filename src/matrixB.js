export function getMatrixBValue(linha, coluna) {
    linha++;
    coluna++;
    return linha/coluna;
}


export const createMatrixB = () => {
    let matrixB = new Array(new Array(3), new Array(3), new Array(3));
    for (let linha = 0; linha < 3; linha++) {

        for (let coluna = 0; coluna < 3; coluna++){

            matrixB[linha][coluna] = getMatrixBValue(linha,coluna);

        }

    }

    return matrixB;
}
