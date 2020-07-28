#!/usr/bin/env python

import sys
import json
import pipes

config = json.load(open(sys.argv[1]))

with open("/etc/sysconfig/blueprintcode", "w+") as f:
     for key, value in config["configuration"].items():
         f.write("%s=%s\n" % (key, pipes.quote(value)))
     for key, value in config["secure_configuration"].items():
         f.write("%s=%s\n" % (key, pipes.quote(value)))


