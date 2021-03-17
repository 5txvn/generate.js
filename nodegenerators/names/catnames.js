//Source - https://www.randomlists.com/cat-names
var cat_names = ["Angel","Baby","Bailey","Bandit","BatMan","Bella","Belle","Beyonce","Blackie","Boo","Boomer","Boots","Buddy","Cali","Callie","Casper","Charlie","Cher","Chester","Chloe","Coco","Coco Chanel","Cupcake","Daisy","Dexter","Dusty","Elvis","Emma","Felix","Fiona","Fluffy","Frankie","Fred","Garfield","George","Ginger","Gizmo","Gracie","Harley","Houdini","Izzy","Jack","Jake","Jasmine","Jasper","Kiki","Kitty","Lady Gaga","Leo","Lilly","Lily","Loki","Lola","Lucky","Lucy","Luna","Maddie","Madonna","Maggie","Marley","Max","Midnight","Milo","Mimi","Minnie","Missy","Misty","Mittens","Molly","Muffin","Murphy","Nala","Noodle","Oliver","Oprah","Oreo","Oscar","Panda","Patches","Peanut","Pepper","Phoebe","Precious","Princess","Pumpkin","Rocky","Romeo","Rusty","Sadie","Salem","Samantha","Sammy","Sasha","Sassy","Scooter","Sebastian","Shadow","Shakira","Simba","Simon","Smokey","Snickers","Socks","Sophie","Sox","Spike","Sugar","Sweetie","Tiger","Tigger","Toby","Tucker","Twiggy","Zeus","Ziggy","Zoe"]
exports.generate = function() {
    return cat_names[Math.floor(Math.random() * 116)]
} 
exports.length = function() {
    return cat_names.length
}