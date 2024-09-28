const animepr = (animes) => {
  for (const anime of animes) {
    document.body.innerHTML += `
        <div id="anime">
            <div>
                <img src="${anime.imagen}">
            </div>
            <h3>${anime.nombre}</h3>
            <p>${anime.precio}€</p>
        </div>
    `
  }
}

fetch('http://localhost:3000/api/v1/animes')
  .then((res) => res.json())
  .then((animes) => {
    animepr(animes)
  })
