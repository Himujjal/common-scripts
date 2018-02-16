@echo off
set source=%1
set destination=%2
xcopy %source% %destination% /s /h /e /k /f /c