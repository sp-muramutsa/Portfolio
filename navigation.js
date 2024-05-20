document.addEventListener("DOMContentLoaded", function() {
    var navigationContainer = document.getElementById("navigation-container");

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Configure it: GET-request for the URL 'navigation.html'
    xhr.open('GET', 'navigation.html', true);

    // Callback function when the request is completed
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 400) {
            // Insert the retrieved HTML into the navigation-container
            navigationContainer.innerHTML = xhr.responseText;

            // Highlight the active link
            highlightActiveLink();
        } else {
            console.error("Failed to load navigation bar.");
        }
    };

    // Send the request
    xhr.send();
});

function highlightActiveLink() {
    var currentPage = window.location.href;
    var navLinks = document.querySelectorAll('.nav-links a');

    for (var i = 0; i < navLinks.length; i++) {
        if (navLinks[i].href == currentPage) {
            navLinks[i].classList.add('active');
            break;
        }
    }
}



