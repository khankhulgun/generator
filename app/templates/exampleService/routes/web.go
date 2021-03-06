package routes

import (
	"github.com/labstack/echo/v4"
	"<%= projectName %>/<%= serviceName %>/handlers"
	"github.com/foolin/goview/supports/echoview-v4"
	"github.com/foolin/goview"
	"html/template"
	"github.com/khankhulgun/khankhulgun/tools"
)

func Web(e *echo.Echo) {

	mix := tools.FrontMix("front-end-path/manifest.json")
	viewMiddleware := echoview.NewMiddleware(goview.Config{
		Root:      "<%= serviceName %>/templates", //template root path
		Extension: ".html",
		Funcs: template.FuncMap{
			"data": handlers.HomeData,
			"mix": func(index string) string {
				return tools.CallMix(index, mix)
			},
		},
	})
	//homepage
	e.GET("/", handlers.HomeProduction, viewMiddleware)     //undsen
	e.GET("/dev", handlers.HomeDevelopment, viewMiddleware) // hogjuulelt
}
