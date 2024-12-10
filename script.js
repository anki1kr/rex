// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛Copy-Paste karna hai se ghar nhi chalta");
});

// dark mode
const body = document.body;
const toggleButton = document.getElementById('darkModeToggle');
const modeIcon = document.getElementById('modeIcon');

// Check and set initial mode
const userPreference = localStorage.getItem('darkMode') || 'dark';
body.className = userPreference + '-mode';
modeIcon.textContent = userPreference === 'dark' ? '🌙' : '☀️';

// Toggle between dark and light mode
toggleButton.addEventListener('click', () => {
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    const newMode = currentMode === 'dark' ? 'light' : 'dark';

    // Apply the new mode
    body.className = `${newMode}-mode`;
    modeIcon.textContent = newMode === 'dark' ? '🌙' : '☀️';

    // Save the preference
    localStorage.setItem('darkMode', newMode);
});