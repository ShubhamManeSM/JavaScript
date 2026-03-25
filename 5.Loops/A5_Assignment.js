console.log("A5_Assignment");
console.log("---- ---- ----");
console.log("1.1");
console.log("---- ---- ----");

const movies = [
  {
    name: "Kabhi Khushi Kabhi Gham",
    genre: "Drama",
    boxOffice: 500,
    satelliteRights: 120,
    ottRights: 70,
    musicRights: 20,
  },
  {
    name: "Dilwale Dulhania Le Jayenge",
    genre: "Romance",
    boxOffice: 550,
    satelliteRights: 130,
    ottRights: 80,
    musicRights: 25,
  },
  {
    name: "3 Idiots",
    genre: "Comedy",
    boxOffice: 600,
    satelliteRights: 140,
    ottRights: 90,
    musicRights: 30,
  },
  {
    name: "Bajrangi Bhaijaan",
    genre: "Action",
    boxOffice: 700,
    satelliteRights: 160,
    ottRights: 100,
    musicRights: 40,
  },
  {
    name: "Padmaavat",
    genre: "Historical",
    boxOffice: 800,
    satelliteRights: 180,
    ottRights: 110,
    musicRights: 45,
  },
];

for(let i = 0; i < movies.length;i++){
  console.log(movies[i])
}

console.log("1.2");

function calculateTotalCost(data) {
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    movie.totalCost =
      movie.boxOffice +
      movie.satelliteRights +
      movie.ottRights +
      movie.musicRights;
  }
}

calculateTotalCost(movies);
console.log(movies);


console.log("1.3");

function printMovieCostCards(data) {
  console.log("===== Movie Cost Card =====");
  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    console.log("Name: " + movie.name);
    console.log("Genre: " + movie.genre);
    console.log("Total Cost: " + movie.totalCost);
    console.log("------");
  }
}

printMovieCostCards(movies);

console.log("1.4");

function printMovieReport(data) {
  let mostExpensive = data[0];
  let totalCostAll = 0;
  let totalBoxOffice = 0;
  let totalSatellite = 0;
  let totalOTT = 0;
  let totalMusic = 0;

  for (let i = 0; i < data.length; i++) {
    const movie = data[i];
    totalCostAll += movie.totalCost;
    totalBoxOffice += movie.boxOffice;
    totalSatellite += movie.satelliteRights;
    totalOTT += movie.ottRights;
    totalMusic += movie.musicRights;

    if (movie.totalCost > mostExpensive.totalCost) {
      mostExpensive = movie;
    }
  }

  const n = data.length;

  console.log("====== Movie Report =====");
  console.log("Most Expensive Movie");
  console.log("------");
  console.log("Name: " + mostExpensive.name);
  console.log("Genre: " + mostExpensive.genre);
  console.log("Total Cost: " + mostExpensive.totalCost);

  console.log("\nMovies Average");
  console.log("-----");
  console.log("Total Cost of All Movies: " + totalCostAll);
  console.log("Total Average Cost of all movies: " + (totalCostAll / n));
  console.log("------");
  console.log("Total Box Office Average: " + (totalBoxOffice / n));
  console.log("Total Satellite Rights Average: " + (totalSatellite / n));
  console.log("Total OTT Average: " + (totalOTT / n));
  console.log("Total Music Rights Average: " + (totalMusic / n));
}

printMovieReport(movies);