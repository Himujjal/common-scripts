@echo off
del /f E:\my_code\mongodb\log\mongod.log
"C:\Program Files\MongoDB\Server\4.2\bin\mongod" --port 27017 --dbpath E:\my_code\mongodb\data\db --logpath=E:\my_code\mongodb\log\mongod.log