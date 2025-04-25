import React from 'react'
import TestimonialSlide from '../slider..js/TestimonialSlide'
import "../Css/Testimonials.css"
import TestimonialSlider2 from '../slider..js/TestimonialSlider2'

const Testimonials = () => {
  return (
    <div>
    <div className='testimonials'>
      <div className='container'>
      <div className="line">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png" />
          </div>
          <div>
            <h2>Why cutomers love
              <p><strong>working with us</strong></p>
            </h2>
          </div>
          <div>

          <TestimonialSlide/>
          </div>
        </div>
    </div>
        <TestimonialSlider2/>
    </div>
  )
}

export default Testimonials