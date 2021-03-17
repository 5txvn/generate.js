//Source - https://www.randomlists.com/spanish-last-names
var spanish_last_names = ["Aguilar","Alonso","Álvarez","Arias","Benítez","Blanco","Blesa","Bravo","Caballero","Cabrera","Calvo","Cambil","Campos","Cano","Carmona","Carrasco","Castillo","Castro","Cortés","Crespo","Cruz","Delgado","Díaz","Díez","Domínguez","Durán","Esteban","Fernández","Ferrer","Flores","Fuentes","Gallardo","Gallego","García","Garrido","Gil","Giménez","Gómez","González","Guerrero","Gutiérrez","Hernández","Herrera","Herrero","Hidalgo","Ibáñez","Iglesias","Jiménez","León","López","Lorenzo","Lozano","Marín","Márquez","Martín","Martínez","Medina","Méndez","Molina","Montero","Montoro","Mora","Morales","Moreno","Moya","Muñoz","Navarro","Nieto","Núñez","Ortega","Ortiz","Parra","Pascual","Pastor","Peña","Pérez","Prieto","Ramírez","Ramos","Rey","Reyes","Rodríguez","Román","Romero","Rubio","Ruiz","Sáez","Sánchez","Santana","Santiago","Santos","Sanz","Serrano","Soler","Soto","Suárez","Torres","Vargas","Vázquez","Vega","Velasco","Vicente","Vidal"]
exports.generate = function() {
  return spanish_last_names[Math.floor(Math.random() * 103)]
}
exports.length = function() {
  return spanish_last_names.length
}