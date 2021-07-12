import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/book-min.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'kasalobi',
        config: { identifier: 12, slug }    
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Kasalobi "/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `Forgotten Men and Women`,
                                spanFirst: `Voting to save the American Dream`,
                                imgSrc: Book1,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                            Forgotten citizens of all ages, races, creeds, and sexual orientations have woken up to the fact that they have been manipulated by greedy power-mongering entities, who thrive on dividing them to benefit their political agendas with the goal of garnering votes. These wealthy elitists are destroying our Constitution and taking away our American dream!
                                        </p>
                                        <br/>
                                        <p>
                                            "We the People" were losing sight of our common values and the very essence of what makes us love this great country. It is time to mend some fences and get back to the business of being a nation of and for the people. As we reclaim our government, let us unite as patriots fighting toward our mutual desire of liberty and justice for all!
                                        </p>

                                    `,

                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/america-come-and-get-it-kasalobi/1129522005?ean=9781648954115',
                                    amazon: 'https://www.amazon.com/America-Come-Get-Kasalobi-ebook/dp/B096L6K52B/ref=sr_1_1?dchild=1&keywords=9781648954115&qid=1623259921&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/America-Come-Get-Kasalobi/dp/1648954103/ref=sr_1_1?dchild=1&keywords=9781648954108&qid=1623259912&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/america-come-and-get-it-kasalobi/1129522005?ean=9781648954108',
                                    booksamillion: 'https://www.booksamillion.com/p/America-Come-Get/Kasalobi/9781648954108?id=8255501074287',
                                }
                            }}
                        />



                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;