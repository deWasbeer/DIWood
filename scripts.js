//declaration of variables of input fields in design.html
var kastBreedte;
var kastHoogte;
var kastDiepte;
var plankBreedte;
var plankDikte;
var plankLengte;

//function that reads and stores dimension-input values in design.html when button with id "bouwen" is clicked
function readDimensions() {
    kastBreedte = document.getElementById("outer-width").value;
    kastHoogte = document.getElementById("outer-height").value;
    kastDiepte = document.getElementById("outer-depth").value;
    plankBreedte = document.getElementById("plank-width").value;
    plankDikte = document.getElementById("plank-height").value;
    plankLengte = document.getElementById("plank-depth").value;
    console.log(kastBreedte);
    console.log(kastHoogte);
    console.log(kastDiepte);
    console.log(plankBreedte);
    console.log(plankDikte);
    console.log(plankLengte);
    enableButtons();
    disableDimensions();
}

//function which enables buttons in design.html when button is clicked for ids "bouwen", "addplank", "removeplank", "plank-select", "plank-height-slider", "plank-height-value", "opentoggle", "reset", "buy", "mm"
function enableButtons() {
    document.getElementById("addplank").disabled = false;
    document.getElementById("removeplank").disabled = false;
    document.getElementById("plank-select").disabled = false;
    document.getElementById("plank-height-slider").disabled = false;
    document.getElementById("plank-height-value").disabled = false;
    document.getElementById("opentoggle").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("buy").disabled = false;
    
    // also turn id elements to black in syle steet
    document.getElementById("addplank").style.color = "black";
    document.getElementById("removeplank").style.color = "black";
    document.getElementById("plank-select").style.color = "black";
    document.getElementById("plank-height-slider").style.color = "black";
    document.getElementById("plank-height-value").style.color = "black";
    document.getElementById("opentoggle").style.color = "black";
    document.getElementById("reset").style.color = "black";
    document.getElementById("buy").style.color = "black";
    document.getElementById("mm").style.color = "black";
}

//functions which disables all fields for kast and plank dimensions in design.html when button with id "bouwen" is clicked
function disableDimensions() {
    document.getElementById("outer-width").disabled = true;
    document.getElementById("outer-height").disabled = true;
    document.getElementById("outer-depth").disabled = true;
    document.getElementById("plank-width").disabled = true;
    document.getElementById("plank-height").disabled = true;
    document.getElementById("plank-depth").disabled = true;
}

//function which reloads webpage and clears all javascript and css changes
function reset() {
    location.reload();
    //disable following ids "bouwen", "addplank", "removeplank", "plank-select", "plank-height-slider", "plank-height-value", "opentoggle", "reset", "buy", "mm"
    document.getElementById("bouwen").disabled = false;
    document.getElementById("addplank").disabled = true;
    document.getElementById("removeplank").disabled = true;
    document.getElementById("plank-select").disabled = true;
    document.getElementById("plank-height-slider").disabled = true;
    document.getElementById("plank-height-value").disabled = true;
    document.getElementById("opentoggle").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("buy").disabled = true;
    // reset slider value to original value
    document.getElementById("plank-height-slider").value = 50;
}

//function to add a plank option to design.html when button with id "addplank" is clicked
function addPlank() {
    var select = document.getElementById("plank-select");
    var option = document.createElement("option");
    option.text = "Plank " + (select.length + 1);
    select.add(option);
}

//function to remove the last plank option from design.html when button with id "removeplank" is clicked if more than 1 plank option is available
function removePlank() {
    var select = document.getElementById("plank-select");
    if (select.length > 1) {
        select.remove(select.length - 1);
    }
    //browser popup that states that at least 1 plank is required if only 1 plank option is available and button with id "removeplank" is clicked  
    else {
        alert("At least 1 plank is required");
    }
}

//get slider value when slider is moved and update the value in design.html in field with id "plank-height-value"
var slider = document.getElementById("plank-height-slider");
var output = document.getElementById("plank-height-value");
output.value = slider.value;
slider.oninput = function() {
    output.value = this.value;
    console.log(output.value);
    updatePlankHeight();

}

//link output of slider to currently selecten option of dropdown menu with id "plank-select"
function updatePlankHeight() {
    var select = document.getElementById("plank-select");
    var option = select.options[select.selectedIndex];
    option.value = output.value;
}

//update value on slider and "plank-height-value" field when selection in dropdown menu with id "plank-select" is changed
function updatePlankHeightSelect() {
    var select = document.getElementById("plank-select");
    var option = select.options[select.selectedIndex];
    output.value = option.value;
    slider.value = option.value;
    console.log(output.value);
    //todo: update plank height
}