import React, {useState, useEffect} from 'react';

// eslint-disable-next-line react/prop-types
export const Login = ({name, handleNameAdd}) => {

    // const [name, setName] = useState(null);
    //
    // useEffect(() => {
    //     if (localStorage.getItem('name')) {
    //         setName(localStorage.getItem('name'));
    //     }
    // }, []);
    //
    // function handleNameAdd(event) {
    //     localStorage.setItem('name', event.target.previousElementSibling.value);
    //     setName(event.target.previousElementSibling.value);
    // }

        return (
            <div className="pages pages--login">
                <div className="page__container page__container--login">
                    {name && <h1>Hello, {name}!</h1>}
                    {!name && <><h1>Log here</h1>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <input className="form__input" type="text" placeholder="Write your name"/>
                            <button type="submit" onClick={handleNameAdd} className="form__btn">Send</button>
                        </form>
                    </>}
                </div>
            </div>
        )
    }