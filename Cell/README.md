# Cell
Cell Kata


cellFiles.js reads data from the input.txt file. It has a readFileSync method that reads the contents of the input file and then will use a getPairedArray method to turn the data to a form like 
[[line1], [line2], [line3]]


will then use a forEach method to process each line and use the replace method to remove anything that is not a number from each line then push the result to the empty array declared above the forEach 

It does filter data out but it still has got some other things it needs to get rid of. Like the empty ''. 

Will then use dictionary to filter out the apps from the file that
will be the apps.txt as an input text file.

The app.dictionary file will contain the apps we are interested in, the input file will be apps.txt and then the method compareFiles will
then check if the input has the the apps that in the dictionary



