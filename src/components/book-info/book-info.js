import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props) => {
    return (
        <>
            <div className="columns book-container-ft">

                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                        <div className="heading-quote">
                            <span style={{fontWeight: 'bold'}}>EARL KENNEDY</span>
                            <h4>
                                Major U.S. Army (retired) <br />
                                101st Airborne Vietnam/Delta 2nd of 506th Infantry
                                Combat Infantry Association (former Commander)
                            </h4>
                        </div>
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>

                        <span>{props.data.spanTitle}</span>

                        <div className="content-body"
                            dangerouslySetInnerHTML={{ __html: `${props.data.content}` }} />

                    </section>


                    <BookLink
                        // data={{
                        //     ebooks: {
                        //         stratton: props.data.ebooks.stratton,
                        //         barnes: props.data.ebooks.barnes,
                        //         amazon: props.data.ebooks.amazon,
                        //     },
                        //     paperback: {
                        //         amazon: props.data.paperback.amazon,
                        //         barnes: props.data.paperback.barnes,
                        //         booksamillion: props.data.paperback.booksamillion,
                        //     },

                        //     reviews: {},
                        //     isNonfront: true,
                        // }}
                    />

                </div>
            </div>
        </>
    )
}

export default BookInfo;