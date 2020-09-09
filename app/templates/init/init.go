package main

import (
	"github.com/khankhulgun/khankhulgun/modelinit"
	"os"
)

func main() {

	dir, _ := os.Getwd()

	modelinit.ModelInit(dir, "<%= projectName %>")

}
