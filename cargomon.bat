@echo off
nodemon --exec "cargo-build && cargo-run" --watch "src/*.*"