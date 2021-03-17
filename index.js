/*
const prompt = require('prompt-sync')();
const date = new Date()
const clc = require('cli-color')
const spell = require('spell-checker-js')
var swear = require('./filter.js')
*/

//America
var president = require('./nodegenerators/america/presidents.js')
var college = require('./nodegenerators/america/colleges.js')
//Parts of speech
var noun = require('./nodegenerators/partsofspeech/nouns.js')
var adjective = require('./nodegenerators/partsofspeech/adjectives.js')
var verb = require('./nodegenerators/partsofspeech/verbs.js')
var adverb = require('./nodegenerators/partsofspeech/adverbs.js')
//Food
var restaurant = require('./nodegenerators/food/restaurants.js')
var ice_cream = require('./nodegenerators/food/icecream.js')
var cocktail = require('./nodegenerators/food/cocktails.js')
var fruit = require('./nodegenerators/food/fruits.js')
var ingredient = require('./nodegenerators/food/ingredients.js')
//Generic
var thing = require('./nodegenerators/generic/things.js')
var body_part = require('./nodegenerators/generic/bodyparts.js')
var color = require('./nodegenerators/generic/colors.js')
var phobia = require('./nodegenerators/generic/phobias.js')
var saying = require('./nodegenerators/generic/sayings.js')
var god = require('./nodegenerators/generic/gods.js')
var month = require('./nodegenerators/generic/months.js')
var topic = require('./nodegenerators/generic/topics.js')
//Names
var pet_name = require('./nodegenerators/names/petnames.js')
var middle_name = require('./nodegenerators/names/middlenames.js')
var cat_name = require('./nodegenerators/names/catnames.js')
var team_name = require('./nodegenerators/names/teamnames.js')
var male_name = require('./nodegenerators/names/malenames.js')
//Spanish
var spanish_last_name = require('./nodegenerators/spanish/spanishlastnames.js')
var spanish_word = require('./nodegenerators/spanish/spanishwords.js')
//Sports
var athlete = require('./nodegenerators/sports/athletes.js')
var mls_team = require('./nodegenerators/sports/mlsteams.js')
var ncaa_team = require('./nodegenerators/sports/ncaateams.js')
var nhl_team = require('./nodegenerators/sports/nhlteams.js')
//Words
var word = require('./nodegenerators/words/words.js')
var compound_word = require('./nodegenerators/words/compoundwords.js')
var vocabulary_word = require('./nodegenerators/words/vocabularywords.js')
//binary
var binary = require('./translators/binary.js')




console.log(college.generate())




//Math functions
function absolute_value(number) {
  return Math.abs(number)
}
function arc_cosine(number) {
  return Math.acos(number)
}
function hyperbolic_arc_cosine(number) {
  return Math.acosh(number)
}
function arc_sine(number) {
  return Math.asin(number)
}
function hyperbolic_arc_sine(number) {
  return Math.asinh(number)
}
function arc_tangent(number) {
  return Math.atan(number)
}
function double_arc_tangent(number1, number2) {
  return Math.atan2(number1, number2)
}
function cube_root(number) {
  return Math.cbrt(number)
}
function round_up(number) {
  return Math.ceil(number)
}
function cosine(number) {
  return Math.cos(number)
}
function hyperbolic_cosine(number) {
  return Math.cosh(number)
}
function e_powered(number) {
  return Math.exp(number)
}
function round_down(number) {
  return Math.floor(number)
}
function logarithm(number) {
  return Math.log(number)
}
function power(number, power) {
  return Math.pow(number, power)
}
function number_random(number1, number2) {
  return Math.random() * number1 + number2
}
function sine(number) {
  return Math.sin(number)
}
function hyperbolic_sine(number) {
  return Math.sinh(number)
}
function square_root(number) {
  return Math.sqrt(number)
}
function tangent(number) {
  return Math.tan(number)
}
function hyperbolic_tangent(number) {
  return Math.tanh(number)
}
function truncate(number) {
  return Math.trunc(number)
}
var randomtest = function() {
  return Math.random()
}



