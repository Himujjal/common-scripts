@echo off
set filename=%1
nodemon --watch %filename%.go -e go --exec "cls && gobuild %filename% && .\%filename%.exe"
