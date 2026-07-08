const smartphones = [
  { brand: "iPhone", year: 2019, cameraResolution: 12.2 },
  { brand: "Samsung", year: 2021, cameraResolution: 13 },
  { brand: "Google Pixel", year: 2018, cameraResolution: 11 },
];

const filteredPhones = smartphones.filter(phone => phone.year > 2020 && phone.cameraResolution > 12)
console.log(filteredPhones)


const books = [
  { title: "The Da Vinci Code", year: 2003, pages: 454 },
  { title: "The Alchemist", year: 1988, pages: 197 },
  { title: "The Hunger Games", year: 2008, pages: 374 },
];

const filteredBooks = books.filter(book => !(book.year < 2005 && book.pages > 400))
console.log(filteredBooks)


const students = [
  { name: "Alice", age: 20, gpa: 3.8 },
  { name: "Bob", age: 17, gpa: 3.2 },
  { name: "Charlie", age: 19, gpa: 3.9 },
];

const filteredStudent = students.filter(student => student.age > 18 && student.gpa > 3.5)
console.log(filteredStudent)


const employeesDetail = [
  { name: "Emily", salary: 55000, hireYear: 2008 },
  { name: "David", salary: 48000, hireYear: 2012 },
  { name: "Grace", salary: 60000, hireYear: 2006 },
];

const filteredEmp = employeesDetail.filter(emp => emp.salary >= 50000 && emp.hireYear >= 2010)
console.log(filteredEmp)



const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Headphones", price: 50, inStock: false },
  { name: "Smartphone", price: 800, inStock: true },
];

const filterProd = products.filter(prod => !(prod.price < 100 && prod.inStock === false))
console.log(filterProd)


const movies = [
  { title: "Inception", year: 2010, rating: 8.8, genre: "Sci-Fi" },
  { title: "The Dark Knight", year: 2008, rating: 9.0, genre: "Action" },
  { title: "Avatar", year: 2009, rating: 7.8, genre: "Adventure" },
  { title: "The Dune", year: 2018, rating: 6.0, genre: "Action" },
];

const filterMovie = movies.filter(movie => !(movie.year < 2010 && movie.rating < 8.0 && movie.genre !== "Action"))
console.log(filterMovie)


const apartments = [
  { location: "Downtown", price: 1600, bedrooms: 2, safeNeighbourhood: true },
  { location: "Suburb", price: 1400, bedrooms: 1, safeNeighbourhood: false },
  { location: "City Center", price: 1800, bedrooms: 3, safeNeighbourhood: true },
];

const filteredApartments = apartments.filter(apartment => 
!(apartment.price < 1500 && !apartment.safeNeighbourhood && apartment.bedrooms < 2));

console.log(filteredApartments);


const product = [
  { name: "Laptop", price: 800, onlineAvailability: true, category: "Electronics" },
  { name: "Book", price: 20, onlineAvailability: false, category: "Literature" },
  { name: "Book", price: 40, onlineAvailability: false, category: "Classic" },
  { name: "Headphones", price: 60, onlineAvailability: true, category: "Electronics" },
];

const filteredProducts = products.filter(product => 
!(product.price < 50 && !product.onlineAvailability && product.category !== "Electronics"));

console.log(filteredProducts);


const jobApplicants = [
  { name: "Alice", experienceYears: 4, englishProficiency: true, relevantDegree: true },
  { name: "Bob", experienceYears: 2, englishProficiency: false, relevantDegree: true },
  { name: "Charlie", experienceYears: 5, englishProficiency: true, relevantDegree: false },
];

const filteredApplicants = jobApplicants.filter(applicant =>
  applicant.experienceYears >= 3 &&
  applicant.englishProficiency === true &&
  applicant.relevantDegree === true
);

console.log(filteredApplicants);



const restaurants = [
  { name: "Gourmet Grill", stars: 4.5, vegetarianOptions: true, location: "City" },
  { name: "Fast Noodles", stars: 3.8, vegetarianOptions: false, location: "Suburb" },
  { name: "Healthy Bites", stars: 4.2, vegetarianOptions: true, location: "City" },
  { name: "Chat Street", stars: 3.5, vegetarianOptions: false, location: "Suburb" },
];

const filteredRestaurants = restaurants.filter(restaurant =>
  restaurant.stars >= 4 &&
  restaurant.vegetarianOptions === true &&
  restaurant.location === "City"
);

console.log(filteredRestaurants);


const book = [
  { title: "The Da Vinci Code", year: 2003, rating: 8.6, genre: "Mystery" },
  { title: "To Kill a Mockingbird", year: 1960, rating: 8.3, genre: "Drama" },
  { title: "Gone Girl", year: 2012, rating: 9.0, genre: "Thriller" },
];

const filterBooks = book.filter(books =>
  books.year > 2000 &&
  books.rating > 8.5 &&
  (books.genre === "Mystery" || books.genre === "Thriller")
);

console.log(filterBooks);


const employee = [
  { name: "David", experienceYears: 6, englishProficiency: true, department: "Engineering" },
  { name: "Emma", experienceYears: 4, englishProficiency: false, department: "Finance" },
  { name: "Alex", experienceYears: 7, englishProficiency: true, department: "Marketing" },
];

const filterEmployee = employee.filter(employees =>
  employees.experienceYears >= 5 &&
  employees.englishProficiency === true &&
  (employees.department === "Engineering" || employees.department === "Marketing")
);

console.log(filterEmployee);



