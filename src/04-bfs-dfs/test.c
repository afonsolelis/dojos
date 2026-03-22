#include <stdio.h>
#include <assert.h>
#include "solution.h"

int main() {
    /*
           4
          / \
         2   7
        / \
       1   3
    */
    TreeNode* root = createNode(4);
    root->left = createNode(2);
    root->right = createNode(7);
    root->left->left = createNode(1);
    root->left->right = createNode(3);

    printf("Running tests for Dojo 02: Binary Tree Search (C)...\n");

    // Teste 1: Valor que existe (folha)
    assert(searchTree(root, 1) == true);
    printf("Test 1 OK\n");

    // Teste 2: Valor que existe (raiz)
    assert(searchTree(root, 4) == true);
    printf("Test 2 OK\n");

    // Teste 3: Outro valor que existe (meio)
    assert(searchTree(root, 2) == true);
    printf("Test 3 OK\n");

    // Teste 4: Valor que NÃO existe
    assert(searchTree(root, 10) == false);
    printf("Test 4 OK\n");

    // Teste 5: Árvore vazia
    assert(searchTree(NULL, 4) == false);
    printf("Test 5 OK\n");

    printf("\n✅ Todos os testes passaram!\n");

    freeTree(root);
    return 0;
}
