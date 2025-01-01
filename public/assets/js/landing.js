$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

     // Get the image element by id
    var imgElement = document.getElementById('dynamic-image');

    // Function to handle the fade-in effect after the image is loaded
    imgElement.onload = function() {
        // Add fade-in-visible class to trigger fade-in effect once the image is loaded
        imgElement.classList.add('fade-in-visible');
    };

    // Preload the image to make sure it has loaded before fading in
    var imgSrc = imgElement.src; // Get the current image source

    // Create a new image object to preload
    var preloadImage = new Image();
    preloadImage.src = imgSrc;

    // If the image is already loaded (cached), manually trigger the fade-in
    if (preloadImage.complete) {
        imgElement.onload(); // Manually trigger onload if cached
    }  
});