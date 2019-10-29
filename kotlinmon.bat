@echo off
set filename=%1
nodemon -e kt --watch %filename%.kt --exec "cls && kotlinc %filename%.kt -include-runtime -d %filename%.jar && java -jar %filename%.jar"