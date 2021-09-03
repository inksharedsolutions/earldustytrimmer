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
        shortname: 'earl-dusty-trimmer',
        config: { identifier: 12, slug }    
    }


    return (
        <>
            <Layout>
            <Helmet title='About the Book | Earl "Dusty" Trimmer '/>
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
                                title: `UNBREAKABLE HEARTS II`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'forgotten-men-and-women',
                                content:
                                    `
                                        <p>
                                        Earl “Dusty” Trimmer relates with both skill and personal experience events surrounding 
                                        our most forgetable and misunderstood war in America’s history. He brings it all home 
                                        with his down-to-earth style and considerable knowledge. In Unbreakable Hearts, Dusty 
                                        dives into the Vietnamese history and culture and skillfully brings the reader into understanding 
                                        our Vietnamese enemy’s amazing resolve. He brilliantly explains the evolution of our Vietnamese 
                                        enemy over hundreds of years of invasions and wars. Always defending their country to remain 
                                        free became an art. In Chapter 7, Dusty describes the Vietnamese women fighters as “Hellcats.” 
                                        My own experience with the formidable Vietnamese Viet Cong women’s skills and expertise 
                                        closely mirrors Dusty’s. Hooch girls could plant booby traps in a GI’s hooch with a skill and 
                                        savvy they were forced to learn during decades of on-the-job training in continuous wars with 
                                        unwelcomed invaders.
                                        </p>
                                        <p>
                                        My own Military Police experience after leaving the infantry revealed these incidents vividly. 
                                        In later chapters, Dusty moves into our own veterans’ profound resolve and toughness. North 
                                        Vietnam’s famed General Giap called us “an honorable enemy.” One could suggest from this 
                                        writing that our enemy taught us well. We did things in the Vietnam War the average person 
                                        would have to go to the movies to believe. After reading Trimmer’s descriptions, I must conclude 
                                        that indeed this book could be one for the movie industry.
                                        </p>
                                        <p>
                                        Dusty Trimmer brings to life our days and nights living and fighting in these foreboding jungle 
                                        warfare conditions. After reading this fine work and reflecting on my own experiences, I cut 
                                        away a little more of the pain. Pride swells for having served with all of these wonderful veterans 
                                        of the Vietnam War. Pain for our terrible losses. For myself, these experiences culminated in 
                                        wisdom I would otherwise have failed to achieve. God bless Dusty for telling our story. Forward 
                                        march, Brothers!
                                        </p>

                                        <p>
                                        Earl Campbell, Major (retired) U.S. Army Veteran Combat Infantry Association Commander (retired)
                                        </p>
                                     
                                        <h2> Coming Soon...</h2>
                                    `,

                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/america-come-and-get-it-Earl "Dusty" Trimmer/1129522005?ean=9781648954115',
                                    amazon: 'https://www.amazon.com/America-Come-Get-Earl "Dusty" Trimmer-ebook/dp/B096L6K52B/ref=sr_1_1?dchild=1&keywords=9781648954115&qid=1623259921&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/America-Come-Get-Earl "Dusty" Trimmer/dp/1648954103/ref=sr_1_1?dchild=1&keywords=9781648954108&qid=1623259912&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/america-come-and-get-it-Earl "Dusty" Trimmer/1129522005?ean=9781648954108',
                                    booksamillion: 'https://www.booksamillion.com/p/America-Come-Get/Earl "Dusty" Trimmer/9781648954108?id=8255501074287',
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