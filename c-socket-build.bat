@echo off
set filename=%1
set filename2=%2
if /I "%filename2%"=="" (
    gcc -w -std=c11 %filename%.c -lws2_32 -o %filename%.exe
) ELSE (
    gcc -w %filename2%.c %filename%.c -lws2_32 -o %filename%.exe
)
