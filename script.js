document.getElementById("projectsbutton").addEventListener("click", function () {
    var textElement = document.getElementById("centered-text");
    var secondTextElement = document.getElementById("links");
    var backgrounddimm = document.getElementById("dimm");
    var titel = document.getElementById("titelprojects");
    var gradient = document.getElementById("gradient1");

    textElement.style.visibility = "hidden";    
    secondTextElement.style.visibility = "hidden";
    backgrounddimm.style.visibility = "visible";
    titel.style.visibility = "visible";
    gradient.style.animation = "Scroll 28s linear infinite";
});

document.getElementById("homebutton").addEventListener("click", function () {
    var textElement = document.getElementById("centered-text");
    var secondTextElement = document.getElementById("links"); 
    var backgrounddimm = document.getElementById("dimm");
    var titel = document.getElementById("titelprojects");  
    var gradient = document.getElementById("gradient1"); 

    textElement.style.visibility = "visible";
    secondTextElement.style.visibility = "visible";
    backgrounddimm.style.visibility = "hidden";
    titel.style.visibility = "hidden";
    gradient.style.animation = "Scroll 14s linear infinite";
});

