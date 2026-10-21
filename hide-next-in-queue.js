(function hideNextInQueue() {
  const LABEL = "next in queue";

  function hideQueueSection() {
    for (const h of document.querySelectorAll("h2")) {
      if (h.textContent.trim().toLowerCase() !== LABEL) continue;
      const section = h.closest("section") || h.parentElement;
      if (section && section.style.display !== "none") {
        section.style.display = "none";
      }
    }
  }

  function loop() {
    hideQueueSection();
    requestAnimationFrame(loop);
  }

  requestAnimationFrame(loop);
})();
