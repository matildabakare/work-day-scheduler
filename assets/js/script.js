//Get current date and append it at te top of the page
var date = moment().format('dddd, MMMM Do');
$("#currentDay").append(date);

//function that loads the values from local storage and places them in the scheduler
var loadTasks = function() {
    localStorageArr = JSON.parse(localStorage.getItem("tasks"));
    console.log(localStorageArr);

    firstValue = localStorageArr[0];
    $('.one').val(firstValue);

    secondValue = localStorageArr[1];
    $('.two').val(secondValue);

    thirdValue = localStorageArr[2];
    $('.three').val(thirdValue);

    fourthValue = localStorageArr[3];
    $('.four').val(fourthValue);

    fifthValue = localStorageArr[4];
    $('.five').val(fifthValue);

    sixthValue = localStorageArr[5];
    $('.six').val(sixthValue);

    seventhValue = localStorageArr[6];
    $('.seven').val(seventhValue);
    
    eighthValue = localStorageArr[7];
    $('.eight').val(eighthValue);

    ninethValue = localStorageArr[8];
    $('.nine').val(ninethValue);

};


//loadtasks for the first time
loadTasks();


// The current time in format 18:15
// var currentTime = moment().format('HH:mm');
// console.log(currentTime);

//Declare array that will be used to store
var localStorageArr = [];

//Set of code to set the color of the timeblocks starts here
var now = new Date();
var hourNow = now.getHours();
console.log(now.getHours());


timeStrNine = 9;
timeStrTen = 10;
timeStrEleven = 11;
timeStrTwelve = 12;
timeStrOne = 13;
timeStrTwo = 14;
timeStrThree = 15;
timeStrFour = 16;
timeStrFive = 17;

var times = [timeStrNine, timeStrTen, timeStrEleven, timeStrTwelve, timeStrOne, timeStrTwo, timeStrThree, timeStrFour, timeStrFive];

for (var i = 0; i < times.length; i++ ) { 
    timing = times[i];
    if (hourNow < timing) {
        if (i===0) {
            $(".one").addClass("future");
        }
        else if (i===1) {
            $(".two").addClass("future");
        }
        else if (i===2) {
            $(".three").addClass("future");
        }
        else if (i===3) {
            $(".four").addClass("future");
        }
        else if (i===4) {
            $(".five").addClass("future");
        }
        else if (i===5) {
            $(".six").addClass("future");
        }
        else if (i===6) {
            $(".seven").addClass("future");
        }
        else if (i===7) {
            $(".eight").addClass("future");
        }
        else {
            $(".nine").addClass("future");
        }
    }


    else if (hourNow > timing) {
        if (i===0) {
            $(".one").addClass("past");
        }
        else if (i===1) {
            $(".two").addClass("past");
        }
        else if (i===2) {
            $(".three").addClass("past");
        }
        else if (i===3) {
            $(".four").addClass("past");
        }
        else if (i===4) {
            $(".five").addClass("past");
        }
        else if (i===5) {
            $(".six").addClass("past");
        }
        else if (i===6) {
            $(".seven").addClass("past");
        }
        else if (i===7) {
            $(".eight").addClass("past");
        }
        else {
            $(".nine").addClass("past");
        }
    }

    else {
        if (i===0) {
            $(".one").addClass("present");
        }
        else if (i===1) {
            $(".two").addClass("present");
        }
        else if (i===2) {
            $(".three").addClass("present");
        }
        else if (i===3) {
            $(".four").addClass("present");
        }
        else if (i===4) {
            $(".five").addClass("present");
        }
        else if (i===5) {
            $(".six").addClass("present");
        }
        else if (i===6) {
            $(".seven").addClass("present");
        }
        else if (i===7) {
            $(".eight").addClass("present");
        }
        else {
            $(".nine").addClass("present");
        }  
    }

}
//Set of code to set the color of the timeblocks ends here




$(".button").on("click", function() {
    // var text = $("#form-control")
    // .val()
    // .trim();
    
    
    if (($(this).attr('id')) == "buttonOne") {
        var text = $(".one")
        .val()
        .trim();
        console.log(text);
        localStorageArr[0] = text;
    }

    else if (($(this).attr('id')) == "buttonTwo") {
        var text = $(".two")
        .val()
        .trim();
        console.log(text);
        localStorageArr[1] = text;
    }

    else if (($(this).attr('id')) == "buttonThree") {
        var text = $(".three")
        .val()
        .trim();
        console.log(text);
        localStorageArr[2] = text;
    }

    else if (($(this).attr('id')) == "buttonFour") {
        var text = $(".four")
        .val()
        .trim();
        console.log(text);
        localStorageArr[3] = text;
    }

    else if (($(this).attr('id')) == "buttonFive") {
        var text = $(".five")
        .val()
        .trim();
        console.log(text);
        localStorageArr[4] = text;
    }

    else if (($(this).attr('id')) == "buttonSix") {
        var text = $(".six")
        .val()
        .trim();
        console.log(text);
        localStorageArr[5] = text;
    }

    else if (($(this).attr('id')) == "buttonSeven") {
        var text = $(".seven")
        .val()
        .trim();
        console.log(text);
        localStorageArr[6] = text;
    }

    else if (($(this).attr('id')) == "buttonEight") {
        var text = $(".eight")
        .val()
        .trim();
        console.log(text);
        localStorageArr[7] = text;
    }

    else {
        var text = $(".nine")
        .val()
        .trim();
        console.log(text);
        localStorageArr[8] = text;
    }

    saveTasks();

});


var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(localStorageArr));
    //   localStorage.setItem("Name", "Smith");
    // localStorage.setItem("tasks", JSON.stringify(tasks));
}

