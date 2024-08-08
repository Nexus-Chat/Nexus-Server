package proto_model_transformer

import (
	"github.com/kavkaco/Kavka-Core/internal/model"
	modelv1 "github.com/kavkaco/Kavka-Core/protobuf/gen/go/protobuf/model/user/v1"
)

func UserToProto(user *model.User) *modelv1.User {
	return &modelv1.User{
		UserId:    user.UserID,
		Name:      user.Name,
		LastName:  user.LastName,
		Email:     user.Email,
		Username:  user.Username,
		Biography: user.Biography,
	}
}

func UsersToProto(users []model.User) []*modelv1.User {
	var result []*modelv1.User

	for _, v := range users {
		result = append(result, UserToProto(&v))
	}

	return result
}
