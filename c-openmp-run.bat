@echo off
set filename=%1
set threads=%2
cls
if /I "%threads%"=="" (
    nodemon --watch %filename%.c --exec "cls && c-openmp-build %filename% && %filename%.exe"
) else (
    nodemon --watch %filename%.c --exec "cls && c-openmp-build %filename% && set OMP_NUM_THREADS=%threads%  && %filename%.exe"   
)