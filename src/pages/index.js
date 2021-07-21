import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/author"
import FeaturedLogos from "../components/mid-main"


const IndexPage = (props) => (
    <Layout >
        <Helmet title='Home | Earl "Dusty" Trimmer '/>
        <Nav pathExt={props.path} />
        <Banner /><br/><br/><br/><br/><br/><br/>
        <MidBook />
        <Author />
        <FeaturedLogos />
    </Layout>
)

export default IndexPage
