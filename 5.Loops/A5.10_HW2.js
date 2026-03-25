console.log("A5.10_HW2")
console.log("---- ---- ----")
console.log("Exercise 1")
console.log("---- ---- ----")

const foodTracer = [
  {
    day: "Monday",
    breakFast: 300,
    lunch: 300,
    snacks: 150,
    dinner: 500
  },
  {
    day: "Tuesday",
      breakFast: 250,
      lunch: 450,
      snacks: 200,
      dinner: 550
  },
  {
    day: "Wednesday",
      breakFast: 350,
      lunch: 550,
      snacks: 100,
      dinner: 700
  },
  {
    day: "Thursday",
      breakFast: 400,
      lunch: 600,
      snacks: 180,
      dinner: 580
  },
  {
    day: "Friday",
      breakFast: 280,
      lunch: 480,
      snacks: 120,
      dinner: 580
  },
  {
    day: "Saturday",
      breakFast: 320,
      lunch: 520,
      snacks: 160,
      dinner: 620
  }
]

console.log("1.1")
for(let i = 0; i < foodTracer.length; i++){
  console.log("Day: ",foodTracer[i].day + "\n" + "Breakfast: "+ foodTracer[i].breakFast + "\n" + "Lunch: "+ foodTracer[i].lunch + "\n"+ "Snacks: "+ foodTracer[i].snacks + "\n" + "Dinner: "+ foodTracer[i].dinner + "\n")
}

console.log("---- ---- ----")
console.log("1.2")

const midAfternoonCalories = [100, 120, 105, 110, 100, 130]
for(let i = 0; i < foodTracer.length;i++){
  foodTracer[i].midAfternoon = midAfternoonCalories[i]
  console.log(foodTracer[i])
}

console.log("---- ---- ----")
console.log("Exercise 2")
console.log("---- ---- ----")

console.log("2.1")

const sunday = {
  day: "Sunday",
  breakFast: 370,
  lunch: 430,
  snacks: 140,
  dinner: 530,
  midAfternoon: 150
}

console.log("Sunday calorie intake",sunday)

console.log("---- ---- ----")
console.log("2.2")

foodTracer.push(sunday)
console.log("Updated Data:",foodTracer)

console.log("---- ---- ----")
console.log("2.3")

for(let i = 0; i < foodTracer.length;i++){
  let totalCalorie = foodTracer[i].breakFast + foodTracer[i].lunch + foodTracer[i].snacks + foodTracer[i].dinner + foodTracer[i].midAfternoon

  foodTracer[i].totalCalorie = totalCalorie
}

console.log("Array with total calories:",foodTracer)

console.log("---- ---- ----")
console.log("2.4")

for(let i = 0; i < foodTracer.length;i++){
  const numOfCalorie = 5
  const average = foodTracer[i].totalCalorie / numOfCalorie

  foodTracer[i].avgCalorie = average
}

console.log("avgCalorie:",foodTracer)

console.log("---- ---- ----")
console.log("Exercise 3")
console.log("---- ---- ----")

for(let i = 0; i < foodTracer.length;i++){
  genrateCalorieCard(foodTracer[i])
}

function genrateCalorieCard(calorie){
  console.log("===== Calorie Card for "+ calorie.day + " =====" + "\n"+ "Breakfast :"+ calorie.breakFast + "\n"+ "Lunch: "+ calorie.lunch + "\n"+ "Snacks : "+ calorie.snacks + "\n"+ "Dinner: "+ calorie.dinner + "\n"+ "Mid Afternoon: "+ calorie.midAfternoon + "\n------"+ "\n" + "Total: "+ calorie.totalCalorie + "\n" + "Average: "+ calorie.avgCalorie + "\n" + "Comment: "+  comment(calorie.totalCalorie) + "\n---- ---- ---- ----" + "\n")

}

function comment(totalCalorie){
  if(totalCalorie <= 1550){
    return "Your calorie intake was within limits"
  }else{
    return "Your calorie intake was higher than recommended"
  }
}
