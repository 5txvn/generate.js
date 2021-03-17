//Source - https://www.randomlists.com/random-ice-cream-flavors
var ice_cream = ["Cookies N' Cream","Chocolate","Vanilla","Mint Chocolate Chip","Chocolate Chip Cookie Dough","Cookie Dough","Strawberry","Rocky Road","Mint","Coffee","Pistachio","Neopolitan","Chocolate Chip","Caramel","Peanut Butter Cup","Cherry Vanilla","Lemon","Moose Tracks","M&M's","Birthday Cake","Banana","Raspberry","Fudge Brownie","Butter Pecan","French Vanilla","Praline Pecan","Cherry","Chocolate Marshmallow","Chocolate Almond"]
exports.generate = function() {
  return ice_cream[Math.floor(Math.random() * 29)]
}
exports.length = function() {
  return ice_cream.length
}