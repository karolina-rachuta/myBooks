import {useState} from 'react';
import {Search_component} from "./sub_Search/Search_comp.jsx";
import {Book_component} from "./sub_Search/Book_comp.jsx";

export const Search = () => {
    const [visible, setVisibility] = useState(true);
    const [label, setLabel] = useState("Books")
    const [selectedBook, setSelectedBook] = useState(null);
    const [books, setBooks] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("category");
    const [toReadBooks, setToReadBooks] = useState([]);
    const [readingBooks, setReadingBooks] = useState([]);
    const [readBooks, setReadBooks] = useState([]);

    const handleVisibility = (e) => {
        e.preventDefault();
        setVisibility(prevState => !prevState);
        if (label === "Books") {
            setLabel("Search")
        } else if (label === "Search") {
            setLabel("Books")
        }
    }

    return (
        <div className="pages">
            <div className="page__container">
                <div className="btn__positioner">
                    <button className="switch__btn" onClick={handleVisibility}>Go to {label} <i
                        className="fa-solid fa-circle-right"></i></button>
                </div>
                {visible ? <Search_component
                        selectedBook={selectedBook}
                        setSelectedBook={setSelectedBook}
                        books={books}
                        setBooks={setBooks}
                        toReadBooks={toReadBooks}
                        setToReadBooks={setToReadBooks}
                        readingBooks={readingBooks}
                        setReadingBooks={setReadingBooks}
                        readBooks={readBooks}
                        setReadBooks={setReadBooks}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    : <Book_component
                        toReadBooks={toReadBooks}
                        setToReadBooks={setToReadBooks}
                        readingBooks={readingBooks}
                        setReadingBooks={setReadingBooks}
                        readBooks={readBooks}
                        setReadBooks={setReadBooks}
                    />}
            </div>
        </div>
    )
}