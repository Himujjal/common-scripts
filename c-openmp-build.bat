@echo off
set filename=%1
gcc %filename%.c -w -Wno-write-strings -fopenmp -std=c11  -o %filename%.exe 