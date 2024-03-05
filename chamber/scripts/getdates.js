
function updateLastModified() {
    var lastModifiedElement = document.getElementById("lastModified");
    var lastModified = new Date(document.lastModified);
    lastModifiedElement.textContent = "Last modified: " + lastModified.toLocaleString();
}
window.onload = updateLastModified;