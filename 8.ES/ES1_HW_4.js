const car = {
  brand: "Toyota",
  model: "Corolla"
};

console.log("1.1:",car.brand);
console.log("1.2:",car.model);

car.brand = "Honda"

console.log("1.4:",car)

car.year = 2022;
car.color = "Blue"

console.log("1.6: Properties of 'car' object")
for(let key in car){
  console.log(key + ":", car[key])
}



const citizen = {
  name: "Ramesh Kumar",
  age: 65,
  occupation: "Retired"
};


citizen.age = 68;
console.log("Updated age:", citizen.age); 


citizen.age += 2;
console.log("Updated age after adding 2:", citizen.age); 


citizen.city = "Delhi";
console.log("Properties of 'citizen' object:");
for (let key in citizen) {
  console.log(key + ":", citizen[key]);
}



const person = {
  name: "Prem",
  age: 62
};


person.bp = "Normal";

if (person.age > 60 && person.bp === "Normal") {
  console.log("Fit to travel.");
} else {
  console.log("Not fit to travel.");
}



