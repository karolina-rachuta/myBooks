import {useEffect, useState} from 'react';


// eslint-disable-next-line react/prop-types
export const Search_component = ({books, setBooks, selectedBook, setSelectedBook, setReadingBooks, readingBooks, setReadBooks, setToReadBooks, readBooks, toReadBooks, setSelectedCategory, selectedCategory}) => {
    const [search, setSearch] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("szukam");
        if (search.length > 4) {
            setLoading(true)
            fetch(`https://openlibrary.org/search.json?title=${search}`)
                .then((res) => res.json())
                .then((response) => {
                    setBooks(response.docs);
                })
                .then(() => setLoading(false))
                .catch((err) => setError(err))
        }
    }, [search]);

    const handleListClick = (index) => {
        setSelectedBook(index);
        console.log(index);
    }
    const handleCategoryChange = (index) => {
        const selectedCatBook = books[index];

        if (selectedCategory === "read") {
            setReadBooks([...readBooks, selectedCatBook]);
        } else if (selectedCategory === "reading") {
            setReadingBooks([...readingBooks, selectedCatBook]);
        } else if (selectedCategory === "toRead") {
            setToReadBooks([...toReadBooks, selectedCatBook]);
        }
        console.log(selectedCatBook);
    }

    return (
        <div className="page__container">
            <h1>Search</h1>
            <form onSubmit={(e) => e.preventDefault()} className="form__box">
                <input className="form__input" type="text" placeholder="Title of book" value={search}
                       onChange={(e) => {
                           setSearch(e.target.value)
                       }}/>
                <button type="submit" className="form__btn">Search</button>
            </form>
            {loading ? <div className="loading"><i className="fa-solid fa-spinner"></i> loading</div>
                :
                error ? (`Wystąpił błąd: ${error}`)
                    : <div className="books__list">
                        {books.map((el, index) =>
                            <>
                                <div key={index} onClick={() => handleListClick(index)}
                                     className={selectedBook === index ? "book__list book__list--selected" : "book__list"}>
                                    {el.cover_i ? (
                                        <img src={`https://covers.openlibrary.org/b/id/${el.cover_i}-M.jpg`}
                                             alt="Cover"/>
                                    ) : (
                                        <span><i className="fa-solid fa-book-open"></i></span>
                                    )}
                                    <div className="book__text">
                                        <span><i className="fa-solid fa-bookmark"></i> {el.title}</span>
                                        <span><i className="fa-solid fa-user"></i> {el.author_name}</span>
                                        <select  className="select__book"
                                                value={selectedCategory}
                                                onChange={(e) => setSelectedCategory(e.target.value)}>
                                            <option value="category">Category</option>
                                            <option value="read">Past</option>
                                            <option value="reading">Present</option>
                                            <option value="toRead">Future</option>
                                        </select>
                                        <button className="select__btn" onClick={() => handleCategoryChange(index)}>Add</button>
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
            }
        </div>
    )
}
