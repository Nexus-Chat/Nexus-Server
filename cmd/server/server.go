package main

import (
	"Kavka/app/middleware"
	"Kavka/app/router"
	"Kavka/config"
	"Kavka/database"
	"Kavka/modules/session"
	repository "Kavka/repository/user"
	"Kavka/service"
	"Kavka/utils/sms_otp"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

const (
	// YAML config file path
	CONFIG_PATH string = "./config/configs.yml"
	// Define templates path (used by: SmsOtpService)
	templatesPath = "./app/views/mail/"
)

func main() {
	// Load Configs
	configs, configErr := config.Read(CONFIG_PATH)
	if configErr != nil {
		panic(configErr)
	}

	// Init MongoDB
	mongoDB, mongoErr := database.GetMongoDBInstance(configs.Mongo)
	if mongoErr != nil {
		panic(mongoErr)
	}

	// Init RedisDB
	redisClient := database.GetRedisDBInstance(configs.Redis)

	// Init WebServer
	app := fiber.New(
		fiber.Config{
			AppName:      configs.App.Name,
			Prefork:      configs.App.Fiber.Prefork,
			ErrorHandler: middleware.ErrorHandler,
		},
	)

	// Config WebServer
	app.Use(cors.New(
		cors.Config{
			AllowOrigins:     configs.App.Fiber.CORS.AllowOrigins,
			AllowCredentials: configs.App.Fiber.CORS.AllowCredentials,
		},
	))

	// ----- Init Services -----
	session := session.NewSession(redisClient, configs.App.Auth)
	smsOtp := sms_otp.NewSMSOtpService(&configs.SMS, templatesPath)

	userRepo := repository.NewUserRepository(mongoDB)
	userService := service.NewUserService(userRepo, session, smsOtp)
	router.NewUserRouter(app.Group("/users"), userService)

	// Everything almost done!
	log.Fatal(
		app.Listen(configs.App.HTTP.Address),
	)
}