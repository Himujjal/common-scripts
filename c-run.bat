@echo off
set filename=%1
set filename2=%2
cls
if /I "%filename2%"=="" (
    nodemon --watch %filename%.c -e c --exec "cls && gcc -w %filename%.c -o %filename%.exe && %filename%.exe"
) ELSE (
    nodemon --watch %filename2%.c -e c --watch %filename%.c --watch %filename2%.h --exec "cls && gcc -w %filename2%.c %filename%.c -o %filename%.exe && %filename%.exe"
)
