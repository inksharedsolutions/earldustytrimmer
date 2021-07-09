import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/author.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title="About the Author | Julia Peters-Parmeter"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={AuthorImg}
                                    alt="_main_author" />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                    
                                </h4>
                                <span className="ata-span-fx">
                                    
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Over the past forty years, Julia Parmeter has worked in several interlinked professions. Her resume includes time as a personal development instructor with pre-teen and teenage girls and as an actress and acting coach, casting director and Hollywood producer, and over the past twelve years, she has been the owner and CEO of The Parmeter Group, a talent management company for actors. With her political views clashing with the radical ideas of the liberal entertainment industry, it has been a rocky road. Julia's struggles within her field versus her love for her nation have led to her fervent passion as a Conservative speaker and commentator. She encourages others to join the current patriotic movement sweeping the nation and teaches ways to make a significant impact, with the goals of uniting citizens, draining the DC swamp and sending its control back to We the People. Her feisty and motivational book Forgotten Men and Women: Voting to Save the American Dream was inspired by the 2016 presidential election, her growing passion for the history of America, and her desire to bring peace to our country. Julia Parmeter resides in the Wine Country of Sonoma County in California with her husband of twenty-six years, Thomas Parmeter. They are blessed to have two beautiful daughters, Lacey and Rachel.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Julia Peters-Parmeter</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

            </Layout>
        </>
    )
}


export default ATB;