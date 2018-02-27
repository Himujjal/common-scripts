@echo off
set filename=%1
set filename2=%2
cls
if /I "%filename2%"=="" (
    nodemon --watch %filename%.c -e c --exec "cls && c-socket-build %filename% && %filename%.exe"
) ELSE (
    nodemon --watch %filename2%.c -e c --watch %filename%.c --watch %filename2%.h --exec "cls && c-socket-build %filename%.c && %filename%.exe"
)
