import React, {useState} from 'react';

export const Search = () => {
    const [search, setSearch] = useState("")
    return (
        <div className="pages">
            <div className="page__container">
                <h1>Search</h1>
                <form className="form__box">
                    <input className="form__input" type="text" placeholder="Write title or author" value={search} onChange={(e)=> {setSearch(e.target.value)}}/>
                    <button className="form__btn">Search</button>
                </form>

            </div>

        </div>
    )
}