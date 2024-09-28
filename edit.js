// 로컬 스토리지에서 선택된 도서의 정보를 불러와서 Form에 채워줌
document.addEventListener("DOMContentLoaded", function() {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const currentBookIndex = localStorage.getItem('currentBookIndex'); // 선택한 책의 인덱스

    if (currentBookIndex !== null) {
        const book = books[currentBookIndex];
        document.getElementById('rank').value = book.rank;
        document.getElementById('title').value = book.title;
        document.getElementById('author').value = book.author;
        document.getElementById('publisher').value = book.publisher;
        document.getElementById('year').value = book.year;
        document.getElementById('episode').vaule = book.episode;
    }
});

// Validation 적용
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

// 수정된 내용을 저장
document.getElementById('editForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (confirm("게시물을 수정할까요?")) {
        const rank = parseInt(document.getElementById('rank').value);
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const publisher = document.getElementById('publisher').value;
        const year = document.getElementById('year').value;

        let books = JSON.parse(localStorage.getItem('books')) || [];
        const currentBookIndex = localStorage.getItem('currentBookIndex');

        if (currentBookIndex !== null) {
            // 기존 도서 정보를 수정
            books[currentBookIndex] = { rank, title, author, publisher, year };

            // 수정된 도서를 로컬 스토리지에 저장
            localStorage.setItem('books', JSON.stringify(books));

            alert("도서가 성공적으로 수정되었습니다!");
            location.href = 'index.html'; // 목록 페이지로 돌아감
        }
    }
});
