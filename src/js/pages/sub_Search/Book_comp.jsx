import React from 'react';

// eslint-disable-next-line react/prop-types
export const Book_component = ({selectedBook, books, readBooks, readingBooks, toReadBooks}) => {
    // const selectedBookItem = selectedBook !== null ? books[selectedBook] : null;

    return (
        <div className="book__comp">
            <h1>My Books</h1>
            {/*{selectedBook && (*/}
            {/*    <div className="selected-book">*/}
            {/*        <h2>{selectedBookItem.title}</h2>*/}
            {/*        /!* Render other details as needed *!/*/}
            {/*        <div className="books__list">*/}
            {/*            <div className="book__list book__list--selected">*/}
            {/*                {selectedBookItem.cover_i ? (*/}
            {/*                    <img src={`https://covers.openlibrary.org/b/id/${selectedBookItem.cover_i}-M.jpg`}*/}
            {/*                         alt="Cover"/>*/}
            {/*                ) : (*/}
            {/*                    <span><i className="fa-solid fa-book-open"></i></span>*/}
            {/*                )}*/}
            {/*                <div className="book__text">*/}
            {/*                    <span><i className="fa-solid fa-bookmark"></i> {selectedBookItem.title}</span>*/}
            {/*                    <span><i className="fa-solid fa-user"></i> {selectedBookItem.author_name}</span>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            <div className="reads__container">
                <div className="read__container">
                    <h2><i className="fa-solid fa-book-bookmark"></i> Past reads: </h2>
                    {readBooks.map((book, index) => (
                        <div className="books__list" key={index}>
                            <span>{book.title}</span>
                            <span>{book.author_name[0]}</span>
                            {book.cover_i ? (
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                     alt="Cover"/>
                            ) : (
                                <span><i className="fa-solid fa-book-open"></i></span>
                            )}

                        </div>
                    ))}
                </div>
                <div className="read__container">
                    <h2><i className="fa-solid fa-book-open"></i> Present reads:</h2>
                    {readingBooks.map((book, index) => (
                        <div key={index}>
                            <h2>{book.title}</h2>
                            <span>{book.author_name[0]}</span>
                            {book.cover_i ? (
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                     alt="Cover"/>
                            ) : (
                                <span><i className="fa-solid fa-book-open"></i></span>
                            )}

                        </div>
                    ))}
                </div>
                <div className="read__container">
                    <h2><i className="fa-solid fa-bookmark"></i> Future reads:</h2>
                    {toReadBooks.map((book, index) => (
                        <div key={index}>
                            <h2>{book.title}</h2>
                            <span>{book.author_name[0]}</span>
                            {book.cover_i ? (
                                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                     alt="Cover"/>
                            ) : (
                                <span><i className="fa-solid fa-book-open"></i></span>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
