document.getElementById('addForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const rank = parseInt(document.getElementById('rank').value);
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const publisher = document.getElementById('publisher').value;
    const year = document.getElementById('year').value;
    const episode = documnet.getElementById('episode').value;

    let books = JSON.parse(localStorage.getItem('books')) || [];

    books.forEach(book => {
        if (book.rank >= rank) {
            book.rank += 1;
        }
    });

    const newBook = { rank, title, author, publisher, year };
    books.push(newBook);
    books.sort((a, b) => a.rank - b.rank);

    localStorage.setItem('books', JSON.stringify(books));

    alert('새로운 도서가 추가되었습니다!');
    location.href = 'index.html';
});

// 실시간 Validation 체크
document.querySelectorAll("input").forEach(input => {
    input.addEventListener("input", function() {
        if (this.id === "title" && this.value.length < 2) {
            this.setCustomValidity("도서명은 2글자 이상이어야 합니다.");
        } else if (this.id === "author" && this.value.length < 2) {
            this.setCustomValidity("저자는 2글자 이상이어야 합니다.");
        } else if (this.id === "publisher" && this.value.length < 2) {
            this.setCustomValidity("출판사는 2글자 이상이어야 합니다.");
        } else if (this.id === "year" && (this.value < 1900 || this.value > 2024)) {
            this.setCustomValidity("출판년도를 올바르게 입력해주세요.");
        } else {
            this.setCustomValidity("");
        }
    });
});
