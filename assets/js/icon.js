var accordions = document.querySelectorAll('.m-drawers__toggle'); 
var accordion_array = [...accordions]; 

accordion_array.forEach(a => {
    var accordionChild = a.querySelector("span");

    if (a.dataset.showIcon != null) {
        a.classList.add("show-icon");
        accordionChild.classList.add("show-icon__" + a.dataset.showIcon);
    }
});