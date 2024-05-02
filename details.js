const parametri = new URLSearchParams(location.search);
const id = parametri.get("id");


document.addEventListener("DOMContentLoaded", function () {
    const url = "https://striveschool-api.herokuapp.com/books/"+ id;
    console.log(new URLSearchParams(location.search));
    console.log(location.search);
console.log(id);


    // Fetch dei libri dall'API
    fetch(url)
  .then((response) => response.json())
  .then((book) => {
    console.log(book); 
    const booksContainer = document.querySelector(".booksContainer");
    booksContainer.innerHTML = `<div class="col col-3 mb-2">
              <div class="card">
                <img src="${book.img}" class="card-img-top">
                <div class="card-body">
                  <h5 class="card-title">${book.title}</h5>
                  <p class="card-text">USD ${book.price}</p>
                  <div class="d-flex flex-column justify-content-center align-items-center">
                    <button type="button" class="btn btn-success mb-1" onclick="addToCart('${book.img}', '${book.title}', 'USD ${book.price}')"><i class="bi bi-cart-plus"></i>Add to Cart</button>
                    <button type="button" class="btn btn-warning mb-1" onclick="deleteBook(event)">Elimina libro</button>
                    <a href="./details.html?${book.asin}&title=${book.title}" class="btn btn-info w-90 mb-1" onclick="">Dettagli</a>
                  </div>
                </div>
              </div>
            </div>`;
  });

});