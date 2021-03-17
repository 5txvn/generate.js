//Source - https://www.randomlists.com/random-months
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
var month = {
    generate : function() {
        return months[Math.floor(Math.random() * 12)]
    },
    length : function() {
        return months.length
    }
}