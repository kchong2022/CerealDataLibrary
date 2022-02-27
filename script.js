// Splits csv spreadsheet into several columns, with each element of the resulting list being created from sections of the csv following a comma, between quotation marks.
function getColumn(url, columnNumber){
	var column = [];
	var table = [];
	var request = new XMLHttpRequest();  
	request.open("GET", url, false);   
	request.send(null);  
	var csvData = new Array();
	var jsonObject = request.responseText.split(/\r?\n|\r/);
	for (var i = 0; i < jsonObject.length; i++) {
		csvData.push(jsonObject[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/));
	}
	table = csvData;
	column = getCol(table, columnNumber);
	return column;
}

//returns the specified column from a 2D Array
function getCol(matrix, col){
	var column = [];
	for(var i=1; i<matrix.length-1; i++){
		column.push(matrix[i][col]);
	}
	return column;
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const url = "https://raw.githubusercontent.com/kchong2022/Data-files/main/Cereal%20Nutrition%20(3).csv"

const name = getColumn(url,1);
const calories = getColumn(url,2);
const protein = getColumn(url,3);
const fat = getColumn(url,4);
const sodium = getColumn(url,5);
const fiber = getColumn(url,6);
const carbohydrates = getColumn(url,7);
const sugars = getColumn(url, 8);
const serving = getColumn(url,9);
const image= getColumn(url,10);

//function 1: returns which cereal has the most fiber
//return {string} – returns the name of the cereal with the most fiber in grams out of the database
function getMostFiber() {
    var maxFiber = 0;
    var maxFiberName = "";
    var largeFiber = [];
    for (var i = 0; i < name.length; i++){
        maxFiber = Number(fiber[i]);
        largeFiber.push(maxFiber);
    }
    
    for (var i = 0; i < largeFiber.length; i++){
        if (largeFiber[i] > maxFiber){
            maxFiber = largeFiber[i];
            maxFiberName = name[i];
        }
    }
    return (maxFiberName + " has the most fiber");
}
//console.log(getMostFiber());

//function 2: prints the url for the image of the cereal name inputted
//param selectedCereal {string} - the name of the cereal inputted by the user
//return {string} – the URL for the image of the cereal name inputted by the user
function findImageURL(selectedCereal){
    selectedCereal = selectedCereal.toLowerCase();
    var getCerealURL = [];
    for (var i in name){
        if (selectedCereal == name[i].toLowerCase()){
            getCerealURL.push(image[i]);
        return ("Here is your url: " + getCerealURL);
        }
    }
    return ("Sorry, you did not enter a valid cereal name");
}
//console.log(findImageURL("Golden Crisp"));


//function 3: returns the names of cereals with the inputted amount of sugar
//param sugar {number} - the inputted quantity of sugar (in grams)
//return {list} - the name(s) of the cereals with amounts of sugar that match the inputted quanity
function sugarSearch(sugar){
    var findSugar = [];
    for (var i = 0; i < sugars.length; i++){
        if(sugar == sugars[i]){
            findSugar.push(name[i]);
        } 
    }
     if (findSugar.length !=0){
         return findSugar;
    }   
    return ("Sorry, nothing has this amount of sugar!");
}
//console.log(sugarSearch(100));

//function 4: returns the macronutrients (protein, fat, and carbohydrates) of the desired cereal
//param selectedName {string} – the name of the cereal inputted by the user
//return {string} – the grams of protein, fat, and carbohydrates in the cereal inputted by the user
function getMacros(selectedName){
    selectedName = selectedName.toLowerCase();
    var macros = [];
    for (var i = 0; i < fat.length; i++){
        if( selectedName ==name[i].toLowerCase()){
            macros.push("Protein: " + protein[i] + "g");
            macros.push(" Fat: " + fat[i] + "g");
            macros.push(" Carbohydrates: " + carbohydrates[i] + "g");
        }
    }
    if (macros.length != 0){
            return ("This cereal contains the following macronutrients: " + macros);
    }
    return ("Sorry, please enter a valid cereal name");
}
//console.log(getMacros("Froot Loops"));


//function 5: returns the average serving size of a portion of cereal; gives an estimate of roughly how much cereal you should be eating/the portions that most other people are eating
//return {string} – returns the average portion size of the cereals in the database
function getAvgPortion(){
    var sum = 0;
    for (var i = 0; i < serving.length; i++){
        sum += Number(serving[i]);
    }
    var avgPortion = sum / serving.length;
    return ("The recommended average serving size for American cereal is " + avgPortion + " cups");
}
//console.log(getAvgPortion());
