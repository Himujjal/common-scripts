@echo off
nodemon -e rs,toml --exec "cls && cargo fmt && cargo run" --watch "src/*.rs" --watch cargo.toml
