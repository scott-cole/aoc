package main

import (
	"log"
	"os"
)


func main() {
	inputs, err := os.ReadFile("./inputs.txt")
	if err != nil {
		log.Fatal(err)
	}
	os.Stdout.Write(inputs)
}

// locationId = number 

// 2 list of numbers 

// compare smallest number from each list to see hwo far apart they are,
// then 2nd smallest with 2nd smallest etc

// add up distances to find total distance between lists 
