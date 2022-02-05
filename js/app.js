



// get the values from the interface 
//start or controller function
function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //
    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        //call generateNumbers
        let numbers = generateNumbers(startValue, endValue);

        //call displayNumber
        displayNumbers(numbers);

    }else{
        alert("You must enter integers!");
    }

}

//generate numbers from the start value  to the end value
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];

    //we want to get all numbers from start to end
    for(let index = sValue; index <= eValue; index++){

        //this will execute in a loop until index = eValue
        numbers.push(index);
    }

    return numbers;
}

//display the numbers and make the even numbers bold characters
//display or view functions
function displayNumbers(numbers){

    let templateRows = "";
    //
    for (let index = 0; index < numbers.length; index++) {

        let className = "even";
        let number = numbers[index];

        //get the even numbers 
        if(number % 2 == 0){
            className = "even";
        }else{
            className = "odd";
        }

        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;
}