@echo off
set projectname=%1
mkdir %projectname% && xcopy "E:\Coding_Files\scripts\c_cpp_properties.json" "%cd%/%projectname%" && cd %projectname% && echo #include^<iostream^> > main.cc && echo using namespace std; >> main.cc && echo. >> main.cc && echo int main() { >> main.cc && @echo       return 0; >> main.cc && echo } >> main.cc && code .