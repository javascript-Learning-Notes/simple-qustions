//7. Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050. 

for (var year = 2014; year <=2050; year++){
    var date = new Date(year,0,1)
    if(date.getDay() === 0){
        console.log("1 janbury "+year);
    }else{
        console.log( "its not 1 January year :" +year  )
    }
}

