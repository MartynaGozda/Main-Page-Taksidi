
import React from 'react';
import Slider from "./Slider.js";
import TestimonialsWrapper from './TestimonialsWrapper'
import Destination from "./Destination.js"
import Program from "./Program.js"
import HighlightsWrapper from "./HighlightsWrapper.js"
import Newsletter from "./Newsletter.js"
import Contact from "./Contact.js"
// import Partners from "./Partners.js"
// import Footer from "./Footer.js"

function MainPage() {
    return (
        <div>
            <Slider />
            <TestimonialsWrapper />
            <Destination />
            <Program />
            <HighlightsWrapper />
            <Newsletter />
            <Contact />
            {/* <Partners />
            <Footer /> */}
        </div>

    );
}

export default MainPage
