package jwt_manager

import (
	"Kavka/config"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

var jwtManager = NewJwtManager(config.Auth{JWTSecretKey: "sample_secret", OTP_EXPIRE_MINUTE: 1 * time.Second})

func TestJWTGenerateAndVerify(t *testing.T) {
	staticID := primitive.NewObjectID()

	token, generateErr := jwtManager.Generate(staticID)

	assert.Empty(t, generateErr)
	assert.NotEmpty(t, token)

	cases := []struct {
		name  string
		token string
		err   error
	}{
		{
			name:  "valid",
			token: token,
			err:   nil,
		},
		{
			name:  "not_valid",
			token: "akdmakldmakldmaldalkdm",
			err:   ErrInvalidToken,
		},
	}

	for _, tt := range cases {
		t.Run(tt.name, func(t *testing.T) {
			_, verifyErr := jwtManager.Verify(tt.token)
			assert.Equal(t, verifyErr, tt.err)
		})
	}
}