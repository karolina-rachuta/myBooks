import React from 'react';
// eslint-disable-next-line react/prop-types
export const Book_component = ({
                                   readBooks,
                                   setReadBooks,
                                   readingBooks,
                                   setReadingBooks,
                                   toReadBooks,
                                   setToReadBooks,
                               }) => {

    const removePastBook = (index) => {
        const updatedReadBooks = [...readBooks];
        updatedReadBooks.splice(index, 1);
        setReadBooks(updatedReadBooks);
    };

    const removePresentBook = (index) => {
        const updatedReadingBooks = [...readingBooks];
        updatedReadingBooks.splice(index, 1);
        setReadingBooks(updatedReadingBooks);
    };

    const removeFutureBook = (index) => {
        const updatedToReadBooks = [...toReadBooks];
        updatedToReadBooks.splice(index, 1);
        setToReadBooks(updatedToReadBooks);
    };

    const moveToPastReads = (index) => {
        const bookToMove = readingBooks[index];
        setReadingBooks((prevReadingBooks) => prevReadingBooks.filter((_, i) => i !== index));
        setReadBooks((prevReadBooks) => [...prevReadBooks, bookToMove]);
    };

    const moveToPresentReads = (index) => {
        const bookToMove = toReadBooks[index];
        setToReadBooks((prevState) => prevState.filter((_, i) => i !== index));
        setReadingBooks((prevState) => [...prevState, bookToMove]);
    }
    return (
        <div className="book__comp">
            <h1>My Books</h1>
            <div className="reads__container">
                <div className="read__container">
                    <h2><i className="fa-solid fa-book-bookmark"></i> Past reads: </h2>
                    <div className="read__container--books">
                        {readBooks.map((book, index) => (
                            <div className="read__container--book" key={index}>
                                <div className="img__container">
                                    {book.cover_i ? (
                                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                             alt="Cover"/>
                                    ) : (
                                        <span><i className="fa-solid fa-book-open"></i></span>
                                    )}
                                </div>
                                <div className="book__right_info">
                                    <h3>{book.title} </h3>
                                    <h3><i className="fa-solid fa-user"></i> {book?.author_name?.[0]}</h3>
                                    <h4>Notes:</h4>
                                    <textarea className="textarea"></textarea>
                                    <div>
                                        <input className="form__input form__input--date" type="date"/>
                                        {/*<button className="btn__save">Save</button>*/}
                                    </div>

                                </div>
                                <div className="btn__container ">
                                    <p></p>
                                    <button onClick={() => removePastBook(index)}><i
                                        className="fa-solid fa-circle-minus"></i></button>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="read__container">
                    <h2><i className="fa-solid fa-book-open"></i> Present reads:</h2>
                    <div className="read__container--books">
                        {readingBooks.map((book, index) => (
                            <div className="read__container--book" key={index}>
                                <div className="img__container">
                                    {book.cover_i ? (
                                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                             alt="Cover"/>
                                    ) : (
                                        <span><i className="fa-solid fa-book-open"></i></span>
                                    )}
                                </div>
                                <div className="book__right_info">
                                    <h3>{book.title} </h3>
                                    <h3><i className="fa-solid fa-user"></i> {book?.author_name?.[0]}</h3>
                                    <h4>Notes:</h4>
                                    <textarea className="textarea"></textarea>
                                    {/*<button className="btn__save">Save</button>*/}
                                </div>
                                <div className="btn__container ">
                                    <button onClick={() => moveToPastReads(index)}><i
                                        className="fa-solid fa-arrow-turn-up"></i></button>
                                    <button onClick={() => removePresentBook(index)}><i
                                        className="fa-solid fa-circle-minus"></i>
                                    </button>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
                <div className="read__container">
                    <h2><i className="fa-solid fa-bookmark"></i> Future reads:</h2>
                    <div className="read__container--books">
                        {toReadBooks.map((book, index) => (
                            <div className="read__container--book" key={index}>
                                <div className="img__container">
                                    {book.cover_i ? (
                                        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                             alt="Cover"/>
                                    ) : (
                                        <span><i className="fa-solid fa-book-open"></i></span>
                                    )}
                                </div>
                                <div className="book__right_info">
                                    <h3> {book.title} </h3>
                                    <h3><i className="fa-solid fa-user"></i> {book?.author_name?.[0]}</h3>
                                    <h4>Notes:</h4>
                                    <textarea className="textarea"></textarea>
                                    {/*<button className="btn__save">Save</button>*/}
                                </div>

                                <div className="btn__container ">
                                    <button onClick={() => moveToPresentReads(index)}><i
                                        className="fa-solid fa-arrow-turn-up"></i></button>
                                    <button onClick={() => removeFutureBook(index)}><i
                                        className="fa-solid fa-circle-minus"></i></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
