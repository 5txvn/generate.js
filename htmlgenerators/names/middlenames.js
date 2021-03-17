//Source - https://www.randomlists.com/middle-name-generator
var middle_names = ["Ann","Bree","Dawn","Fawn","Fern","Aryn","Jacklyn","Jae","Jaidyn","Kathryn","Krystan","Lee","Lynn","Mae","Sue","Blair","Blaise","Blake","Blanche","Blayne","Brooke","Hope","Jane","June","Kate","Lane","Love","Merle","Raine","Rose","Rylie","Taye","Adele","Joan","Alice","Anise","Arden","Aryn","Ashten","Berlynn","Bernice","Breean","Brighton","Carmden","Candice","Caprice","Caren","Carleen","Carlen","Caylen","Cerise","Coreen","Debree","Denise","Devon","Dustin","Elein","Ellen","Ellice","Erin","Haiden","Hollyn","Javan","Jolee","Jordon","Kae","Kaitlin","Kalan","Korin","Kylie","Lashon","Meaghan","Monteen","Nadeen","Naveen","Ocean","Olive","Payten","Raven","Rayleen","Reagan","Rene","Robin","Selene","Sharon","Sherleen","Suzan","Taylore","Zion","Zoe","Bailee","Allison","Carelyn","Ellison","Julian","Karilyn","Madisen","Abigail","Bianca","Coralie","Amelia","Madeleine","Matilda","Lillian","Louisa","Viola","Silvia","Natalie","Mirabel","Rebecca","Miranda","Rosalind","Naomi","Vanessa","Susannah","Eloise","Gillian","Annabel","Emeline","Imogen","Claudia","Annora","Clelia","Elodie","Lucinda","Juliet","Leonie","Clementine","Georgina","Harriet","Joanna","Marcella","Marguerite","Lilibeth","Verena","Sophia","Linnea","Julina","Amity","Janetta","Evony","Ellory","Evelyn","Gwendolen","Miriam","Irene","Vivian","Coralie","Anneliese","Adelaide","Syllable","Ace","Abe","Beck","Blake","Dean","Grant","Hugh","James","Charles","George","Jude","Rhett","Kent","Lee","Brett","Luke","Chase","Claude","Paul","Reese","Sean","Trey","Bram","Brandt","Cash","Grey","Dex","Jack","Judd","Lane","Coy","Brock","Dash","Clark","Drew","Ray","Heath","Finn","Seth","Neil","Zane","Will","Troy","Shane","Jax","Reeve","Glenn","Drake","Wade","Arthur","David","Robert","Aiden","Conrad","Bailey","Damon","Michael","Justin","Noel","Dante","Brendon","Thomas","Vincent","Edward","Louis","Randall","Byron","Henry","Preston","Quintin","Joseph","Lawrence","Aaron","Riley","Noah","Isaac","Levi","Felix","Caleb","Cody","Sutton","Ryder","Kai","Justice","Oscar","Denver","Gavin","Jared","Eli","Warren","Tristan","Doran","Jasper","Juan","Leo","Francis","Murphy","Nevin","Porter","Oren","Dezi","Jackson","Kingston","Lydon","Hyrum","Trevor","Tanner","Vernon","Tyson","Myron","Rory","Anthony","Daniel","Avery","William","Tavian","Xavier","Gabriel","Garrison","Tobias","Marcellus","Gregory","Everett","Emerson","Dominick","Apollo","Abraham","Varian","Orlando","Harrison","Damien","Julian","Sheridan","Matteo","Oliver","Jeremy","Ricardo","Elias","Zachary","Benjamin","Timothy","Isaiah","Cameron","Nicolas","Malachi","Elijah","Fernando","Sullivan","Josiah"]
var middle_name = {
  generate : function() {
    return middle_names[Math.floor(Math.random() * 300)]
  },
  length : function() {
    return middle_names.length
  }
}