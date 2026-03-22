#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>
#include <string.h>
#include "solution.h"

// Variável auxiliar para rastrear nós visitados e evitar loops
bool visitados[256]; // Usando IDs de char como índice

/**
 * 💻 DRIVER: Sua implementação começa aqui!
 * Retorne true se 'target' for encontrado no grafo partindo de 'start'.
 * Lembre-se de zerar os visitados na chamada inicial.
 */
bool existeCaminho(Node* start, char target) {
    if (!start) return false;
    
    // 💡 DICA: Use a variável 'visitados[start->id]' para marcar.
    
    return false;
}

/**
 * Helper: Cria um novo nó de grafo.
 */
Node* createNode(char id) {
    Node* node = (Node*)malloc(sizeof(Node));
    if (node) {
        node->id = id;
        node->num_children = 0;
        for (int i = 0; i < MAX_CHILDREN; i++) node->children[i] = NULL;
    }
    return node;
}
