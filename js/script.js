//copy paste block
document.addEventListener("copy", (e) => {
    e.preventDefault();
    const text = "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta";
    if (e.clipboardData) {
        e.clipboardData.setData("text/plain", text);
    } else if (window.clipboardData) {
        window.clipboardData.setData("Text", text);
    }
});
