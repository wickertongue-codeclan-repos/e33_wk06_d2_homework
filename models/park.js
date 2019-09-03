const Dinosaur = require('./dinosaur');

const Park = function () {
  this.name = "Jurassic Park";
  this.ticketprice = 150;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
}

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
}

Park.prototype.findMostPopularDinosaur = function () {
  let dinosaurs;
  dinosaurs = this.dinosaurs.sort();
  return this.dinosaurs.shift();
}

Park.prototype.findAllDinosaursBySpecies = function (species) {
  let foundDinosaurs = [];
  for (const dinosaur of this.dinosaurs) {
    if (dinosaur.species === species) {
      foundDinosaurs.push(dinosaur);
    }
  }
  return foundDinosaurs;
}

Park.prototype.totalNumOfVisitorsPerDay = function () {
  let totalVisitors = 0;
  for (const dinosaur of this.dinosaurs) {
    totalVisitors += dinosaur.guestsAttractedPerDay;
  }
  return totalVisitors;
}

Park.prototype.totalNumofVisitorsPerYear = function () {
  const totalVisitorsPerYear = (this.totalNumOfVisitorsPerDay() * 365);
  return totalVisitorsPerYear;
}

Park.prototype.totalRevenueForYear = function () {
    const totalRevenueForYear = (this.totalNumofVisitorsPerYear() * this.ticketprice);
    return totalRevenueForYear;
}

module.exports = Park;
