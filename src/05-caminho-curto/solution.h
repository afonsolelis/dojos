#ifndef SOLUTION_H
#define SOLUTION_H

#include <stdbool.h>

#define MAX_CHILDREN 10
#define MAX_NODES 100

typedef struct Node {
    char id;
    struct Node* children[MAX_CHILDREN];
    int num_children;
} Node;

/**
 * Retorna true se houver um caminho de start para target.
 * Use um Set ou array de visitados para evitar ciclos infinitos!
 */
bool existeCaminho(Node* start, char target);

/**
 * Função utilitária para criar novos nós de grafo.
 */
Node* createNode(char id);

#endif
