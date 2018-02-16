@echo off
set entryfilename=%1
set filename1=%2
set filename2=%3
set filename3=%4
cls
if /I "%filename1%"=="" (
    nodemon --exec "cls && node %entryfilename%.js" --watch %entryfilename%.js
) else (
    if /I "%filename2%"=="" (
        nodemon --exec "cls && rustc %entryfilename%.js " --watch %entryfilename%.js --watch %filename1%.js
    ) else (
        if /I "%filename3%"=="" (
            nodemon --exec "cls && rustc %entryfilename%.js" --watch %entryfilename%.js --watch %filename1%.js --watch %filename2%.js
        ) else (
            nodemon --exec "cls && rustc %entryfilename%.js" --watch %entryfilename%.js --watch %filename1%.js --watch %filename2%.js --watch %filename3%.js
        )
    )
)
