@echo off
set filename=%1
cls
nodemon --watch %filename%.cc --exec "cls && cpp-opencl-build %filename% && %filename%.exe"