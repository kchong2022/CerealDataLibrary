# Cereal Data
The following functions provide interesting and useful information about America's favorite cereal brands
#
##### Finds which cereal out of the database has the most fiber
###### @return {string} – returns the name of the cereal with the most fiber in grams out of the database
** 'function getMostFiber()'**
#

##### Prints the url for the image of the cereal name inputted
###### @param selectedCereal {string} - the name of the cereal inputted by the user
###### @return {string} – the URL for the image of the cereal name inputted by the user
** 'function findImageURL(selectedCereal)'**
#

##### Returns the names of cereals with the inputed amount of sugar
###### @param sugar {number} - the inputted quantity of sugar (in grams)
###### @return {string} - the name(s) of the cereals with amounts of sugar that match the inputted quanity
**'function sugarSearch(sugar)'**
# 

##### Returns the macronutrients (protein, fat, and carbohydrates) of the desired cereal
###### @param selectedName {string} – the name of the cereal inputted by the user
###### @return {string} – the grams of protein, fat, and carbohydrates in the cereal inputted by the user
**'function getMacros(selectedName)'**
#

##### Returns the average serving size of a portion of cereal; gives an estimate of roughly how much cereal you should be eating/the portions that most other people are eating
###### @return {string} – returns the average portion size of the cereals in the database
**'function getAvgPortion()'**
