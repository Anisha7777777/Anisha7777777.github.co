const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

const texts = document.querySelectorAll('.scroll-text');

    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + window.innerHeight;
      texts.forEach(text => {
        const rect = text.getBoundingClientRect();
        const elementTop = rect.top + window.scrollY;
        const distance = scrollY - elementTop;

        // Control sensitivity (adjust divisor for slower/faster movement)
        let progress = Math.min(distance / 400, 1);
        if (progress > 0) {
          text.style.opacity = progress;
          text.style.transform = `translateY(${80 - progress * 80}px)`;
        }
      });
    });