// Select all buttons
let buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert("Product Added to Cart!");

    });

});