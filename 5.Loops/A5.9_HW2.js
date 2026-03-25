console.log("A5.9_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

function printBookDetails(book){
  console.log("1.1")
  if(book.pages >= 500){
    console.log("The book,", book.title, ",is long.")
  }else{
    console.log("The book,", book.title,",is not long.")
  }

  console.log("---- ---- ----")
  console.log("1.2")
  book.cover = "Hard Cover"
  console.log("The book,",book.title,",has",book.cover,".")

  console.log("---- ---- ----")
  console.log("1.3")
  if(book.cover === "Hard Cover" && book.pages > 300){
    console.log("The book,",book.title,",is heavy.")
  }else{
    console.log("The book,",book.title,",is not heavy")
  }
}

const book = {
  title: "The Great Gatsby",
  author: "F.Scott Fitzgerald",
  genre: "Fiction, Classic",
  pages: 650
}

printBookDetails(book)

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

function printWeatherData(weatherData){

  console.log("2.1")
  console.log("Weather Data:",weatherData)

  console.log("2.2")
  const newWeatherData = {...weatherData}
  console.log("Are newWeatherData and weatherData the same object?",newWeatherData === weatherData)

  console.log("2.3")
  if(newWeatherData.humidity > 65){
    newWeatherData.weatherCondition = "Cloudy"
    console.log(newWeatherData)
  }
}

const weatherData = {
  city: "Tokyo",
  temperature: "28°C",
  humidity: 70,
  weatherCondition: "Partly Cloudy"
}

printWeatherData(weatherData)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

function bookDetails(book1,book2){
  if(book1.pages > book2.pages){
    return true
  }else{
    return false
  }
}

const book1 = {
  title: "To Kill a Mockingbird",
  pages: 281
}

const book2 = {
  title: "1984",
  pages: 328
}

console.log("Does `To Kill a Mockingbird` have more pages than `1984`?",bookDetails(book1,book2))

console.log("---- ---- ----")
console.log("Exercise 4")

function compareBooks(book3, book4){
  
  console.log("4.1")
  console.log("Book 1:", book3);
  console.log("Book 2:", book4);

  console.log("---- ---- ----")
  console.log("4.2")
  if(book3.pages > book4.pages){
    console.log(book3.title, "is thicker than", book4.title)
  }else{
    console.log(book4.title,"is thicker than", book3.title)
  }

  console.log("---- ---- ----")
  console.log("4.3")
  if(book3.author === book4.author){
    console.log("Both books are written by same author,",book3.author)
  }else{
    console.log("The books are written by different authors.")
  }
}

const book3 = {
  title: "Animal Farm",
  author: "George Orwell",
  pages: 140
};

const book4 = {
  title: "Coming Up for Air",
  author: "George Orwell",
  pages: 210
};

compareBooks(book3,book4)


