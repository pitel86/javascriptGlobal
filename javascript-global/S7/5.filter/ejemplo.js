var pilots = [
  { id: 2, name: "Wedge Antilles", faction: "Rebels", status: "Alive" },
  { id: 8, name: "Ciena Ree", faction: "Empire", status: "Dead" },
  { id: 40, name: "Iden Versio", faction: "Empire", status: "Alive" },
  { id: 66, name: "Thane Kyrell", faction: "Rebels", status: "Dead" },];

/* var rebels = pilots.filter(function (pilot) {
    
     return pilot.faction === "Rebels";
    
    }); */

const rebels = pilots.filter((pilot) => pilot.faction === "Rebels");

const empire = pilots.filter((pilot) => pilot.faction === "Empire");

const aliveRebels = pilots.filter(
  (pilot) => pilot.faction === "Rebels" && pilot.status === "Alive"
);

const startWithTRebelDead66 = pilots.filter(
  (pilot) =>
    pilot.id === 66 &&
    pilot.name[0] === "T" &&
    pilot.faction === "Rebels" &&
    pilot.status === "Dead"
);

console.log(rebels);

console.log(aliveRebels);

console.log(startWithTRebelDead66);
