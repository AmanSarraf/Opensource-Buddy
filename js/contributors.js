(function () {
  fetch("CONTRIBUTORS.md")
    .then((response) => response.text())
    .then((text) => {
      const container = document.querySelector("#contributors");
      const list = text
        .split("\n")
        .filter((_, ind) => ind > 0)
        .map((el) =>
          el
            .replaceAll("- [", "")
            .replaceAll(")", "")
            .split("](")
            .map((el) => el.trim())
        );
      for (let [name, link] of list) {
        if (link.endsWith("/")) link = link.slice(0, -1);
        const img = document.createElement("img");
        img.src = `${link}.png?size=200`;
        img.alt = name;
        img.classList.add("col-sm-4");
        img.style =
          "height: 48px; width: 48px; border-radius: 100%; padding: 0;";

        const nameBlock = document.createElement("div");
        nameBlock.classList.add("col-sm-8", "text-center");
        nameBlock.style = "padding: 0;";
        nameBlock.innerText = name;

        const swatch = document.createElement("div");
        swatch.style =
          "display: flex; align-items: center; padding: 0; justify-content: center;";
        swatch.classList.add("col-sm-12");
        swatch.appendChild(img);
        swatch.appendChild(nameBlock);

        const contributor = document.createElement("a");
        contributor.href = link;
        contributor.target = "_blank";
        contributor.rel = "noopener noreferrer";
        contributor.style =
          "display: inline-block; background: #cc3880; color: #fff; margin: 10px; padding: 10px; border-radius: 10px; text-decoration: none;";
        contributor.classList.add("col-sm-4", "col-md-3", "col-lg-2");
        contributor.appendChild(swatch);

        container.appendChild(contributor);
      }
    });
})();
