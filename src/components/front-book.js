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
                            Earl “Dusty” Trimmer relates with both skill and personal experience events surrounding 
                                        our most forgetable and misunderstood war in America’s history. He brings it all home 
                                        with his down-to-earth style considerable knowledge and a ton of research.
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