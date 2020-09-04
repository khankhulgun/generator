package handlers

import (
	"github.com/labstack/echo/v4"
	"net/http"
	"github.com/khankhulgun/khankhulgun/DB"
	"<%= projectName %>/<%= serviceName %>/models"
)



func Users(c echo.Context) error {

	users := []models.Users{}

	DB.DB.Find(&users)

	return  c.JSON(http.StatusOK,users)
}