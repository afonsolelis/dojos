// ============================================================
//  Coding Dojo #03 — Strings, Recursão e Backtracking (TypeScript)
// ============================================================

// ────────────────────────────────────────────────────────────
//  Round 1 — Verificador de Palíndromo
// ────────────────────────────────────────────────────────────

/**
 * 💻 DRIVER: Implemente a verificação de palíndromo de forma ITERATIVA.
 *
 * Regras:
 * - Ignore espaços e diferenças de maiúscula/minúscula.
 * - Use a técnica de dois ponteiros (início e fim).
 * - Retorne `true` se a string for um palíndromo.
 */
function isPalindromeIterative(s: string): boolean {
  s = s.toLowerCase().replace(/\s/g, "");
  console.log(s);
  let left = 0;
  let right = s.length - 1;
  while (left <= right) {
    if (s[left] == s[right]) {
      left++
      right--
    } else {
      return false
    }
  }
  return true;
}

/**
 * 🔁 DRIVER: Agora refatore para uma versão RECURSIVA pura (sem loops).
 *
 * Dicas:
 * - Caso base: ponteiros se cruzaram → é palíndromo.
 * - Passo recursivo: se chars são iguais, verifique o subproblema interno.
 */
function isPalindromeRecursive(s: string): boolean {
  // TODO: limpe a string e chame uma função auxiliar recursiva
  let left = 0;
  let right = s.length - 1;

  if (left > right) {
    return true;
  }

  if (s[left] == s[right]) {
    return isPalindromeRecursive(s.slice(left + 1, right));
  } else {
    return false;
  }
}

// ────────────────────────────────────────────────────────────
//  Round 2 — Gerador de Parênteses Válidos
// ────────────────────────────────────────────────────────────

/**
 * ⚡ DRIVER: Gere todas as combinações válidas de `n` pares de parênteses.
 *
 * Regras do backtracking:
 * - Pode abrir "(" se ainda tem aberturas restantes (open < n).
 * - Pode fechar ")" somente se close < open.
 * - Caso base: quando a string tem tamanho 2*n, é um resultado válido.
 *
 * @param n - número de pares de parênteses
 * @returns array com todas as combinações válidas
 */
function generateParentheses(n: number): string[] {
  const results: string[] = [];

  function backtrack(s: string, open: number, close: number) {
    if (s.length == n * 2) {
      results.push(s);
      return;
    }

    if (open < n) {
      backtrack(s + "(", open + 1, close);
    }

    if (close < open) {
      backtrack(s + ")", open, close + 1);
    }
  }

  backtrack("", 0, 0);

  // TODO: crie uma função auxiliar recursiva (backtrack)
  // que receba: string atual, contagem de aberturas, contagem de fechamentos

  return results;
}

//function 

// ────────────────────────────────────────────────────────────
//  Round 3 — Permutações de String
// ────────────────────────────────────────────────────────────

/**
 * 🛠️ DRIVER: Gere todas as permutações possíveis dos caracteres da string.
 *
 * Estratégia (Backtracking com "usados"):
 * - Para cada posição, escolha um caractere ainda não utilizado.
 * - Marque como usado, recurse, depois desmarque (backtrack).
 * - Caso base: permutação completa (mesmo tamanho da string original).
 *
 * @param s - string de entrada (sem caracteres repetidos)
 * @returns array com todas as permutações
 */
function permutations(s: string): string[] {
  const results: string[] = [];

  // TODO: crie um array `used` de booleanos (mesmo tamanho de s)
  // TODO: crie uma função auxiliar recursiva

  return results;
}

// ============================================================
//  Testes Automatizados
// ============================================================

function runTests(): void {
  console.log("=== Coding Dojo #03 (TypeScript) ===");
  console.log("=== Strings, Recursão e Backtracking ===\n");

  // --- Round 1: Palíndromo ---
  console.log("--- Round 1: Palíndromo ---\n");

  const palindromeTests: [string, boolean][] = [
    ["arara", true],
    ["Ame a Ema", true],
    ["typescript", false],
    ["Socorram me subi no onibus em Marrocos", true],
    ["a", true],
    ["ab", false],
  ];

  console.log("Iterativo:");
  for (const [input, expected] of palindromeTests) {
    const result = isPalindromeIterative(input);
    const status = result === expected ? "PASSOU" : "FALHOU";
    console.log(`  isPalindrome("${input}") = ${result} ${status === "PASSOU" ? "✅" : "❌"}`);
  }

  console.log("\nRecursivo:");
  for (const [input, expected] of palindromeTests) {
    const s = input.toLowerCase().replace(/\s/g, "");
    const result = isPalindromeRecursive(s);
    const status = result === expected ? "PASSOU" : "FALHOU";
    console.log(`  isPalindrome("${input}") = ${result} ${status === "PASSOU" ? "✅" : "❌"}`);
  }

  // --- Round 2: Parênteses ---
  console.log("\n--- Round 2: Gerador de Parênteses ---\n");

  const parenTests: [number, string[]][] = [
    [1, ["()"]],
    [2, ["(())", "()()"]],
    [3, ["((()))", "(()())", "(())()", "()(())", "()()()"]],
  ];

  for (const [n, expected] of parenTests) {
    const result = generateParentheses(n);
    const passed = JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
    console.log(`  generateParentheses(${n}) = [${result.join(", ")}] ${passed ? "✅" : "❌"}`);
  }

  // --- Round 3: Permutações ---
  console.log("\n--- Round 3: Permutações ---\n");

  const permTests: [string, string[]][] = [
    ["ab", ["ab", "ba"]],
    ["abc", ["abc", "acb", "bac", "bca", "cab", "cba"]],
  ];

  for (const [input, expected] of permTests) {
    const result = permutations(input);
    const passed = JSON.stringify(result.sort()) === JSON.stringify(expected.sort());
    console.log(`  permutations("${input}") = [${result.join(", ")}] ${passed ? "✅" : "❌"}`);
  }

  // Teste de contagem para 4 caracteres
  const perm4 = permutations("abcd");
  const perm4Passed = perm4.length === 24; // 4! = 24
  console.log(`  permutations("abcd").length = ${perm4.length} (esperado: 24) ${perm4Passed ? "✅" : "❌"}`);

  console.log("\n=== Fim dos Testes ===");
}

runTests();
