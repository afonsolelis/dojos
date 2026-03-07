const isAnagram = require('./index');

describe('Dojo 03 - Anagramas Válidos', () => {
    test('deve retornar true para anagramas clássicos', () => {
        expect(isAnagram("anagram", "nagaram")).toBe(true);
        expect(isAnagram("padre", "pedra")).toBe(true);
    });

    test('deve retornar false quando possuem letras diferentes', () => {
        expect(isAnagram("rat", "car")).toBe(false);
        expect(isAnagram("banco", "cabos")).toBe(false);
    });

    test('deve retornar false para strings de tamanhos diferentes', () => {
        expect(isAnagram("a", "ab")).toBe(false);
        expect(isAnagram("ab", "a")).toBe(false);
    });

    test('deve lidar com strings vazias', () => {
        expect(isAnagram("", "")).toBe(true);
    });
});
