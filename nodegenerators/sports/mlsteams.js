//Source - https://www.randomlists.com/random-soccer-teams
var mlsteams = [{"name":"Chicago Fire","color":["#AF2626","#0A174A"]},
{"name":"Colorado Rapids","color":["#91022D","#85B7EA"]},
{"name":"Columbus Crew","color":["#000000","#FFDB00"]},
{"name":"DC United","color":["#000000","#DD0000"]},
{"name":"FC Dallas","color":["#CF0032","#07175C"]},
{"name":"Houston Dynamo","color":["#F36600","#2E2926"]},
{"name":"LA Galaxy","color":["#00245D","#004689"]},
{"name":"Montreal Impact","color":["#122089","#000000"]},
{"name":"NE Revolution","color":["#0A2141","#D80016"]},
{"name":"New York City FC","color":["#6aace6","#0f1d41"]},
{"name":"New York Red Bulls","color":["#D50031","#012055"]},
{"name":"Orlando City","color":["#5e299a","#f8e196"]},
{"name":"Philadelphia Union","color":["#001B2D","#B18500"]},
{"name":"Portland Timbers","color":["#004812","#EBE72B"]},
{"name":"Real Salt Lake","color":["#A50531","#013474"]},
{"name":"San Jose Earthquakes","color":["#0051BA","#000000"]},
{"name":"Seattle Sounders FC","color":["#4F8A10","#11568C"]},
{"name":"Sporting Kansas City","color":["#A4BBD7","#0A2141"]},
{"name":"Toronto FC","color":["#D80016","#313F49"]},
{"name":"Vancouver Whitecaps","color":["#12264C","#85B7EA"]}]
exports.generate = function() {
  return mlsteams[Math.floor(Math.random() * 20)].name
}
exports.length = function() {
  return mlsteams.length
}