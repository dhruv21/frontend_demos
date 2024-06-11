document.addEventListener("DOMContentLoaded", () => {
  const partnerHeaderContent = document.querySelector(".partner-header");
  const partnerHeaderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          partnerHeaderContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  partnerHeaderObserver.observe(partnerHeaderContent);
  
  const partnerSubtitleContent = document.querySelector(".partner-subtitle");
  const partnerSubtitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          partnerSubtitleContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );
  partnerSubtitleObserver.observe(partnerSubtitleContent);
});
