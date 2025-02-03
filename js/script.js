// copy paste 
document.addEventListener("copy", (e) => {
    e.preventDefault();
    if (e.clipboardData) {
        e.clipboardData.setData("text/plain", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
    } else if (window.clipboardData) {
        window.clipboardData.setData("Text", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
    }
});
//

document.addEventListener("DOMContentLoaded", () => {
	// Register GSAP Plugins
  gsap.registerPlugin(ScrollTrigger);
  // Parallax Layers
  document.querySelectorAll('[data-parallax-layers]').forEach((triggerElement) => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 0%",
        end: "100% 0%",
        scrub: 0
      }
    });
    const layers = [
      { layer: "1", yPercent: 70 },
      { layer: "2", yPercent: 55 },
      { layer: "3", yPercent: 40 },
      { layer: "4", yPercent: 10 }
    ];
    layers.forEach((layerObj, idx) => {
      tl.to(
        triggerElement.querySelectorAll(`[data-parallax-layer="${layerObj.layer}"]`),
        {
          yPercent: layerObj.yPercent,
          ease: "none"
        },
        idx === 0 ? undefined : "<"
      );
    });
  });

  // Add touch event listeners for mobile devices
  document.querySelectorAll('.container, .gallery-container').forEach((element) => {
    element.addEventListener('touchstart', () => {
      element.classList.add('active');
    });
    element.addEventListener('touchend', () => {
      element.classList.remove('active');
    });
  });

  // Automatically trigger hover effects on scroll for mobile view
  if (window.innerWidth <= 600) {
    window.addEventListener('scroll', () => {
      document.querySelectorAll('.container, .gallery-container').forEach((element) => {
        element.classList.add('active');
        setTimeout(() => {
          element.classList.remove('active');
        }, 1000); // Adjust the timeout as needed
      });
    });
  }
});
/* Lenis */
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {lenis.raf(time * 1000);});
gsap.ticker.lagSmoothing(0);