filename=$1
gcc ${filename}.c -w -Wno-write-strings -std=c11 -I"${AMDAPPSDKROOT}include"  -L "${AMDAPPSDKROOT}lib\x86_64" -lOpenCL -o ${filename}.exe 
 