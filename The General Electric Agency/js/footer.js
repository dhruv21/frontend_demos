document.addEventListener("DOMContentLoaded", () => {
  const footerHeaderContent = document.querySelector(".footer-header");
  const footerHeaderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          footerHeaderContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  footerHeaderObserver.observe(footerHeaderContent);
});
