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
      let myButton$$ = document.querySelectorAll('button');
      myH4$$.textContent = countries[i].title;
      myImg$$.setAttribute("src", countries[i].imgUrl);
      myButton$$.textContent = "Elimino el mío";
      myButton$$.addEventListener('click', deleteDiv(myDiv$$));
      myDiv$$.appendChild(myH4$$);
      myDiv$$.appendChild(myImg$$);
      myDiv$$.appendChild(myButton$$);
      document.body.appendChild(myDiv$$);
  }



  function deleteDiv(myDiv$$) {
    myDiv$$.remove();
  }

  