//lumos




const lumos = {
  //help
  help : {
    arithmatic : function() {
      return 1 + '\n' + 2
    }
  },
  //variables
  declare : function(statement) {
    eval(statement.replace(/#/g, " = "))
  },
  call : function(variable) {
    return variable
  },
  //math
  solve : Math,
  mth : Math,
  math : Math,
  //return
  log : function(message) {
    return message
  },
  res : function(message) {
    return message
  },
  return : function(message) {
    return message
  },
  //data types
  data_type : (data) => typeof data,
  data : {
    type : (data) => typeof data
  },
  type : (data) => typeof data,
  check_includes : function(character, data) {
    var inner_character = "/" + character + "/"
    inner_character.test(data)
  },
  addition : function(...numbers) {
  var total = 0
  numbers.forEach(number => total += number)
  return total
},
subtraction : function(first_number, ...numbers) {
  var total = first_number
  numbers.forEach(number => total -= number)
  return total
},
multiplication : function(...numbers) {
  var total = 1
  numbers.forEach(number => total *= number)
  return total
},
divide : function(first_number, ...numbers) {
  var total = first_number
  numbers.forEach(number => total /= number)
  return total
},
date : () => date.getDate(),
day : () => date.getDay(),
year : () => date.getFullYear(),
hour : () => date.getHours(),
millisecond : () => date.getMilliseconds(),
minute : () => date.getMinutes(),
month : () => date.getMonth(),
second : () => date.getSeconds(),
time : () => date.getTime(),
timezone_difference : () => date.getTimezoneOffset(),
timezone_offset : () => date.getTimezoneOffset(),
UTC_date : () => date.getUTCDate(),
UTC_day : () => date.getUTCDay(),
UTC_year : () => date.getUTCFullYear(),
UTC_hour : () => date.getUTCHours(),
character_at : function(value, variable) {
  return variable.charAt(value)
},


youtube : {
  search : function(text) {
    var url = "https://www.youtube.com/results?search_query=" + text.replace(/ /g, "+")
    return url
  },
  account : function(name) {
    
  }
}
}

//use

function use(code) {
  var returnvalue = `${code}`.includes(" - return value")
  function starts(statement) {
    return `${code}`.startsWith(statement)
  }
  function l(variable) {
    return variable.toLowerCase()
  }
  //operators
  if (`${code}` === "hey") {
    return "hi!"
  } 

  else if (starts("filter ")) {
    return `${code}`.slice(7).replace()
  }

  //operators
  else if (`${code}`.startsWith("add ")) {
    try {
    return eval(`${code}`.slice(3).replace(/and/g, "+"))
    } catch(err) {
      return err.message
    }
  } else if(`${code}`.startsWith("subtract ")) {
    return eval(`${code}`.slice(8).replace(/from/g, "-"))
  } else if (`${code}`.startsWith("multiply ")) {
    return eval(`${code}`.slice(8).replace(/by/g, "*"))
  } else if (`${code}`.startsWith("divide ")) {
    return eval(`${code}`.slice(6).replace(/by/g, "/"))
  } 
  //do
  else if (`${code}`.startsWith("do ")) {
    try {
    return eval(`${code}`.slice(2).replace(/plus/g, "+").replace(/minus/g, "-").replace(/multiply/g, "*").replace(/divide/g, "/"))
    } catch(error) {
      return error.message
    }
  } 


  //math objects



  //absolute value/abs

  else if (starts("absolute value of ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
      return Math.abs(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //arccosine/acos
  else if (`${code}`.startsWith("arccosine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`.slice(13).replace(" - return value", "")
      } else {
      return Math.acos(parseInt(`${code}`.slice(13)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //hyperbolic arccosine/acosh
  else if (`${code}`.startsWith("hyperbolic arccosine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`.slice(24).replace(" - replace value", "")
      }
      return Math.acosh(parseInt(`${code}`.slice(24)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //arcsine/asin
  else if (`${code}`.startsWith("arcsine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`
      }
      return Math.asin(parseInt(`${code}`.slice(10)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //hyperbolic arcsine/asinh
  else if (`${code}`.startsWith("hyperbolic arcsine of ")) {
    try {
      return Math.asinh(parseInt(`${code}`.slice(21)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 

  //arctangent/atan
  else if (`${code}`.startsWith("arctangent of ")) {
    try {
      return Math.atan(parseInt(`${code}`.slice(13)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 

  //hyperbolic arctangent/atanh
  else if (`${code}`.startsWith("hyperbolic arctangent of ")) {
    try {

      return Math.atanh(parseInt(`${code}`.slice(24)))
    }
    catch(error) {
      return error.message
    }
  } 
  
  //cube root/cbrt
  else if (`${code}`.startsWith("cube root of ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(13).replace(" - return value", "")
      } else {
        return Math.cbrt(parseInt(`${code}`.slice(13)))
      }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //round/ceil & floor
  else if (`${code}`.startsWith("round ")) {
    try {
      if (`${code}`.includes("down")) {
        if (`${code}`.includes(" - return value")) {
          return `${code}`.slice(6).replace(" down", "").replace(" - return value", "")
        } else {
          return Math.ceil(parseInt(`${code}`.slice(6).replace(" down", "")))
        }
      }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //cosine/cos
  else if (`${code}`.includes("cosine of ")) {
    try {
    if (`${code}`.includes(" - return value")) {
      return `${code}`.slice(10).replace(" - return value", "")
    } else {
      return Math.cos(parseInt(`${code}`.slice(10)))
    }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } else if (starts("hyperbolic cosine ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
        return Math.cosh(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //e to the power of.../exp
  else if (starts("e to the power of ")) {
    try {
      if(returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
        return Math.exp(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //natural logarithm/log
  else if (starts("natural logarithm of ")) {
    try {
      if(returnvalue) {
        return `${code}`.slice(21).replace(" - return value", "")
      } else {
        return Math.log(parseInt(`${code}`.slice(21)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  }

  //variables
  //note, change globalThis to window for html console
  else if (`${code}`.startsWith("declare ")) {
    return eval("globalThis." + `${code}`.slice(7))
  } else if (`${code}`.startsWith("call ")) {
    return eval(`${code}`.slice(4))
  //note, change globalThis to window for html console
  } else if (`${code}`.startsWith("what is ")) {
    try {
      return eval(`${code}`.slice(7))
    }
    catch(error) {
      return error.message
    }
  } 
  
  else if (starts("character at index ")) {
    //syntax - character at x on index 0
    try {
      return eval(`${code}`.replace("cha"))
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  }
  
  else if (starts("function ")) {
//syntax - function test does console.log(x) --> var test = function(){console.log(x)}
try {
  var fstatement = `${code}`.replace("function ", "global.").replace(" does ", " = function(){") + "}"
  eval(fstatement)
}
catch(error) {
  return "There was an error - " + error.message
}
  } else if (`${code}`.startsWith("array ")){
    return eval(("globalThis." + `${code}`.slice(5)).replace(/-/g, " = [").replace(/!/g, "]").replace(/ /g, ""))
  } else if (`${code}`.startsWith("type of ")) {
    return typeof `${code}`.slice(7)
  } else if (`${code}`.startsWith("make array ")) {
    //syntax example - lunar `make array x equal to 1 and 2 and 3`
    var array_line = `${code}`.slice(11).replace(" equal to ", " = [").replace(/ and /g, ", ") + "]"
    try {
      return eval(array_line)
    }
    catch(error) {
      return error.message
    }
  } else if (`${code}`.startsWith("make ")) {
    //syntax example - lunar `make x equal to 9`
    try {
      return eval(`${code}`.replace("make ", "").replace(" equal to ", " = "))
    }
    catch(error) {
      return error.message
    }
  }
  //loops
  else if (`${code}`.startsWith("when ")) {
    //syntax - when i
    eval(`${code}`.replace(/when /g, "while(").replace(/-/g, ") {").replace(/_/g, "}"))
  } else {
    try {
      return eval(`${code}`)
    }
    catch(err) {
      return "There was an error - " + err.message
    }
  }
}


//lunar



function lunar(code) {
  var returnvalue = `${code}`.includes(" - return value")
  function starts(statement) {
    return `${code}`.startsWith(statement)
  }
  function l(variable) {
    return variable.toLowerCase()
  }
  //operators
  if (`${code}` === "hey") {
    return "hi!"
  } 

  else if (starts("filter ")) {
    return `${code}`.slice(7).replace()
  }

  //operators
  else if (`${code}`.startsWith("add ")) {
    try {
    return eval(`${code}`.slice(3).replace(/and/g, "+"))
    } catch(err) {
      return err.message
    }
  } else if(`${code}`.startsWith("subtract ")) {
    return eval(`${code}`.slice(8).replace(/from/g, "-"))
  } else if (`${code}`.startsWith("multiply ")) {
    return eval(`${code}`.slice(8).replace(/by/g, "*"))
  } else if (`${code}`.startsWith("divide ")) {
    return eval(`${code}`.slice(6).replace(/by/g, "/"))
  } 
  //do
  else if (`${code}`.startsWith("do ")) {
    try {
    return eval(`${code}`.slice(2).replace(/plus/g, "+").replace(/minus/g, "-").replace(/multiply/g, "*").replace(/divide/g, "/"))
    } catch(error) {
      return error.message
    }
  } 


  //math objects



  //absolute value/abs

  else if (starts("absolute value of ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
      return Math.abs(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //arccosine/acos
  else if (`${code}`.startsWith("arccosine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`.slice(13).replace(" - return value", "")
      } else {
      return Math.acos(parseInt(`${code}`.slice(13)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //hyperbolic arccosine/acosh
  else if (`${code}`.startsWith("hyperbolic arccosine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`.slice(24).replace(" - replace value", "")
      }
      return Math.acosh(parseInt(`${code}`.slice(24)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //arcsine/asin
  else if (`${code}`.startsWith("arcsine of ")) {
    try {
      if (`${code}`.includes(" - return value")) {
        return `${code}`
      }
      return Math.asin(parseInt(`${code}`.slice(10)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  //hyperbolic arcsine/asinh
  else if (`${code}`.startsWith("hyperbolic arcsine of ")) {
    try {
      return Math.asinh(parseInt(`${code}`.slice(21)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 

  //arctangent/atan
  else if (`${code}`.startsWith("arctangent of ")) {
    try {
      return Math.atan(parseInt(`${code}`.slice(13)))
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 

  //hyperbolic arctangent/atanh
  else if (`${code}`.startsWith("hyperbolic arctangent of ")) {
    try {

      return Math.atanh(parseInt(`${code}`.slice(24)))
    }
    catch(error) {
      return error.message
    }
  } 
  
  //cube root/cbrt
  else if (`${code}`.startsWith("cube root of ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(13).replace(" - return value", "")
      } else {
        return Math.cbrt(parseInt(`${code}`.slice(13)))
      }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //round/ceil & floor
  else if (`${code}`.startsWith("round ")) {
    try {
      if (`${code}`.includes("down")) {
        if (`${code}`.includes(" - return value")) {
          return `${code}`.slice(6).replace(" down", "").replace(" - return value", "")
        } else {
          return Math.ceil(parseInt(`${code}`.slice(6).replace(" down", "")))
        }
      }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //cosine/cos
  else if (`${code}`.includes("cosine of ")) {
    try {
    if (`${code}`.includes(" - return value")) {
      return `${code}`.slice(10).replace(" - return value", "")
    } else {
      return Math.cos(parseInt(`${code}`.slice(10)))
    }
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  } else if (starts("hyperbolic cosine ")) {
    try {
      if (returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
        return Math.cosh(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //e to the power of.../exp
  else if (starts("e to the power of ")) {
    try {
      if(returnvalue) {
        return `${code}`.slice(18).replace(" - return value", "")
      } else {
        return Math.exp(parseInt(`${code}`.slice(18)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  } 
  
  //natural logarithm/log
  else if (starts("natural logarithm of ")) {
    try {
      if(returnvalue) {
        return `${code}`.slice(21).replace(" - return value", "")
      } else {
        return Math.log(parseInt(`${code}`.slice(21)))
      }
    } catch(error) {
      return "There was an error - " + error.message
    }
  }

  //variables
  //note, change globalThis to window for html console
  else if (`${code}`.startsWith("declare ")) {
    return eval("globalThis." + `${code}`.slice(7))
  } else if (`${code}`.startsWith("call ")) {
    return eval(`${code}`.slice(4))
  //note, change globalThis to window for html console
  } else if (`${code}`.startsWith("what is ")) {
    try {
      return eval(`${code}`.slice(7))
    }
    catch(error) {
      return error.message
    }
  } 
  
  else if (starts("character at index ")) {
    //syntax - character at x on index 0
    try {
      return eval(`${code}`.replace("cha"))
    }
    catch(error) {
      return "There was an error - " + error.message
    }
  }
  
  else if (starts("function ")) {
//syntax - function test does console.log(x) --> var test = function(){console.log(x)}
try {
  var fstatement = `${code}`.replace("function ", "global.").replace(" does ", " = function(){") + "}"
  eval(fstatement)
}
catch(error) {
  return "There was an error - " + error.message
}
  } else if (`${code}`.startsWith("array ")){
    return eval(("globalThis." + `${code}`.slice(5)).replace(/-/g, " = [").replace(/!/g, "]").replace(/ /g, ""))
  } else if (`${code}`.startsWith("type of ")) {
    return typeof `${code}`.slice(7)
  } else if (`${code}`.startsWith("make array ")) {
    //syntax example - lunar `make array x equal to 1 and 2 and 3`
    var array_line = `${code}`.slice(11).replace(" equal to ", " = [").replace(/ and /g, ", ") + "]"
    try {
      return eval(array_line)
    }
    catch(error) {
      return error.message
    }
  } else if (`${code}`.startsWith("make ")) {
    //syntax example - lunar `make x equal to 9`
    try {
      return eval(`${code}`.replace("make ", "").replace(" equal to ", " = "))
    }
    catch(error) {
      return error.message
    }
  }
  //loops
  else if (`${code}`.startsWith("when ")) {
    //syntax - when i
    eval(`${code}`.replace(/when /g, "while(").replace(/-/g, ") {").replace(/_/g, "}"))
  } else {
    try {
      return eval(`${code}`)
    }
    catch(err) {
      return "There was an error - " + err.message
    }
  }
}



var gif = {
letter : {
  a : "https://tenor.com/Mb3B.gif",
b : "https://tenor.com/Mb3C.gif",
c : "https://tenor.com/Mb3D.gif",
d : "https://tenor.com/Mb3E.gif",
e : "https://tenor.com/Mb3F.gif",
f : "https://tenor.com/Mb3G.gif",
g : "https://tenor.com/Mb3H.gif",
h : "https://tenor.com/Mb3I.gif",
i : "https://tenor.com/Mb3J.gif",
j : "https://tenor.com/Mb3K.gif",
k : "https://tenor.com/Mb3L.gif",
l : "https://tenor.com/Mb3M.gif",
m : "https://tenor.com/Mb3N.gif",
n : "https://tenor.com/Mb3O.gif",
o : "https://tenor.com/Mb3P.gif",
p : "https://tenor.com/Mb3Q.gif",
q : "https://tenor.com/Mb3R.gif",
r : "https://tenor.com/Mb3S.gif",
s : "https://tenor.com/Mb3T.gif",
t : "https://tenor.com/Mb3U.gif",
u : "https://tenor.com/Mb3V.gif",
v : "https://tenor.com/Mb3W.gif",
w : "https://tenor.com/Mb3X.gif",
x : "https://tenor.com/Mb3Y.gif",
y : "https://tenor.com/Mb3Z.gif",
z : "https://tenor.com/Mb30.gif"
}
}