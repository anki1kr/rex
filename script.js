// alert("Why don't you try to copy pastethe heading ");

// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛Copy-Paste karna hai se ghar nhi chalta");
});

const buttons = {
    htmlButton: 'htmlPrograms',
    cButton: 'cPrograms',
    cppButton: 'cppPrograms'
};

Object.keys(buttons).forEach(buttonId => {
    document.getElementById(buttonId).addEventListener('click', () => {
        Object.values(buttons).forEach(programId => {
            document.getElementById(programId).style.display = 'none';
        });
        const selectedProgram = document.getElementById(buttons[buttonId]);
        selectedProgram.style.display = 'block';
    });
});