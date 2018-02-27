@echo off
set filename=%1
set filename2=%2
if /I "%filename2%"=="" (
    g++ -w -std=c11 %filename%.cc -lws2_32 -o %filename%.exe
) ELSE (
    g++ -w %filename2%.c %filename%.cc -lws2_32 -o %filename%.exe
)
