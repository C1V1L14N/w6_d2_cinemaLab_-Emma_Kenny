const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  })
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  })
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport)
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance)
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance;
  }, 0);
};


//I could not make this work.
// Traveller.prototype.getUniqueModesOfTransport = function () {
//   return this.journeys.map((journey) => {
//     return new Set(journey.transport)
//   })
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const unique = [...new Set(this.journeys.map(journey => journey.transport))];
  return unique;
  };



module.exports = Traveller;
