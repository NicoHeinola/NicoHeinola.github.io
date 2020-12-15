function ToggleItemMenu(){
    let menu = document.getElementById("menu")
    let arrow = document.getElementById("menu-arrow")
    menu.classList.toggle("menu-visible");
    arrow.classList.toggle("down");
}

function ToggleItemMenuMobile(){
    let menu = document.getElementById("nav-items")
    let arrow = document.getElementById("menu-arrow-mobile")
    menu.classList.toggle("menu-visible");
    arrow.classList.toggle("down");
}