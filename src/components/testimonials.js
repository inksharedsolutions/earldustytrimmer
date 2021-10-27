import React from 'react';
import Slider from "react-slick";

const Testimonials = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return(
        <div className="testimonials-section">
            <hr /><h1>Testimonials</h1><hr />
            <Slider {...settings} >
                <div className="slider">
                    <blockquote>
                        I reviewed Mr. Trimmer's book, <span>Unbreakable Hearts II</span> and could not put it down. I truly have a deep interest in helping Vietnam Veterans and have always supported them. I appreciate your passion, your honesty and all you have done to make more people aware of the plight of Vietnam Veterans and families. Thank you.
                    </blockquote><br />
                    <span>Robert Marcus, Ph.D.</span><br />
                    <span>Youngstown Veteran Affairs Clinic</span>
                </div>
                <div className="slider">
                    <blockquote>
                        <span>Unbreakable Hearts II</span> is like no other Vietnam War book I have ever come across. Earl "Dusty" Trimmer portrays the Vietnamese as brave, proud and resilient people who rose to fight off invasions from super powers.
                    </blockquote><br />
                    <span>Brian Matos, Writer</span><br />
                    <span>Vietnam Veterans of America</span>
                </div>
                <div className="slider">
                    <blockquote>
                        Dusty <span>Unbreakable Hearts II</span> is an awesome book and every Vietnam War veteran should be happy you did this. Now I'm seeing things in a different light you may have rekindled my own idea of telling my story.
                    </blockquote><br />
                    <span>Ivan Gardner</span><br />
                    <span>101<sup>st</sup> Airborne Vietnam War</span>
                </div>
                <div className="slider">
                    <blockquote>
                        <span>Unbreakable Hearts</span>, provides redemption for U.S. soldiers who served in Vietnam by redefining the Viet Cong as worthy adversaries with a strong tradition
                    </blockquote><br />
                    <span>Bob Gaetans, Editor</span><br />
                    <span>Aurora Advocate</span>
                </div>
                <div className="slider">
                    <blockquote>
                        As you know, my dad is terminal with lung cancer. Your book is outstanding and so critically important for helping me understand my dad better.
                    </blockquote><br />
                    <span>Melanie Oberlin Knapp</span><br />
                    <span>Vietnam Veteran daughter</span>
                </div>
            </Slider>
        </div>
    )
}

export default Testimonials;