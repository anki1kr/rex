// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛Copy-Paste karna hai se ghar nhi chalta");
});

// Example: Animate a button click
document.querySelectorAll('a').forEach(button => {
    button.addEventListener('click', () => {
        button.style.transition = 'transform 0.3s ease';
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 300);
    });
});

// Toggle visibility of program lists
document.getElementById('htmlButton').addEventListener('click', () => {
    const htmlPrograms = document.getElementById('htmlPrograms');
    htmlPrograms.style.display = htmlPrograms.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('cButton').addEventListener('click', () => {
    const cPrograms = document.getElementById('cPrograms');
    cPrograms.style.display = cPrograms.style.display === 'none' ? 'block' : 'none';
});
