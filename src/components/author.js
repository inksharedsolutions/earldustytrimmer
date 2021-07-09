import React from 'react'
import AuthorImg from '../../static/author/author.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        Over the past forty years, Julia Parmeter has worked in several interlinked professions. Her resume includes time as a personal development instructor with pre-teen and teenage girls and as an actress and acting coach, casting director and Hollywood producer, and over the past twelve years, she has been the owner and CEO of The Parmeter Group, a talent management company for actors. With her political views clashing with the radical ideas of the liberal entertainment industry, it has been a rocky road.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Julia</span>
                            <span>Peters-Parmeter</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;