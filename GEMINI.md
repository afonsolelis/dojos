# Project Overview

This project is a collection of "Coding Dojos" and training materials focused on algorithm complexity, data structures, and software engineering exercises. It supports multiple languages including JavaScript, C, and Rust.

## Main Technologies
- **JavaScript**: Primary language for initial dojo exercises (using Jest).
- **C**: Used for Dojo 02 (Trees and Graphs) with simple `assert`-based tests.
- **Rust**: A separate exploratory project in `hello_rust/`.
- **Reveal.js**: Used in the HTML files (e.g., `dojo1-complexidade.html`, `dojo2-estruturas.html`) for presentations.

# Directory Structure

- `src/`: Subdirectories for coding dojos (JS and C).
- `desafio_dojo_2/`: Main challenge folder for Dojo 02 in **Zig**.
  - `src/main.zig`: Source code.
  - `build.zig`: Zig build system.
- `hello_rust/`: Standalone Rust project.

# Building and Running

## Zig (Dojo 02 Challenge)
To build and run the Zig challenge (requires Zig compiler):
```bash
cd desafio_dojo_2
zig build run
```

## JavaScript (Dojos 01-03)
```bash
npm test
```

## C (Dojos 04-05)
```bash
cd src/04-bfs-dfs && make
```

## Rust
To build the Rust project:
```bash
cd hello_rust
cargo build
```
To run the Rust project:
```bash
cd hello_rust
cargo run
```

# Development Conventions

- **Dojo Format**: Each challenge is isolated in its own folder within `src/`. It contains an implementation file (`index.js`) and a test file (`index.test.js`).
- **TDD Flow**: Start by reading the `index.test.js` to understand the requirements, then implement the solution in `index.js` until the tests pass.
- **Simplicity First**: Exercises usually suggest starting with a "Brute Force" solution and then optimizing for complexity.
