var planets = [ 
    ['Pluto', 0.06], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];

planets.forEach((element) => {
    // 1. Populate the dropdown element with the data found in the planets array. 
    // The value of each option should be the planet's name.
    var option = $("#planets").append($('<option>').val(element[0]).text(element[0]));
});

function calculateWeight(weight, planetName) { 
    // 2. Write the code to return the correct weight 
    var result;
    planets.forEach( element => {
        if (element[0] == planetName){
            result = weight * element[1];
        }
    });
    return result;
} 

$("#calculate-button").click(handleClickEvent);
$("*").keypress(handleClickEvent);

function handleClickEvent() {
    // 3. Declare a variable called userWeight and assign the value of the user's weight. 
    var userWeight = $("#user-weight").val();

    // 4. Delcare a variable called planetName and assign the name of the selected planet from the drop down. 
    var planetName = $("#planets").val();

    if (planetName == "") {
        $("#output").text("Please choose a planet!");
    } else if (userWeight == ""){
        $("#output").text("Please enter your weight!");
    } else {
        // 5. Declare a variable called result and assign the value of the new calculated weight. 
        var result = calculateWeight(userWeight, planetName);
        result = Math.round(result * 100) / 100;

        // 6. Write code to display the message shown in the screenshot. 
        $("#output").text("If you were on " + planetName + ", you would weigh " + result + "lbs!");
    }
    $("#output").removeClass("hide");
} 