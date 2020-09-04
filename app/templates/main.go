package main

import (

	"<%= projectName %>/models/form/caller"
	"<%= projectName %>/models/form/validationCaller"
	gridCaller "<%= projectName %>/models/grid/caller"
	"github.com/khankhulgun/khankhulgun"
	"github.com/khankhulgun/khankhulgun/dbToStruct"
    "<%= projectName %>/<%= serviceName %>"
)

func main() {


	app := khankhulgun.New("<%= projectName %>", gridCaller.GetMODEL, caller.GetMODEL, validationCaller.GetMessages, validationCaller.GetRules, true)

    <%= serviceName %>.Set(app.Echo)

	dbToStruct.GetStruct("")

	/*MIDDLEWARE*/
	//App.Echo.Use(middleware.Recover())
	//App.Echo.Use(middleware.Logger())

	app.Start()

}

