const std = @import("std");

// Definição da estrutura do Nó da Árvore
pub const Node = struct {
    val: i32,
    left: ?*Node,
    right: ?*Node,

    pub fn init(allocator: std.mem.Allocator, val: i32) !*Node {
        const node = try allocator.create(Node);
        node.* = .{
            .val = val,
            .left = null,
            .right = null,
        };
        return node;
    }

    pub fn deinit(self: *Node, allocator: std.mem.Allocator) void {
        if (self.left) |left| left.deinit(allocator);
        if (self.right) |right| right.deinit(allocator);
        allocator.destroy(self);
    }
};

/// 💻 DRIVER: Sua lógica de busca começa aqui!
/// Retorne 'true' se o valor for encontrado, ou 'false' caso contrário.
fn search(root: ?*Node, val: i32) bool {
    // Dica Zig: Use 'if (root) |node|' para "desembrulhar" o ponteiro opcional.
    
    _ = root; // Evita erro de variável não usada
    _ = val;
    
    return false;
}

pub fn main() !void {
    var gpa = std.heap.GeneralPurposeAllocator(.{}){};
    defer _ = gpa.deinit();
    const allocator = gpa.allocator();

    std.debug.print("--- Coding Dojo 2 (ZIG) ---\n", .{});

    //    10
    //   /  \
    //  5    15
    // / \     \
    //2   7     20
    const root = try Node.init(allocator, 10);
    defer root.deinit(allocator);

    root.left = try Node.init(allocator, 5);
    root.right = try Node.init(allocator, 15);
    root.left.?.left = try Node.init(allocator, 2);
    root.left.?.right = try Node.init(allocator, 7);
    root.right.?.right = try Node.init(allocator, 20);

    std.debug.print("Iniciando testes...\n", .{});

    const t1 = search(root, 7);
    std.debug.print("Teste 1 (Buscar 7): {s}\n", .{if (t1) "✅ PASSOU" else "❌ FALHOU"});

    const t2 = search(root, 10);
    std.debug.print("Teste 2 (Buscar 10): {s}\n", .{if (t2) "✅ PASSOU" else "❌ FALHOU"});

    const t3 = search(root, 99);
    std.debug.print("Teste 3 (Buscar 99): {s}\n", .{if (!t3) "✅ PASSOU" else "❌ FALHOU"});
}
