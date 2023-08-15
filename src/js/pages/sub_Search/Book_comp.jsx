import React from 'react';

export const Book_component = () => {
    return (
        <div className="book__comp">
            <h1>My Books:</h1>
            <div className="reads__container">
                <div className="read__container">
                    <h2>Present reads:</h2>
                </div>

                <div className="read__container">
                    <h2>Past reads:</h2>
                </div>

                <div className="read__container">
                    <h2>Future reads:</h2>
                </div>
            </div>
        </div>
    )
}
