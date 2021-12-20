const apiConsult = async () => {
  const res = await fetch("http://localhost:3000/diary");
  const apiInfo = await res.json();
  const newapiInfo = apiInfo.sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );
  drawDates(newapiInfo);
};

const drawDates = (newapiInfo) => {
  for (const info of newapiInfo) {
    const div$$ = document.createElement("div");
    const h3$$ = document.createElement("h3");
    const h5$$ = document.createElement("h5");
    const p$$ = document.createElement("p");
    const button$$ = document.createElement("button");

    h3$$.textContent = info.title;
    h5$$.textContent = info.date;
    p$$.textContent = info.description;
    button$$.textContent = "Bórrame";

    button$$.addEventListener("click", () => {
      div$$.remove();
    });

    div$$.appendChild(h3$$);
    div$$.appendChild(h5$$);
    div$$.appendChild(p$$);
    div$$.appendChild(button$$);
    document.body.appendChild(div$$);
  }
};

apiConsult();
