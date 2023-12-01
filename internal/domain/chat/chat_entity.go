package chat

import (
	"github.com/kavkaco/Kavka-Core/internal/domain/message"
	"github.com/kavkaco/Kavka-Core/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

const (
	TypeChannel = "channel"
	TypeGroup   = "group"
	TypeDirect  = "direct"
)

// type StaticID = primitive.ObjectID
type Chat struct {
	ChatID     primitive.ObjectID `bson:"id"          json:"chatId"`
	ChatType   string             `bson:"chat_type"   json:"chatType"`
	ChatDetail interface{}        `bson:"chat_detail" json:"chatDetail"`
	Messages   []*message.Message `bson:"messages"    json:"messages"`
}

// Chat Detail

type ChannelChatDetail struct {
	Title        string               `bson:"title" json:"title"`
	Members      []primitive.ObjectID `bson:"members" json:"members"`
	Admins       []primitive.ObjectID `bson:"admins" json:"admins"`
	Owner        primitive.ObjectID   `bson:"owner"         json:"owner"`
	RemovedUsers []primitive.ObjectID `bson:"removed_users" json:"removedUsers"`
	Username     string               `bson:"username" json:"username"`
	Description  string               `bson:"description" json:"description"`
}

type GroupChatDetail struct {
	Title        string               `json:"title"`
	Members      []primitive.ObjectID `json:"members"`
	Admins       []primitive.ObjectID `json:"admins"`
	Owner        primitive.ObjectID   `bson:"owner"         json:"owner"`
	RemovedUsers []primitive.ObjectID `bson:"removed_users" json:"removedUsers"`
	Username     string               `json:"username"`
	Description  string               `json:"description"`
}

type DirectChatDetail struct {
	// ID of the users that chats with each other
	Sides [2]primitive.ObjectID `json:"sides"`
}

func (c *Chat) IsMember(staticID primitive.ObjectID) bool {
	d, _ := utils.TypeConverter[ChannelChatDetail](c.ChatDetail)
	for _, member := range d.Members {
		if member.Hex() == staticID.Hex() {
			return true
		}
	}

	return false
}

func (c *Chat) IsAdmin(staticID primitive.ObjectID) bool {
	d, _ := utils.TypeConverter[ChannelChatDetail](c.ChatDetail)
	for _, admin := range d.Admins {
		if admin.Hex() == staticID.Hex() {
			return true
		}
	}

	return false
}

func (d *DirectChatDetail) HasSide(staticID primitive.ObjectID) bool {
	has := false
	for _, v := range d.Sides {
		if v == staticID {
			has = true
			break
		}
	}
	return has
}

func NewChat(chatType string, chatDetail interface{}) *Chat {
	m := &Chat{}

	m.ChatType = chatType
	m.ChatDetail = chatDetail
	m.ChatID = primitive.NewObjectID()
	m.Messages = []*message.Message{}

	return m
}

//  Interfaces

type Repository interface {
	Create(newChat Chat) (*Chat, error)
	Where(filter bson.M) ([]Chat, error)
	Destroy(chatID primitive.ObjectID) error
	FindByID(staticID primitive.ObjectID) (*Chat, error)
	FindChatOrSidesByStaticID(staticID primitive.ObjectID) (*Chat, error)
	FindBySides(sides [2]primitive.ObjectID) (*Chat, error)
}

type Service interface {
	GetChat(staticID primitive.ObjectID) (*Chat, error)
	CreateDirect(userStaticID primitive.ObjectID, targetStaticID primitive.ObjectID) (*Chat, error)
	CreateGroup(userStaticID primitive.ObjectID, title string, username string, description string) (*Chat, error)
	CreateChannel(userStaticID primitive.ObjectID, title string, username string, description string) (*Chat, error)
}
