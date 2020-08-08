@echo off
set filename=%1
nodemon --watch %filename%.py -e py --exec "python %filename%.py"

