filename=$1
nodemon --watch ${filename}.c --exec "cls && sh c-opencl-build.sh ${filename} && ${filename}.exe"