
const welcomeMessage = document.querySelector("#WelcomeMessage");

if (welcomeMessage) {
    const now = Date.now();
    if (localStorage.getItem("lastVisit") === null) {
        localStorage.setItem("lastVisit", now);
    }
    const lastVisit = parseInt(localStorage.getItem("lastVisit"), 10);
    let yesterday = new Date();
    yesterday = yesterday.setDate(yesterday.getDate() - 1);

    if (lastVisit == now) {
        welcomeMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else if (lastVisit > yesterday) {
        welcomeMessage.textContent = "Back so soon! Awesome!";
    } else {
        const n = Math.floor((now - lastVisit) / 86400000);
        welcomeMessage.textContent = `You last visited ${n} day${n === 1 ? "" : "s"} ago.`;
    }

    localStorage.setItem("lastVisit", now);
}