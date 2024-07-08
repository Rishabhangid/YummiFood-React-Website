import React from 'react'
import Hero from './Hero'
import Delivery from './Delivery'
import CustomSlider from './CustomSlider'
import Meals from './Meals'

// receiving value as prop from addEventListener.js 
function Home({handleadd}) {
  return (
    <div>
        <Hero></Hero>
        <Delivery></Delivery>
        {/* again passing it as a prop to this comp.  */}
        <CustomSlider handleadd={handleadd}></CustomSlider>
        {/* <Meals></Meal s> */}
    </div>
  )
}

export default Home