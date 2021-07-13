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
                                title: `America Come and Get It`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                        In America, Come and Get It, his second release, Mr. Kasalobi finds himself in a big legal fight to regain back the custody of his two daughters. Loylla, the youngest, is eight months old when Sheebah, their mother, abandons them. She comes back eight years later and kidnaps both of them with the help of the Hurst Police Department. For his daughters, Kasalobi moves skies and empties seas, but because it is believed that girls are better off with their mother, lawyers refuse to take the case, while the Child Protective Services closes their eyes to the cruel mistreatments these two little girls are going through. The worst of all is the fact that it is the hands of their own mother that are administrating these violent abuses. As days go by, the fighting becomes bigger and bascules itself on one side, the mother's side. Mr. Kasalobi doesn't get desperate. He doesn't give up even when he finds himself alone doing legal battles to everyone and against every established institution possible. He only gets a break when the lawyer Violet Nwokoye enters the family court on his side. At the end of the day, did he get both children back? He is talking about this new journey in America, Come and Get It
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