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
    {
        title: 'The Brothers Hawthorne',
        author: 'Jennifer Lynn Barnes',
        id: '13',
        url: 'https://www.goodreads.com/book/show/62804258-the-brothers-hawthorne',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1664812464i/62804258.jpg',
    },
    {
        title: 'My Roommate Is a Vampire',
        author: 'Jenna Levine',
        id: '14',
        url: 'https://www.goodreads.com/book/show/60041932-my-roommate-is-a-vampire',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1665612756i/60041932.jpg',
    },
    {
        title: 'Assassin to the Villain',
        author: 'Hannah Nicole Maehrer',
        id: '15',
        url: 'https://www.goodreads.com/book/show/123257687-assistant-to-the-villain',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1679005122i/123257687.jpg',
    },
    {
        title: 'Omen of Ice',
        author: 'Jus Accardo',
        id: '16',
        url: 'https://www.goodreads.com/book/show/62039334-omen-of-ice',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1683578486i/62039334.jpg',
    },
    {
        title: 'Star Bringer',
        author: 'Tracy Wolff, Nina Croft',
        id: '17',
        url: 'https://www.goodreads.com/book/show/61431958-star-bringer',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1658350127i/61431958.jpg',
    },
    {
        title: 'Frienemies with Benefits',
        author: 'Lydia Sharp',
        id: '18',
        url: 'https://www.goodreads.com/book/show/62039335-frenemies-with-benefits',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1674938898i/62039335.jpg',
    },
    {
        title: 'Sign of the Slayer',
        author: 'Sharina Harris',
        id: '19',
        url: 'https://www.goodreads.com/book/show/60741826-sign-of-the-slayer',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684334946i/60741826.jpg',
    },
    {
        title: 'A Glamour of Blood',
        author: 'L.E. Sterling',
        id: '20',
        url: 'https://www.goodreads.com/book/show/133287223-a-glamour-of-blood',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682569864i/133287223.jpg',
    },
    {
        title: 'Neverwraith',
        author: 'Andrea Lankford',
        id: '21',
        url: 'https://www.goodreads.com/book/show/60827548-neverwraith',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1680084913i/60827548.jpg',
    },
    {
        title: 'Trail of the Lost',
        author: 'Andrea Lankford',
        id: '22',
        url: 'https://www.goodreads.com/book/show/64000414-trail-of-the-lost',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1671522419i/64000414.jpg',
    },
    {
        title: 'The English Experience',
        author: 'Julie Schumacher',
        id: '23',
        url: 'https://www.goodreads.com/book/show/63366031-the-english-experience',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684815303i/63366031.jpg',
    },
    {
        title: 'WanderLust',
        author: 'Elle Everhart',
        id: '24',
        url: 'https://www.goodreads.com/book/show/62952155-wanderlust',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685351754i/62952155.jpg',
    },
    {
        title: 'Abroad in Japan',
        author: 'Chris Broad',
        id: '25',
        url: 'https://www.goodreads.com/book/show/64645770-abroad-in-japan',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1689819152i/64645770.jpg',
    },
    {
        title: 'The Loom of Time: Between Empire and Anarchy, from the Mediterranean to China',
        author: 'Rober D. Kaplan',
        id: '26',
        url: 'https://www.goodreads.com/book/show/63933641-the-loom-of-time',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1685991284i/63933641.jpg',
    },
    {
        title: 'The Underworld: Journeys to the Depths of the Ocean',
        author: 'Susan Casey',
        id: '27',
        url: 'https://www.goodreads.com/book/show/63241875-the-underworld',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1684815235i/63241875.jpg',
    },
    {
        title: 'To Walk It Is to See It',
        author: 'Kathy Elkind',
        id: '28',
        url: 'https://www.goodreads.com/book/show/123251600-to-walk-it-is-to-see-it',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1678914522i/123251600.jpg',
    },
    {
        title: 'Flavour with Benefits: Sicily & Calabria',
        author: 'Cathy Conally & Charley Best',
        id: '29',
        url: 'https://www.goodreads.com/book/show/196030312-flavour-with-benefits',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692910100i/196030312.jpg',
    },
    {
        title: 'Eight Bears: Mythic Past and Imperiled Future',
        author: 'Gloria Dickie',
        id: '30',
        url: 'https://www.goodreads.com/book/show/62585980-eight-bears',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681758563i/62585980.jpg',
    },
    {
        title: 'The House Swap',
        author: 'Yvette Clark',
        id: '31',
        url: 'https://www.goodreads.com/book/show/61232287-the-house-swap',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657668123i/61232287.jpg',
    },
    {
        title: 'The Japan Lights: On the Trail of the Scot Who Lit Up Japan’s Coast',
        author: 'Iain Maloney',
        id: '32',
        url: 'https://www.goodreads.com/book/show/142287926-the-japan-lights',
        coverImg:
            'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1682550923i/142287926.jpg',
    },
];
const selectedBooks = JSON.parse(localStorage.getItem('selectedBooks')) || [];
const approvedBooks = JSON.parse(localStorage.getItem('approvedBooks')) || [];
const booksForApproval = JSON.parse(localStorage.getItem('booksForApproval')) || [];
const studentName = localStorage.getItem('studentName') || '';

