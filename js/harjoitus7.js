var menu_toggled = false;


function ToggleMenu(){
    let menu = document.getElementById("tietoa_items");
    if(menu_toggled){
        menu.classList.add("items-transition-back")
        menu.classList.toggle("items-transition")
        menu_toggled = false;
    } else {
        menu.classList.add("items-transition")
        menu_toggled = true;
    }
}

function ToggleMenuMobile(){
    let menu = document.getElementById("nav_links");
    if(menu_toggled){
        menu.classList.add("nav-transition-back")
        menu.classList.toggle("nav-transition")
        menu_toggled = false;
    } else {
        menu.classList.add("nav-transition")
        menu_toggled = true;
    }
}