//Random ice cream flavor html/console version
//Source - https://www.randomlists.com/random-ice-cream-flavors
var ice_creams = ["Cookies N' Cream","Chocolate","Vanilla","Mint Chocolate Chip","Chocolate Chip Cookie Dough","Cookie Dough","Strawberry","Rocky Road","Mint","Coffee","Pistachio","Neopolitan","Chocolate Chip","Caramel","Peanut Butter Cup","Cherry Vanilla","Lemon","Moose Tracks","M&M's","Birthday Cake","Banana","Raspberry","Fudge Brownie","Butter Pecan","French Vanilla","Praline Pecan","Cherry","Chocolate Marshmallow","Chocolate Almond"]
var ice_cream = {
  generate : function() {
    return ice_creams[Math.floor(Math.random() * 29)]
  },
  length : function() {
    return ice_creams.length
  }
}