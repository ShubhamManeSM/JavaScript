const productInfo = [
  { key: "name", value: "Laptop" },
  { key: "price", value: 12000 },
  { key: "brand", value: "Dell" },
];

const transformData = productInfo.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
}, {})
console.log(transformData)


const colleges = [
  { item: "Book", university: "Harvard" },
  { item: "Book", university: "MIT" },
  { item: "Book", university: "Stanford" },
];

const university = colleges.reduce((acc, curr) => {
  acc.push(curr.university)
  return acc
}, [])
console.log(university)


const userPreferences = [
  { key: "theme", value: "Dark Mode" },
  { key: "fontSize", value: 16 },
  { key: "notifications", value: true },
];

const userData = userPreferences.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
}, {})
console.log(userData)


const continents = [
  { key: "Asia", country: "India" },
  { key: "Europe", country: "France" },
  { key: "North America", country: "USA" },
];

const continentData = continents.reduce((acc, curr) => {
  acc[curr.key] = curr.country
  return acc
}, {})
console.log(continentData)


const information = [
  { key: "city", value: "New York" },
  { key: "population", value: 8398748 },
  { key: "area", value: 468.9 },
];

const infoData = information.reduce((acc, curr) => {
  acc[curr.key] = curr.value
  return acc
}, {})
console.log(infoData)