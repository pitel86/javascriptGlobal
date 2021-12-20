const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];


const citiesNames = cities.map(city => city.isVisited ? city.name + "--Visitada": city.name + "--No Visitada");

console.log(citiesNames);