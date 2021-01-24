import React from 'react'
import Common from './Common'
import waqar from '../images/waqar1.png'

const Home = () => {
    return (
        <div>
            <Common
         name="Grow your business with" imgsrc={waqar} 
         visit="/services" btname="Get Started" />
        </div>
    )
}

export default Home
