@echo off
set filename=%1
cls
nodemon --watch %filename%.c --exec "cls && c-opencl-build %filename% && %filename%.exe"