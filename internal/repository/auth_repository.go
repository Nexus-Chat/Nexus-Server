package repository

import (
	"context"
	"errors"

	"github.com/kavkaco/Kavka-Core/database"
	"github.com/kavkaco/Kavka-Core/internal/model"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
)

var ErrAuthNotFound = errors.New("auth not found")

type AuthRepository interface {
	Create(ctx context.Context, userID model.UserID, passwordHash string) (*model.Auth, error)
	GetUserAuth(ctx context.Context, userID model.UserID) (*model.Auth, error)
	ChangePassword(ctx context.Context, userID model.UserID, passwordHash string) error
}

type authRepository struct {
	authCollection *mongo.Collection
}

func NewAuthRepository(db *mongo.Database) AuthRepository {
	return &authRepository{db.Collection(database.AuthCollection)}
}

func (a *authRepository) Create(ctx context.Context, userID model.UserID, passwordHash string) (*model.Auth, error) {
	authModel := model.Auth{
		UserID:              userID,
		PasswordHash:        passwordHash,
		FailedLoginAttempts: 0,
		AccountLockedFor:    nil,
	}

	_, err := a.authCollection.InsertOne(ctx, authModel)
	if err != nil {
		return nil, err
	}

	return &authModel, nil
}

func (a *authRepository) GetUserAuth(ctx context.Context, userID model.UserID) (*model.Auth, error) {
	result := a.authCollection.FindOne(ctx, bson.M{"user_id": userID})
	if errors.Is(result.Err(), mongo.ErrNoDocuments) {
		return nil, ErrAuthNotFound
	} else if result.Err() != nil {
		return nil, result.Err()
	}

	var authModel model.Auth
	err := result.Decode(&authModel)
	if err != nil {
		return nil, err
	}

	return &authModel, nil
}

func (a *authRepository) ChangePassword(ctx context.Context, userID model.UserID, passwordHash string) error {
	result := a.authCollection.FindOneAndUpdate(ctx, bson.M{"user_id": userID}, bson.M{"$set": bson.M{"password_hash": passwordHash}})
	if result.Err() != nil {
		return result.Err()
	}

	return nil
}