import React, {useState} from 'react';

export const Login = () => {

    const [name, setName] = useState(null);

    return (
        <div className= "pages pages--login">
            <div className="page__container page__container--login">
            <h1>Log here</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input className="form__input" type="text" placeholder="Write your name" value={name}
                       onChange={(e) => {
                           setName(e.target.value)
                       }}/>
                <button type="submit" className="form__btn">Send</button>
            </form>
            </div>
        </div>
    )
}