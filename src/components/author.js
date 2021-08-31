import React from 'react'
import { Link } from 'gatsby'
import AuthorImg from '../../static/banner/home-picture.jpg'

const Author = () => {
    return (
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        Many of us who were combat soldiers or marines in the Vietnam War still consider themselves as soldiers.  I served during what has been referred to as the “bloody years” of 1968-69.  Actually 1968 alone owns the title.  I am not a college graduate, but I ground out seven and a half years of college classes day and evening, at four different universities — majoring in nothing, and working full time while attending evening classes, . . . just like an infantry “grunt” did in Vietnam.  I was working almost 24-7 before and after Vietnam service. 
                        </p>
                        
                        <button className="btn-book-featured-red">
                                <Link to="/about-the-author">
                                    Read More
                                </Link>
                            </button>
                        <h1 className="author-name-tag">
                            <span></span>
                            <span>Earl "Dusty" Trimmer</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                    </div>
                    <div className="group-sec">
                        <div className="flex">
                        <div>
                              <img src={AuthorImg}/></div>
                            <div>
                            <p>
                        <span>  Dusty Trimmer </span> - Combat Infantry, <span>  John Bellemy </span> - Combat Engineer, <span>  Tom Gretsko </span> - Army Ranger.
                            <br/>
                            All reserved with the 25th Infantry Division 1968-1970.
                        </p>

                    </div>
                </div>
              
        </div>
                </div>
            </section>
        </>
    )
}

export default Author;