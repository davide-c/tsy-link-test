 #!/bin/bash 
source ~/.nvm/nvm.sh
unset npm_config_prefix
echo "-> ${1}"
nvm use $1
nvm ls