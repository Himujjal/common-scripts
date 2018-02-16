@echo off
set filename=%1
set filename2=%2
if /I "%filename2%"=="" (
    gcc -w %filename%.c -o %filename%.exe
) ELSE (
    gcc -w %filename2%.c %filename%.c -o %filename%.exe
)
