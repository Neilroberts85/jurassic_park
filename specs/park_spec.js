const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    let park
  beforeEach(function () {
    park = new Park("Jurassic Park", 300, [])
  })


  xit('should have a name');

  xit('should have a ticket price');

  xit('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur('T-rex')
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, ['T-rex'])
  })



  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur('T-rex')
    park.removeDinosaur('T-rex')
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
  })


  it('should be able to find the dinosaur that attracts the most visitors', function () {
    const dinosaur1 = new Dinosaur("T-rex", "Carnivore", 50)
    const dinosaur2 = new Dinosaur("Stegasaurus", "Herbivore", 30)
    const dinosaur3 = new Dinosaur("Velociraptor", "Carnivore", 40)
    const park1 = new Park("Jurassic Park", 300, [])
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const mostPopularDinosaur = park.findMostPopularDinosaur()
    
    assert.equal(mostPopularDinosaur.species, "T-rex")
    assert.equal(mostPopularDinosaur.guestsAttractedPerDay, 50)

  
  })
  
  
  })
  xit('should be able to find all dinosaurs of a particular species', function () {
    
  })

  xit('should be able to calculate the total number of visitors per day');

  xit('should be able to calculate the total number of visitors per year');

  xit('should be able to calculate total revenue for one year');


