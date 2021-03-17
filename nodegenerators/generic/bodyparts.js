//Source - https://www.randomlists.com/random-body-parts
var body_parts = ["abdomen","ankle","arm","back","balls of the feet","belly","belly button","big toe","bottom","breast","buttocks","calves","cheek","chest","chin","collar bone","ear","ear lobe","elbow","eye","eyebrow","eyelashes","eyelid","face","feet","finger","fingernail","fist","foot","forearm","forehead","groin","gums","hair","hand","heel","hip","humerus","index finger","jaw","kidney","knee","legs","lips","lower leg","mouth","neck","nipple","nose","nostril","palm","pinky finger","ribs","scalp","shin","shoulder","shoulder blade","spine","stomach","teeth","testes","thigh","throat","thumb","toes","toenail","tongue","teeth","underarm","upper arm","waist","wrist"]
exports.generate = function() {
  return body_parts[Math.floor(Math.random() * 72)]
}
exports.length = function() {
  return body_parts.length
}