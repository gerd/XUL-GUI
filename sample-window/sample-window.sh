#!/bin/sh

# make the invoke of the program working independent from the syntax and place
# of the sources
cd `dirname $0`

firefox -app `pwd`/application.ini -no-remote
