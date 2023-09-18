const books = [
    {
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        id: '1',
        url: 'https://www.goodreads.com/book/show/1885.Pride_and_Prejudice',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1320399351i/1885.jpg',
    },
    {
        title: 'The First Days',
        author: 'Rhiannon Frater',
        id: '2',
        url: 'https://www.goodreads.com/book/show/9648068-the-first-days',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1388800064i/9648068.jpg',
    },
    {
        title: 'Rot and Ruin',
        author: 'Jonathan Maberry',
        id: '3',
        url: 'https://www.goodreads.com/book/show/7157310-rot-ruin',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1264898635i/7157310.jpg',
    },
    {
        title: 'Memoirs of a Geisha',
        author: 'Arthur Golden',
        id: '4',
        url: 'https://www.goodreads.com/book/show/929.Memoirs_of_a_Geisha',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1409595968i/929.jpg',
    },
    {
        title: 'Tomorrow, and Tomorrow, and Tomorrow',
        author: 'Gabrielle Zevin',
        id: '5',
        url: 'https://www.goodreads.com/book/show/58784475-tomorrow-and-tomorrow-and-tomorrow',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636978687l/58784475._SY475_.jpghttps://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1636978687l/58784475._SY475_.jpg',
    },
    {
        title: 'House of Sky and Breath',
        author: 'Sarah J. Maas',
        id: '6',
        url: 'https://www.goodreads.com/book/show/40132775-house-of-sky-and-breath',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1633097753l/40132775._SY475_.jpg',
    },
    {
        title: 'The Maid',
        author: 'Nita Prose',
        id: '7',
        url: 'https://www.goodreads.com/book/show/55196813-the-maid',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1643228739l/55196813.jpg',
    },
    {
        title: 'Hidden Pictures',
        author: 'Jason Rekulak',
        id: '8',
        url: 'https://www.goodreads.com/book/show/58724923-hidden-pictures',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1635260162l/58724923.jpg',
    },
    {
        title: 'Lessons in Chemistry',
        author: 'Bonnie Garmus',
        id: '9',
        url: 'https://www.goodreads.com/book/show/58065033-lessons-in-chemistry',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1634748496l/58065033._SY475_.jpg',
    },
    {
        title: 'The Starless Sea',
        author: 'Erin Morgenstern',
        id: '10',
        url: 'https://www.goodreads.com/book/show/43575115-the-starless-sea',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1617715077i/43575115.jpg',
    },
    {
        title: 'Ninth House',
        author: 'Leigh Bardugo',
        id: '11',
        url: 'https://www.goodreads.com/book/show/43263680-ninth-house',
        coverImg:
            'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1553102141l/43263680.jpg',
    },
    {
        title: 'Divergent',
        author: 'Veronica Roth',
        id: '12',
        url: 'https://www.goodreads.com/book/show/13335037-divergent',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1618526890i/13335037.jpg',
    },
];
const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
const approvedBooks = JSON.parse(localStorage.getItem('approvedBooks')) || [];

let booksCards;
let booksCart;
let cartItems = [];
let searchedBooks = [...books];

const booksGrid = document.querySelector('.books-grid');
const submitBtn = document.querySelector('.submit-btn');
const approvalModal = document.querySelector('.approval-modal-container');
const closeApprovalModalBtn = document.querySelector('.approval-modal-close');
const approvedModal = document.querySelector('.approved-modal-container');
const closeApprovedModalBtn = document.querySelector('.approved-modal-close');
const cart = document.querySelector('.books-cart');
const cartOverlay = document.querySelector('.books-cart-overlay');
const cartBtn = document.querySelector('.cart-btn');
const cartCloseBtn = document.querySelector('.books-cart-close');
const searchQuery = document.querySelector('#query');

submitBtn.addEventListener('click', submitBooks);
closeApprovalModalBtn.addEventListener('click', toggleApprovalModal);
closeApprovedModalBtn.addEventListener('click', toggleApprovedModal);
cartBtn.addEventListener('click', toggleCart);
cartCloseBtn.addEventListener('click', toggleCart);
searchQuery.addEventListener('keyup', searchBooks);

function populateBooks() {
    books.forEach(book => {
        booksGrid.innerHTML += `
            <div class="book">
                <div data-id="${book.id}" class="book-img-container">
                    <div class="book-approved-overlay">
                        <figure>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="w-6 h-6"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </figure>
                    </div>
                    <img src="${book.coverImg}" class="book-img" alt="book-img">
                </div>
                <div class="book-details">
                    <h4 class="title">
                        <a href="${book.url}" target="_blank">${book.title}</a>
                    </h4>
                    <p class="author">By ${book.author}</p>
                </div>
            </div>
            `;
    });

    booksCards = document.querySelectorAll('.book-img-container');
    booksCart = document.querySelector('.cart-items');

    booksCards.forEach(bookCard => {
        bookCard.addEventListener('click', () => {
            selectBook(bookCard);
        });
    });

    if (selectedBooks.length) {
        selectedBooks.forEach(book => {
            cartItems.push(book.id);

            const bookCard = document.querySelector(`.book-img-container[data-id="${book.id}"]`);

            bookCard.classList.toggle('selected');
        });

        updateCartContents();
        toggleSubmitBtn();
    }

    if (approvedBooks.length) {
        approvedModal.classList.toggle('visible');

        checkOffApprovedBooks();
    }

    toggleSubmitBtn();
}

