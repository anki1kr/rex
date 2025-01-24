alert("don't try to copy paste any content from this website");

// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛Copy-Paste karna hai se ghar nhi chalta");
});
;

//BEECH VALA DIV ANIMATION
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    const items = gallery.getElementsByClassName('gallery-item');
    const itemCount = items.length;
    const angleStep = 360 / itemCount;
    let currentAngle = 0;
    let startX = 0;
    let isDragging = false;

    function positionItems() {
        for (let i = 0; i < itemCount; i++) {
            const angle = (i * angleStep + currentAngle) % 360;
            const normalizedAngle = Math.abs((angle % 360) - 180) / 180;
            const scale = 1 + (1 - normalizedAngle) * 0.7; // Larger scale for the front image
            items[i].style.transform = `rotateY(${angle}deg) translateZ(300px) scale(${scale})`;
            items[i].style.opacity = 0.5 + (1 - normalizedAngle) * 0.5; // Adjust opacity for better visibility
            items[i].style.zIndex = Math.round((1 - normalizedAngle) * 100); // Adjust z-index for layering
        }
    }

    function handleScroll(event) {
        const delta = Math.sign(event.deltaY || event.deltaX);
        currentAngle = (currentAngle + delta * angleStep) % 360;
        positionItems();
    }

    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
        isDragging = true;
    }

    function handleTouchMove(event) {
        if (!isDragging) return;
        const currentX = event.touches[0].clientX;
        const deltaX = startX - currentX;
        if (Math.abs(deltaX) > 10) { // Threshold to prevent accidental swipes
            currentAngle = (currentAngle + Math.sign(deltaX) * angleStep) % 360;
            positionItems();
            startX = currentX;
        }
    }

    function handleTouchEnd() {
        isDragging = false;
    }

    positionItems();
    window.addEventListener('wheel', handleScroll);
    gallery.addEventListener('touchstart', handleTouchStart);
    gallery.addEventListener('touchmove', handleTouchMove);
    gallery.addEventListener('touchend', handleTouchEnd);
}); 