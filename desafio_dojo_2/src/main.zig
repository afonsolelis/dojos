const std = @import("std");

pub const GraphNode = struct {
    value: i32,
    neighbors: []const usize,
};

const graph = [_]GraphNode{
    .{ .value = 10, .neighbors = &[_]usize{ 1, 2 } },
    .{ .value = 5, .neighbors = &[_]usize{ 0, 3, 4 } },
    .{ .value = 15, .neighbors = &[_]usize{ 0, 4 } },
    .{ .value = 2, .neighbors = &[_]usize{ 1, 5 } },
    .{ .value = 7, .neighbors = &[_]usize{ 1, 2, 5 } },
    .{ .value = 20, .neighbors = &[_]usize{ 3, 4 } },
};

/// 💻 DRIVER: sua lógica de busca em grafo começa aqui.
/// Retorne `true` se o valor existir no grafo, ou `false` caso contrário.
///
/// Regras:
/// - O grafo pode ter ciclos.
/// - Você precisa marcar nós visitados para evitar loop infinito.
/// - Comece a busca no índice informado por `start_index`.
fn searchGraph(start_index: usize, target: i32) bool {
    _ = start_index;
    _ = target;

    // TODO: implemente uma DFS ou BFS usando `graph`.
    // Dica: crie um array `visited` com o tamanho de `graph.len`.
    return false;
}

pub fn main() !void {
    std.debug.print("--- Coding Dojo 2 (ZIG) | Busca em Grafo ---\n", .{});
    std.debug.print("Grafo usado nos testes:\n", .{});
    std.debug.print("10 -> [5, 15]\n", .{});
    std.debug.print("5 -> [10, 2, 7]\n", .{});
    std.debug.print("15 -> [10, 7]\n", .{});
    std.debug.print("2 -> [5, 20]\n", .{});
    std.debug.print("7 -> [5, 15, 20]\n", .{});
    std.debug.print("20 -> [2, 7]\n\n", .{});

    std.debug.print("Iniciando testes...\n", .{});

    const t1 = searchGraph(0, 7);
    std.debug.print("Teste 1 (Buscar 7 a partir do 10): {s}\n", .{if (t1) "✅ PASSOU" else "❌ FALHOU"});

    const t2 = searchGraph(3, 15);
    std.debug.print("Teste 2 (Buscar 15 a partir do 2): {s}\n", .{if (t2) "✅ PASSOU" else "❌ FALHOU"});

    const t3 = searchGraph(1, 99);
    std.debug.print("Teste 3 (Buscar 99 a partir do 5): {s}\n", .{if (!t3) "✅ PASSOU" else "❌ FALHOU"});

    const t4 = searchGraph(5, 10);
    std.debug.print("Teste 4 (Buscar 10 a partir do 20): {s}\n", .{if (t4) "✅ PASSOU" else "❌ FALHOU"});
}
