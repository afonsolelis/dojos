#include <stdio.h>
#include <stdlib.h>
#include <assert.h>
#include <string.h>
#include "solution.h"

extern bool visitados[256];

int main() {
    /*
       A -> B -> D
       |    |
       v    v
       C -> E
    */
    Node* a = createNode('A');
    Node* b = createNode('B');
    Node* c = createNode('C');
    Node* d = createNode('D');
    Node* e = createNode('E');

    a->children[a->num_children++] = b;
    a->children[a->num_children++] = c;
    b->children[b->num_children++] = d;
    b->children[b->num_children++] = e;
    c->children[c->num_children++] = e;

    printf("Running tests for Dojo 02: Graph Connectivity (C)...\n");

    // Teste 1: Caminho direto
    memset(visitados, 0, sizeof(visitados));
    assert(existeCaminho(a, 'B') == true);
    printf("Test 1 OK\n");

    // Teste 2: Caminho indireto (transitivo)
    memset(visitados, 0, sizeof(visitados));
    assert(existeCaminho(a, 'E') == true);
    printf("Test 2 OK\n");

    // Teste 3: Outro caminho indireto
    memset(visitados, 0, sizeof(visitados));
    assert(existeCaminho(a, 'D') == true);
    printf("Test 3 OK\n");

    // Teste 4: Nó desconectado (sentido oposto)
    memset(visitados, 0, sizeof(visitados));
    assert(existeCaminho(d, 'A') == false);
    printf("Test 4 OK\n");

    // Teste 5: Ciclo
    /* X -> Y -> X */
    Node* x = createNode('X');
    Node* y = createNode('Y');
    x->children[x->num_children++] = y;
    y->children[x->num_children++] = x;
    memset(visitados, 0, sizeof(visitados));
    assert(existeCaminho(x, 'Z') == false);
    printf("Test 5 OK (No infinite loop in cycle)\n");

    printf("\n✅ Todos os testes passaram!\n");

    // Clean up
    free(a); free(b); free(c); free(d); free(e); free(x); free(y);
    return 0;
}
