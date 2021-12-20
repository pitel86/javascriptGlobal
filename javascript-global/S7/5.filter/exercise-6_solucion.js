const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lolStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    streamer.age > 35
      ? (streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase())
      : streamer.gameMorePlayed;
    return streamer;
  }
});

/*const lolStreamers = streamers.filter((streamer) => 
  streamer.gameMorePlayed.includes("Legends")
);

for (let i = 0; i < lolStreamers.length; i++) {
    if(lolStreamers[i].age > 35){
        lolStreamers[i].gameMorePlayed = lolStreamers[i].gameMorePlayed.toUpperCase()
    }
}*/

console.log(lolStreamers);
