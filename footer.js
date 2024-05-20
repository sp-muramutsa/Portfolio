document.addEventListener("DOMContentLoaded", function() {
    var footerContainer = document.getElementById("footer-container");

    // Create a new XMLHttpRequest object for footer
    var footerXhr = new XMLHttpRequest();
    footerXhr.open('GET', 'footer.html', true);
    footerXhr.onload = function() {
        if (footerXhr.status >= 200 && footerXhr.status < 400) {
            footerContainer.innerHTML = footerXhr.responseText;
        } else {
            console.error("Failed to load footer.");
        }
    };
    footerXhr.send();
});
