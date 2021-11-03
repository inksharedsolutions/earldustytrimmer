import React from "react"
import { Helmet } from "react-helmet"
// import { Carousel } from "react-bootstrap"
// import ImageSlider from "../components/image-slider"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/author"
import FeaturedLogos from "../components/mid-main"
// import Testimonials from "../components/testimonials"
// import HomePic from "../../static/banner/home-picture.jpg"


const IndexPage = (props) => (
    <Layout >
        <Helmet title='Home | Earl "Dusty" Trimmer '/>
        <Nav pathExt={props.path} />
        <Banner />
        <MidBook /><br/>
        {/* <Testimonials /> */}
        <Author />
        
        
        {/* <div className="group-sec">
                <div className="flex">
                  <div>
                    <ImageSlider/>
                  </div>
                    <div>
                    <p>
                  <span>  Dusty Trimmer </span> - Combat Infantry, <span>  John Bellemy </span> - Combat Engineer, <span>  Tom Gretsko </span> - Army Ranger.
                    <br/>
                    All reserved with the 25th Infantry Division 1968-1970.
                </p>

                    </div>
                </div>
              
        </div> */}

        <FeaturedLogos />
    </Layout>
)

export default IndexPage
