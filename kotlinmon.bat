@echo off
SET file1=%1
SET file2=%2
SET file3=%3
SET file4=%4
SET file5=%5
echo %file1% %file2% %file3% %file4% %file5%
IF /I "%file2%"=="" (
    nodemon -e kt --watch *.kt --exec "cls && kotlinc %file1%.kt -include-runtime -d %file1%.jar && java -jar %file1%.jar"
) ELSE (
    IF /I "%file3%"=="" (
        nodemon -e kt --watch *.kt --exec "cls && kotlinc %file1%.kt %file2%.kt -include-runtime -d %file1%.jar && java -jar %file1%.jar"
    ) ELSE (
        IF /I "%4"=="" (
            nodemon -e kt --watch *.kt --exec "cls && kotlinc %file1%.kt %file2%.kt %file3%.kt -include-runtime -d %file1%.jar && java -jar %file1%.jar"
        ) ELSE (
            IF /I "%5"=="" (
                nodemon -e kt --watch *.kt --exec "cls && kotlinc %file1%.kt %file2%.kt %file3%.kt %file4%.kt -include-runtime -d %file1%.jar && java -jar %file1%.jar"
            ) ELSE (
                nodemon -e kt --watch *.kt --exec "cls && kotlinc %file1%.kt %file2%.kt %file3%.kt %file4%.kt %file5%.kt -include-runtime -d %file1%.jar && java -jar %file1%.jar"
            )
        )
    )

)
