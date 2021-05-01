// global variable that saves current page
var inner_home = document.getElementById("main-container").innerHTML;

function load_page(element){
    switch(element.id)
    {
        case "about":
            document.getElementById("main-container").innerHTML='<div id="about-page">Copyright 2021</div>';
            break;
        case "logout":
            document.getElementById("main-container").innerHTML='<div id="logout-page">Bye!</div>';
            break;
        default:
            document.getElementById("main-container").innerHTML=inner_home;
    }
}

function activate(clicked_item) {
    var nav_container = document.getElementById("nav-container");
    var children = nav_container.childNodes;
    NodeList.prototype.forEach = Array.prototype.forEach;
    children.forEach(current_item => {
        if (current_item.className == "active") {
            if (current_item.id != clicked_item.id) {
                //current_item.className = "inactive";
                current_item.className = "";
                
            }
            return;
        }
        if (current_item.id == clicked_item.id) {
            current_item.className = "active";
            // display page
            load_page(current_item);
        }
    }
    );
}

function showText(){

}