@echo off
set filename1=%1
set filename2=%2
set filename3=%3
set filename4=%4
cls
if /I "%filename1%"=="" (
   nodemon --exec "cls && electron ."
) else (
    if /I "%filename2%"=="" (
        nodemon --watch %filename1% --exec "cls && electron ."
    ) else (
        if /I "%filename3%"=="" (
            nodemon --watch %filename1% --watch %filename2% --exec "cls && electron ."    
        ) else (
            if /I "%filename4%"=="" (
                nodemon --watch %filename1% --watch %filename2% --watch %filename3% --exec "cls && electron ."    
            ) else (
                nodemon --watch %filename1% --watch %filename2% --watch %filename3% --watch %filename4% --exec "cls && electron ."
            )
        )
    )
)