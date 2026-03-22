const existeCaminho = require('./index');

describe('Dojo 02 - Busca em Grafo (Conectividade)', () => {
    /*
       A -> B -> D
       |    |
       v    v
       C -> E
    */
    const graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['E'],
        'D': [],
        'E': []
    };

    /*
       X -> Y -> Z
       ^---------| (Ciclo)
    */
    const graphComCiclo = {
        'X': ['Y'],
        'Y': ['Z'],
        'Z': ['X']
    };

    test('deve retornar true para caminho direto', () => {
        expect(existeCaminho(graph, 'A', 'B')).toBe(true);
    });

    test('deve retornar true para caminho indireto (transitivo)', () => {
        expect(existeCaminho(graph, 'A', 'E')).toBe(true);
        expect(existeCaminho(graph, 'A', 'D')).toBe(true);
    });

    test('deve retornar false para nós desconectados', () => {
        expect(existeCaminho(graph, 'D', 'A')).toBe(false);
    });

    test('deve lidar com ciclos sem entrar em loop infinito', () => {
        expect(existeCaminho(graphComCiclo, 'X', 'Z')).toBe(true);
        expect(existeCaminho(graphComCiclo, 'X', 'NaoExiste')).toBe(false);
    });
});
