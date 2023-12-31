const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
    let park
    let dinosaur1
    let dinosaur2
    let dinosaur3
    let dinosaur4
  
  
  beforeEach(function () {
    dinosaur1 = new Dinosaur("T-rex", "Carnivore", 50)
    dinosaur2 = new Dinosaur("Stegasaurus", "Herbivore", 30)
    dinosaur3 = new Dinosaur("Velociraptor", "Carnivore", 40)
    dinosaur4 = new Dinosaur("Velociraptor", "Carnivore", 38)
    park = new Park("Jurassic Park", 300)
  })


  it('should have a name', function () {
    const expectedName = "Jurassic Park"
    const actualName = park.name 
    assert.deepStrictEqual(actualName, expectedName)
  })

  it('should have a ticket price', function () {
    const expectedTicketPrice = 300
    const actualTicketPrice = park.ticketprice
    assert.deepStrictEqual(actualTicketPrice, expectedTicketPrice)
  });

  it('should have a collection of dinosaurs', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const expectedDinos = [dinosaur1, dinosaur2, dinosaur3, dinosaur4]
    const actualDinos = park.dinosaurs
    assert.deepStrictEqual(actualDinos, expectedDinos)
  });

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
   
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    const mostPopularDinosaur = park.findMostPopularDinosaur()
    
    assert.equal(mostPopularDinosaur.species, "T-rex")
    
  })
  
  
  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const dinosOfCertainSpecies = park.dinosOfCertainSpecies("Velociraptor")
    const expectedDinos = [dinosaur3, dinosaur4]
    assert.deepStrictEqual(dinosOfCertainSpecies, expectedDinos)

  })

  it('should be able to calculate the total number of visitors per day', function () {
    
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const expectedVisitors = 158
    const actualVisitors = park.totalVisitorsPerDay()
    assert.deepStrictEqual(actualVisitors, expectedVisitors)
  
    
  })

  it('should be able to calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const expectedVisitors = 57670
    const actualVisitors = park.totalVisitorsPerYear()
    assert.strictEqual(actualVisitors, expectedVisitors)
  });

  it('should be able to calculate total revenue for one year', function () {
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.addDinosaur(dinosaur3)
    park.addDinosaur(dinosaur4)
    const expectedRevenue = 17301000
    const actualRevenue = park.totalRevenuePerYear()
    assert.deepStrictEqual(actualRevenue,expectedRevenue)
  });

})
