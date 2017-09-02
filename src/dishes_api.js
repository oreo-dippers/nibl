// A simple data API that will be used to get the data for our
// Dishes components. 
const DishesAPI = {
  dishes: [
    { dish_id: 1, name: "dish_tacos", location: "LA" },
    { dish_id: 2, name: "dish_sushi", location: "San Jose" },
    { dish_id: 3, name: "dish_spaghetti", location: "NYC" },
    { dish_id: 4, name: "dish_burger", location: "Florida" },
    { dish_id: 5, name: "dish_donuts", location: "Irvine" },
    { dish_id: 6, name: "dish_pizza", location: "OC" }
  ],
  all: function() { return this.restaurants},
  get: function(name) {
    const isDish = d => d .id === id
    return this.dishes.find(isDish)
  }
}

export default DishesAPI;
