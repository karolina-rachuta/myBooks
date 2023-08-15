import React, {useEffect, useState} from 'react';

export const Search = () => {
    const [search, setSearch] = useState("");
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("szukam");
        if (search.length > 4) {
            setLoading(true)
            fetch(`https://openlibrary.org/search.json?title=${search}`)
                .then((res) => res.json())
                .then((response) => {
                    // console.log(response.docs)
                    // console.log(response.docs[0].author_name[0]);
                    // console.log(response.docs[0].title);
                    // console.log(response.docs[0].cover_i[0])
                    setBooks(response.docs);
                })
                .then(() => setLoading(false))
                .catch((err) => setError(err))
        }
    }, [search]);

    return (
        <div className="pages">
            <div className="page__container">
                <h1>Search</h1>
                <form onSubmit={(e) => e.preventDefault()} className="form__box">
                    <input className="form__input" type="text" placeholder="Title of book" value={search}
                           onChange={(e) => {
                               setSearch(e.target.value)
                           }}/>
                    <button type="submit" className="form__btn">Search</button>
                </form>
                {loading ? <div className="loading"><i className="fa-solid fa-spinner"></i> loading</div> :
                    error ? (`Wystąpił błąd: ${error}`)
                        :
                        <div className="books__list">
                            {books.map((el) =>
                                <>
                                    <div className="book__list">
                                        {el.cover_i ? (
                                            <img src={`https://covers.openlibrary.org/b/id/${el.cover_i}-M.jpg`}
                                                 alt="Cover"/>
                                        ) : (
                                            <span><i className="fa-solid fa-book-open"></i></span>
                                        )}
                                        <div className="book__text">
                                            <span><i className="fa-solid fa-bookmark"></i> {el.title}</span>
                                            <span><i className="fa-solid fa-user"></i> {el.author_name}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                }
            </div>
        </div>
    )
}