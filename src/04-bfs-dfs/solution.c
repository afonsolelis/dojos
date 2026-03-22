#include <stdio.h>
#include <stdlib.h>
#include "solution.h"

/**
 * 💻 DRIVER: Sua implementação começa aqui!
 * Retorne true se 'val' for encontrado na árvore, ou false caso contrário.
 */
bool searchTree(TreeNode* root, int val) {
    // Comece com DFS Recursivo (mais simples em C).
    
    return false;
}

/**
 * Helper: Cria um novo nó da árvore.
 */
TreeNode* createNode(int val) {
    TreeNode* node = (TreeNode*)malloc(sizeof(TreeNode));
    if (node) {
        node->val = val;
        node->left = NULL;
        node->right = NULL;
    }
    return node;
}

/**
 * Helper: Libera a memória da árvore.
 */
void freeTree(TreeNode* root) {
    if (root == NULL) return;
    freeTree(root->left);
    freeTree(root->right);
    free(root);
}
