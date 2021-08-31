function createTagElement({ abbr, tag, index, classType }) {
  const tagElement = document.createElement("button");
  tagElement.setAttribute("class", `tag-element color-${classType}`);
  tagElement.setAttribute("id", index);

  const tagAbbr = document.createElement("h2");
  tagAbbr.textContent = abbr;
  tagAbbr.setAttribute("class", "tag-abbr");

  const tagInfo = document.createElement("p");
  tagInfo.textContent = tag;
  tagInfo.setAttribute("class", "tag-info");

  const tagIndex = document.createElement("small");
  tagIndex.textContent = index;
  tagIndex.setAttribute("class", "tag-index");

  tagElement.appendChild(tagAbbr);
  tagElement.appendChild(tagInfo);
  tagElement.appendChild(tagIndex);

  return tagElement;
}

function renderElements(column, columnElements, length) {
  columnElements.map((element) => {
    const { "class-type": classType, abbr, tag } = element;
    const el = createTagElement({
      abbr,
      tag,
      classType,
      index: length++,
    });
    column.appendChild(el);
  });
}

(function () {
  const firstColumn = document.querySelector(".first-column");
  const secondColumn = document.querySelector(".second-column");
  const middleColumn = document.querySelector(".middle-column");
  const thirdColumn = document.querySelector(".third-column");
  const lastColumn = document.querySelector(".last-column");
  const footerColumn = document.querySelector(".footer-elements");

  renderElements(firstColumn, elements["first-column"], 1);
  renderElements(
    secondColumn,
    elements["second-column"],
    elements["first-column"].length
  );
  renderElements(
    middleColumn,
    elements["middle-column"],
    elements["second-column"].length + elements["first-column"].length
  );
  renderElements(
    thirdColumn,
    elements["third-column"],
    elements["footer-elements"].length +
      elements["middle-column"].length +
      elements["second-column"].length +
      elements["first-column"].length
  );
  renderElements(
    lastColumn,
    elements["last-column"],

    elements["footer-elements"].length +
      elements["third-column"].length +
      elements["middle-column"].length +
      elements["second-column"].length +
      elements["first-column"].length
  );
  renderElements(
    footerColumn,
    elements["footer-elements"],
    elements["middle-column"].length +
      elements["second-column"].length +
      elements["first-column"].length
  );
})();
