document.getElementById("button1").addEventListener("click", function() {
    document.getElementById("box").style = "height:250px; width:250px;"
});

document.getElementById("button2").addEventListener("click", function() {
    document.getElementById("box").style = "background-color:blue;"
});

document.getElementById("button3").addEventListener("click", function() {
    document.getElementById("box").style.opacity = "0.3";
});

document.getElementById("button4").addEventListener("click", function() {
    document.getElementById("box").style = this.style;
});