const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  
  for (let i = 0; i < countries.length; i++) {
      let myDiv$$ = document.createElement('div');
      let myH4$$ = document.createElement('h4');
      let myImg$$ = document.createElement('img');
      myH4$$.textContent = countries[i].title;
      myImg$$.setAttribute("src", countries[i].imgUrl);
      myDiv$$.appendChild(myH4$$);
      myDiv$$.appendChild(myImg$$);
      document.body.appendChild(myDiv$$);
  }


  let myDiv$$ = document.querySelectorAll('div');
  let myButton$$ = document.querySelector('button');
  myButton$$.textContent = "Elimino el último";

  function deleteDiv() {
    let myDiv$$ = document.querySelectorAll('div');
    myDiv$$[myDiv$$.length - 1].remove();
  }

  myButton$$.addEventListener('click', deleteDiv);