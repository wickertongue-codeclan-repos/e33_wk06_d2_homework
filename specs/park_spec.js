const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park
  let dinosaur

  beforeEach(function () {
    park = new Park("Jurassic Park");
    dinosaur = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur1 = new Dinosaur('diplodocus', 'omnivore', 20);
    dinosaur2 = new Dinosaur('velociraptor', 'carnivore', 45);
    dinosaur3 = new Dinosaur('oviraptor', 'carnivore', 5);
    dinosaur4 = new Dinosaur('oviraptor', 'carnivore', 8);
  });

  it('should have a name', function () {
    const actual = park.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park.ticketprice;
    assert.strictEqual(actual, 150);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, [dinosaur]);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    const actual = park.dinosaurs;
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    const actual = park.findMostPopularDinosaur();
    assert.strictEqual(actual, dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.findAllDinosaursBySpecies('oviraptor')
    assert.deepStrictEqual(actual, [dinosaur3, dinosaur4])
  });

  it('should be able to calculate the total number of visitors per day', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    const actual = park.totalNumOfVisitorsPerDay()
    assert.strictEqual(actual, 75)
  });

  it('should be able to calculate the total number of visitors per year', function () {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    const actual = park.totalNumofVisitorsPerYear()
    assert.strictEqual(actual, 27375)
  });

  it('should be able to calculate total revenue for one year', function functionName() {
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur3);
    const actual = park.totalRevenueForYear()
    assert.strictEqual(actual, 4106250)
  });

});
