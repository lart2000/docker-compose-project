package grifts

import (
	"github.com/gobuffalo/buffalo"
	"github.com/lart2000/project-backend/actions"
)

func init() {
	buffalo.Grifts(actions.App())
}
