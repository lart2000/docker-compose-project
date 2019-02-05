package models

import (
	"encoding/json"
	"time"

	"github.com/gobuffalo/pop"
	"github.com/gobuffalo/uuid"
	"github.com/gobuffalo/validate"
	"github.com/gobuffalo/validate/validators"
)

type Message struct {
	ID         uuid.UUID `json:"id" db:"id"`
	CreatedAt  time.Time `json:"created_at" db:"created_at"`
	UpdatedAt  time.Time `json:"updated_at" db:"updated_at"`
	Content    string    `json:"content" db:"content"`
	Title      string    `json:"title" db:"title"`
	Image      string    `json:"image" db:"image"`
	CustomerID uuid.UUID `json:"customer_id" db:"customer_id"`
}

// String is not required by pop and may be deleted
func (m Message) String() string {
	jm, _ := json.Marshal(m)
	return string(jm)
}

// Messages is not required by pop and may be deleted
type Messages []Message

// String is not required by pop and may be deleted
func (m Messages) String() string {
	jm, _ := json.Marshal(m)
	return string(jm)
}

// Validate gets run every time you call a "pop.Validate*" (pop.ValidateAndSave, pop.ValidateAndCreate, pop.ValidateAndUpdate) method.
// This method is not required and may be deleted.
func (m *Message) Validate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.Validate(
		&validators.StringIsPresent{Field: m.Content, Name: "Content"},
		&validators.StringIsPresent{Field: m.Title, Name: "Title"},
		&validators.StringIsPresent{Field: m.Image, Name: "Image"},
	), nil
}

// ValidateCreate gets run every time you call "pop.ValidateAndCreate" method.
// This method is not required and may be deleted.
func (m *Message) ValidateCreate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.NewErrors(), nil
}

// ValidateUpdate gets run every time you call "pop.ValidateAndUpdate" method.
// This method is not required and may be deleted.
func (m *Message) ValidateUpdate(tx *pop.Connection) (*validate.Errors, error) {
	return validate.NewErrors(), nil
}
