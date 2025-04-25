import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "../Css/WorkingTeam.css"

const WorkingTeam = () => {
  return (
    <div>

    <div className='container'>
        <div className='row companies'>
            <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
            <div className="line">
            <img src="https://res.cloudinary.com/dixfg1bvv/image/upload/v1728911921/Deco-line_q9xkb2.png" />
          </div>
          <div className='peopleWorking'> 
            <h2>Meet the people 
                <p><strong>We are Working With</strong></p>
            </h2>
          </div>
            </div>
            <div className='col-lg-5 col-md-5 col-sm-12 col-12'>
                <div className='fontArrow'>
                <div>
                <FontAwesomeIcon className='btnLeft' icon={faArrowLeft}/>
                </div>
                <div>
                <FontAwesomeIcon className='btnRight' icon={faArrowRight}/>
                </div>
                </div>
            </div>
        </div>
    </div>
            <div className='companiesWorking'>

                <img src='https://res.cloudinary.com/dixfg1bvv/image/upload/v1728971352/Frame_14_yasavk.png'/>
            </div>
    </div>
  )
}

export default WorkingTeam