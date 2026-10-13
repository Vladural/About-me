const themeButton = document.querySelector("#themeButton");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    const isDark = document.body.classList.contains("dark-theme");

    themeButton.textContent = isDark ? "Светлая тема" : "Тёмная тема";
  });
}
const skillTabs = document.querySelectorAll(".skill-tab");
const tabPanels = document.querySelectorAll(".tab-panel");

skillTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const selectedTab = tab.dataset.tab;
    skillTabs.forEach((item) => {
      const isActive = item === tab;

      item.classList.toggle("active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });
    tabPanels.forEach((panel) => {
      const isActive = panel.dataset.panel === selectedTab;

      panel.hidden = !isActive;
    });
  });
});
