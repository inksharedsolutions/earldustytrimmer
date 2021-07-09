import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/book-min.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img"/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            Forgotten citizens of all ages, races, creeds, and sexual orientations have woken up to the fact that they have been manipulated by greedy power-mongering entities, who thrive on dividing them to benefit their political agendas with the goal of garnering votes. These wealthy elitists are destroying our Constitution and taking away our American dream!
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook