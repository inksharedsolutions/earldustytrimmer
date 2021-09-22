import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'

import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/banner/home-picture.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
            <Helmet title='About the Author | Earl "Dusty" Trimmer '/>
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
                                {/* <h4>
                                Dusty Trimmer - Combat Infantry, John Bellemy - Combat Engineer, Tom Gretsko - Army Ranger.
                            All reserved with the 25th Infantry Division 1968-1970.
                                </h4> */}
                                {/* <span className="ata-span-fx">
                                    
                                </span> */}
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            Many of us who were combat soldiers or marines in the Vietnam War still consider themselves as soldiers.  I served during what has been referred to as the “bloody years” of 1968-69.  Actually 1968 alone owns the title.  I am not a college graduate, but I ground out seven and a half years of college classes day and evening, at four different universities — majoring in nothing, and working full time while attending evening classes, . . . just like an infantry “grunt” did in Vietnam.  I was working almost 24-7 before and after Vietnam service. 
                            </p>
                            <p>
                            After the war it was difficult adjusting and I was unable to find or keep full-time employment that could lead to a career.  Fortunately, I managed to carve out a career for myself in the advertising/ marketing/sales field.  But I had to weather going through nearly two dozen jobs before I found a comfortable fit and that I did.  I remained with the same employer until a forced retirement influenced by illnesses from Vietnam forced me to retire in 2014.  That one employer who stuck with me was myself as I made it as a self-employed contractor for 37 years. 
                            </p>
                            <p>
                            As a marketing/sales consultant, I earned top sales awards almost every year and many promotion offers, turning them all down in order to remain in my comfort zone as an independent contractor.  That comfort zone seemed to include remaining single, at least to my fortieth birthday to the lovely Ginny Brancato, also from Cleveland, Ohio.  We have remained together for thirty-seven years.  I never fathered children (my choice) because of Vietnam War problems and the potential of illnesses being passed on.  However, Ginny brought me four great stepchildren and seven step grandchildren and I am adore them all. 
                            </p>
                            <p>
                          My childhood had its ups and downs with alcohol being consistently present with my parents.  Divorce forced me into an orphanage, separating me from family members and this took a toll on me.  This is probably what influenced me to stop college courses and leave myself almost a certain draftee, guaranteed to go into direct combat in the 25th Infantry Division.  As a “point-man” for nine months as a combat infantry man.  I earned numerous decorations including these:  Bronze Star-Valor, Combat Infantry Badge, Purple Heart, Army Commendation Medal and four unit citations including the Vietnam Cross of Gallantry with three bronze stars and more. 
                          </p>
                            <p>

                            A picture of me holding the helmet that was shot off my head during a Viet Cong ambush in 1968 has been prominently displayed around the country as such; Vietnam Veterans of America 2015 calendar, U.S. Army Historical Society, National Vietnam Veterans Art Museum etc. 
                            </p>
                            <p>

                            Unbreakable Hearts II is a remake of the 2019 version also titled Unbreakable Hearts!  Overall, I have been involved with the publishing of five books about the Vietnam War, during and afterward.  Neither of my books are the types one can sit down, read it at one session and then be done with it.  There are collections of factual historical data inside these books, along with non-fiction real life descriptions of the happenings around the Vietnam War. 
                            </p>
                            <p>

                            Unfortunately, the legacy of Vietnam and its warriors has been tainted severely and wrongly by those who have written about it, mainly the Fake Media or as I call them . . . the Ameri-Cong Media.  The mission of all my books, particularly Unbreakable Hearts II is to leave behind a true and proud legacy for all who were ever touched by this ugly war to treasure and hold onto for generations to come.   Vietnam War’s veterans deserve to have honor restored; their stolen valor returned . . . they earned it the hard way!


                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Earl "Dusty" Trimmer </span>
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