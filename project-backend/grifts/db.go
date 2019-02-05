package grifts

import (
	"github.com/markbates/grift/grift"
	"syreclabs.com/go/faker"
	"fmt"
)



var _ = grift.Namespace("db", func() {

	grift.Desc("seed", "Seeds a database")
	grift.Add("seed", func(c *grift.Context) error {
		// Add DB seeding stuff here
		sel :=faker.RandomChoice([]string{"sad","asd"})
		fmt.Println(sel)
		return nil
	})

})
