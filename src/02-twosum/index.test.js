const twoSum = require('./index');

describe('Dojo 02 - Two Sum (Alvo da Soma)', () => {
    test('deve encontrar os dois números que somam o alvo 9', () => {
        const resultado = twoSum([2, 7, 11, 15], 9);
        // O teste aceita retornar os VALORES [2, 7] ou os ÍNDICES [0, 1]
        const valoresOuIndicesValidos = JSON.stringify(resultado) === JSON.stringify([0, 1]) || 
                                        JSON.stringify(resultado) === JSON.stringify([2, 7]);
        expect(valoresOuIndicesValidos).toBe(true);
    });

    test('deve encontrar o alvo quando os números estão no final', () => {
        const resultado = twoSum([3, 2, 4], 6);
        const valoresOuIndicesValidos = JSON.stringify(resultado) === JSON.stringify([1, 2]) || 
                                        JSON.stringify(resultado) === JSON.stringify([2, 4]);
        expect(valoresOuIndicesValidos).toBe(true);
    });

    test('deve funcionar com o mesmo número repetido', () => {
        const resultado = twoSum([3, 3], 6);
        const valoresOuIndicesValidos = JSON.stringify(resultado) === JSON.stringify([0, 1]) || 
                                        JSON.stringify(resultado) === JSON.stringify([3, 3]);
        expect(valoresOuIndicesValidos).toBe(true);
    });
});
