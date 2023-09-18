/**
 * 1. Sélectionner la section des couleurs
 * 2. Créer le TITLE de la couleur : h3
 * 3. Créer le carré et lui attribuer le background-color
 * 4. Créer la déscription de la couleur
 * 5. Créer l'item qui va contenir les éléments précédents (li)
 * 6. Par rapport à la palette on va boucler pour rajouter chaque item dans le UL
 */

const colors = document.querySelector("#colors");


colorPalette.map((palette) => {
  const paletteList = document.createElement("ul");
  paletteList.id = palette.id;

  palette.colors.map((colorItem) => {
    const colorTitle = document.createElement("h3");
    colorTitle.innerHTML = colorItem.title;

    const colorSquare = document.createElement("div");
    colorSquare.classList.add("color-item-square");
    colorSquare.style.backgroundColor = colorItem.colorCode;

    const colorDescription = document.createElement("p");
    colorDescription.innerHTML = colorItem.colorCode;
    colorDescription.classList.add("color-item-description");

    const colorItemContainer = document.createElement("li");
    colorItemContainer.classList.add("color-item");
    colorItemContainer.appendChild(colorTitle);
    colorItemContainer.appendChild(colorSquare);
    colorItemContainer.appendChild(colorDescription);

    paletteList.appendChild(colorItemContainer);
  });

  colors.appendChild(paletteList);

});
