@echo off
set filename=%1
set arg1=%2
set arg2=%3
set arg3=%4
gobuild %filename% && .\%filename%.exe %arg1% %arg2% %arg3%