const cardPane = document.querySelector(
  "div.card-container > div[class='card-pane']"
);
const tags = document.querySelectorAll(".tag-element");

cardPane.addEventListener("click", function () {
  const cardContainer = document.querySelector("div.card-container");
  cardContainer.style.display = "none";
  document.body.style.display = "block";
});

tags.forEach(function (tag) {
  tag.addEventListener("click", () => {
    const cardContainer = document.querySelector("div.card-container");
    cardContainer.style.display = "flex";
    document.body.style.display = "flex";

    const elementColumn = tag.parentElement.classList[0];
    const abbr = tag.children[0].textContent;

    const target = elements[elementColumn].filter(
      (els) => els.abbr === abbr
    )[0];

    /* fulling the card */

    document
      .querySelector("div.card-container > div.card-element > header")
      .setAttribute("class", tag.classList[1]);

    document.querySelector(
      "div.card-container > div.card-element > header > h2.tag-abbr"
    ).textContent = target.abbr;

    document.querySelector(
      "div.card-container > div.card-element > header > p.tag-info"
    ).textContent = target.tag;

    document.querySelector(
      "div.card-container > div.card-element > header > small.tag-index"
    ).textContent = tag.children[2].textContent;

    document.querySelector(
      "div.card-container > div.card-element > footer > p"
    ).textContent = target.def;

    const ul = document.createElement("ul");

    target.attr.forEach(({ name, def }) => {
      const li = createLi(name, def);
      ul.appendChild(li);
    });

    document.querySelector(
      "div.card-container > div.card-element > footer > section > ul"
    ).innerHTML = ul.outerHTML;
  });
});

function createLi(attr, def) {
  const li = document.createElement("li");
  li.innerHTML = `<dfn>${attr}</dfn> ${def}`;
  return li;
}
