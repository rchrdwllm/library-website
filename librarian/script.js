let booksForApproval = JSON.parse(localStorage.getItem('booksForApproval')) || [];
let cartItems = [];
let booksCards;
let booksCart;
const cart = document.querySelector('.books-cart');
const approvalModal = document.querySelector('.approval-modal-container');
const closeApprovalModalBtn = document.querySelector('.approval-modal-close');
const cartOverlay = document.querySelector('.books-cart-overlay');
const cartBtn = document.querySelector('.cart-btn');
const cartCloseBtn = document.querySelector('.books-cart-close');
const approveBtn = document.querySelector('.approve-btn');
const greeting = document.querySelector('.hero-heading');
const librarianName = localStorage.getItem('librarianName');

approveBtn.addEventListener('click', approveBooks);
closeApprovalModalBtn.addEventListener('click', toggleApprovalModal);
cartBtn.addEventListener('click', toggleCart);
cartCloseBtn.addEventListener('click', toggleCart);

function populateBooks() {
    greeting.innerHTML = `Hello, <span>${librarianName}!</span>`;

    const booksGrid = document.querySelector('.books-grid');

    if (booksForApproval.length) {
        booksGrid.classList.remove('empty');

        booksGrid.innerHTML = '';

        booksForApproval.forEach(book => {
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

        toggleApproveBtn();
    } else {
        booksGrid.classList.add('empty');

        booksGrid.innerHTML = `
            <div class="books-grid-placeholder">
                <h2>No books pending for approval</h2>
                <p>Here you can select books that you can approve for students</p>
            </div>
        `;
    }
}

function getSelectedBooks() {
    const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];

    if (selectedBooks.length) {
        selectedBooks.forEach(book => {
            cartItems.push(book.id);

            const bookCard = document.querySelector(`.book-img-container[data-id="${book.id}"]`);

            bookCard.classList.toggle('approved');
        });

        updateCartContents();
        toggleApproveBtn();
    }
}

function selectBook(bookCard) {
    const isApproved = bookCard.classList.contains('approved');
    const bookId = bookCard.dataset.id;

    if (isApproved) {
        cartItems = cartItems.filter(item => item !== bookId);

        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks'));
        const newSelectedBooks = selectedBooks.filter(book => book.id !== bookId);

        localStorage.setItem('selectedBooks', JSON.stringify([...newSelectedBooks]));
    } else {
        cartItems.push(`${bookId}`);

        const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
        const selectedBook = booksForApproval.find(book => book.id === bookId);

        localStorage.setItem('selectedBooks', JSON.stringify([...selectedBooks, selectedBook]));
    }

    bookCard.classList.toggle('approved');

    updateCartContents();
    toggleApproveBtn();
}

function updateCartContents() {
    booksCart.innerHTML = '';

    cartItems.forEach(id => {
        const book = booksForApproval.find(book => book.id === id);

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

function toggleCart() {
    cart.classList.toggle('visible');
    cartOverlay.classList.toggle('visible');
}

function toggleApproveBtn() {
    console.log(cartItems.length);
    console.log('asdf');

    if (cartItems.length) {
        approveBtn.classList.remove('disabled');
        approveBtn.disabled = false;
    } else {
        booksCart.innerHTML = `
            <div class="cart-placeholder">
                <p>
                    <p>Looks like you haven't selected anything to approve yet!</p>
                </p>
            </div>
        `;

        approveBtn.classList.add('disabled');
        approveBtn.disabled = true;
    }
}

function toggleApprovalModal() {
    approvalModal.classList.toggle('visible');
}

function approveBooks() {
    const approvedBooks = JSON.parse(localStorage.getItem('approvedBooks')) || [];
    const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks'));
    const newBooksForApproval = booksForApproval.filter(
        book => !selectedBooks.map(book => book.id).includes(book.id)
    );

    localStorage.setItem('approvedBooks', JSON.stringify([...approvedBooks, ...selectedBooks]));
    localStorage.setItem('booksForApproval', JSON.stringify(newBooksForApproval));
    localStorage.removeItem('selectedBooks');

    toggleCart();
    toggleApproveBtn();
    toggleApprovalModal();
    resetBooks();
}

function resetBooks() {
    cartItems = [];

    booksCards.forEach(bookCard => {
        bookCard.classList.remove('selected');
    });

    updateCartContents();
}

populateBooks();
getSelectedBooks();
