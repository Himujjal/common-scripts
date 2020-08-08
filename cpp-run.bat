@echo off
set filename=%1
set filename2=%2
cls
if /I "%filename2%"=="" (
    nodemon --watch %filename%.cc -e cc --exec "cls && cpp-build %filename% && .\%filename%.exe && echo."
) ELSE (
    nodemon --watch %filename2%.cc -e cc --watch %filename%.cc --watch %filename2%.h --exec "cls && cpp-build %filename% %filename2% && %filename%.exe && echo."
)
