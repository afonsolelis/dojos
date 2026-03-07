const temDuplicado = require('./index');

describe('Dojo 01 - Encontrando Duplicados', () => {
    test('deve retornar true quando existem duplicados próximos', () => {
        expect(temDuplicado([1, 2, 3, 1])).toBe(true);
    });

    test('deve retornar false quando todos os números são únicos', () => {
        expect(temDuplicado([1, 2, 3, 4])).toBe(false);
    });

    test('deve retornar true com array contendo duplicados adjacentes', () => {
        expect(temDuplicado([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
    });

    test('deve retornar false para array vazio ou com um elemento', () => {
        expect(temDuplicado([])).toBe(false);
        expect(temDuplicado([1])).toBe(false);
    });

    test('deve lidar com números negativos', () => {
        expect(temDuplicado([-1, -2, -3, -1])).toBe(true);
    });
});
