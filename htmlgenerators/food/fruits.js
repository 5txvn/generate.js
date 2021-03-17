//Source - https://www.randomlists.com/random-fruits
var fruits = ["apple","apricot","avocado","banana","blackberry","blueberry","boysenberry","cantaloupe","cherry","clementine","coconut","date","dragonfruit","fig","grape","grapefruit","guava","honeydew","huckleberry","jujube","kiwi","kumquat","lemon","lime","mango","nectarine","orange","papaya","passon_fruit","peach","pear","pineapple","plum","pomegranate","raspberry","satsuma","star fruit","strawberry","tangerine","tomato","watermelon"]
var fruit = {
  generate : function() {
    return fruits[Math.floor(Math.random() * 41)]
  },
  length : function() {
    return fruits.length
  }
}