function selectBook(bookCard) {
    const isSelected = bookCard.classList.contains('selected');
    const bookId = bookCard.dataset.id;

    if (isSelected) {
        cartItems = cartItems.filter(item => item !== bookId);

        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks'));
        const newSelectedBooks = selectedBooks.filter(book => book.id !== bookId);

        localStorage.setItem('selectedBooks', JSON.stringify([...newSelectedBooks]));
    } else {
        cartItems.push(`${bookId}`);

        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        const selectedBook = books.find(book => book.id === bookId);

        localStorage.setItem('selectedBooks', JSON.stringify([...selectedBooks, selectedBook]));
    }

    bookCard.classList.toggle('selected');

    updateCartContents();
    toggleSubmitBtn();
}

function updateCartContents() {
    booksCart.innerHTML = '';

    cartItems.forEach(id => {
        const book = books.find(book => book.id === id);

        booksCart.innerHTML += `
            <div data-id="${id}" class="cart-item">
                <div class="cart-book-img-container">
                    <img src="${book.coverImg}" class="cart-book-img" alt="book-img">
                </div>
                <div class="cart-book-details">
                    <h4 class="cart-book-title">${book.title}</h4>
                    <p class="cart-book-author">${book.author}</p>
                </div>
                <div class="cart-item-close">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        `;
    });

    if (cartItems.length) {
        const cartItemCloseBtns = document.querySelectorAll('.cart-item-close');

        cartItemCloseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const bookId = btn.parentElement.dataset.id;
                const bookCard = document.querySelector(`.book-img-container[data-id="${bookId}"]`);

                selectBook(bookCard);
            });
        });
    }
}

function resetBooks() {
    cartItems = [];

    booksCards.forEach(bookCard => {
        bookCard.classList.remove('selected');
    });

    updateCartContents();
}

function toggleSubmitBtn() {
    if (cartItems.length) {
        submitBtn.classList.remove('disabled');
        submitBtn.disabled = false;
    } else {
        booksCart.innerHTML = `
            <div class="cart-placeholder">
                <p>
                    Looks like you haven't added anything to your cart yet. Start reading today!
                </p>
            </div>
        `;

        submitBtn.classList.add('disabled');
        submitBtn.disabled = true;
    }
}

function submitBooks() {
    const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks'));
    const booksForApproval = JSON.parse(localStorage.getItem('booksForApproval')) || [];
    const filteredBooks = booksForApproval.filter(
        book => !selectedBooks.map(book => book.id).includes(book.id)
    );

    localStorage.setItem('booksForApproval', JSON.stringify([...filteredBooks, ...selectedBooks]));
    localStorage.removeItem('selectedBooks');

    toggleApprovalModal();
    resetBooks();
    toggleSubmitBtn();
    toggleCart();
}

function searchBooks() {
    const query = searchQuery.value;
    const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];

    if (query) {
        searchedBooks = books.filter(book =>
            book.title.toLowerCase().includes(query.toLowerCase())
        );

        booksGrid.innerHTML = '';

        searchedBooks.forEach(book => {
            if (approvedBooks.map(book => book.id).includes(book.id)) {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container approved">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            } else if (selectedBooks.map(book => book.id).includes(book.id)) {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container selected">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            } else {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            }
        });
    } else {
        booksGrid.innerHTML = '';

        books.forEach(book => {
            if (approvedBooks.map(book => book.id).includes(book.id)) {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container approved">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            } else if (selectedBooks.map(book => book.id).includes(book.id)) {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container selected">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            } else {
                booksGrid.innerHTML += `
                <div class="book">
                    <div data-id="${book.id}" class="book-img-container">
                        <div class="book-approved-overlay">
                            <figure>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                            </figure>
                        </div>
                        <img src="${book.coverImg}" class="book-img" alt="book-img">
                    </div>
                    <div class="book-details">
                        <h4 class="title">
                            <a href="${book.url}" target="_blank">${book.title}</a>
                        </h4>
                        <p class="author">By ${book.author}</p>
                    </div>
                </div>
                `;
            }
        });
    }

    booksCards = document.querySelectorAll('.book-img-container');

    booksCards.forEach(bookCard => {
        bookCard.addEventListener('click', () => {
            selectBook(bookCard);
        });
    });
}

function checkOffApprovedBooks() {
    approvedBooks.forEach(book => {
        const bookCard = document.querySelector(`.book-img-container[data-id="${book.id}"]`);

        bookCard.classList.toggle('approved');
    });
}

function toggleApprovalModal() {
    approvalModal.classList.toggle('visible');
}

function toggleApprovedModal() {
    approvedModal.classList.toggle('visible');
}

function toggleCart() {
    cart.classList.toggle('visible');
    cartOverlay.classList.toggle('visible');
}

populateBooks();
