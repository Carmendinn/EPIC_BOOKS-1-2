document.addEventListener("DOMContentLoaded", function () {
  const url = "https://striveschool-api.herokuapp.com/books";
  const searchInput = document.getElementById("searchInput");
  const booksContainer = document.querySelector(".booksContainer");
  let books = [];
//console.log(url);
  // Funzione di ricerca
  searchInput.addEventListener("input", function () {
    const searchTerm = this.value.toLowerCase();
    const filteredBooks = books.filter((book) =>
      book.title.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
  });

  // Fetch dei libri dall'API
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      books = data;
      renderBooks(books);
    });

  // Funzione per renderizzare i libri su window
  function renderBooks(data) {
    booksContainer.innerHTML = data.map((book) => {
      return `<div class="col col-3 mb-2">
                <div class="card">
                  <img src="${book.img}" class="card-img-top">
                  <div class="card-body">
                    <h5 class="card-title">${book.title}</h5>
                    <p class="card-text">USD ${book.price}</p>
                    <div class="d-flex flex-column justify-content-center align-items-center">
                      <button type="button" class="btn btn-success mb-1" onclick="addToCart('${book.img}', '${book.title}', 'USD ${book.price}')"><i class="bi bi-cart-plus"></i>Add to Cart</button>
                      <button type="button" class="btn btn-warning mb-1" onclick="deleteBook(event)">Elimina libro</button>
                      <a href="./details.html?id=${book.asin}&title=${book.title}"class="btn btn-info w-90 mb-1"onclick="">Dettagli</a>
                    </div>
                  </div>
                </div>
              </div>`;
    }).join("");
  } 
});

// Funzione per aggiungere un libro al carrello
const addToCart = (img, title, price) => {
  const cartContent = document.getElementById("cartContent");
  cartContent.innerHTML += `<div class="offcanvas-body text-white">
                              <div class="card">
                                <img src="${img}" class="card-img-top">
                                <div class="card-body">
                                  <h5 class="card-title">${title}</h5>
                                  <p class="card-text">${price}</p>
                                </div>
                              </div>
                            </div>`;
};
