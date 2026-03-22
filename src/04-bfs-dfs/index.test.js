const searchTree = require('./index');

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

describe('Dojo 02 - Busca em Árvore Binária', () => {
    /*
           4
          / \
         2   7
        / \
       1   3
    */
    const root = new TreeNode(4,
        new TreeNode(2, new TreeNode(1), new TreeNode(3)),
        new TreeNode(7)
    );

    test('deve retornar true para um valor que existe (folha)', () => {
        expect(searchTree(root, 1)).toBe(true);
        expect(searchTree(root, 7)).toBe(true);
    });

    test('deve retornar true para a raiz', () => {
        expect(searchTree(root, 4)).toBe(true);
    });

    test('deve retornar false para um valor inexistente', () => {
        expect(searchTree(root, 10)).toBe(false);
    });

    test('deve retornar false para árvore vazia', () => {
        expect(searchTree(null, 4)).toBe(false);
    });
});
