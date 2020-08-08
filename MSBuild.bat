@echo off
set args=%*
"%VS_BUILD_TOOLS%\MSBuild\15.0\Bin\MSBuild.exe" %args%