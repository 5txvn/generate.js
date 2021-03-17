//Random restaurant html/console generator
//Source - https://www.randomlists.com/restaurants
var restaurants = ["Applebee's","Bahama Breeze","Baja Fresh","Benihana","Bennigan's","Bertucci's","Big Boy","BJ's Restaurant & Brewery","Black Angus Steakhouse","Black-eyed Pea","Bluepoint Sage Cafe","Bob Evans Restaurants","Boston Market","Boston Pizza","Bubba Gump Shrimp Company","Buffalo Wild Wings","Café Rouge","California Pizza Kitchen","Carrabba's Italian Grill","Charlie Brown's Steakhouse","Cheddar's Casual Café","Cheese Burger in Paradise","Chili's","Chipotle Mexican Grill","Chiquito","Cracker Barrel Old Country Store","Dave & Buster's","Denny's","Dick's Last Resort","Famous Dave's","Friendly's","Golden Corral","Ground Round","Hard Rock Cafe","Heart Attack Grill","Hooters","Hoss's Steak and Sea House","Houlihan's","IHOP","Islands Fine Burgers & Drinks","Joe's Crab Shack","Johnny Rockets","Lone Star Steakhouse & Saloon","LongHorn Steakhouse","Old Country Buffet","Olive Garden","On the Border Mexican Grill & Cantina","Outback Steakhouse","P. F. Chang's China Bistro","Pei Wei Asian Diner","Perkins Restaurant and Bakery","Planet Hollywood","Qdoba Mexican Grill","Quaker Steak & Lube","Rainforest Cafe","Red Lobster","Red Robin","Romano's Macaroni Grill","Ruby Tuesday","Scores","Señor Frog's","Sizzler","Smokey Bones","Steak 'n Shake","T.G.I. Friday's","Texas Roadhouse","The Cheesecake Factory","The Old Spaghetti Factory","The Original Pancake House","Tony Roma's","Uno Chicago Grill","Waffle House"]
var restaurant = {
  generate : function() {
    return restaurants[Math.floor(Math.random() * 72)]
  },
  length : function() {
    return restaurants.length
  }
}