const movie = [
  {id: 1, title: "The Shawshank Redemption", genre: "Drama", year: 1994},
  {id: 2, title: "The Godfather", genre: "Crime", year: 1972},
  {id: 3, title: "The Dark Knight", genre: "Action", year: 2008},
  {id: 4, title: "Pulp Fiction", genre: "Crime", year: 1994},
]


const movieListingDiv = document.querySelector("#movieList")

const movieListHTML = movie.map(movies => `
<div>
<strong>ID:</strong> ${movies.id}<br>
<strong>Title:</strong> ${movies.title}<br>
<strong>Genre:</strong> ${movies.genre}<br>
<strong>Year:</strong> ${movies.year}<br>
<hr>
</div>
`
)

movieListingDiv.innerHTML = movieListHTML.join('')