let booksCards;
let booksCart;
let cartItems = [];
let searchedBooks = [...books];

const booksGrid = document.querySelector('.books-grid');
const submitBtn = document.querySelector('.submit-btn');
const approvalModal = document.querySelector('.approval-modal-container');
const closeApprovalModalBtn = document.querySelector('.approval-modal-close');
const cart = document.querySelector('.books-cart');
const cartOverlay = document.querySelector('.books-cart-overlay');
const cartBtn = document.querySelector('.cart-btn');
const cartCloseBtn = document.querySelector('.books-cart-close');
const searchQuery = document.querySelector('#query');
const greeting = document.querySelector('.books-container p');

submitBtn.addEventListener('click', submitBooks);
closeApprovalModalBtn.addEventListener('click', toggleApprovalModal);
cartBtn.addEventListener('click', toggleCart);
cartCloseBtn.addEventListener('click', toggleCart);
searchQuery.addEventListener('keyup', searchBooks);

function populateBooks() {
    greeting.textContent = `Hello, ${studentName}! Click on books to add them to your cart instantly!`;

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
        checkOffApprovedBooks();
    }

    if (booksForApproval.length) {
        booksForApproval.forEach(book => {
            const bookCard = document.querySelector(`.book-img-container[data-id="${book.id}"]`);

            bookCard.classList.toggle('for-approval');
        });
    }

    toggleSubmitBtn();
}

function selectBook(bookCard) {
    const isSelected = bookCard.classList.contains('selected');
    const isApproved = bookCard.classList.contains('approved');
    const bookId = bookCard.dataset.id;
    const approvedBooks = JSON.parse(localStorage.getItem('approvedBooks')) || [];

    if (isApproved) {
        bookCard.classList.remove('approved');
        bookCard.classList.remove('selected');

        const newApprovedBooks = approvedBooks.filter(book => book.id !== bookId);

        localStorage.setItem('approvedBooks', JSON.stringify(newApprovedBooks));

        return;
    }

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

    const booksForApproval = JSON.parse(localStorage.getItem('booksForApproval')) || [];

    booksCards.forEach(bookCard => {
        const bookId = bookCard.dataset.id;

        bookCard.classList.remove('selected');

        if (booksForApproval.find(book => book.id === bookId)) {
            if (!bookCard.classList.contains('for-approval')) {
                bookCard.classList.add('for-approval');
            }
        }
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

    [...filteredBooks, ...selectedBooks].forEach(book => {
        const bookCard = document.querySelector(`.book-img-container[data-id="${book.id}"]`);

        bookCard.classList.toggle('for-approval');
    });

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

function toggleCart() {
    cart.classList.toggle('visible');
    cartOverlay.classList.toggle('visible');
}

populateBooks();
