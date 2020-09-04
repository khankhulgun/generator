package main

import (
	"github.com/khankhulgun/khankhulgun/modelinit"
	"os"
	"strings"
)

func main() {

	dir, _ := os.Getwd()
	paths := strings.Split(dir, "/")
	moduleName:= paths[len(paths)-1]

	modelinit.ModelInit(dir, moduleName)

}
