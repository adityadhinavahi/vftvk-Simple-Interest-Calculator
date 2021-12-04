function compute() //Computes the interests
{
    var principal = document.getElementById("principal").value; //gets the principal value
    if (principal <=0){ //Validates the user input for principal value
        alert("Enter a positive number"); //Alerts the user to enter a positive value
        document.getElementById("principal").focus(); //Focuses the principal box to indicate that there must be change in this field value
        document.getElementById("result").innerHTML="\<br\>";

    }
    else{
    var rate = document.getElementById("rate").value; //gets the rate value
    var years = document.getElementById("years").value; //retrieves the years value
    var interest = principal * years * rate/100; //Calculates the interest
    var year = new Date().getFullYear()+parseInt(years); //Calculates the future year based on the present year and the year input
    document.getElementById("result").innerHTML="If you deposit "+principal+", \<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"; //Displays the result wherein the user can see the amount to be invested, the chosen rate, the final amount to be recieved at x years from the present year. x=number of years given by the user
    }

    
}

function updateRate(){ //updates the range value
    var rateval = document.getElementById("rate").value; //Retrieves the input rate value
    document.getElementById("rate_val").innerText=rateval+"%"; //Sets the rate value to span tag
    
}
        