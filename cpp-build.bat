@echo off
set filename=%1
set filename2=%2
if /I "%filename2%"=="" (
    g++ -w -std=c++14 %filename%.cc -o %filename%.exe
) ELSE (
    g++ -w -std=c++14 %filename2%.cc %filename%.cc -o %filename%.exe
)
