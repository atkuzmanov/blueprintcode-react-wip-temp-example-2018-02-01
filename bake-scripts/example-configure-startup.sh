#! /bin/bash

echo ">>> Executing example-configure-startup.sh bake-script... "

sed -i.bkp  '/\[Service\]/a EnvironmentFile=/etc/sysconfig/blueprintcode' /usr/lib/blueprintcode/blueprintcode.service

echo ">>> Finished executing example-configure-startup.sh bake-script."


