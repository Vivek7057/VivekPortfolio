
/* Navbar Menu */

var menuButton = document.getElementById("menuButton");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", function() {

    menu.classList.toggle("show");

});


/* Close Menu After Clicking a Link */

var links = menu.querySelectorAll("a");

for (var i = 0; i < links.length; i++) {

    links[i].addEventListener("click", function() {

        menu.classList.remove("show");

    });

}


/* Project Filter */

var buttons = document.querySelectorAll(".filter");
var projects = document.querySelectorAll(".project");

for (var j = 0; j < buttons.length; j++) {

    buttons[j].addEventListener("click", function() {

        // Remove active class from all buttons

        for (var k = 0; k < buttons.length; k++) {

            buttons[k].classList.remove("active");

        }

        // Add active class to clicked button

        this.classList.add("active");

        // Get selected project category

        var selected = this.getAttribute("data-type");

        // Show and hide projects

        for (var m = 0; m < projects.length; m++) {

            var category = projects[m].getAttribute("data-category");

            if (selected == "all" || selected == category) {

                projects[m].style.display = "block";

            } else {

                projects[m].style.display = "none";

            }

        }

    });

}
