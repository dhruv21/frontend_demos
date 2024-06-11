document.addEventListener("DOMContentLoaded", () => {
  const serviceCardContainerContent = document.querySelector(
    ".service-card-container"
  );

  const serviceCardContainerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceCardContainerContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  serviceCardContainerObserver.observe(serviceCardContainerContent);

  const serviceHeaderContent = document.querySelector(".service-header");

  const serviceHeaderObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceHeaderContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  serviceHeaderObserver.observe(serviceHeaderContent);

  const serviceSubtitleContent = document.querySelector(".service-subtitle");

  const serviceSubtitleObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          serviceSubtitleContent.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  serviceSubtitleObserver.observe(serviceSubtitleContent);
});
