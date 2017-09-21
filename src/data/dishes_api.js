// A simple data API that will be used to get the data for our
// Dishes components.
const DishesAPI = [
  {
    foursquareEntryId: "107410403",
    name: "Arugula Salad",
    imageUrl: "https://dinnerisserveddotorg.files.wordpress.com/2015/07/instagram-shot.jpg",
    description: "With roasted farm beets, pickled red onions, Vermont Creamery goat cheese schmear, apple cider vinaigrette",
    price: "11.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410405",
    name: "Griddled Corn Cakes",
    imageUrl: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Cranberry-Corn-Bread-Casserole_exps50480_UFZ133197D04_17_6bC_RMS.jpg",
    description: "With house smoked salmon, crème fraiche, and trout roe caviar",
    price: "10.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410402",
    name: "Market Soup of the Day",
    imageUrl: "https://cdn2.tmbi.com/TOH/Images/Photos/37/1200x1200/Over-the-Rainbow-Minestrone_exps174716_TH143191D11_21_5bC_RMS.jpg",
    description: null,
    price: null,
    avgRating: 0
  }, {
    foursquareEntryId: "107410404",
    name: "Hot Shrimp Cocktail",
    imageUrl: "http://cdn-image.foodandwine.com/sites/default/files/styles/4_3_horizontal_inbody_900x506/public/201207-xl-shrimp-cocktail-with-singapore-hot-sauce.jpg?itok=RnDV9sc9",
    description: "Served with lemon & drawn butter",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410407",
    name: "Queso Mac-N-Cheese",
    imageUrl: "https://wearychef.com/wp-content/uploads/2013/02/mac-and-cheese1.jpg",
    description: "3 cheese blend: queso fresco, jalapeño jack & cheddar cheese, with green chili sauce and roasted poblanos",
    price: "9.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410408",
    name: "Pancakes",
    imageUrl: "http://www.chewoutloud.com/wp-content/uploads/2014/06/Funfetti-Pancakes.jpg",
    description: "Wild maine blueberry or banana walnut or chocolate chunk, with warm maple butter",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410411",
    name: "Brioche French Toast",
    imageUrl: "http://images.meredith.com/content/dam/bhg/Images/recipe/35/R168484.jpg.rendition.largest.jpg",
    description: "Caramelized bananas, roasted pecans, warm maple butter",
    price: "14.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410412",
    name: "Latke Eggs Benedict",
    imageUrl: "http://whatshouldimakefor.com/wp-content/uploads/2016/04/Crab-Eggs-Benedict-2-1.jpg",
    description: "Poached cage free eggs, house smoked salmon, classic hollandaise, served over crispy potato pancakes",
    price: "18.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410409",
    name: "Clinton St. Omelette",
    imageUrl: "http://www.mrbreakfast.com/images/1135_fluffy_cheese_omelette_2.jpg",
    description: "Served with fries and greens. Choose 2 fillings: swiss, cheddar, goat cheese, spinach, mushrooms, chopped tomatoes, caramelized onions",
    price: "13.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410410",
    name: "Huevos Rancheros",
    imageUrl: "http://d3cizcpymoenau.cloudfront.net/images/21443/SFS_Huevos_Rancheros-12.jpg",
    description: "Sunny side up eggs with red beans, guacamole, jalapeño sour cream, salsa picante, and pepper jack cheese, on a Clinton St. corn tortilla",
    price: "14.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410413",
    name: "Sugar Cured Bacon",
    imageUrl: "https://assets.epicurious.com/photos/54b32305460b4423363ed98f/master/pass/358214_brown-sugar-glazed-bacon_1x1.jpg",
    description: null,
    price: "6.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410414",
    name: "Cheese Grits",
    imageUrl: "https://bigoven-res.cloudinary.com/image/upload/cheese-grits-louisiana-enterta-ded3b6.jpg",
    description: null,
    price: "5.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410417",
    name: "Salmon Burger",
    imageUrl: "https://assets.epicurious.com/photos/560ea844f3a00aeb2f1d71b1/1:1/w_600%2Ch_600/105293.jpg",
    description: "With avocado, sliced tomato, arugula, tartar sauce",
    price: "16.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410415",
    name: "Clinton Street Cheeseburger",
    imageUrl: "http://www.chewoutloud.com/wp-content/uploads/2015/06/mexican-burgers-6.jpg",
    description: "Caramelized sweet onions, swiss or cheddar",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410418",
    name: "Veggie Burger",
    imageUrl: "http://cdn-image.myrecipes.com/sites/default/files/clean-veggie-burgers-ck.jpg",
    description: "Made in house, served with avocado, muenster, chipotle mayo, beefsteak tomato, romaine, and sprouts",
    price: "14.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410416",
    name: "Sugar Bacon Burger",
    imageUrl: "",
    description: "Blue cheese, sugar bacon, iceberg lettuce",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410419",
    name: "Extra Condiments",
    imageUrl: "",
    description: "Chipotle mayo, tartar sauce, lemon-pepper mayo, pickled jalapenos, guacamole",
    price: "0.75",
    avgRating: 0
  }, {
    foursquareEntryId: "107410421",
    name: "Spicy Shrimp & Cheese Grits",
    imageUrl: "",
    description: "Fried green tomatoes, creamy creole sauce, white corn grits",
    price: "19.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410423",
    name: "Heritage Pork Bowl",
    imageUrl: "",
    description: "Pulled dry spice rubbed pork, yellow rice, red beans, warm house corn tortillas, fried egg and smoked chili sauce on top",
    price: "14.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410420",
    name: "Kale Salad",
    imageUrl: "",
    description: "With avocado chunks, quinoa, cherry tomatoes, red onion, spiced green pumpkin seeds and lemon vinaigrette",
    price: "12.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410422",
    name: "Market Fish Tacos",
    imageUrl: "",
    description: "Marinated char-grilled catch of the day, Clinton st. corn tortillas, shaved radish & cabbage slaw, pickled onion, tomatillo sauce, jalapeno sour cream and pico de gallo side",
    price: "17.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410424",
    name: "Grilled Chicken Sandwich",
    imageUrl: "",
    description: "Avocado, bacon, chipotle mayo, romaine, beefsteak tomato, on grilled sourdough, with hand cut fries & slaw",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410425",
    name: "Seafood Po' Boy",
    imageUrl: "",
    description: "Daily catch on a griddled French roll with tartar sauce & shredded romaine. Served with fries & slaw",
    price: "17.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410426",
    name: "Smoked Brisket Plate",
    imageUrl: "",
    description: "Slow roasted dry rubbed brisket, crispy potato pancakes, caramelized applesauce, and natural jus",
    price: "18.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410429",
    name: "Smuttynose Old Brown Dog",
    imageUrl: "",
    description: "New Hampshire, Brown Ale",
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410427",
    name: "Six Point the Crisp",
    imageUrl: "",
    description: "Brooklyn, Pilsner",
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410428",
    name: "Kelso Nut Brown Lager",
    imageUrl: "",
    description: "Brooklyn, Lager",
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410431",
    name: "Allagash White",
    imageUrl: "",
    description: "Maine, Belgian Style White",
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410430",
    name: "Sierra Nevada Pale Ale",
    imageUrl: "",
    description: "California, Pale Ale",
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410432",
    name: "Duvel",
    imageUrl: "",
    description: "Belgian Golden Ale",
    price: "9.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410434",
    name: "Draft",
    imageUrl: "",
    description: "Ask What's on Tap!",
    price: null,
    avgRating: 0
  }, {
    foursquareEntryId: "107410433",
    name: "Southern Tier Ipa",
    imageUrl: "",
    description: "New York, IPA",
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410437",
    name: "Fried Chicken Sandwich",
    imageUrl: "",
    description: "With lemon-pepper mayo, shredded romaine, pickled green tomatoes, on a pain d'avignon roll, with fries, slaw, and a LES pickle",
    price: "15.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410435",
    name: "Buttermilk Fried Chicken Dinner",
    imageUrl: "",
    description: "With honey-Tabasco sauce, house slaw, jalapeno cornbread, and choice of one side",
    price: "20.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410436",
    name: "Chicken & Waffles",
    imageUrl: "",
    description: "With honey-Tabasco sauce, a crispy Belgian vanilla buttermilk waffle, and our signature warm maple butter",
    price: "19.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410438",
    name: "Classic Extra Thick Shake",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410439",
    name: "Chocolate Peanut Butter",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410443",
    name: "Wild Maine Blueberry",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410442",
    name: "Black & White",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410440",
    name: "Banana",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410444",
    name: "Ithaca Root Beer Float",
    imageUrl: "",
    description: null,
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410406",
    name: "Ancho Chile Chicken Wings",
    imageUrl: "",
    description: "With tequila-lime sauce",
    price: "9.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410445",
    name: "Boozy Salted Caramel",
    imageUrl: "",
    description: null,
    price: "12.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410441",
    name: "Coffee",
    imageUrl: "",
    description: null,
    price: "8.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410447",
    name: "Sweet Potato Fries",
    imageUrl: "",
    description: null,
    price: "6.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410449",
    name: "Dressed Local Greens",
    imageUrl: "",
    description: null,
    price: "6.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410451",
    name: "2 Eggs Any Style",
    imageUrl: "",
    description: null,
    price: "5.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410452",
    name: "Jalapeño Cornbread",
    imageUrl: "",
    description: null,
    price: "4.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410446",
    name: "Hand Cut Fries",
    imageUrl: "",
    description: null,
    price: "5.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410450",
    name: "Fried Green Tomatoes",
    imageUrl: "",
    description: null,
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410453",
    name: "Sliced Avocado",
    imageUrl: "",
    description: null,
    price: "4.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410454",
    name: "Potato Pancakes",
    imageUrl: "",
    description: null,
    price: "7.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410455",
    name: "Cheese Grits",
    imageUrl: "",
    description: null,
    price: "5.00",
    avgRating: 0
  }, {
    foursquareEntryId: "107410457",
    name: "Double Smoked Bacon",
    imageUrl: "",
    description: null,
    price: "5.00",
    avgRating: 0
  }
]
export default DishesAPI;
