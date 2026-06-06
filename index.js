window.addEventListener('load', () => {
    // 1. Matcha Friday Banner Logic
    const today = new Date().getDay(); 
    if (today === 5) { // 5 is Friday
        const hero = document.querySelector('#body-section');
        if (hero && !document.querySelector('.ramen-friday-alert')) {
            const alert = document.createElement('div');
            alert.className = 'ramen-friday-alert';
            alert.innerHTML = '🍜 <strong>Matcha Friday is Here!</strong> Explore our new arrivals.';
            hero.prepend(alert);
        }
    }

    // 2. Ramen Bowl Interactive Nudge (The Fixed Bounce)
   const ramenLogo = document.querySelector('.retro-ramen-logo');

if (ramenLogo) {
    ramenLogo.addEventListener('click', (e) => {
        console.log("Ramen Logo Clicked!"); // Check your browser Console!
        
        ramenLogo.classList.remove('nudge');
        void ramenLogo.offsetWidth; 
        ramenLogo.classList.add('nudge');
    });
} else {
    console.error("DEBUG: .retro-ramen-logo not found in the DOM.");
}

    // 3. Scroll Reveal Logic
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('ramen-reveal');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.ramen-para, .ramen-title').forEach(el => {
        observer.observe(el);
    });
});