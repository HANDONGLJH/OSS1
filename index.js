document.addEventListener("DOMContentLoaded", function() {
    // 기본 도서 목록 (처음 로드 시에만 사용됨)
    const initialBooks = [
        { rank: 1, title: "원피스", author: "오다 에이치로", publisher: "슈에이샤", year: 1997 },
        { rank: 2, title: "나루토", author: "키시모토 마사시", publisher: "슈에이샤", year: 1999 },
        { rank: 3, title: "드래곤볼", author: "토리야마 아키라", publisher: "슈에이샤", year: 1984 },
        { rank: 4, title: "헌터X헌터", author: "토가시 요시히로", publisher: "슈에이샤", year: 1998 },
        { rank: 5, title: "블리치", author: "쿠보 타이토", publisher: "슈에이샤", year: 2001 }
    ];

    // 로컬 스토리지에 저장된 도서 목록을 가져옴 (없을 경우 초기값 사용)
    let books = JSON.parse(localStorage.getItem('books')) || initialBooks;

    // 초기 로드 시 기본 목록을 로컬 스토리지에 저장 (한 번만 실행)
    if (!localStorage.getItem('books')) {
        localStorage.setItem('books', JSON.stringify(initialBooks));
    }

    const bookList = document.getElementById("bookList");

    // 도서 목록을 동적으로 추가
    function renderBooks() {
        bookList.innerHTML = ""; // 기존 목록 초기화
        books.sort((a, b) => a.rank - b.rank); // 순위로 정렬
        books.forEach(book => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${book.rank}</td>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.publisher}</td>
                <td>${book.year}</td>
            `;
            bookList.appendChild(row);
        });
    }

    renderBooks();
});
