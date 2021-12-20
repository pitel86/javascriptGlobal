const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

//const usersName = users.map((user) => getName(user.name));
const usersName = users.map((user) => user.name[0] === "A" ? "Anacleto": user.name);

function getName(name) {
  if (name[0] == "A") {
    return "Anacleto";
  } else {
    return name;
  }
}

console.log(usersName);
