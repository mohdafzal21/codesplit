
// Functional Instantiation with Shared Methods
const animalMethods = {
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  },
  sleep(length) {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  },
  play(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  },
  plays(length) {
    console.log(`${this.name} is playing.`)
    this.energy -= length
  }

}

function Animal (name, energy) {
  let animal = {}
  animal.name = name
  animal.energy = energy
  animal.eat = animalMethods.eat
  animal.sleep = animalMethods.sleep
  animal.play = animalMethods.play
  animal.plays = animalMethods.plays

  return animal
}

const leo = Animal('Leo', 7)
const snoop = Animal('Snoop', 10)