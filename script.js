// JSON 데이터를 직접 script.js에 포함합니다.
const booksData = [
  { "id": 1, "title": "원피스", "author": "오다 에이치로", "publisher": "슈에이샤", "year": 1997, "episode": 1000 },
  { "id": 2, "title": "나루토", "author": "키시모토 마사시", "publisher": "슈에이샤", "year": 1999, "episode": 720 },
  { "id": 3, "title": "드래곤볼", "author": "토리야마 아키라", "publisher": "슈에이샤", "year": 1984, "episode": 291 },
  { "id": 4, "title": "헌터X헌터", "author": "토가시 요시히로", "publisher": "슈에이샤", "year": 1998, "episode": 148 },
  { "id": 5, "title": "블리치", "author": "쿠보 타이토", "publisher": "슈에이샤", "year": 2001, "episode": 366 },
  { "id": 6, "title": "데스노트", "author": "오바 츠구미", "publisher": "슈에이샤", "year": 2003, "episode": 37 },
  { "id": 7, "title": "베르세르크", "author": "미우라 켄타로", "publisher": "하쿠센샤", "year": 1990, "episode": 0 },
  { "id": 8, "title": "슬램덩크", "author": "이노우에 타케히코", "publisher": "슈에이샤", "year": 1990, "episode": 101 },
  { "id": 9, "title": "유유백서", "author": "토가시 요시히로", "publisher": "슈에이샤", "year": 1990, "episode": 112 },
  { "id": 10, "title": "소울이터", "author": "오쿠보 아츠시", "publisher": "스퀘어 에닉스", "year": 2004, "episode": 51 }
];

// 도서 목록 보기
document.getElementById('getData').addEventListener('click', function() {
  renderBooks(booksData); // 데이터를 사용하여 책 목록을 렌더링
});

// 도서 검색
document.getElementById('searchData').addEventListener('click', function() {
  const searchTerm = prompt("검색할 도서명을 입력하세요:");
  if (searchTerm) {
    const filteredBooks = booksData.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    renderBooks(filteredBooks);
  }
});

// 도서 추가 폼 노출
document.getElementById('addDataForm').addEventListener('click', function() {
  document.getElementById('bookId').value = ""; // 새로운 도서 추가시 ID는 자동 생성됨
  document.getElementById('bookForm').classList.remove('d-none');
});

// 도서 목록을 DOM에 추가
function renderBooks(books) {
  const output = document.getElementById('output');
  output.innerHTML = ''; // 기존 내용을 지웁니다.

  books.forEach(book => {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center">
         <div>
            <strong>ID ${book.id}:</strong> ${book.title} by ${book.author} 
            (${book.year}, ${book.publisher}, 회차: ${book.episode})
         </div>
         <div>
            <button class="btn btn-secondary btn-sm" onclick="editBook(${book.id})">수정</button>
            <button class="btn btn-danger btn-sm" onclick="deleteBook(${book.id})">삭제</button>
         </div>
      </div>
    `;
    output.appendChild(li);
  });
}

// 도서 수정 폼 표시. 기능적인 부분 추가 필요
document.getElementById('updateDataForm').addEventListener('click', function() {
  const bookId = prompt("수정할 도서 ID를 입력하세요:");
  if (bookId) {
    document.getElementById('bookId').value = bookId;
    document.getElementById('bookForm').classList.remove('d-none');
  }
});

// 도서 삭제
document.getElementById('deleteData').addEventListener('click', function() {
  const bookId = prompt("삭제할 도서 ID를 입력하세요:");
  if (bookId) {
    showMessage(`도서 ID ${bookId} 삭제 요청이 처리되었습니다.`, "success");
    // 생략된 실제 삭제 로직. 필요 시 구현

  }
});

// 폼 제출 이벤트 처리
document.getElementById('bookForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const bookId = document.getElementById('bookId').value;
  const title = document.getElementById('bookTitle').value;
  const author = document.getElementById('bookAuthor').value;
  const year = parseInt(document.getElementById('bookYear').value);
  const publisher = document.getElementById('bookPublisher').value;
  const episode = parseInt(document.getElementById('bookEpisode').value); // 추가된 회차 수 필드

  const newBook = {
    id: booksData.length + 1,
    title,
    author,
    year,
    publisher,
    episode // 회차 수 값 저장
  };

  if (!bookId) {
    // 새로운 도서 추가
    booksData.push(newBook);
    showMessage(`도서 ${title}가 추가되었습니다.`, "success");
  } else {
    // 기존 도서 수정 로직 구현
    const index = booksData.findIndex((book) => book.id === parseInt(bookId));
    if (index !== -1) {
      booksData[index] = { id: parseInt(bookId), title, author, year, publisher, episode };
      showMessage(`도서 ${title}가 수정되었습니다.`, "success");
    }
  }

  document.getElementById('bookForm').classList.add('d-none');
  document.getElementById('bookForm').reset();
  renderBooks(booksData);
});

// 폼 취소 버튼
document.getElementById('cancelForm').addEventListener('click', function() {
  document.getElementById('bookForm').classList.add('d-none');
  document.getElementById('bookForm').reset();
});

// 메시지 표시 함수
function showMessage(message, type) {
  const messageDiv = document.getElementById("message");
  messageDiv.className = `alert alert-${type}`;
  messageDiv.textContent = message;
  messageDiv.classList.remove("d-none");
  setTimeout(() => {
    messageDiv.classList.add("d-none");
  }, 3000);
}