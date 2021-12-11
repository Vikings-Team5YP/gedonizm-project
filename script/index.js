const allSections = document.querySelectorAll(".form-section");
const navigationButtons = document.querySelectorAll(".navigation-button");
const radioButtons = document.querySelectorAll(".form-section__radio");
const categoryNavigationButton = document.querySelector(".category-navigation-button");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", (event) => {
    const sectionToOpen = radioButton.getAttribute("value");
    categoryNavigationButton.setAttribute("value", sectionToOpen);
  });
});

navigationButtons.forEach((navigationButton) => {
  navigationButton.addEventListener("click", (event) => {
    const sectionToOpen = navigationButton.getAttribute("value");
    openSection(sectionToOpen);
  });
});

// Открыть секцию.
function openSection(sectionClassName) {
  const allSectionArray = [...allSections];

  // Скрываем активную секцию.
  const activeSection = allSectionArray.find((section) =>
    section.classList.contains("form-section_active")
  );
  activeSection.classList.remove("form-section_active");

  // Показываем необходимую секцию.
  const sectionToOpen = allSectionArray.find((section) =>
    section.classList.contains(sectionClassName)
  );
  sectionToOpen.classList.add("form-section_active");
}

// работа кнопки в выборе категории
const formChoseCategory = document.querySelector(".step-one");
const radioButtonsCategory = formChoseCategory.querySelectorAll(
  ".form-section__radio"
);
radioButtonsCategory.forEach((radioButton) => {
  radioButton.addEventListener("click", (event) => {
    categoryNavigationButton.removeAttribute("disabled");
  });
});





