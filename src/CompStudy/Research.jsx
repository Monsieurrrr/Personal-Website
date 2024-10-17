import React from 'react'
import mockup2 from '../assets/MockUp/notes 2.png'

export default function  Research() {
  return (
    <div>
        <div className='research-container'>
          <div className='img-wrapper2 mockup'><img src={mockup2} alt="" /></div>
        
          {/* <div><h1 className="title-case">Research</h1></div> */}

        <div className="research-wrapper">
          <div className="research-text mobile-text">
            <h1>Emphaty</h1>
            <p>My team consisted of 5 people, each of us conducted interviews with pet shop cashiers or veterinarians and direct observations in the field to understand the problems and what users need. Overall, we interviewed 10 people from different geographies and demographics. In the meantime, we also conducted competitor analysis to see what we can learn and develop.</p>
          </div>
          <div className="research-text mobile-text">
            <h1>Define</h1>
            <p>Based on the research that has been done, we do brainstorming to determine what problems the user is facing. We tried to observe the user perspective of our app. We also created personas and problem statement to help define the problem we wanted to solve.</p>
          </div>

          <div className="research-text mobile-text">
            <h1>Ideate</h1>
            <p>To find the best solution, we used several methods such as How might we? and prioritization matrix. We also categorized the scopes that we got and separated the unimportant ones. That way, it will be divided which one needs to be prioritized and important.</p>
          </div>

          <div className="research-text mobile-text">
            <h1>Prototype</h1>
            <p>From the solutions that have been made, we make low fidelity through the crazy 8s method and high fidelity through Figma. Before entering high fidelity, we made a design system for the app first to get ease and consistency in designing.</p>
          </div>

        </div>

        </div>
    </div>
  )
}
