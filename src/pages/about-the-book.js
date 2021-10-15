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
                                        with his down-to-earth style and considerable knowledge. In Unbreakable Hearts II, Dusty 
                                        dives into the Vietnamese history and culture and skillfully brings the reader into understanding 
                                        our Vietnamese enemy’s amazing resolve. He brilliantly explains the evolution of our Vietnamese 
                                        enemy over centuries of invasions and wars. Always defending their country to remain 
                                        free became an art. In Chapter 7, Dusty describes the tenacious and creature Vietnamese women fighters as “Hellcats.” 
                                        My own experience with the formidable Vietnamese Viet Cong women’s skills and expertise 
                                        closely mirrors Dusty’s. Hooch girls could plant booby traps in a GI’s hooch with a skill and 
                                        savvy they were forced to learn during decades of on-the-job training in continuous wars with 
                                        unwelcomed invaders.
                                        </p>
                                        <p>
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
                                        
                                        <p>
                                            Veterans Disability Claims Backlog Expected To Grow In Coming Months. <i>Military Times 9/15/21</i>
                                        </p>

                                        <p>
                                            This is a headline recently presented to Americans to ponder over, I hope they are doing just that. I'll be perfectly clear in saying in no uncertain terms just how totally disgraceful this news is to every patriotic American. Allow me to remind people that under the Obama/Biden administration the veterans backlog for claims for healthcare completely sunk to rock bottom as more than 600,000 veterans were left in a state of ... DENIAL. The common phase used by veterans was and still is...DELAY, DENY, DELAY TILL WE DIE!!!
                                        </p>

                                        <p>
                                            Please refer to Chapter 15 in my book UNBREAKABLE HEARTS II which is titled...Unlikely Champion For Veterans. That knight in shining armor who has fought tenaciously and relentlessly is in fact...Mr. Donald J. Trump. When he entered hi presidency he inherited, from Obama/Biden, a mind boggling total of more than 600,000 disability claims for veterans from WWII and onward. When Mr. Trump ended his mere four year term that disgusting number of 600,000+ had been reduced in biblical proportions to under 60,000. This is not a fabrication, it is a fact, but most people were not told of this great feat by the former President. It is not unlikely that had Mr. Trump been reelected we might have seen the total of disabled veterans claims backlog might have been reduced down to a miraculous number of a few thousand or a few hundred. Highly possible, but NOOOOOOOOOOOOOOOOOOO because part of the Obama/Biden duo was re-elected.
                                        </p>

                                        <p>
                                            Now Americans have been faced with an almost complete reversal of what Trumps team accomplished for America's wounded heroes. The claims backlog under Biden has skyrocketed quickly to a disgusting level of.....215,000+..Make matters worse, Bidens' appointed VA Secretary said this in a press conference..."this problem is going to get worse before it gets better".
                                        </p>

                                        <p>
                                            My books were not written to praise our former President and there is so much more information presented for the complete benefit of our veterans, friends and family. I just had to make mention of what Trump really did do and what Biden really is not doing for us.....AGAIN!
                                        </p>

                                        <p>
                                            Now I call on every American that cares, to support our cause to get our veteran war buddies taken care of...ASAP! As my war buddy brother Major Earl Cambell stated earlier....."FORWARD MARCH, BROTHERS!"
                                        </p>
                                    `,

                                ebooks: {
                                    stratton: '',
                                    barnes: 'https://www.barnesandnoble.com/w/unbreakable-hearts-ii-earl-dusty-trimmer/1140316563?ean=9781648956096',
                                    amazon: 'https://www.amazon.com/Unbreakable-Hearts-II-Heart-Wrenching-Forfeited-ebook/dp/B09HXX1PWM/ref=sr_1_1?dchild=1&keywords=9781648956096&qid=1634052873&sr=8-1',
                                },
                                paperback: {
                                    amazon: '',
                                    barnes: '',
                                    booksamillion: '',
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
