document.getElementById('addForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var ranking = document.getElementById('ranking').value;
  var title = document.getElementById('title').value;
  var author = document.getElementById('author').value;
  var publisher = document.getElementById('publisher').value;
  var year = document.getElementById('year').value;

  if (title.length < 2) {
      alert('도서명은 2글자 이상이어야 합니다.');
      return;
  }

  if (author.length < 2) {
      alert('저자는 2글자 이상이어야 합니다.');
      return;
  }

  if (publisher.length < 2) {
      alert('출판사는 2글자 이상이어야 합니다.');
      return;
  }

  if (year < 1900 || year > 2024) {
      alert('출판년도를 올바르게 입력해주세요.');
      return;
  }

  var book = {
      ranking: ranking,
      title: title,
      author: author,
      publisher: publisher,
      year: year
  };

  var books = JSON.parse(localStorage.getItem('books')) || [];
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));

  alert('도서가 성공적으로 추가되었습니다!');
  location.href = 'index.html';
});

document.querySelector('h1').classList.add('anime-title');