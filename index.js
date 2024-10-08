function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())  // Convert response to JSON
    .then(books => {
      renderBooks(books);  // Pass the data to renderBooks to display book titles
      console.log('5th book in the series:', books[4]);  // Log the 5th book (index 4)

      const totalPages = books.reduce((total, book) => total + book.numberOfPages, 0);  // Calculate total pages
      console.log('Total pages of all books:', totalPages);

      // Fetch and log the 1031st character
      return fetch('https://anapioficeandfire.com/api/characters/1031')
        .then(response => response.json())
        .then(character => console.log('1031st character:', character.name));
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});

