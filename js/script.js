// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
});

//BEECH VALA DIV ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const items = gallery.getElementsByClassName('gallery-item');
    const itemCount = items.length;
    const angleStep = 360 / itemCount;
    let currentAngle = 0;
    let isScrolling = false;

    function positionItems() {
        for (let i = 0; i < itemCount; i++) {
            const angle = (i * angleStep + currentAngle) % 360;
            items[i].style.transform = `rotateY(${angle}deg) translateZ(300px)`;

            // Calculate normalized angle for scaling and z-index
            const normalizedAngle = Math.abs((angle % 360) - 180) / 180;
            const scale = 1 + (1 - normalizedAngle) * 0.5; // Scale front images larger
            items[i].style.transform += ` scale(${scale})`; // Apply scaling

            // Adjust z-index based on position
            items[i].style.zIndex = Math.round((1 - normalizedAngle) * 100); // Higher z-index for front images
        }
    }

    function handleScroll(event) {
        const delta = Math.sign(event.deltaY || event.deltaX);
        currentAngle = (currentAngle + delta * angleStep) % 360;

        if (!isScrolling) {
            window.requestAnimationFrame(() => {
                positionItems();
                isScrolling = false;
            });
            isScrolling = true;
        }
    }

    positionItems();
    window.addEventListener('wheel', handleScroll);
}); 