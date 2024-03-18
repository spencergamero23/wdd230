// Join page button
document.getElementById("joinButton").addEventListener("click", function() {
    window.location.href = "join.html"; // Replace "another-page.html" with the path to your target HTML page
  });
// Last Modified info
function updateLastModified() {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last modified: " + lastModified.toLocaleString();
}
window.onload = updateLastModified;