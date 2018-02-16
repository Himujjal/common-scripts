@echo off
set filename=%1
g++ %filename%.cc -Wno-write-strings -w -I"%AMDAPPSDKROOT%include"  -L "%AMDAPPSDKROOT%lib\x86_64" -lOpenCL -o %filename%.exe 