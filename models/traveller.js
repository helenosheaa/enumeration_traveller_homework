const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
    return this.journeys.map(journey => journey.endLocation);
};

Traveller.prototype.getModesOfTransport = function () {
  return this.journeys.map(journey => journey.transport);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const foundJourney = this.journeys.filter( journey => journey.transport === transport);
  return foundJourney;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const journeysByMinDistance = this.journeys.filter((journey) => journey.distance > minDistance);
  return journeysByMinDistance;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistanceTravelled = (total, journey) => total + journey.distance;
  return this.journeys.reduce(totalDistanceTravelled, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  return Array.from(new Set( this.getModesOfTransport()))
};

module.exports = Traveller;
