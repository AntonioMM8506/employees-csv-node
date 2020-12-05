//Antonio Maldonado
//script.js

//Module to read csv
const fs = require("fs")

//Args
const file = process.argv.slice(2)
const index = process.argv.slice(3)
const field = process.argv.slice(4)

fs.readFile(file[0], 'utf8', function(err, data) {
	//If there's an issue with the given file, it will show its
	//corresponding error message
	if (err) {
    console.log(err.message)
    return;
  }

  //Splits the data of the csv in order to manipulate it as rows, then
  //the lines array is splited once again in order to generate a map
  //with its corresponding headers
  var lines = data.split("\n")
  var headers = lines[0].split(",")
  var maps = lines.slice(1).map( line => line.split(",").reduce((obj, val, i) => Object.assign({ [headers[i]]: val }, obj) , {}) );

  //The index argument is needed
  if(index[0] == undefined)
  {
	console.log("Argument index missed")
  }
	  //If the 5th parameter, the one about the field, is empty, just go ahead and 
	  //displays the whole row according to the index, but if is not undefined, look
	  //after the coincidence in the map.
	result_all = maps[index[0]-1]
	obj = {}
	result_field = Object.assign({[field[0]]: result_all[field[0]]},obj)
  	//Deploy data
	field[0]==undefined ? console.log(result_all):console.log(result_field);

})//End of readFile

