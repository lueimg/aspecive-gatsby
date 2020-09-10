import React from "react"
import Layout from '../components/layout'
import Banners from '../components/banners'
import PresidentMessage from '../components/president-message';
import Gallery from '../components/gallery';
import ContactForm from '../components/contact-form';
import Map from '../components/Map';
import AspeciveDetails from '../components/aspecive-details';

export default () => {

 return (
    <Layout>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700" rel="stylesheet" type="text/css"></link>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css"></link>
        {/* <Slider /> */}
        <Banners />
        <PresidentMessage />
        <Gallery />
        <AspeciveDetails />
        <Map />
        <ContactForm />
    </Layout>
 )
}
