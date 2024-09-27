document.addEventListener("DOMContentLoaded", function() {
  const initialBooks = [
    { rank: 1, title: "원피스", author: "오다 에이치로", publisher: "슈에이샤", year: 1997 },
    { rank: 2, title: "나루토", author: "키시모토 마사시", publisher: "슈에이샤", year: 1999 },
    { rank: 3, title: "드래곤볼", author: "토리야마 아키라", publisher: "슈에이샤", year: 1984 },
    { rank: 4, title: "헌터X헌터", author: "토가시 요시히로", publisher: "슈에이샤", year: 1998 },
    { rank: 5, title: "블리치", author: "쿠보 타이토", publisher: "슈에이샤", year: 2001 },
    { rank: 6, title: "데스노트", author: "오바 츠구미", publisher: "슈에이샤", year: 2003 },
    { rank: 7, title: "베르세르크", author: "미우라 켄타로", publisher: "하쿠센샤", year: 1990 },
    { rank: 8, title: "슬램덩크", author: "이노우에 타케히코", publisher: "슈에이샤", year: 1990 },
    { rank: 9, title: "유유백서", author: "토가시 요시히로", publisher: "슈에이샤", year: 1990 },
    { rank: 10, title: "소울이터", author: "오쿠보 아츠시", publisher: "스퀘어 에닉스", year: 2004 }
  ];

  let books = JSON.parse(localStorage.getItem('books')) || initialBooks;

  if (!localStorage.getItem('books')) {
    localStorage.setItem('books', JSON.stringify(initialBooks));
  }

  const bookList = document.getElementById("bookList");

  function renderBooks() {
    bookList.innerHTML = ""; // 기존 목록 초기화
    books.sort((a, b) => a.rank - b.rank); // 순위로 정렬
    books.forEach((book, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${book.rank}</td>
                <td><a href="#" class="book-title" data-index="${index}">${book.title}</a></td> <!-- 제목을 링크로 만듦 -->
                <td>${book.author}</td>
                <td>${book.publisher}</td>
                <td>${book.year}</td>
            `;
      bookList.appendChild(row);
    });

    // 제목 클릭 이벤트 추가
    document.querySelectorAll(".book-title").forEach(title => {
      title.addEventListener("click", function(event) {
        event.preventDefault(); // 기본 링크 동작 방지
        const bookIndex = event.target.getAttribute("data-index");
        localStorage.setItem("currentBookIndex", bookIndex); // 클릭한 책의 인덱스를 저장
        location.href = 'view.html'; // view.html로 이동
      });
    });
  }

  renderBooks();
});
