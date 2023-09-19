/**
 * 1. Cliquer sur un item;
 * 2. Afficher le modal;
 * 3. Afficher le contenu de l'item cliqué;
 */

/**
 * 1. Sélectionner les items;
 * 2. Ajouter un event click;
 * 3. Afficher le modal:
 * 3.1. Sélectionner le modal;
 * 3.2. Changer sa propriété display;
 * 3.3. Récupérer les contenus (le title et le codeColor);
 * 3.4. Créer des éléements attachés aux contenus;
 * 3.5. Ajouter ces éléments dans notre modal
 * 4. Permettre de sortir du modal:
 * 4.1 Sélectionner le bouton close;
 * 4.2 Ajouter un event click qui va changer la propriété display du modal;
 */

const colorItemList = document.querySelectorAll(".color-item");
const modalContainer = document.querySelector("#modal-box");
const closeButton = document.querySelector("#cross-button");

const articleContainer = document.createElement("div");
articleContainer.innerHTML = "";
modalContainer.style.display = "none";
modalContainer.appendChild(articleContainer);

colorItemList.forEach((colorItem) => {
  colorItem.addEventListener("click", (event) => {
    const currentElement = event.currentTarget.innerHTML;
    articleContainer.innerHTML = currentElement;
    modalContainer.style.display = "flex";
  });
});

closeButton.addEventListener("click", () => {
    modalContainer.style.display = "none";
    articleContainer.innerHTML = "";
});

