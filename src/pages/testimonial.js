import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout'
import Nav from '../components/nav';
import Banner from '../components/non-front-banner'

import R1 from '../images/review1.svg';
import R2 from '../images/review2.svg';
import R3 from '../images/review3.svg';
import R4 from '../images/review4.svg';
import R5 from '../images/review5.svg';

const Testimonials = (props) => {
    return(
        <>
            <Layout>
                <Helmet title='Testimonials | Earl "Dusty" Trimmer' />
                <Nav pathExt={props.path} />
                <Banner
                    spanFirst={``}
                    contextHeading={`Testimonials`}
                />

                <main className="wrapperMain">
                    <div className="container">
                        {/* <h1>Read some reviews regarding Earl "Dusty" Trimmer's books here.</h1> */}
                        <div className="grid-two-columns">
                            <div className="reviews-img">
                                <img src={R1} alt="review1" />
                            </div>
                            <div className="reviews-content">
                                
                                <blockquote>
                                    <h3>Robert Marcus, Ph.D. <br/><span>Youngstown Veteran Affairs Clinic</span></h3><br/>
                                    I reviewed Mr. Trimmer's book, Unbreakable Hearts II and could not put it down. I truly have a deep interest in helping Vietnam Veterans and have always supported them. I appreciate your passion, your honesty and all you have done to make more people aware of the plight of Vietnam Veterans and families. Thank you.
                                </blockquote>
                            </div>
                            {/* break */}
                            <div className="reviews-content">
                                <blockquote>
                                    <h3>Brian Matos, Writer<br/><span>Vietnam Veterans of America</span></h3><br/>
                                    Unbreakable Hearts II is like no other Vietnam War book I have ever come across. Earl "Dusty" Trimmer portrays the Vietnamese as brave, proud and resilient people who rose to fight off invasions from super powers.
                                </blockquote>
                            </div>
                            <div className="reviews-img">
                                <img src={R2} alt="review2" />
                            </div>
                            {/* break */}
                            <div className="reviews-img">
                                <img src={R3} alt="review3" />
                            </div>
                            <div className="reviews-content">
                                <blockquote>
                                    <h3>Ivan Gardner<br/><span>101<sup>st</sup> Airborne Vietnam War</span></h3><br/>
                                    Dusty Unbreakable Hearts II is an awesome book and every Vietnam War Veteran should be happy you did this. Now I'm seeing things in a different light you may have rekindled my own idea of telling my story.
                                </blockquote>
                            </div>
                            {/* break */}
                            <div className="reviews-content">
                                <blockquote>
                                    <h3>Bob Gaetans, Editor<br/><span>Aurora Advocate</span></h3><br/>
                                    Unbreakable Hearts, provide redemption for U.S. soldiers who served in Vietnam by redefining the Viet Cong as worthy adversaries with a strong tradition.
                                </blockquote>
                            </div>
                            <div className="reviews-img">
                                <img src={R4} alt="review4" />
                            </div>
                            {/* break */}
                            <div className="reviews-img">
                                <img src={R5} alt="review5" />
                            </div>
                            <div className="reviews-content">
                                <blockquote>
                                    <h3>Melanie Oberlin Knapp<br/><span>Vietnam Veteran Daughter</span></h3><br/>
                                    As you know, my dad is terminal with lung cancer. Your book is outstanding and so critically important for helping me understand my dad better.
                                </blockquote>
                            </div>

                        </div>
                    </div>
                </main>
            </Layout>
        </>
    )
}

export default Testimonials;