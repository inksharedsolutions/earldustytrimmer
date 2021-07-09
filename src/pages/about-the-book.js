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
        shortname: 'julia-peters-parmeter',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
            <Helmet title="About the Book | Julia Peters-Parmeter"/>
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
                                    barnes: 'https://www.barnesandnoble.com/w/forgotten-men-and-women-julia-peters-parmeter/1138327233?ean=9781648952609',
                                    amazon: 'https://www.amazon.com/Forgotten-Men-Women-Voting-American-ebook/dp/B08Q6CKQH5/ref=sr_1_1?dchild=1&keywords=9781648952609&qid=1609203843&s=digital-text&sr=1-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Forgotten-Men-Women-Voting-American/dp/1648952593/ref=sr_1_1?dchild=1&keywords=9781648952593&qid=1609203904&s=digital-text&sr=1-1',
                                    barnes: 'https://www.barnesandnoble.com/w/forgotten-men-and-women-julia-peters-parmeter/1138327233?ean=9781648952593',
                                    booksamillion: 'https://www.booksamillion.com/p/Forgotten-Men-Women/Julia-Peters-Parmeter/9781648952593?id=8092038366619',
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