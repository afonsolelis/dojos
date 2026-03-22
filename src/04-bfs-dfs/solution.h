#ifndef SOLUTION_H
#define SOLUTION_H

#include <stdbool.h>

typedef struct TreeNode {
    int val;
    struct TreeNode *left;
    struct TreeNode *right;
} TreeNode;

/**
 * Procura por um valor em uma árvore binária.
 * Pode ser implementado usando DFS (Recursivo) ou BFS (Fila).
 */
bool searchTree(TreeNode* root, int val);

/**
 * Função utilitária para criar novos nós.
 */
TreeNode* createNode(int val);

/**
 * Função utilitária para liberar a memória da árvore.
 */
void freeTree(TreeNode* root);

#endif
