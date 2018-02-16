@echo off
set entryfilename=%1
set filename1=%2
set filename2=%3
set filename3=%4
cls
if /I "%filename1%"=="" (
    nodemon --exec "cls && rustc %entryfilename%.rs && %entryfilename%" --watch %entryfilename%.rs
) else (
    if /I "%filename2%"=="" (
        nodemon --exec "cls && rustc %entryfilename%.rs && %entryfilename%" --watch %entryfilename%.rs --watch %filename1%.rs
    ) else (
        if /I "%filename3%"=="" (
            nodemon --exec "cls && rustc %entryfilename%.rs && %entryfilename%" --watch %entryfilename%.rs --watch %filename1%.rs --watch %filename2%.rs
        ) else (
            nodemon --exec "cls && rustc %entryfilename%.rs && %entryfilename%" --watch %entryfilename%.rs --watch %filename1%.rs --watch %filename2%.rs --watch %filename3%.rs
        )
    )
)
