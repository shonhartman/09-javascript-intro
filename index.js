var teamOffensiveRebounds;
var teamDefensiveRebounds;
var teamChargesDrawn;
var teamBlocks;
var teamSteals;

var kansasOffensiveRebounds = 9.2;
var kansasDefensiveRebounds = 25.6;
var kansasBlocks = 4;
var kansasSteals = 6.8;
var kansasTurnoverPercentage = 15.4;

var firstSeed = "Kansas";
var sixteenSeed = "Austin Peay";
var twoSeed = "Villanova";
var fifteenSeed = "UNC Ashville";
var threeSeed = "Miami";

var aPeayOffensiveRebounds = 9.9;
var aPeayDefensiveRebounds = 23.3;
var aPeayBlocks = 2.8;
var aPeaySteals = 6.9;
var aPeayTurnoverPercentage = 17.6;

Boolean(kansasOffensiveRebounds > aPeayOffensiveRebounds);
Boolean(kansasOffensiveRebounds < aPeayOffensiveRebounds);
Boolean(kansasDefensiveRebounds > aPeayDefensiveRebounds);
Boolean(kansasBlocks > aPeayBlocks);
Boolean(kansasSteals < aPeaySteals);

if (kansasOffensiveRebounds > aPeayOffensiveRebounds) {
  console.log("Kansas gets a point");
}
else {
  console.log("Austin Peay gets a point");
}

if (kansasDefensiveRebounds > aPeayDefensiveRebounds) {
  console.log("Kansas gets a point");
}
else {
  console.log("Austin Peay gets a point");
}

for (var i = 0; i < 11; i++) {
  console.log[i];
}
