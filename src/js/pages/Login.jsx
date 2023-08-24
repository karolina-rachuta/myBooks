// eslint-disable-next-line react/prop-types
export const Login = ({name, handleNameAdd}) => {


    return (
        <div className="pages pages--login">
            <div className="page__container page__container--login">
                {name && <><h1>Hello, {name}!</h1><h2 style={{color: "#EAB2A0"}}>Go to Search&Books</h2></>}
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