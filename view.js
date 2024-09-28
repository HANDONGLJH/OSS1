// 로컬 스토리지에서 선택된 도서의 정보를 가져와서 표시
document.addEventListener("DOMContentLoaded", function() {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const currentBookIndex = localStorage.getItem('currentBookIndex'); // 선택한 책의 인덱스

  if (currentBookIndex !== null) {
    const book = books[currentBookIndex];
    const bookDetail = document.getElementById('bookDetail');
    bookDetail.innerHTML = `
            <li><strong>순위:</strong> ${book.rank}</li>
            <li><strong>도서명:</strong> ${book.title}</li>
            <li><strong>저자:</strong> ${book.author}</li>
            <li><strong>출판사:</strong> ${book.publisher}</li>
            <li><strong>출판년도:</strong> ${book.year}</li>
            <li><strong>회차:</strong> ${book.episode}</li>
        `;
  }
});

// [삭제] 버튼 기능
function deleteBook() {
  if (confirm("게시물을 삭제할까요?")) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const currentBookIndex = localStorage.getItem('currentBookIndex');

    if (currentBookIndex !== null) {
      // 해당 책을 목록에서 삭제
      books.splice(currentBookIndex, 1);
      localStorage.setItem('books', JSON.stringify(books));

      alert("도서가 삭제되었습니다.");
      location.href = 'index.html'; // 삭제 후 목록 페이지로 이동
    }
  }
}

// [수정] 버튼 기능: 수정 페이지로 이동
function editBook() {
  const currentBookIndex = localStorage.getItem('currentBookIndex');

  if (currentBookIndex !== null) {
    location.href = 'edit.html'; // edit.html로 이동
  }
}
