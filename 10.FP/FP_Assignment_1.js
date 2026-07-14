const numsArray = [10, 5, 8, 4, 6];

const result = numsArray.map(num => num - num * num)
console.log(result)


const numbsArray = [3, -2, -5, 12, 8, -4, 7];

const doubledArray = numbsArray.map(num => num < 0 ?  num - 2 * num : num)
console.log(doubledArray)


const sentencesArray = [
  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time.",
];

const resultSent = sentencesArray.map(sentence => {
  const wordCount = sentence.split(' ').filter(word => word.trim() !== '').length;
  return `${sentence} ${wordCount}`;
});

console.log(resultSent);


const cars = [
  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" },
];

const brands = cars.map(car => car.brand);

console.log(brands);



const movies = [
  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" },
];

const genres = movies.map(movie => movie.genre);

console.log(genres);



const furniture = [
  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 },
];

const updatedFurniture = furniture.map(item => ({
  type: item.type,
  width: (item.width * 1.1).toFixed(1),
  height: (item.height * 1.1).toFixed(1)
}));

console.log(updatedFurniture);



const products = [
  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 },
];

const updatedProducts = products.map(product => ({
  ...product,
  affordable: product.price <= 100
}));

console.log(updatedProducts);



const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18];

const evenNegativeNumbers = numbers.filter(num => num < 0 && num % 2 === 0);

console.log(evenNegativeNumbers);



const students = [
  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" },
];

const filteredStudents = students.filter(student => 
  student.score > 70 &&
  student.activeParticipant === true &&
  (student.club === "Math" || student.club === "Science")
);

console.log(filteredStudents);



const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"];

const filteredWords = words.filter(word => word.includes('a') && word.length > 5);

console.log(filteredWords);









